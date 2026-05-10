"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { applySchema, type ApplyFormValues } from "@/lib/apply-schema";
import { trip } from "@/content/trip";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";

// 09 Apply + Footer (merged) — Breathing beat / paper → ink at bottom
// V2 diff vs V1:
//   - Contact cards: 4-up grid → vertical list (stacked, reads slower, correct for closing)
//   - Layout: cols 1–5 (index + h1 + dates + vertical contact) / cols 6–12 (form)
//   - Contact card bg: cumin → transparent (editorial, no colored chips in closing beat)
//   - Footer merged as full-width bg-ink band BELOW the grid (no standalone Footer component)
//   - Standalone Footer component is emptied/unused — app/page.tsx no longer imports it

function FieldWrapper({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-mono-accent text-[var(--color-ink)] opacity-60"
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            role="alert"
            className="font-mono-accent text-[var(--color-sriracha)] mt-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-[color-mix(in_srgb,var(--color-cardamom)_40%,transparent)] py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-cinnamon)] transition-colors placeholder:text-[var(--color-ink)] placeholder:opacity-30";

// Expected shape: { label, href, handle }
const directLinks = [
  { label: "Email",     href: `mailto:${site.email}`, handle: site.email },
  { label: "WhatsApp",  href: site.whatsapp,           handle: "+212 600 000 000" },
  { label: "Telegram",  href: site.telegram,           handle: "@surfmorocco" },
  { label: "Instagram", href: site.instagram,          handle: "@surfmorocco" },
] as const;

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async (data: ApplyFormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        setServerError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  const year = new Date().getFullYear();

  return (
    <>
      {/* ── Apply section — paper bg ── */}
      <Section id="apply" beat="breathing">

        {/* 12-col grid: cols 1–5 left / cols 6–12 right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* LEFT — index, h1, dates, vertical contact list */}
          <FadeIn className="lg:col-span-5">
            <MonoTag className="block mb-8">09 / 09 &mdash; Apply</MonoTag>

            <h2 className="font-display text-h1 text-[var(--color-ink)] mb-8">
              Six people per group.
              <br />
              Three groups this season.
            </h2>

            {/* Dates list */}
            <ul className="space-y-1 mb-12">
              {trip.dates.map((d) => (
                <li key={d.label} className="font-mono-accent text-[var(--color-ink)] opacity-50 normal-case">
                  {d.label} &mdash; {d.range}
                </li>
              ))}
            </ul>

            {/* 4 contact cards — VERTICAL list (not 4-up grid) */}
            <ul className="space-y-4">
              {directLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4"
                  >
                    <MonoTag className="flex-shrink-0 text-[var(--color-anise)] opacity-50 group-hover:opacity-100 transition-opacity">
                      {link.label}
                    </MonoTag>
                    <span className="font-mono-accent text-[var(--color-ink)] opacity-70 group-hover:opacity-100 transition-opacity normal-case truncate">
                      {link.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* RIGHT — form, single column, fields stacked */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start pt-16"
                >
                  <p className="font-mono-accent text-[var(--color-ink)] opacity-70 normal-case">
                    Got it. We&apos;ll write back within a day or two.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  <FieldWrapper label="Name *" id="name" error={errors.name?.message}>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                      aria-required="true"
                      {...register("name")}
                    />
                  </FieldWrapper>

                  <FieldWrapper
                    label="How to reach you *"
                    id="contact"
                    error={errors.contact?.message}
                  >
                    <input
                      id="contact"
                      type="text"
                      autoComplete="email"
                      placeholder="Email, phone, @handle — your choice"
                      className={inputClass}
                      aria-required="true"
                      {...register("contact")}
                    />
                  </FieldWrapper>

                  <FieldWrapper
                    label="Anything to add"
                    id="message"
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Surf level, questions, context..."
                      className={`${inputClass} resize-none`}
                      {...register("message")}
                    />
                  </FieldWrapper>

                  {serverError && (
                    <p role="alert" className="font-mono-accent text-[var(--color-sriracha)] normal-case">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send application"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>

        </div>
      </Section>

      {/* ── Footer band — full-width bg-ink, replaces standalone Footer component ── */}
      <div className="bg-[var(--color-ink)] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Brand */}
            <p className="font-display text-h2 text-[var(--color-paper)]">
              {site.name}
            </p>

            {/* Mono copyright */}
            <MonoTag className="text-[var(--color-cream)] opacity-40 normal-case">
              &copy; {year} {site.copyrightName}
            </MonoTag>
          </div>

          {/* Closing italic line */}
          <div
            className="mt-8 pt-8"
            style={{ borderTop: "1px solid color-mix(in srgb, var(--color-paper) 10%, transparent)" }}
          >
            <p className="font-display italic text-[var(--color-paper)] opacity-40">
              {site.footerClosing}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
