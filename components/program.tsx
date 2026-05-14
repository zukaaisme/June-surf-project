import { FadeIn } from "@/components/ui/fade-in";
import { Icon } from "@/components/ui/icons";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { SECTION_PADDING_Y, sectionHeadingStyle } from "@/lib/styles";
import { trip } from "@/content/trip";

// MOBILE_TYPE_EXPERIMENT: item title clamp min + body size come from CSS vars.
const itemTitleStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(var(--fs-h-item), 2vw, 1.75rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.01em",
} as const;

const itemBodyStyle = { fontSize: "var(--fs-body-shrink)", fontWeight: 400, lineHeight: 1.2 } as const;

export function Program() {
  return (
    <section
      id="program"
      // V2: back on the universal SECTION_PADDING_Y. The +8 pb override is gone — the new
      // universal pb (96 desktop / 80 mobile) absorbs the breathing room Program needed.
      className={`relative overflow-hidden bg-[var(--color-mist)] ${SECTION_PADDING_Y}`}
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-7xl px-10">
        <FadeIn>
          <h2 className="mb-12 text-center text-[var(--color-slate)] md:mb-16" style={sectionHeadingStyle}>
            {trip.programHeadline}
            <br />
            {trip.programHeadlineLine2}
          </h2>
        </FadeIn>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:grid-cols-4 lg:gap-y-16">
          {trip.program.map((item, i) => (
            <FadeIn key={item.title} delay={Math.min(i * 0.04, 0.16)}>
              <div className="flex flex-col gap-3 pr-0 lg:pr-6">
                <div className="flex items-center gap-3">
                  <Icon
                    name={item.icon}
                    size={36}
                    className="text-[var(--color-magenta-light)]"
                  />
                  <h3 className="text-[var(--color-slate)]" style={itemTitleStyle}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--color-slate)]" style={itemBodyStyle}>
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
