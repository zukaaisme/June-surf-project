import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { SECTION_PADDING_Y, TEXT_SHADOW_OVER_PHOTO } from "@/lib/styles";
import { trip } from "@/content/trip";

const headingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
} as const;

const priceStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
  fontWeight: 600,
  lineHeight: 1,
  textShadow: TEXT_SHADOW_OVER_PHOTO,
} as const;

const perUnitStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: 1.4,
  textShadow: TEXT_SHADOW_OVER_PHOTO,
  marginTop: "4px",
} as const;

const tierNameStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: 1.2,
} as const;

const accommodationStyle = { fontSize: "16px", fontWeight: 400, lineHeight: 1.4 } as const;

const descriptionStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "16px",
  lineHeight: 1.4,
  letterSpacing: "0.01em",
} as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      className={`relative bg-[var(--color-bone)] ${SECTION_PADDING_Y} overflow-hidden`}
    >
      <NoiseOverlay />
      <div className="relative mx-auto max-w-7xl px-10">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="mb-4 text-[var(--color-magenta-light)]" style={headingStyle}>
              {trip.pricingHeadline}
            </h2>
            <p
              className="mx-auto text-[var(--color-slate)]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4, maxWidth: "632px" }}
            >
              {trip.pricingSubhead}
            </p>
          </div>
        </FadeIn>

        <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {trip.pricingTiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={Math.min(i * 0.06, 0.12)} className="h-full">
              <article className="card-lift flex h-full flex-col bg-white pb-9">
                <div
                  className="relative overflow-hidden"
                  style={{ height: "280px", background: "rgba(50,55,64,0.1)" }}
                >
                  <Image
                    src={tier.photo}
                    alt={`${tier.name} — accommodation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-[rgba(50,55,64,0.2)]" />
                  <div className="absolute bottom-6 left-6 flex flex-col items-start text-white">
                    <span style={priceStyle}>{tier.priceDisplay}</span>
                    <span style={perUnitStyle}>{tier.perUnit}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-center gap-2 px-9 py-7 text-center text-[var(--color-slate)]">
                  <h3 style={tierNameStyle}>{tier.name}</h3>
                  <p style={accommodationStyle}>{tier.accommodation}</p>
                </div>

                <div className="flex flex-col gap-8">
                  <div
                    aria-hidden="true"
                    className="w-full"
                    style={{ height: "1px", backgroundColor: "rgba(50,55,64,0.15)" }}
                  />
                  <p className="px-9 text-center text-[var(--color-slate)]" style={descriptionStyle}>
                    {tier.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
