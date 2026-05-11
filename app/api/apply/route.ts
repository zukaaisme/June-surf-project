import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { applySchema, type ApplyFormValues } from "@/lib/apply-schema";
import { trip } from "@/content/trip";

// While the domain isn't verified in Resend, all mail is sent from this sandbox sender.
// Reply-To is set to the applicant's contact, so hitting "Reply" in Gmail goes to them.
const FROM = "Surf Morocco <onboarding@resend.dev>";

function planLabel(planId: string | undefined): string | undefined {
  if (!planId) return undefined;
  const tier = trip.pricingTiers.find((t) => t.id === planId);
  return tier ? `${tier.name} — ${tier.priceDisplay} ${tier.perUnit}` : planId;
}

function looksLikeEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmail(data: ApplyFormValues): { subject: string; text: string; html: string } {
  const plan = planLabel(data.plan);
  const stamp = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Casablanca",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Contact", data.contact],
    ["Instagram", data.instagram || undefined],
    ["Plan", plan],
    ["Message", data.message || undefined],
    ["Received", `${stamp} (Tamraght)`],
  ];

  const text = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#efe3cc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#323740">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#efe3cc;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;overflow:hidden">
            <tr>
              <td style="padding:32px 28px 8px">
                <p style="margin:0;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(50,55,64,0.55)">Surf Morocco</p>
                <h1 style="margin:8px 0 0;font-size:24px;font-weight:600;line-height:1.2;letter-spacing:-0.01em">New application</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 32px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.5">
                  ${rows
                    .filter(([, v]) => v)
                    .map(
                      ([k, v]) => `
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid rgba(50,55,64,0.08);width:96px;color:rgba(50,55,64,0.55);font-size:13px;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top">${escapeHtml(k)}</td>
                    <td style="padding:10px 0;border-bottom:1px solid rgba(50,55,64,0.08);color:#323740;white-space:pre-wrap;word-break:break-word">${escapeHtml(String(v))}</td>
                  </tr>`,
                    )
                    .join("")}
                </table>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:rgba(50,55,64,0.5)">Reply to this email to write back directly.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: `New surf camp application — ${data.name}`,
    text,
    html,
  };
}

async function sendEmail(data: ApplyFormValues): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO;
  if (!apiKey || !to) {
    console.warn("[apply] RESEND env missing — email skipped");
    return { ok: false };
  }
  const { subject, text, html } = renderEmail(data);
  const replyTo = looksLikeEmail(data.contact) ? data.contact : undefined;
  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: FROM,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
    });
    if (result.error) {
      console.error("[apply] Resend error:", result.error);
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error("[apply] Resend exception:", err);
    return { ok: false };
  }
}

async function appendToSheet(data: ApplyFormValues): Promise<{ ok: boolean }> {
  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url) {
    console.warn("[apply] GOOGLE_SCRIPT_URL missing — sheet skipped");
    return { ok: false };
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error("[apply] Sheet webhook responded", res.status);
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error("[apply] Sheet webhook exception:", err);
    return { ok: false };
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = applySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Email + Sheet in parallel — Sheet is a "nice-to-have" archive; even if it fails the user
  // is still considered submitted as long as email made it through.
  const [emailResult, sheetResult] = await Promise.all([
    sendEmail(parsed.data),
    appendToSheet(parsed.data),
  ]);

  if (!emailResult.ok) {
    return NextResponse.json(
      { error: "Delivery failed, please try again or write us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, sheet: sheetResult.ok });
}
