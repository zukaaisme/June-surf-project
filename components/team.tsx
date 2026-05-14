import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { SECTION_PADDING_Y, sectionHeadingStyle, sectionSubheadStyle } from "@/lib/styles";
import { trip } from "@/content/trip";

const roleStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "12px",
  color: "rgba(50,55,64,0.5)",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  lineHeight: 1.2,
} as const;

// MOBILE_TYPE_EXPERIMENT: --fs-name = 28 desktop, 26 mobile.
const nameStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "var(--fs-name)",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
} as const;

// fontSize lives in className (`text-[14px] md:text-[16px]`) so it can vary by breakpoint.
// whiteSpace is also className-based (`whitespace-normal md:whitespace-pre-line`) so the
// \n line breaks in Aymen's bio fire ONLY on desktop. On mobile the same string wraps
// naturally — narrow column shouldn't be forced into the desktop break points.
const bioStyle = {
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
    <article className={`card-lift flex flex-col bg-[var(--color-mist)] pb-7 md:pb-8 ${className}`}>
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

      {/* Desktop spec (operator-supplied, measured from photo bottom):
            24px → role → 4px → name → 16px → bio → 28px to card bottom
          Implementation:
            • content div pt-6 (24)        → photo → role gap
            • md:mt-1 on name (4)          → role → name gap
            • mt-4 on bio (16)             → name → bio gap
            • article pb-7 (28)            → bio  → card bottom
            • md:justify-start             → desktop top-aligns to honour those exact gaps
          Mobile keeps justify-center + pt-7 (28 == pb-7) so the name+bio block sits
          centred between photo bottom and card bottom while the role is display:none.
          Mobile px-5 / desktop md:px-6 as before. */}
      <div className="flex flex-1 flex-col items-center justify-center px-5 pt-7 text-center md:justify-start md:px-6 md:pt-6">
        {/* Role: hidden on mobile, first on desktop. */}
        <p className="hidden md:block" style={roleStyle}>{person.role}</p>
        <h3 className="text-[var(--color-slate)] md:mt-1" style={nameStyle}>
          {person.name}
        </h3>
        <p
          className="mt-4 whitespace-normal text-[14px] text-[var(--color-slate)] md:whitespace-pre-line md:text-[16px]"
          style={bioStyle}
        >
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
          <div className="mx-auto mb-10 flex max-w-[640px] flex-col items-center gap-4 text-center md:mb-16">
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
              // ~0.7 of the previous w-[78vw] max-w-[340px]: cards no longer dominate the
              // mobile screen vertically, peek of the next card grows accordingly.
              className="w-[55vw] max-w-[240px] shrink-0 snap-start"
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
