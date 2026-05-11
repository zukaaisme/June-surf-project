import { FadeIn } from "@/components/ui/fade-in";
import { Parallax } from "@/components/ui/parallax";
import { TEXT_SHADOW_HERO, TEXT_SHADOW_HERO_SUB } from "@/lib/styles";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[var(--color-slate)]"
      style={{
        height: "min(800px, calc(100svh - 64px))",
        minHeight: "560px",
      }}
    >
      <Parallax range="20%" className="absolute inset-x-0 top-0 -bottom-[10%]">
        <video
          src="/figma/hero-video.mp4"
          poster="/figma/gallery/photo-1.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(50,55,64,0.1)]" />
      </Parallax>

      <div className="relative z-10 flex h-full flex-col items-center px-10 pt-[120px] pb-14 text-center">
        <FadeIn delay={0.1}>
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-handwritten), 'Covered By Your Grace', cursive",
              fontSize: "clamp(2.75rem, 9vw, 6rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              textShadow: TEXT_SHADOW_HERO,
            }}
          >
            {site.heroHeadline}
          </h1>
        </FadeIn>

        <div aria-hidden="true" className="flex-1" />

        <FadeIn delay={0.2}>
          <p
            className="mx-auto text-white"
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.4,
              maxWidth: "634px",
              textShadow: TEXT_SHADOW_HERO_SUB,
            }}
          >
            {site.heroSubhead}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
