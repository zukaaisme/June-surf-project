"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trip } from "@/content/trip";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";

// 05 Included — Dense beat / paper bg / 3×3 grid
// V2 diff vs V1:
//   - 4-col 8-cell → 3-col 9-cell (7 items + 1 period cell + 1 mono-meta cell)
//   - Heading band sits ABOVE the grid, spans cols 1–8 conceptually (max-w inside col)
//   - Dropped Texture wave background
//   - 3-col on desktop, 1-col mobile

// Inline SVG icons — 24×24, stroke 1.5, currentColor
const icons: Record<string, React.ReactNode> = {
  "01": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 17V10a2 2 0 012-2h16a2 2 0 012 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 17h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 8V6a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 8V6a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 20v-3M22 20v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "02": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16c0 4.418-3.582 8-8 8s-8-3.582-8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13V11M12 13V10M16 13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "03": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 16c2-3 4-4 6-2s4 3 6 1 4-4 8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 12l2-4 3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "04": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1" y="8" width="18" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1 12h18M13 8V6a1 1 0 00-1-1H7a1 1 0 00-1 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 13l3 1v4h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "05": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 13l8 8M17 18l2 2M19 16l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "06": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 20v-3a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="4" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1 20v-2a3 3 0 015-2.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 20v-2a3 3 0 00-5-2.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "07": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 8l-2.5 6.5L7 16l2.5-6.5L16 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
};

export function Included() {
  const reduced = useReducedMotion();

  return (
    <Section id="included" beat="dense">

      {/* Heading band — above the grid, conceptually spans cols 1–8 */}
      <FadeIn>
        <MonoTag className="block mb-8">05 / 09 &mdash; Included</MonoTag>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2
          className="font-display text-h1 text-[var(--color-ink)] mb-16"
          style={{ maxWidth: "22ch" }}
        >
          What&apos;s in the week.
        </h2>
      </FadeIn>

      {/* 3-column grid — 8 cells: 7 items + 1 display typographic close (cell 9 dropped) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {trip.included.map((item, i) => (
          <motion.div
            key={item.index}
            className="card group pt-6 pb-8 pr-6"
            style={{
              background: "transparent",
              border: "none",
              borderTop: "1px solid color-mix(in srgb, var(--color-cardamom) 25%, transparent)",
            }}
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: reduced ? 0 : 0.6,
              delay: reduced ? 0 : i * 0.07,
              ease: "easeOut",
            }}
          >
            {/* Icon */}
            <div className="text-[var(--color-cinnamon)] mb-4 opacity-80">
              {icons[item.index]}
            </div>

            {/* Index */}
            <MonoTag className="block mb-3">
              {item.index}
            </MonoTag>

            <p className="font-display text-h2 text-[var(--color-ink)] mb-2">
              {item.title}
            </p>

            <p className="text-[var(--color-ink)] opacity-55">
              {item.body}
            </p>
          </motion.div>
        ))}

        {/* Cell 8 — display typographic close: elevated voice, not mono */}
        <motion.div
          className="pt-6 pb-8 pr-6 flex items-end"
          style={{
            borderTop: "1px solid color-mix(in srgb, var(--color-cardamom) 25%, transparent)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.56 }}
        >
          <p className="font-display text-h2 text-[var(--color-ink)] leading-snug">
            January and February.
            <br />
            The rest of the year, it&apos;s busy.
          </p>
        </motion.div>
      </div>

    </Section>
  );
}
