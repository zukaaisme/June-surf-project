"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema, type ApplyFormValues } from "@/lib/apply-schema";
import { trip } from "@/content/trip";
import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/fade-in";
import { CHEVRON_DOWN_URL } from "@/components/ui/icons";
import { SECTION_PADDING_Y, captionUppercase } from "@/lib/styles";

const chipLabelStyle = { ...captionUppercase, color: "rgba(50,55,64,0.5)", lineHeight: 1.2 } as const;
const chipValueStyle = { ...captionUppercase, color: "var(--color-slate)", lineHeight: 1.2 } as const;

const CONTACTS = [
  { label: "Telegram",  getValue: () => site.telegramHandle,  getHref: () => site.telegram },
  { label: "Instagram", getValue: () => site.instagramHandle, getHref: () => site.instagram },
] as const;

const fieldStyle = {
  backgroundColor: "rgba(50,55,64,0.1)",
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
    <section id="apply" className={`bg-white ${SECTION_PADDING_Y} overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-10">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left — dates heading + subhead + chips pinned to bottom on desktop */}
          <FadeIn className="flex h-full flex-col">
            <div className="flex h-full flex-col gap-6">
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
                style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4, maxWidth: "420px" }}
              >
                {trip.applySubhead}
              </p>

              {/* Contact chips — desktop: pinned to bottom of left column so they align with the form's Send button. Mobile: rendered below the form (see <ContactChips /> at the end). */}
              <div className="mt-auto hidden lg:block">
                <ContactChips />
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
                      style={fieldStyle}
                      {...register("instagram")}
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" style={labelStyle}>Preferred Plan</label>
                    <select
                      id="plan"
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
                    placeholder="Questions, do you go alone or with friends or partner, expectations or suggestions"
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

        {/* Mobile-only — desktop renders chips inside the left column */}
        <div className="mt-8 lg:hidden">
          <FadeIn delay={0.1}>
            <ContactChips />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

function ContactChips() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      {CONTACTS.map(({ label, getValue, getHref }) => {
        const href = getHref();
        const isExternal = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="hover-fade flex h-14 items-center justify-center gap-3 rounded-full sm:w-[308px]"
            style={{ backgroundColor: "var(--color-mist)" }}
          >
            <span style={chipLabelStyle}>{label}</span>
            <span style={chipValueStyle}>{getValue()}</span>
          </a>
        );
      })}
    </div>
  );
}
