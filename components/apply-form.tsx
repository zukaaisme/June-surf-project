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

  return (
    <Section id="apply">
      <FadeIn>
        <MonoTag className="block mb-8">09 / 09 &mdash; Apply</MonoTag>
      </FadeIn>

      {/* Direct contact links */}
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {directLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card bg-[var(--color-cumin)] text-[var(--color-ink)] border-[color-mix(in_srgb,var(--color-ink)_22%,transparent)] hover:bg-[var(--color-cinnamon)] hover:text-[var(--color-cream)] hover:border-[var(--color-cinnamon)] transition-colors"
            >
              <MonoTag className="block mb-1 text-[var(--color-ink)] opacity-60 group-hover:text-[var(--color-cream)] group-hover:opacity-100 transition-colors">
                {link.label}
              </MonoTag>
              <p className="font-mono-accent text-[var(--color-ink)] opacity-85 group-hover:text-[var(--color-cream)] group-hover:opacity-95 transition-opacity truncate normal-case">
                {link.handle}
              </p>
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="h-px bg-[color-mix(in_srgb,var(--color-cardamom)_20%,transparent)] mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — context */}
        <FadeIn delay={0.08}>
          <div>
            <h2 className="font-display text-h1 text-[var(--color-ink)] mb-6">
              Six people per wave.
              <br />
              Three waves this season.
            </h2>
            <p
              className="text-[var(--color-ink)] opacity-60 mb-8"
              style={{ maxWidth: "42ch" }}
            >
              Fill in the form or reach us directly above. We&apos;ll reply
              within a few days to check the fit and answer questions. No
              payment until we&apos;ve spoken.
            </p>
            <ul className="space-y-1">
              {trip.dates.map((d) => (
                <li key={d.label} className="font-mono-accent text-[var(--color-ink)] opacity-50 normal-case">
                  {d.label} &mdash; {d.range}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Right — form */}
        <FadeIn delay={0.12}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start"
              >
                <p className="font-mono-accent text-[var(--color-ink)] opacity-70 normal-case">
                  Thanks. We&apos;ll be in touch.
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
  );
}
