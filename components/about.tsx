"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { trip } from "@/content/trip";
import { images } from "@/content/images";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";

// About = what you actually do there.
// Manifesto lines moved to EmotionalIntro.

export function About() {
  const reduced = useReducedMotion();

  return (
    <Section id="about" bg="cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left column — editorial text */}
        <div>
          <FadeIn>
            <MonoTag className="block mb-6">03 / 09 &mdash; What this actually is</MonoTag>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="font-display text-h1 text-[var(--color-ink)] mb-8">
              Not a camp.
              <br />
              Not a resort.
              <br />
              Not a checklist.
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-[var(--color-ink)] opacity-70 mb-6"
              style={{ maxWidth: "55ch" }}
            >
              Seven days in a fishing village that hasn&apos;t been packaged yet.
              Small group, real house, local food. Off-season so the beaches are
              empty and the prices are honest.
            </p>
            <p
              className="text-[var(--color-ink)] opacity-70 mb-8"
              style={{ maxWidth: "55ch" }}
            >
              We handle the logistics. The rest is you, the Atlantic, and
              however much of Morocco you want to absorb.
            </p>
          </FadeIn>

          {/* Activities list */}
          <FadeIn delay={0.22}>
            <ul className="space-y-3">
              {trip.activities.map((activity, i) => (
                <motion.li
                  key={activity}
                  className="flex gap-3 items-baseline"
                  initial={{ opacity: 0, x: reduced ? 0 : -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: reduced ? 0 : 0.5,
                    delay: reduced ? 0 : 0.3 + i * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <MonoTag className="flex-shrink-0 text-[var(--color-anise)] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </MonoTag>
                  <span className="text-[var(--color-ink)] opacity-65">
                    {activity}
                  </span>
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Right column — asymmetric photo stack */}
        <div className="relative">
          <FadeIn delay={0.15}>
            <div className="photo relative aspect-[3/4] overflow-hidden">
              <Image
                src={images.aboutSide.src}
                alt={images.aboutSide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Inset photo — offset bottom-left. bottom clamped on mobile to avoid overflow. */}
          <FadeIn delay={0.3}>
            <div
              className="absolute bottom-[-2rem] md:bottom-[-3rem] left-[-2.25rem] w-[72%] border-4 border-[var(--color-paper)] photo overflow-hidden"
              style={{ boxShadow: "2px 4px 0 rgba(104,31,36,0.10)", zIndex: 2 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.aboutRooftop.src}
                  alt={images.aboutRooftop.alt}
                  fill
                  sizes="(max-width: 768px) 68vw, 36vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
