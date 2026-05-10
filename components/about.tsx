"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trip } from "@/content/trip";
import { images } from "@/content/images";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";

// 03 About — Breathing beat / cream bg / 7–5 asymmetric
// V2 diff vs V1:
//   - Dropped inset overlay photo (the absolute bottom-[-2rem] polaroid-style element)
//   - One photo only, right column (cols 8–12), aspect 4/5, sticky-top alignment
//   - bg stays cream
//   - 12-col grid via grid-cols-12 (was md:grid-cols-2)
//   - Activity list uses no translateY stagger (already removed in V1, kept)

export function About() {
  const reduced = useReducedMotion();

  return (
    <Section id="about" bg="cream" beat="breathing">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* LEFT — text block cols 1–7 */}
        <div className="lg:col-span-7">
          <FadeIn>
            <MonoTag className="block mb-6">03 / 09 &mdash; About the trip</MonoTag>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="font-display text-h1 text-[var(--color-ink)] mb-8">
              A house in a fishing village.
              <br />
              A small group.
              <br />
              Seven days.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-[var(--color-ink)] opacity-70 mb-6"
              style={{ maxWidth: "55ch" }}
            >
              Seven days in Tamraght. Small group, real house &mdash; breakfast at
              the table, lunch at the port, dinner somewhere different each time.
              January and February: no crowds, no tour buses, cold mornings that
              warm up by ten.
            </p>
            <p
              className="text-[var(--color-ink)] opacity-70 mb-8"
              style={{ maxWidth: "55ch" }}
            >
              We handle the logistics. The rest depends on the day &mdash; some
              days you&apos;re in the water by eight, some days you read half a
              book and walk to the point at dusk.
            </p>
          </FadeIn>

          {/* Activities — numbered list, no stagger animation */}
          <FadeIn delay={0.22}>
            <ul className="space-y-3">
              {trip.activities.map((activity, i) => (
                <li key={activity} className="flex gap-3 items-baseline">
                  <MonoTag className="flex-shrink-0 text-[var(--color-anise)] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </MonoTag>
                  <span className="text-[var(--color-ink)] opacity-65">
                    {activity}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* RIGHT — single photo cols 8–12, aspect 4/5, sticky top */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.15, ease: "easeOut" }}
          >
            <div
              className="photo relative w-full overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={images.aboutSide.src}
                alt={images.aboutSide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
