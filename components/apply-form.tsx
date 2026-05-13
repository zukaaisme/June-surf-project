"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema, type ApplyFormValues } from "@/lib/apply-schema";
import { trip } from "@/content/trip";
import { FadeIn } from "@/components/ui/fade-in";
import { CHEVRON_DOWN_URL } from "@/components/ui/icons";
import { SOCIALS, SocialButton } from "@/components/ui/social-icons";
import { SECTION_PADDING_Y, sectionSubheadStyle } from "@/lib/styles";

const fieldStyle = {
  backgroundColor: "rgba(50,55,64,0.08)",
  height: "56px",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  fontSize: "16px",
  lineHeight: 1.3,
  fontFamily: "var(--font-bricolage), sans-serif",
  fontWeight: 400,
  color: "var(--color-slate)",
  border: "none",
  outline: "none",
  width: "100%",
  borderRadius: 0,
} as const;

const labelStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "16px",
  color: "var(--color-slate)",
  letterSpacing: "0.01em",
  display: "block",
  marginBottom: "8px",
} as const;

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({ resolver: zodResolver(applySchema) });

  async function onSubmit(data: ApplyFormValues) {
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again or write us directly.");
    }
  }

  return (
    // V2: universal SECTION_PADDING_Y. The +8 pt override is gone — the new universal pt
    // (80 desktop / 64 mobile) already gives "Nearest dates" the breathing room it earned.
    <section id="apply" className={`bg-white ${SECTION_PADDING_Y} overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-10">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[124px]">

          {/* Left — dates heading + subhead + chips pinned to bottom on desktop.
              Heading→subhead gap is gap-4 (16) — uniform with Team and Pricing. */}
          <FadeIn className="flex h-full flex-col">
            <div className="flex h-full flex-col gap-4">
              <h2
                className="text-[var(--color-slate)]"
                style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "clamp(1.875rem, 4.5vw, 3.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                }}
              >
                {trip.applyHeadline}
                <br />
                {trip.applyHeadlineLine2}
              </h2>
              <p
                className="text-[var(--color-slate)]"
                style={{ ...sectionSubheadStyle, maxWidth: "420px" }}
              >
                {trip.applySubhead}
              </p>

              <div className="mt-auto hidden lg:block">
                <ContactButtons />
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.06}>
            {submitted ? (
              <div className="flex min-h-[300px] items-center justify-center">
                <p
                  className="text-center text-[var(--color-slate)]"
                  style={{
                    fontFamily: "var(--font-typewriter), serif",
                    fontSize: "18px",
                    lineHeight: 1.5,
                  }}
                >
                  Your application is on its way. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="hover-fade"
                      style={fieldStyle}
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500" style={{ fontSize: "13px" }}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="example@surfcamp.com"
                      className="hover-fade"
                      style={fieldStyle}
                      {...register("contact")}
                      aria-invalid={errors.contact ? "true" : "false"}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-red-500" style={{ fontSize: "13px" }}>{errors.contact.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Instagram + Preferred Plan */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="instagram" style={labelStyle}>Instagram</label>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="Link to profile"
                      className="hover-fade"
                      style={fieldStyle}
                      {...register("instagram")}
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" style={labelStyle}>Preferred Plan</label>
                    <select
                      id="plan"
                      className="hover-fade"
                      style={{
                        ...fieldStyle,
                        cursor: "pointer",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        backgroundImage: `url(${CHEVRON_DOWN_URL})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px",
                        paddingRight: "44px",
                      }}
                      {...register("plan")}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose plan…
                      </option>
                      {trip.pricingTiers.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.priceDisplay}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional info textarea */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Additional Info</label>
                  <textarea
                    id="message"
                    placeholder="Questions, Do you go alone, or with your friends or partner, Expectations or Suggestions"
                    className="hover-fade"
                    style={{
                      ...fieldStyle,
                      height: "112px",
                      resize: "none",
                      padding: "16px",
                      alignItems: "flex-start",
                      lineHeight: 1.4,
                    }}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500" style={{ fontSize: "13px" }}>{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <p className="text-red-500" style={{ fontSize: "14px" }}>{error}</p>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-submit">
                  {isSubmitting ? "Sending…" : "Send Application"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

        <div className="mt-6 flex justify-center lg:hidden">
          <FadeIn delay={0.1}>
            <ContactButtons />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

function ContactButtons() {
  return (
    <div className="flex gap-3">
      {SOCIALS.map((s) => (
        <SocialButton key={s.label} social={s} />
      ))}
    </div>
  );
}

