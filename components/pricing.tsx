import { trip } from "@/content/trip";
import { Section } from "@/components/ui/section";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";

// 08 Pricing — Dense beat / palm (cardamom) bg / 4-4-4 three tier cards
// V2 diff vs V1:
//   - Dropped the "All tiers include" recap block (duplicated Section 05 Included)
//   - Replaced with a single mono summary line above tier cards
//   - Dates + meta band remains below tier cards (already in section, not standalone)

export function Pricing() {
  const { pricingTiers, pricingMeta, dates } = trip;

  return (
    <Section id="pricing" bg="palm" beat="dense">
      <FadeIn>
        <MonoTag className="block mb-8 text-[var(--color-cream)] opacity-60">
          08 / 09 &mdash; Pricing
        </MonoTag>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 className="font-display text-h1 text-[var(--color-paper)] mb-6">
          Three ways to stay.
        </h2>
      </FadeIn>

      {/* One-line summary replacing the duplicated included list */}
      <FadeIn delay={0.1}>
        <MonoTag className="block mb-12 text-[var(--color-cream)] opacity-55 normal-case">
          The week is the same for everyone. The difference is where you sleep.
        </MonoTag>
      </FadeIn>

      {/* Three tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {pricingTiers.map((tier, i) => (
          <FadeIn key={tier.id} delay={0.15 + i * 0.07}>
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
              {/* Featured label */}
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

              <a href="#apply" className="btn btn-primary self-start">
                Apply
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Dates + meta — 2-col band inside section */}
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
