import { FadeIn } from "@/components/ui/fade-in";
import { GallerySlider } from "@/components/gallery-slider";
import { SECTION_PADDING_Y_ABOUT, captionStyle } from "@/lib/styles";
import { trip } from "@/content/trip";
import { site } from "@/content/site";

// MOBILE_TYPE_EXPERIMENT: heading min and body size come from CSS vars.
const cardHeadingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(var(--fs-h-card), 2.5vw, 2rem)",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: "-0.03em",
} as const;

const cardBodyStyle = {
  fontSize: "var(--fs-body-shrink)",
  fontWeight: 400,
  lineHeight: 1.2,
} as const;

// MOBILE_TYPE_EXPERIMENT: location chips shrink 16 -> 14 on mobile via --fs-body-shrink.
const tagBase = {
  ...captionStyle,
  fontSize: "var(--fs-body-shrink)",
  color: "var(--color-slate)",
  letterSpacing: "0.01em",
} as const;

// All three chips share the same mist (light blue) background per the v3 mockup.
const TAGS = [
  { label: site.location, href: site.locationWikiUrl },
  { label: "Tazuri Surfhouse", href: site.tazuriInstagramUrl },
  { label: "Check on Google Maps", href: site.mapsUrl },
] as const;

export function About() {
  return (
    <section id="about" className={`bg-white ${SECTION_PADDING_Y_ABOUT} overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-10">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-10">
            {trip.aboutCards.map((card) => (
              <div key={card.title} className="flex flex-col items-center gap-4 pr-0 text-center lg:pr-5">
                <h3 className="text-black" style={cardHeadingStyle}>
                  {card.title}
                </h3>
                <p className="mx-auto max-w-[360px] text-[var(--color-slate)]" style={cardBodyStyle}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Slider — outside the max-w-7xl padded container so it bleeds to viewport edges.
          Gap cards→slider = 68px desktop. MOBILE_PADDING_SHRINK: 52 -> 44 mobile. */}
      <FadeIn delay={0.1} className="mt-[44px] md:mt-[68px]">
        <GallerySlider photos={trip.galleryPhotos} />
      </FadeIn>

      {/* Buttons under slider — 36px above (slider→buttons), section pb-36 closes it symmetrically. */}
      <FadeIn delay={0.14}>
        <div className="mt-[36px] flex flex-wrap justify-center gap-3 px-10">
          {TAGS.map((tag) => (
            <a
              key={tag.label}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[var(--color-mist)] px-3 py-2 underline hover-fade"
              style={tagBase}
            >
              {tag.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
