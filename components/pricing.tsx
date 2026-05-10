// V3 Pricing — "Choose what fits you better" — 3 tier cards, bg bone (#EAEAEA)
// Cards: white bg, photo top (gallery photos), price overlay on photo, text below
// Per Figma 06-pricing_section: 3 cards × 416px wide, photo 280px tall
// Photos: gallery-2 (dorm), gallery-3 (shared), gallery-4 (double)

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { trip } from "@/content/trip";

// Distinct accommodation photos per tier (gallery-2 = dorm, gallery-3 = shared, gallery-4 = double)
const tierPhotos = ["/figma/gallery-2.png", "/figma/gallery-3.png", "/figma/gallery-4.png"];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--color-bone)] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-12">
            <h2
              className="text-[var(--color-magenta-light)] mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              {trip.pricingHeadline}
            </h2>
            <p
              className="text-[var(--color-slate)] mx-auto"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4, maxWidth: "600px" }}
            >
              {trip.pricingSubhead}
            </p>
          </div>
        </FadeIn>

        {/* 3 pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trip.pricingTiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 0.06}>
              <div className="bg-white overflow-hidden flex flex-col">
                {/* Photo with price overlay */}
                <div className="relative overflow-hidden" style={{ height: "280px" }}>
                  <Image
                    src={tierPhotos[i]}
                    alt={tier.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Price overlay — bottom left */}
                  <div className="absolute bottom-6 left-6 flex items-end gap-2 text-white">
                    <span
                      style={{
                        fontFamily: "var(--font-bricolage), sans-serif",
                        fontSize: "72px",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {tier.priceDisplay}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-typewriter), serif",
                        fontSize: "16px",
                        lineHeight: 1.4,
                        paddingBottom: "8px",
                      }}
                    >
                      {tier.perUnit}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-7 px-9 py-8 flex-1">
                  {/* Tier name + accommodation */}
                  <div className="flex flex-col gap-2 text-[var(--color-slate)] text-center">
                    <h3
                      style={{ fontSize: "32px", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em" }}
                    >
                      {tier.name}
                    </h3>
                    <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.4 }}>
                      {tier.accommodation}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full"
                    style={{ height: "1px", backgroundColor: "rgba(50,55,64,0.15)" }}
                  />

                  {/* Description */}
                  <p
                    className="text-[var(--color-slate)] text-center"
                    style={{
                      fontFamily: "var(--font-typewriter), serif",
                      fontSize: "16px",
                      lineHeight: 1.5,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {tier.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
