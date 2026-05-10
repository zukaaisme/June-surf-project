// V3 People — "Who you'll meet" — 4 portrait cards, mist bg
// Per Figma 05-team_section: bg white, cards bg-mist, 308×570px each
// Photos: per-person from content/images.ts via person.photoKey

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { trip } from "@/content/trip";
import { images } from "@/content/images";

export function People() {
  return (
    <section id="people" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Heading */}
        <FadeIn>
          <h2
            className="text-[var(--color-slate)] mb-12 md:mb-16"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}
          >
            {`Who you'll meet`}
          </h2>
        </FadeIn>

        {/* 4 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trip.people.map((person, i) => (
            <FadeIn key={person.id} delay={i * 0.06}>
              <div
                className="flex flex-col overflow-hidden"
                style={{ backgroundColor: "var(--color-mist)" }}
              >
                {/* Photo — 308×308 equivalent, aspect square */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={images[person.photoKey].src}
                    alt={images[person.photoKey].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Dark overlay per Figma */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-7 px-5 py-7">
                  {/* Role + Name + Bio */}
                  <div className="flex flex-col gap-3 text-center">
                    <p
                      className="text-[rgba(50,55,64,0.5)]"
                      style={{
                        fontFamily: "var(--font-typewriter), serif",
                        fontSize: "16px",
                        letterSpacing: "0.01em",
                        textTransform: "uppercase",
                      }}
                    >
                      {person.role}
                    </p>
                    <h3
                      className="text-[var(--color-slate)]"
                      style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="text-[var(--color-slate)]"
                      style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4 }}
                    >
                      {person.bio}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div
                    className="w-full"
                    style={{ height: "1px", backgroundColor: "rgba(50,55,64,0.15)" }}
                  />

                  {/* Quote */}
                  <p
                    className="text-[var(--color-slate)] text-center"
                    style={{
                      fontFamily: "var(--font-typewriter), serif",
                      fontSize: "16px",
                      lineHeight: 1.4,
                      letterSpacing: "0.01em",
                    }}
                  >
                    &ldquo;{person.quote}&rdquo;
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
