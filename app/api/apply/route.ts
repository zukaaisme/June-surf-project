import { NextRequest, NextResponse } from "next/server";
import { applySchema } from "@/lib/apply-schema";

// TODO: Wire up real backend here.
// Option A — Telegram bot:
//   POST https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage
//   body: { chat_id: TELEGRAM_CHAT_ID, text: formatMessage(data) }
//   Env vars: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (see .env.example)
//
// Option B — Resend email:
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: "...", to: "...", subject: "...", text: "..." })
//   Env vars: RESEND_API_KEY (see .env.example)

export async function POST(req: NextRequest) {
  const body: unknown = await req.json();

  const parsed = applySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Intentional log — replace with real backend call above.
  console.log("[apply]", parsed.data);

  return NextResponse.json({ ok: true });
}
