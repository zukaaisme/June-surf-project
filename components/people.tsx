"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { trip } from "@/content/trip";
import { images } from "@/content/images";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";
import type { ImageKey } from "@/content/images";

// 06 People — DOMINANT section / Breathing beat / belacan bg
// V2 diff vs V1:
//   - beat=dominant → py-48 top and bottom (the long pause earns dominance)
//   - Two-row layout:
//       Row A: index + h1 + intro line, cols 1–7 (left 7 of 12)
//       Row B: 4 cards, each col-span-3 (4-up equal), 2-up tablet, 1-up mobile
//   - Dropped per-card rotation (was -2, 1, -1, 2 degrees)
//   - Dropped box-shadow on cards
//   - Dropped palm corner Texture
//   - Photo aspect ratio: 4/5 for all 4 cards (uniform per spec)
//   - Cards use .card--polaroid (cream bg on belacan field) — no shadow

const roleLabels: Record<string, string> = {
  hassan:  "THE COOK",
  yassine: "THE INSTRUCTOR",
  karim:   "THE HOST",
  lina:    "THE FIXER",
};

export function People() {
  const reduced = useReducedMotion();

  return (
    <Section id="people" bg="belacan" beat="dominant">

      {/* Row A: index + h1 + intro, constrained to left 7/12 on large screens */}
      <div className="mb-16 lg:mb-24">
        <FadeIn>
          <MonoTag className="block mb-8 text-[var(--color-cream)] opacity-60">
            06 / 09 &mdash; The People
          </MonoTag>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="font-display text-h1 text-[var(--color-paper)] mb-6"
            style={{ maxWidth: "22ch" }}
          >
            Who you&apos;ll meet.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-[var(--color-paper)] opacity-60"
            style={{ maxWidth: "50ch" }}
          >
            Four people you&apos;ll spend time with during the week.
          </p>
        </FadeIn>
      </div>

      {/* Row B: 4 equal cards, col-span-3 each on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {trip.people.map((person, i) => {
          const imgKey = person.id as ImageKey;
          const img = images[imgKey];
          const roleLabel = roleLabels[person.id] ?? person.role.toUpperCase();

          return (
            <motion.div
              key={person.id}
              className="card--polaroid"
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : i * 0.08,
                ease: "easeOut",
              }}
            >
              {/* Photo — aspect 4/5, no rotation */}
              <div
                className="photo relative mb-4 overflow-hidden bg-[var(--color-cream)]"
                style={{ aspectRatio: "4/5" }}
              >
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 46vw, 22vw"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Mono role */}
              <MonoTag className="block mb-2 text-[var(--color-anise)] opacity-60">
                {roleLabel}
              </MonoTag>

              {/* Name */}
              <p className="font-display text-h2 font-bold text-[var(--color-ink)] mb-2">
                {person.name}
              </p>

              {/* Bio */}
              <p className="text-[var(--color-ink)] opacity-65 mb-4">
                {person.bio}
              </p>

              {/* Quote — italic mono */}
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

    </Section>
  );
}
