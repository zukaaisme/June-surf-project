"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { MonoTag } from "@/components/ui/marquee-tag";

// Hero composition per Section 3 spec:
// Desktop: 12-col grid. Text cols 1–5. Collage cols 6–12 (contained box).
// No bg chip behind headline — text and photos no longer overlap.
// Mobile: stacked vertical. Single polaroid photo A below CTAs.

// 3 photos: A anchor (3/4 polaroid), B village (4/5 polaroid), C accent (1/1 raw).
// All positions are % of the collage-zone container — deterministic, no randomness.
const collagePhotos = [
  {
    key: "heroAnchor" as const,
    role: "A" as const,
    aspect: "3/4",
    widthPct: "58%",
    maxWidth: "380px",
    top: "4%",
    left: "6%",
    rotate: -2.5,
    z: 1,
    polaroid: true,
    caption: null,
    parallaxFactor: 0.04,
    sizes: "(max-width: 768px) 78vw, 380px",
    priority: true,
  },
  {
    key: "heroVillage" as const,
    role: "B" as const,
    aspect: "4/5",
    widthPct: "42%",
    maxWidth: "280px",
    top: "38%",
    left: "50%",
    rotate: 2.5,
    z: 2,
    polaroid: true,
    caption: "TAMRAGHT ’26",
    parallaxFactor: 0.04,
    sizes: "(max-width: 768px) 0px, 280px",
    priority: false,
  },
  {
    key: "heroAccent" as const,
    role: "C" as const,
    aspect: "1/1",
    widthPct: "26%",
    maxWidth: "170px",
    top: "2%",
    left: "62%",
    rotate: -4,
    z: 3,
    polaroid: false,
    caption: "FILM 200",
    parallaxFactor: 0.04,
    sizes: "(max-width: 768px) 0px, 170px",
    priority: false,
  },
] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      className="relative bg-[var(--color-paper)]"
      style={{ minHeight: "100svh" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-12">

        {/* 12-col grid — desktop only. Single-col on mobile. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ===== LEFT ZONE — text, cols 1–5 ===== */}
          <div className="lg:col-span-5 flex flex-col gap-8 pt-8">
            <MonoTag className="block text-[var(--color-anise)] opacity-60">
              01 / 09 &mdash; A Slow Trip. Not a Camp.
            </MonoTag>

            {/* Headline — no bg chip. Text and photos don't overlap in new layout. */}
            <h1
              className="font-display text-display text-[var(--color-ink)] italic"
              style={{ maxWidth: "11ch" }}
            >
              {site.heroHeadline}
            </h1>

            <p
              className="text-[var(--color-ink)] opacity-70"
              style={{ maxWidth: "38ch" }}
            >
              {site.heroSubhead}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn btn-primary">
                Apply
              </a>
              <a href="#about" className="btn btn-secondary">
                View Program
              </a>
            </div>
          </div>

          {/* ===== RIGHT ZONE — collage, cols 6–12 ===== */}
          {/* Hidden on mobile — single photo shown below CTAs instead */}
          <div className="hidden lg:block lg:col-span-7">
            <CollageZone
              scrollYProgress={scrollYProgress}
              reduced={reduced ?? false}
            />
          </div>
        </div>

        {/* Mobile single-photo strip — photo A only, no overlaps */}
        <div className="lg:hidden mt-12 flex justify-center">
          <MobilePhotoA reduced={reduced ?? false} />
        </div>

        {/* Bottom mono bar */}
        <div
          className="mt-24 pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid color-mix(in srgb, var(--color-ink) 12%, transparent)" }}
        >
          <MonoTag className="text-[var(--color-anise)] opacity-70">
            {site.name} &mdash; {site.tagline}
          </MonoTag>
          <MonoTag className="text-[var(--color-anise)] opacity-40">01 / 09</MonoTag>
        </div>

      </div>
    </div>
  );
}

// Collage zone — contained box, photos absolutely placed inside it.
// overflow: visible so rotations breathe past edges.
// pointer-events-none on zone; re-enabled per child so CTAs in left zone receive clicks.
function CollageZone({
  scrollYProgress,
  reduced,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  return (
    <div
      className="relative"
      style={{
        height: "min(640px, 70vh)",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      {collagePhotos.map((photo, i) => (
        <CollagePhoto
          key={photo.key}
          photo={photo}
          index={i}
          scrollYProgress={scrollYProgress}
          reduced={reduced}
        />
      ))}
    </div>
  );
}

function CollagePhoto({
  photo,
  index,
  scrollYProgress,
  reduced,
}: {
  photo: (typeof collagePhotos)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const img = images[photo.key];

  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0px", "0px"] : ["0px", `${photo.parallaxFactor * 200}px`]
  );

  const inner = photo.polaroid ? (
    <div
      className="card--polaroid"
      style={{ boxShadow: "2px 4px 0 rgba(104,31,36,0.12)" }}
    >
      {/* Parent must be position:relative + explicit aspect-ratio for next/image fill */}
      <div
        className="photo relative overflow-hidden"
        style={{ aspectRatio: photo.aspect }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={photo.sizes}
          className="object-cover"
          priority={photo.priority}
        />
      </div>
      {photo.caption && (
        <p className="font-mono-accent text-[var(--color-ink)] opacity-60 text-center mt-1">
          {photo.caption}
        </p>
      )}
    </div>
  ) : (
    <div>
      <div
        className="photo relative overflow-hidden"
        style={{ aspectRatio: photo.aspect }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={photo.sizes}
          className="object-cover"
        />
      </div>
      {photo.caption && (
        <MonoTag className="block mt-1 text-[var(--color-anise)] opacity-70">
          {photo.caption}
        </MonoTag>
      )}
    </div>
  );

  return (
    <motion.div
      className="absolute"
      style={{
        top: photo.top,
        left: photo.left,
        width: photo.widthPct,
        maxWidth: photo.maxWidth,
        rotate: photo.rotate,
        zIndex: photo.z,
        y: yRaw,
        pointerEvents: "auto",
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : index * 0.08,
        ease: "easeOut",
      }}
    >
      {inner}
    </motion.div>
  );
}

// Mobile: single polaroid of photo A, slightly rotated, centered
function MobilePhotoA({ reduced }: { reduced: boolean }) {
  const img = images.heroAnchor;
  return (
    <motion.div
      className="card--polaroid"
      style={{
        width: "78vw",
        maxWidth: "320px",
        rotate: -2,
        boxShadow: "2px 4px 0 rgba(104,31,36,0.12)",
      }}
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.2, ease: "easeOut" }}
    >
      <div
        className="photo relative overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="78vw"
          className="object-cover"
          priority
        />
      </div>
      <p className="font-mono-accent text-[var(--color-ink)] opacity-60 text-center mt-1">
        TAMRAGHT &apos;26
      </p>
    </motion.div>
  );
}
