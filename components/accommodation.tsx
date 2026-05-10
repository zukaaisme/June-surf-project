import Image from "next/image";
import { images } from "@/content/images";
import { trip } from "@/content/trip";
import { MonoTag } from "@/components/ui/marquee-tag";
import { FadeIn } from "@/components/ui/fade-in";
import { Section } from "@/components/ui/section";

// 07 Accommodation — Dark beat / ink bg / 7–5 asymmetric
// V2 diff vs V1:
//   - bg: cream → ink
//   - Triptych (3 photos) → ONE photo, aspect 3/2, in cols 1–7
//   - Text right (cols 8–12), body ≤ 50ch
//   - The other 2 accommodation photos (accomTerracotta, accomRooftop) are not rendered here.
//     They remain in images.ts for potential Lifestyle use.

export function Accommodation() {
  return (
    <Section id="accommodation" bg="ink" beat="breathing">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* LEFT — one photo cols 1–7, aspect 3/2 */}
        <FadeIn className="lg:col-span-7">
          <div
            className="photo relative w-full overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={images.accomBlueDoor.src}
              alt={images.accomBlueDoor.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* RIGHT — index, h1, body cols 8–12 */}
        <div className="lg:col-span-5">
          <FadeIn delay={0.1}>
            <MonoTag className="block mb-8 text-[var(--color-cream)] opacity-60">
              07 / 09 &mdash; The House
            </MonoTag>
          </FadeIn>

          <FadeIn delay={0.18}>
            <h2 className="font-display text-h1 text-[var(--color-paper)] mb-6">
              An old house, redone over ten years.
            </h2>
          </FadeIn>

          <FadeIn delay={0.26}>
            <p
              className="text-[var(--color-paper)] opacity-70 leading-relaxed"
              style={{ maxWidth: "50ch" }}
            >
              Whitewashed walls, blue doors, terracotta floors. Six rooms, two
              terraces, a rooftop. In the evenings, everyone seems to end up
              there without planning to.
            </p>
          </FadeIn>

          <FadeIn delay={0.34}>
            <MonoTag className="block mt-8 text-[var(--color-paper)] opacity-50">
              {trip.house.rooms} ROOMS &middot; {trip.house.terraces} TERRACES &middot;{" "}
              {trip.house.features.map((f) => f.toUpperCase()).join(" · ")}
            </MonoTag>
          </FadeIn>
        </div>

      </div>

    </Section>
  );
}
