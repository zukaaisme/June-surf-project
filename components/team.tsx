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

type Person = (typeof trip.people)[number];

function TeamCard({ person, index, extraClassName = "" }: { person: Person; index: number; extraClassName?: string }) {
  return (
    <FadeIn
      delay={Math.min(index * 0.05, 0.15)}
      className={`flex ${extraClassName}`}
    >
      <article className="card-lift flex w-full flex-col bg-[var(--color-mist)] pb-7">
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
  );
}

export function Team() {
  return (
    <section id="team" className={`overflow-hidden bg-white ${SECTION_PADDING_Y}`}>
      {/* Heading inside the grid */}
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
      </div>

      {/* Mobile carousel — full-width scroller, first card starts at the grid left edge
          (px-10), identical pattern to the photo slider. items-stretch (flex default)
          gives equal heights regardless of bio length. */}
      <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
        {trip.people.map((person, i) => (
          <TeamCard
            key={person.id}
            person={person}
            index={i}
            extraClassName="w-[78vw] max-w-[340px] shrink-0 snap-start"
          />
        ))}
      </div>

      {/* Tablet+ grid — auto-rows-fr equalises heights inside max-w-7xl. */}
      <div className="mx-auto hidden max-w-7xl auto-rows-fr grid-cols-2 gap-4 px-10 sm:grid lg:grid-cols-4">
        {trip.people.map((person, i) => (
          <TeamCard key={person.id} person={person} index={i} />
        ))}
      </div>
    </section>
  );
}
