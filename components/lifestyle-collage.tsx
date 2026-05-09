"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/content/images";
import { MonoTag } from "@/components/ui/marquee-tag";

// Film-strip contact sheet: 8 photos, 4-column grid desktop, h-scroll mobile.
// Bug fix: each photo has `position: relative` AND `aspect-ratio` on the SAME parent element.
// next/image fill requires its parent to be positioned + have explicit dimensions.
// Aspect ratios vary per cell for editorial rhythm (bottom edges of row 1 don't align with top of row 2).

const collagePhotos = [
  // Row 1
  { key: "lifestyleTea" as const,        aspectRatio: "1/1",  mobileAspect: "1/1"  },
  { key: "lifestyleSurfboards" as const, aspectRatio: "4/5",  mobileAspect: "4/5"  },
  { key: "lifestyleMarket" as const,     aspectRatio: "3/4",  mobileAspect: "3/4"  },
  { key: "lifestyleRooftop" as const,    aspectRatio: "4/5",  mobileAspect: "4/5"  },
  // Row 2
  { key: "lifestyleScooter" as const,    aspectRatio: "3/4",  mobileAspect: "3/4"  },
  { key: "lifestyleOcean" as const,      aspectRatio: "1/1",  mobileAspect: "1/1"  },
  { key: "lifestyleFriends" as const,    aspectRatio: "4/5",  mobileAspect: "4/5"  },
  { key: "lifestyleCoffee" as const,     aspectRatio: "3/4",  mobileAspect: "3/4"  },
] as const;

export function LifestyleCollage() {
  const reduced = useReducedMotion();

  return (
    <section
      id="lifestyle"
      className="bg-[var(--color-cumin)] text-[var(--color-ink)] py-[7.5rem] md:py-40"
    >
      {/* Section index caption */}
      <div className="px-5 md:px-10 mx-auto max-w-7xl mb-8">
        <MonoTag className="text-[var(--color-anise)] opacity-60">
          04 / 09 &mdash; Moments
        </MonoTag>
      </div>

      {/* Desktop: 4-column grid. No wide cells — all col-span-1 for stability. */}
      <div className="hidden md:grid grid-cols-4 gap-3 px-5 md:px-10 mx-auto max-w-7xl mb-8">
        {collagePhotos.map((photo, i) => {
          const img = images[photo.key];
          return (
            <motion.div
              key={photo.key}
              // position:relative + aspect-ratio on same element = fill bug fix
              className="photo relative w-full overflow-hidden"
              style={{ aspectRatio: photo.aspectRatio }}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : i * 0.06,
                ease: "easeOut",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1280px) 25vw, 320px"
                className="object-cover"
                style={{ filter: "contrast(0.97) saturate(0.92)" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: horizontal scroll snap — each cell 68vw, own aspect-ratio */}
      <div className="md:hidden flex gap-3 overflow-x-auto px-5 pb-3 snap-x snap-mandatory mb-8">
        {collagePhotos.map((photo, i) => {
          const img = images[photo.key];
          return (
            <motion.div
              key={photo.key}
              // position:relative + aspect-ratio + flex-shrink-0 for scroll
              className="photo relative flex-shrink-0 overflow-hidden snap-start"
              style={{ width: "68vw", aspectRatio: photo.mobileAspect }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduced ? 0 : 0.5,
                delay: reduced ? 0 : i * 0.04,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="68vw"
                className="object-cover"
                style={{ filter: "contrast(0.97) saturate(0.92)" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Caption bar — full-width mono strip */}
      <div className="px-5 md:px-10 mx-auto max-w-7xl">
        <MonoTag className="text-[var(--color-anise)] opacity-60">
          MOMENTS &middot; TAMRAGHT &middot; WINTER &apos;26 &middot; ROLL 03/04
        </MonoTag>
      </div>
    </section>
  );
}
