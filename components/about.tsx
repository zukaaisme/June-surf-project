// V3 About — 4-column "Not a resort / Not a checklist" cards + location tags + photo strip
// bg: white, per Figma 02-about_section

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { trip } from "@/content/trip";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* 4-column text cards */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {trip.aboutCards.map((card, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3
                  className="text-[var(--color-slate)]"
                  style={{ fontSize: "32px", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[var(--color-slate)]"
                  style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Location tags */}
        <FadeIn delay={0.06}>
          <div className="flex flex-wrap gap-2 mt-16 mb-10 justify-center">
            <span
              className="inline-flex items-center px-2 py-1 font-mono-accent text-white"
              style={{ backgroundColor: "var(--color-slate)", border: "2px solid var(--color-slate)" }}
            >
              {site.location}
            </span>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-1 font-mono-accent underline hover-fade"
              style={{
                backgroundColor: "var(--color-magenta-light)",
                border: "2px solid var(--color-magenta-light)",
                color: "var(--color-slate)",
              }}
            >
              Check on Google Maps
            </a>
            <span
              className="inline-flex items-center px-2 py-1 font-mono-accent"
              style={{
                backgroundColor: "rgba(255,176,255,0.5)",
                border: "2px solid var(--color-pink)",
                color: "var(--color-slate)",
              }}
            >
              More Photos
            </span>
          </div>
        </FadeIn>

        {/* Photo strip — 6 cells: 5 photos + 1 dark slate void cell (Figma contact-sheet rhythm) */}
        <FadeIn delay={0.1}>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-6 md:overflow-visible">
            {/* Cell 0 */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto"
              style={{ width: "280px", height: "396px", border: "0.74px solid rgba(50,55,64,0.1)" }}
            >
              <Image
                src="/figma/hero-bg.png"
                alt="Surf camp Morocco — waves and coastline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 17vw"
              />
            </div>
            {/* Cell 1 — dark slate void (Figma negative-space tile) */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto bg-[var(--color-slate)]"
              style={{ width: "280px", height: "396px" }}
              aria-hidden="true"
            />
            {/* Cell 2 */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto"
              style={{ width: "280px", height: "396px", border: "0.74px solid rgba(50,55,64,0.1)" }}
            >
              <Image
                src="/figma/gallery-3.png"
                alt="Morocco landscape near Tamraght"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 17vw"
              />
            </div>
            {/* Cell 3 */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto"
              style={{ width: "280px", height: "396px", border: "0.74px solid rgba(50,55,64,0.1)" }}
            >
              <Image
                src="/figma/gallery-2.png"
                alt="Atlantic shore, Tamraght"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 17vw"
              />
            </div>
            {/* Cell 4 */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto"
              style={{ width: "280px", height: "396px", border: "0.74px solid rgba(50,55,64,0.1)" }}
            >
              <Image
                src="/figma/gallery-4.png"
                alt="Tamraght fishing village"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 17vw"
              />
            </div>
            {/* Cell 5 */}
            <div
              className="relative shrink-0 snap-start overflow-hidden md:w-auto"
              style={{ width: "280px", height: "396px", border: "0.74px solid rgba(50,55,64,0.1)" }}
            >
              <Image
                src="/figma/interstitial-beach.png"
                alt="Beach at Tamraght, Morocco"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 17vw"
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
