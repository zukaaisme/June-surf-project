"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { GallerySlider } from "@/components/gallery-slider";
import { SECTION_PADDING_Y, captionStyle } from "@/lib/styles";
import { trip } from "@/content/trip";
import { site } from "@/content/site";

const cardHeadingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(1.625rem, 2.5vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: "-0.03em",
} as const;

const cardBodyStyle = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: 1.4,
} as const;

const tagBase = {
  ...captionStyle,
  fontSize: "16px",
  color: "var(--color-slate)",
  letterSpacing: "0.01em",
} as const;

const TAGS = [
  {
    label: site.location,
    href: site.locationWikiUrl,
    bg: "var(--color-mist)",
  },
  {
    label: "Check on Google Maps",
    href: site.mapsUrl,
    bg: "var(--color-magenta-light)",
  },
] as const;

export function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className={`bg-white ${SECTION_PADDING_Y} overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-10">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {trip.aboutCards.map((card, i) => (
              <div key={card.title} className="flex flex-col gap-3 pr-0 md:gap-4 lg:pr-5">
                {/* Fixed-height wrapper absorbs rotation — body below doesn't reflow when the heading straightens. */}
                <div className="flex h-[46px] items-center">
                  <motion.h3
                    className="origin-left text-black"
                    style={cardHeadingStyle}
                    initial={{ rotate: reduced ? 0 : card.rotate }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      delay: reduced ? 0 : 0.1 + i * 0.1,
                      type: "spring",
                      stiffness: 140,
                      damping: 14,
                    }}
                  >
                    {card.title}
                  </motion.h3>
                </div>
                <p className="text-[var(--color-slate)]" style={cardBodyStyle}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-16 mb-10 flex flex-wrap justify-center gap-3">
            {TAGS.map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 underline hover-fade"
                style={{ ...tagBase, backgroundColor: tag.bg }}
              >
                {tag.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <GallerySlider photos={trip.galleryPhotos} />
      </FadeIn>
    </section>
  );
}
