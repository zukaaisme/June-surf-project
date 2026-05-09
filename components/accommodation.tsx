import Image from "next/image";
import { images } from "@/content/images";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

// Accommodation: 3-photo grid above copy.
// Captions describe what's IN the photo, not where the photo sits in the grid.
// Caption = what you'd write if you saw the photo alone (acceptance test per spec).

const housePhotos = [
  {
    key: "accomBlueDoor" as const,
    caption: "BLUE DOOR",
    desktopSpan: "md:col-span-5",
    aspectRatio: "4/5",
  },
  {
    key: "accomTerracotta" as const,
    caption: "TERRACOTTA",
    desktopSpan: "md:col-span-4",
    aspectRatio: "1/1",
  },
  {
    key: "accomRooftop" as const,
    caption: "ROOFTOP",
    desktopSpan: "md:col-span-3",
    aspectRatio: "3/4",
  },
] as const;

export function Accommodation() {
  return (
    <Section id="accommodation" bg="cream">
      <FadeIn>
        <MonoTag className="block mb-8">07 / 09 &mdash; The House</MonoTag>
      </FadeIn>

      {/* 3-photo collage: col-span 5 / 4 / 3 on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-12">
        {housePhotos.map((photo, i) => {
          const img = images[photo.key];
          return (
            <FadeIn key={photo.key} delay={i * 0.1} className={photo.desktopSpan}>
              {/* position:relative + aspect-ratio on same element = fill safe */}
              <div
                className="photo relative w-full overflow-hidden"
                style={{ aspectRatio: photo.aspectRatio }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 480px"
                  className="object-cover"
                />
              </div>
              <MonoTag className="block mt-2 text-[var(--color-anise)] opacity-60">
                {photo.caption}
              </MonoTag>
            </FadeIn>
          );
        })}
      </div>

      {/* Copy */}
      <FadeIn delay={0.25}>
        <div className="max-w-xl">
          <h2 className="font-display text-h1 text-[var(--color-ink)] mb-6">
            An old house, redone slowly.
          </h2>
          <p className="text-[var(--color-ink)] opacity-70 leading-relaxed">
            Whitewashed walls, blue doors, terracotta floors. A rooftop where
            everyone ends up at sundown. Nothing was built for Instagram.
            Everything was built to be comfortable.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
