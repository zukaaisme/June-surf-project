// V3 Included / Program section — "Everything you need. Nothing you don't."
// bg: mist (#EEF5FF), 7-icon grid in 2 rows (4+3), magenta-light icon color
// Per Figma 03-program_section

import { FadeIn } from "@/components/ui/fade-in";
import { iconMap } from "@/components/ui/icons";
import { trip } from "@/content/trip";
import type { IncludedIcon } from "@/content/trip";

export function Included() {
  return (
    <section id="included" className="bg-[var(--color-mist)] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Heading */}
        <FadeIn>
          <h2
            className="text-[var(--color-magenta-light)] text-center mb-16 md:mb-20"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Everything you need.
            <br />
            {`Nothing you don't.`}
          </h2>
        </FadeIn>

        {/* Top row — 4 items */}
        <FadeIn delay={0.06}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-12">
            {trip.included.slice(0, 4).map((item) => {
              const Icon = iconMap[item.icon as IncludedIcon];
              return (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon size={36} className="text-[var(--color-magenta-light)] shrink-0" />
                    <h3
                      className="text-[var(--color-slate)]"
                      style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-[var(--color-slate)]"
                    style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4 }}
                  >
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Bottom row — 3 items */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trip.included.slice(4).map((item) => {
              const Icon = iconMap[item.icon as IncludedIcon];
              return (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon size={36} className="text-[var(--color-magenta-light)] shrink-0" />
                    <h3
                      className="text-[var(--color-slate)]"
                      style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-[var(--color-slate)]"
                    style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4 }}
                  >
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
