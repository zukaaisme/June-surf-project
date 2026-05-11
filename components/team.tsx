import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { SECTION_PADDING_Y } from "@/lib/styles";
import { trip } from "@/content/trip";

const headingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
  fontWeight: 600,
  lineHeight: 0.95,
  letterSpacing: "-0.02em",
} as const;

const subheadStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: 1.2,
  whiteSpace: "pre-wrap",
} as const;

const roleStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "14px",
  color: "rgba(50,55,64,0.5)",
  letterSpacing: "0.01em",
  lineHeight: 1.2,
} as const;

const nameStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: 1.2,
} as const;

const bioStyle = {
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.2,
} as const;

export function Team() {
  return (
    <section id="team" className={`bg-white ${SECTION_PADDING_Y} overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-10">
        <FadeIn>
          <div className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-4 text-center md:mb-16">
            <h2 className="text-[var(--color-slate)]" style={headingStyle}>
              {trip.teamHeadline}
            </h2>
            <p className="text-[var(--color-slate)]" style={subheadStyle}>
              {trip.teamSubhead}
              <br />
              {trip.teamSubheadAttribution}
            </p>
          </div>
        </FadeIn>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trip.people.map((person, i) => (
            <FadeIn key={person.id} delay={Math.min(i * 0.05, 0.15)} className="h-full">
              <article className="flex h-full flex-col bg-[var(--color-mist)] pb-7 transition-transform duration-300 ease-out hover:-translate-y-3">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1/1", background: "rgba(50,55,64,0.1)" }}
                >
                  <Image
                    src={person.photo}
                    alt={`${person.name} — ${person.role.toLowerCase()}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                  />
                </div>

                <div className="flex flex-1 flex-col items-center gap-2 px-6 pt-7 text-center">
                  <p style={roleStyle}>{person.role}</p>
                  <h3 className="text-[var(--color-slate)]" style={nameStyle}>
                    {person.name}
                  </h3>
                  <p className="text-[var(--color-slate)]" style={bioStyle}>
                    {person.bio}
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
