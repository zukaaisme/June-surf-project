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
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  lineHeight: 1.2,
} as const;

const nameStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
} as const;

const bioStyle = {
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.2,
} as const;

export function Team() {
  return (
    <section id="team" className={`overflow-hidden bg-white ${SECTION_PADDING_Y}`}>
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

        <div className="-mx-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {trip.people.map((person, i) => (
            <FadeIn key={person.id} delay={Math.min(i * 0.05, 0.15)} className="h-full w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink">
              <article className="card-lift flex h-full flex-col bg-[var(--color-mist)] pb-7">
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1/1", background: "rgba(50,55,64,0.08)" }}
                >
                  <Image
                    src={person.photo}
                    alt={`${person.name} — ${person.role.toLowerCase()}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>

                {/* Figma: pt-6 (24), px-6 (24), pb on article = pb-7 (28).
                    Order is name → role → bio. name→role gap 8 (mt-2), name-block→bio gap 24 (mt-6). */}
                <div className="flex flex-1 flex-col items-center px-6 pt-6 text-center">
                  <h3 className="text-[var(--color-slate)]" style={nameStyle}>
                    {person.name}
                  </h3>
                  <p className="mt-2" style={roleStyle}>{person.role}</p>
                  <p className="mt-6 text-[var(--color-slate)]" style={bioStyle}>
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
