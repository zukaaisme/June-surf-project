"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { MonoTag } from "@/components/ui/marquee-tag";

// 01 Hero — Open beat / 5–7 asymmetric
// Desktop: 12-col grid. Text cols 1–5. ONE photo aspect 4/5 in cols 6–12, contained inside max-w-7xl.
// V2 diff vs V1: dropped 3-photo collage, rotations, parallax, polaroid frames, "View Program" CTA.
// Mobile: text stack → single photo below CTAs.

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative bg-[var(--color-paper)]"
      style={{ minHeight: "100svh" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-12 h-full">

        {/* 12-col grid — desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT ZONE — text cols 1–5 */}
          <div className="lg:col-span-5 flex flex-col gap-8 pt-8">
            <MonoTag className="block text-[var(--color-anise)] opacity-60">
              01 / 09 &mdash; Tamraght, Morocco &mdash; Winter 2026
            </MonoTag>

            <motion.h1
              className="font-display text-display text-[var(--color-ink)] italic"
              style={{ maxWidth: "11ch" }}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
            >
              {site.heroHeadline}
            </motion.h1>

            <motion.p
              className="text-[var(--color-ink)] opacity-70"
              style={{ maxWidth: "32ch" }}
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.08, ease: "easeOut" }}
            >
              {site.heroSubhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.16, ease: "easeOut" }}
            >
              <a href="#apply" className="btn btn-primary">
                Apply
              </a>
            </motion.div>
          </div>

          {/* RIGHT ZONE — single photo cols 6–12, contained, aspect 3/4 (narrower = taller col = restores 5/7 asymmetry) */}
          <motion.div
            className="hidden lg:block lg:col-span-7"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1, ease: "easeOut" }}
          >
            <div
              className="photo relative w-full overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={images.heroAnchor.src}
                alt={images.heroAnchor.alt}
                fill
                sizes="(max-width: 1280px) 58vw, 740px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile single photo — below CTAs */}
        <motion.div
          className="lg:hidden mt-12"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.2, ease: "easeOut" }}
        >
          <div
            className="photo relative w-full overflow-hidden"
            style={{ aspectRatio: "3/4", maxHeight: "60vh" }}
          >
            <Image
              src={images.heroAnchor.src}
              alt={images.heroAnchor.alt}
              fill
              sizes="95vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Bottom mono bar */}
        <div
          className="mt-16 pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid color-mix(in srgb, var(--color-ink) 12%, transparent)" }}
        >
          <MonoTag className="text-[var(--color-anise)] opacity-60">
            {site.name} &mdash; {site.tagline}
          </MonoTag>
          <MonoTag className="text-[var(--color-anise)] opacity-40">01 / 09</MonoTag>
        </div>

      </div>
    </div>
  );
}
