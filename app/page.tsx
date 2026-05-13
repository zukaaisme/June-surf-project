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
      <ApplyForm />
      {/* Slider 2 — visually a tail of the ApplyForm section, so it carries pb only.
          ApplyForm already provides the gap above (its own pb-24/96). Matching V2 universal. */}
      <section className="bg-white pb-20 md:pb-24">
        <GallerySlider
          id="slider-2"
          photos={trip.slider2Photos}
          orientation="landscape"
        />
      </section>
      <Footer />
    </main>
  );
}
