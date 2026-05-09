import { trip } from "@/content/trip";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";

export function Pricing() {
  const { pricingTiers, pricingMeta, included, dates } = trip;

  return (
    <Section id="pricing" bg="palm">
      <FadeIn>
        <MonoTag className="block mb-8 text-[var(--color-cream)] opacity-60">
          08 / 09 &mdash; Pricing
        </MonoTag>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 className="font-display text-h1 text-[var(--color-paper)] mb-6">
          Choose your space.
        </h2>
      </FadeIn>

      {/* Included summary — shared across all tiers */}
      <FadeIn delay={0.1}>
        <div className="mb-12 max-w-2xl">
          <MonoTag className="block mb-4 text-[var(--color-cream)] opacity-60">
            All tiers include
          </MonoTag>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1">
            {included.map((item) => (
              <li key={item.index} className="flex gap-2 items-baseline">
                <MonoTag className="text-[var(--color-cream)] opacity-65 flex-shrink-0">
                  {item.index}
                </MonoTag>
                <span className="font-mono-accent text-[var(--color-paper)] opacity-70 normal-case">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <div className="h-px bg-[color-mix(in_srgb,var(--color-paper)_15%,transparent)] mb-12" />

      {/* Three tier cards — all cream on palm green field. Featured gets cinnamon left accent. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {pricingTiers.map((tier, i) => (
          <FadeIn key={tier.id} delay={0.1 + i * 0.07}>
            <div
              className="card flex flex-col h-full p-8 md:p-10"
              style={{
                background: "var(--color-cream)",
                borderColor: "color-mix(in srgb, var(--color-ink) 20%, transparent)",
                borderTop: tier.featured
                  ? "4px solid var(--color-cinnamon)"
                  : undefined,
              }}
            >
              {/* Featured label — sticks above card visually */}
              <div className="mb-6 h-4">
                {tier.featured && (
                  <MonoTag className="text-[var(--color-cinnamon)] opacity-80">
                    most chosen
                  </MonoTag>
                )}
              </div>

              {/* Price */}
              <p className="font-display text-h1 text-[var(--color-ink)] leading-none mb-2">
                &euro;{tier.price.toLocaleString("en-US")}
              </p>
              <MonoTag className="block mb-8 text-[var(--color-ink)] opacity-55">
                per person
              </MonoTag>

              {/* Tier name */}
              <p className="font-display text-h2 text-[var(--color-ink)] mb-3">
                {tier.name}
              </p>

              {/* Accommodation */}
              <p className="font-mono-accent text-[var(--color-ink)] opacity-65 mb-6 normal-case">
                {tier.accommodation}
              </p>

              {/* Description */}
              <p className="text-[var(--color-ink)] opacity-75 mb-10 flex-1">
                {tier.description}
              </p>

              {/* CTA — primary coral on cream */}
              <a href="#apply" className="btn btn-primary self-start">
                Apply
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Dates + meta */}
      <FadeIn delay={0.35}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
          <div>
            <MonoTag className="block mb-3 text-[var(--color-cream)] opacity-60">
              Available waves
            </MonoTag>
            <ul className="space-y-1">
              {dates.map((d) => (
                <li
                  key={d.label}
                  className="font-mono-accent text-[var(--color-paper)] opacity-65 normal-case"
                >
                  {d.label} &mdash; {d.range}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-1">
            <p className="font-mono-accent text-[var(--color-cream)] opacity-55 normal-case">
              {pricingMeta.spots}
            </p>
            <p className="font-mono-accent text-[var(--color-cream)] opacity-55 normal-case">
              {pricingMeta.deposit}
            </p>
            <p className="font-mono-accent text-[var(--color-cream)] opacity-45 normal-case">
              {pricingMeta.deposit_note}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
