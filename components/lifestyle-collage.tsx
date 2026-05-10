"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/content/images";
import { MonoTag } from "@/components/ui/marquee-tag";

// 04 Lifestyle — Dense beat / paper bg / full-bleed photo grid
// V2 diff vs V1:
//   - bg: cumin → paper
//   - Photo grid breaks out of max-w-7xl container (full-viewport-width)
//   - Caption strip below is re-contained inside max-w-7xl
//   - Dropped "ROLL 03/04" framing text — one clean caption line only
//   - Aspect ratios per row: row1 = 1/1, 4/5, 3/4, 4/5 | row2 = 3/4, 1/1, 4/5, 3/4

const collagePhotos = [
  // Row 1
  { key: "lifestyleTea"       as const, aspectRatio: "1/1",  mobileAspect: "1/1"  },
  { key: "lifestyleSurfboards"as const, aspectRatio: "4/5",  mobileAspect: "4/5"  },
  { key: "lifestyleMarket"    as const, aspectRatio: "3/4",  mobileAspect: "3/4"  },
  { key: "lifestyleRooftop"   as const, aspectRatio: "4/5",  mobileAspect: "4/5"  },
  // Row 2
  { key: "lifestyleScooter"   as const, aspectRatio: "3/4",  mobileAspect: "3/4"  },
  { key: "lifestyleOcean"     as const, aspectRatio: "1/1",  mobileAspect: "1/1"  },
  { key: "lifestyleFriends"   as const, aspectRatio: "4/5",  mobileAspect: "4/5"  },
  { key: "lifestyleCoffee"    as const, aspectRatio: "3/4",  mobileAspect: "3/4"  },
] as const;

export function LifestyleCollage() {
  const reduced = useReducedMotion();

  return (
    <section
      id="lifestyle"
      className="bg-[var(--color-paper)] text-[var(--color-ink)] py-20 md:py-28"
    >
      {/* Section index caption — contained */}
      <div className="px-5 md:px-10 mx-auto max-w-7xl mb-8">
        <MonoTag className="text-[var(--color-anise)] opacity-60">
          04 / 09 &mdash; Moments
        </MonoTag>
      </div>

      {/* Desktop: full-bleed 4-column grid — no horizontal padding, no max-width */}
      <div className="hidden md:grid grid-cols-4 gap-[3px] mb-8">
        {collagePhotos.map((photo, i) => {
          const img = images[photo.key];
          return (
            <motion.div
              key={photo.key}
              className="photo relative w-full overflow-hidden"
              style={{ aspectRatio: photo.aspectRatio }}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduced ? 0 : 0.6,
                delay: reduced ? 0 : i * 0.05,
                ease: "easeOut",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="25vw"
                className="object-cover"
                style={{ filter: "contrast(0.97) saturate(0.92)" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: horizontal scroll snap */}
      <div className="md:hidden flex gap-[3px] overflow-x-auto pb-3 snap-x snap-mandatory mb-8">
        {collagePhotos.map((photo, i) => {
          const img = images[photo.key];
          return (
            <motion.div
              key={photo.key}
              className="photo relative flex-shrink-0 overflow-hidden snap-start"
              style={{ width: "68vw", aspectRatio: photo.mobileAspect }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.04 }}
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

      {/* Caption bar — re-contained */}
      <div className="px-5 md:px-10 mx-auto max-w-7xl">
        <MonoTag className="text-[var(--color-anise)] opacity-60">
          MOMENTS &middot; TAMRAGHT &middot; WINTER &apos;26
        </MonoTag>
      </div>
    </section>
  );
}
