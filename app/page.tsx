import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Program } from "@/components/program";
// import { PhotoSection } from "@/components/photo-section"; // hidden — see BACKLOG.md (2026-05-11)
import { Team } from "@/components/team";
import { Pricing } from "@/components/pricing";
import { ApplyForm } from "@/components/apply-form";
import { GallerySlider } from "@/components/gallery-slider";
import { Footer } from "@/components/footer";
import { trip } from "@/content/trip";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Program />
      {/* <PhotoSection /> */}
      <Team />
      <Pricing />
      {/* Slider 2 — sits between Pricing and ApplyForm. Symmetric paddings on both axes.
          Math (mobile):  80 (Pricing pb) + 48 (slider pt) ≈ 64 (slider pb) + 64 (Apply pt) = 128px
          Math (desktop): 96 + 80 = 96 + 80 = 176px
          The mobile pair is intentionally a touch tighter than the universal 144/144 since
          the slider has no headline — too much air around bare photos reads as empty. */}
      <section className="bg-white pt-12 pb-16 md:pt-20 md:pb-24">
        <GallerySlider
          id="slider-2"
          photos={trip.slider2Photos}
          orientation="landscape"
        />
      </section>
      <ApplyForm />
      <Footer />
    </main>
  );
}
