import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { EmotionalIntro } from "@/components/emotional-intro";
import { About } from "@/components/about";
import { LifestyleCollage } from "@/components/lifestyle-collage";
import { Included } from "@/components/included";
import { People } from "@/components/people";
import { Accommodation } from "@/components/accommodation";
import { Pricing } from "@/components/pricing";
import { ApplyForm } from "@/components/apply-form";
import { Footer } from "@/components/footer";

// Section order:
// 01 Nav (fixed)
// 02 Hero
// 03 EmotionalIntro — manifesto, dark bg
// 04 About — what you actually do there
// 05 LifestyleCollage — film-strip candid moments
// 06 Included — what's in every tier
// 07 People — who you'll meet
// 08 Accommodation — the house
// 09 Pricing
// 10 ApplyForm
// 11 Footer

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <EmotionalIntro />
      <About />
      <LifestyleCollage />
      <Included />
      <People />
      <Accommodation />
      <Pricing />
      <ApplyForm />
      <Footer />
    </main>
  );
}
