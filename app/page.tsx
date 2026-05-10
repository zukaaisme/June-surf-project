import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { About } from "@/components/about";
import { LifestyleCollage } from "@/components/lifestyle-collage";
import { Included } from "@/components/included";
import { People } from "@/components/people";
import { Accommodation } from "@/components/accommodation";
import { Pricing } from "@/components/pricing";
import { ApplyForm } from "@/components/apply-form";

// V2 section order — 10 → 9 sections (Apply + Footer merged into one closing block)
//
// 01 Hero          [Open]      paper      min-h-svh, 5/7 grid, one photo
// 02 Manifesto     [Dark]      belacan    3 centered lines, py-48
// 03 About         [Breathing] cream      7/5 grid, one photo, no inset overlay
// 04 Lifestyle     [Dense]     paper      full-bleed 4-col photo grid
// 05 Included      [Dense]     paper      3×3 grid, 7+2 cells
// 06 People        [Dominant]  belacan    4 equal cards col-span-3, py-48
// 07 Accommodation [Dark]      ink        7/5 grid, one 3/2 photo
// 08 Pricing       [Dense]     palm       3 tier cards, no recap list
// 09 Apply+Footer  [Breathing] paper→ink  5/7 grid, vertical contacts, ink band tail

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Manifesto />
      <About />
      <LifestyleCollage />
      <Included />
      <People />
      <Accommodation />
      <Pricing />
      <ApplyForm />
    </main>
  );
}
