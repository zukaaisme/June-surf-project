"use client";

// V3 Apply / Contact section — per Figma 07-contact
// Left: dates heading + subtext
// Right: 4-field form (name, email, instagram, preferred plan) + textarea + submit
// Bottom: 4 contact chips (email, whatsapp, telegram, instagram)
// bg: white

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applySchema, type ApplyFormValues } from "@/lib/apply-schema";
import { trip } from "@/content/trip";
import { site } from "@/content/site";
import { FadeIn } from "@/components/ui/fade-in";

const fieldStyle = {
  backgroundColor: "rgba(50,55,64,0.05)",
  height: "56px",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  fontSize: "16px",
  fontFamily: "var(--font-bricolage), sans-serif",
  color: "var(--color-slate)",
  border: "none",
  outline: "none",
  width: "100%",
};

const labelStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "16px",
  color: "var(--color-slate)",
  letterSpacing: "0.01em",
  display: "block",
  marginBottom: "8px",
};

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
    <section id="apply" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Two-column layout: heading left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">

          {/* Left — dates heading */}
          <FadeIn>
            <div className="flex flex-col gap-7">
              <h2
                className="text-[var(--color-slate)]"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                {trip.applyHeadline}
              </h2>
              <p
                className="text-[var(--color-slate)]"
                style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4, maxWidth: "310px" }}
              >
                {trip.applySubhead}
              </p>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.06}>
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <p
                  className="text-[var(--color-slate)] text-center"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <p className="text-red-500 mt-1" style={{ fontSize: "13px" }}>{errors.name.message}</p>
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
                      <p className="text-red-500 mt-1" style={{ fontSize: "13px" }}>{errors.contact.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Instagram + Preferred Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="instagram" style={labelStyle}>Instagram</label>
                    <input
                      id="instagram"
                      type="text"
                      placeholder="Link to profile"
                      style={fieldStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" style={labelStyle}>Preferred Plan</label>
                    <select
                      id="plan"
                      style={{ ...fieldStyle, cursor: "pointer" }}
                      {...register("plan")}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose plan...
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
                    }}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 mt-1" style={{ fontSize: "13px" }}>{errors.message.message}</p>
                  )}
                </div>

                {error && (
                  <p className="text-red-500" style={{ fontSize: "14px" }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                >
                  {isSubmitting ? "Sending…" : "Send Application"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

        {/* Contact chips — 4 per Figma, mist bg */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Email", value: site.email },
              { label: "WhatsApp", value: site.phone },
              { label: "Telegram", value: site.telegramHandle },
              { label: "Instagram", value: site.instagramHandle },
            ].map((contact) => (
              <div
                key={contact.label}
                className="flex flex-col gap-1 px-6 py-4 hover-fade"
                style={{ backgroundColor: "var(--color-mist)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-typewriter), serif",
                    fontSize: "14px",
                    color: "var(--color-slate)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  {contact.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-typewriter), serif",
                    fontSize: "14px",
                    color: "var(--color-slate)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  {contact.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
