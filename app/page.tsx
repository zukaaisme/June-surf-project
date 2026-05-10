import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Included } from "@/components/included";
import { LifestyleCollage } from "@/components/lifestyle-collage";
import { People } from "@/components/people";
import { Pricing } from "@/components/pricing";
import { ApplyForm } from "@/components/apply-form";
import { Footer } from "@/components/footer";

// V3 section order (per Figma):
//
// Nav (fixed)
// 01 Hero          — full-bleed bg photo, headline overlay
// 02 About         — 4-col "Not a resort" cards + photo strip
// 03 Included      — mist bg, 7-icon grid
// 04 Interstitial  — full-bleed beach photo
// 05 People        — 4 portrait cards
// 06 Pricing       — bone bg, 3 tier cards
// 07 Apply         — form + contact chips
// 08 Footer        — magenta-light brand band

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Included />
      <LifestyleCollage />
      <People />
      <Pricing />
      <ApplyForm />
      <Footer />
    </main>
  );
}
