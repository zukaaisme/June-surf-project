"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Parallax } from "@/components/ui/parallax";
import { TEXT_SHADOW_HERO, TEXT_SHADOW_HERO_SUB } from "@/lib/styles";
import { site } from "@/content/site";

export function Hero() {
  // Poster overlay fades out when playback actually starts — avoids the browser's instant
  // swap from poster to first decoded frame.
  const [posterVisible, setPosterVisible] = useState(true);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[var(--color-slate)]"
      style={{
        height: "min(800px, calc(100svh - 64px))",
        minHeight: "560px",
      }}
    >
      <Parallax range={20} className="absolute inset-x-0 top-0 -bottom-[10%]">
        <video
          src="/figma/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onPlaying={() => setPosterVisible(false)}
        />
        <img
          src="/figma/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${posterVisible ? "opacity-100" : "opacity-0"}`}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(50,55,64,0.1)]" />
      </Parallax>

      <div className="relative z-10 flex h-full flex-col items-center px-10 pt-[100px] pb-14 text-center">
        <FadeIn delay={0.1} className="w-full">
          <h1 className="sr-only">{site.heroHeadline}</h1>
          <img
            src="/figma/header-mobile.svg"
            alt=""
            aria-hidden="true"
            className="block w-full md:hidden"
            style={{ filter: `drop-shadow(${TEXT_SHADOW_HERO})` }}
          />
          <img
            src="/figma/header-desktop.svg"
            alt=""
            aria-hidden="true"
            className="mx-auto hidden w-full max-w-[1000px] md:block"
            style={{ filter: `drop-shadow(${TEXT_SHADOW_HERO})` }}
          />
        </FadeIn>

        <div aria-hidden="true" className="flex-1" />

        <FadeIn delay={0.2}>
          <p
            className="mx-auto text-[16px] text-white"
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontWeight: 500,
              lineHeight: 1.2,
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
