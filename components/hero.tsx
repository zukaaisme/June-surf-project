// V3 Hero — full-bleed background photo, centered headline overlay per Figma
// Background: /figma/hero-bg.png (Figma asset fc1525b6)
// Font: Covered By Your Grace handwritten via Google Fonts

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-slate)" }}
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/figma/hero-bg.png"
          alt="Moroccan Atlantic coastline, surf and waves"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Scrim — bumped to /25 for subhead readability (was /10) */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Centered text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh px-5 pt-16 text-center gap-5">
        <FadeIn delay={0.1}>
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-handwritten), 'Covered By Your Grace', cursive",
              fontSize: "clamp(2.75rem, 7.5vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.95,
            }}
          >
            {site.heroHeadline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-white/90 max-w-[420px]"
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {site.heroSubhead}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
