"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { trip } from "@/content/trip";
import { images } from "@/content/images";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";
import { Texture } from "@/components/ui/texture";
import type { ImageKey } from "@/content/images";

// People — object polaroid model per Section 5 spec.
// No stock faces. Each card shows what the person touches / makes / lives in.
// Card body order: photo → mono role caption → first name → bio → italic quote.

// Deterministic slight rotations for editorial feel
const rotations = [-2, 1, -1, 2] as const;

// Mono role labels — all-caps, describe the role not the name
const roleLabels: Record<string, string> = {
  hassan:  "THE COOK",
  yassine: "THE INSTRUCTOR",
  karim:   "THE HOST",
  lina:    "THE FIXER",
};

// Aspect ratios per spec table (Section 5)
const photoAspects: Record<string, string> = {
  hassan:  "4/5",
  yassine: "1/1",
  karim:   "3/4",
  lina:    "4/5",
};

export function People() {
  const reduced = useReducedMotion();

  return (
    <Section id="people" bg="belacan" className="relative overflow-hidden">
      {/* Palm corner decoration */}
      <Texture variant="palm" />

      <div className="relative z-10">
        <FadeIn>
          <MonoTag className="block mb-8 text-[var(--color-cream)] opacity-60">
            06 / 09 &mdash; The People
          </MonoTag>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="font-display text-h1 text-[var(--color-paper)] mb-16">
            Who you&apos;ll meet.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trip.people.map((person, i) => {
            const imgKey = person.id as ImageKey;
            const img = images[imgKey];
            const roleLabel = roleLabels[person.id] ?? person.role.toUpperCase();
            const photoAspect = photoAspects[person.id] ?? "3/4";

            return (
              <motion.div
                key={person.id}
                className="card--polaroid"
                style={{
                  rotate: reduced ? 0 : rotations[i] ?? 0,
                  boxShadow: "2px 4px 0 rgba(104,31,36,0.18)",
                }}
                initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduced ? 0 : 0.6,
                  delay: reduced ? 0 : i * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* Object photo — position:relative + aspect-ratio on same element */}
                <div
                  className="photo relative mb-4 overflow-hidden bg-[var(--color-cream)]"
                  style={{ aspectRatio: photoAspect }}
                >
                  {img && (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 25vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Mono role caption — opacity 0.6 */}
                <MonoTag className="block mb-2 text-[var(--color-anise)] opacity-60">
                  {roleLabel}
                </MonoTag>

                {/* First name only — text-h2 weight display */}
                <p className="font-display text-h2 font-bold text-[var(--color-ink)] mb-2">
                  {person.name}
                </p>

                {/* One-line bio */}
                <p className="text-[var(--color-ink)] opacity-65 mb-4">
                  {person.bio}
                </p>

                {/* Italic typewriter quote */}
                <p
                  className="font-mono-accent text-[var(--color-belacan)] opacity-80 leading-snug italic"
                  style={{ letterSpacing: "0.02em", textTransform: "none" }}
                >
                  &ldquo;{person.quote}&rdquo;
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
