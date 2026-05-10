"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MonoTag } from "@/components/ui/marquee-tag";
import { Section } from "@/components/ui/section";

// 02 Manifesto — Dark beat / centered / belacan
// 3 lines, text-h1, max-width 28ch, centered. Mono index top. py-48 via beat=dominant.
// V2 diff: renamed from EmotionalIntro. Content unchanged — already correct per spec.
// The EmotionalIntro file is preserved (not deleted) to avoid breaking any stale imports,
// but app/page.tsx imports Manifesto directly.

const lines = [
  "Tamraght is a small village.",
  "Six people. Seven nights. Once a year.",
  "That's about it.",
];

export function Manifesto() {
  const reduced = useReducedMotion();

  return (
    <Section id="manifesto" bg="belacan" beat="dominant" className="overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Mono caption — top-center */}
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
    </Section>
  );
}
