import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { SECTION_PADDING_Y, sectionHeadingStyle, sectionSubheadStyle } from "@/lib/styles";
import { trip } from "@/content/trip";

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

// Plain card markup — no FadeIn here. The parent decides whether to animate per-card
// (desktop grid: stagger) or once-for-the-whole-row (mobile carousel). Wrapping every
// individual card in FadeIn was hiding the peek of card 2 on mobile: with whileInView's
// `margin: "-60px"` the peek didn't qualify as "in viewport" yet, so card 2 stayed
// invisible until the user scrolled.
function TeamCard({ person, className = "" }: { person: Person; className?: string }) {
  return (
    <article className={`card-lift flex flex-col bg-[var(--color-mist)] pb-7 ${className}`}>
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
          Order is name → role → bio. name→role gap 8 (mt-2), name-block→bio gap 24 (mt-6).
          flex-1 + justify-center vertically centres the text block inside whatever height the
          equal-row machinery gives us, so short-bio cards don't look top-stacked. */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-6 text-center">
        <h3 className="text-[var(--color-slate)]" style={nameStyle}>
          {person.name}
        </h3>
        <p className="mt-2" style={roleStyle}>{person.role}</p>
        <p className="mt-6 text-[var(--color-slate)]" style={bioStyle}>
          {person.bio}
        </p>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className={`overflow-hidden bg-white ${SECTION_PADDING_Y}`}>
      {/* Heading inside the grid */}
      <div className="mx-auto max-w-7xl px-10">
        <FadeIn>
          <div className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-4 text-center md:mb-16">
            <h2 className="text-[var(--color-slate)]" style={sectionHeadingStyle}>
              {trip.teamHeadline}
            </h2>
            <p className="text-[var(--color-slate)]" style={sectionSubheadStyle}>
              {trip.teamSubhead}
              <br />
              {trip.teamSubheadAttribution}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Mobile carousel — wrapped in ONE FadeIn so the whole row animates as a unit.
          Per-card FadeIn was hiding the peek of card 2 (whileInView didn't trigger until
          you scrolled, because peek < margin "-60px"). One row-level FadeIn fires once the
          row enters the viewport at all and reveals every card simultaneously. */}
      <FadeIn className="sm:hidden">
        <div className="flex w-full snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-10 scroll-pl-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {trip.people.map((person) => (
            <TeamCard
              key={person.id}
              person={person}
              className="w-[78vw] max-w-[340px] shrink-0 snap-start"
            />
          ))}
        </div>
      </FadeIn>

      {/* Tablet+ grid — per-card FadeIn keeps the staggered entrance on desktop. */}
      <div className="mx-auto hidden max-w-7xl auto-rows-fr grid-cols-2 gap-4 px-10 sm:grid lg:grid-cols-4">
        {trip.people.map((person, i) => (
          <FadeIn key={person.id} delay={Math.min(i * 0.05, 0.15)} className="flex h-full">
            <TeamCard person={person} className="w-full" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
