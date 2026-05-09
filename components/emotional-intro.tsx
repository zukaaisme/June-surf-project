"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MonoTag } from "@/components/ui/marquee-tag";

// Manifesto: 3 centered lines on belacan — a quiet title-card frame.
// Mono caption top-center, opacity 0.5.
// Per Section 3 spec: center-justified, max-width 28ch, text-h1.
// Vertical padding py-40 md:py-48 (spec).

const lines = [
  "Some places aren't on the map.",
  "Some trips don't fit a brochure.",
  "This is one of those.",
];

export function EmotionalIntro() {
  const reduced = useReducedMotion();

  return (
    <section
      id="intro"
      className="bg-[var(--color-belacan)] text-[var(--color-paper)] px-5 py-40 md:px-10 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        {/* Mono caption — top-center, opacity 0.5 */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduced ? 0 : 0.4 }}
        >
          <MonoTag className="text-[var(--color-cream)] opacity-50">
            02 / 09 &mdash; Tamraght, Morocco &mdash; Winter 2026
          </MonoTag>
        </motion.div>

        {/* Manifesto lines — centered, max-width 28ch */}
        <div className="text-center" style={{ maxWidth: "28ch" }}>
          {lines.map((line, i) => (
            <motion.p
              key={line}
              className="font-display font-extrabold text-[var(--color-paper)] leading-[1.0] text-h1"
              style={{ letterSpacing: "-0.015em", textAlign: "center" }}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : i * 0.08,
                ease: "easeOut",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
