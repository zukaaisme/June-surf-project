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
      {/* Slider 2 — sits between Pricing and ApplyForm.
          Mobile: pb only — pt would double the air above on small screens.
          Desktop: pt + pb so the section reads as its own breathing block (without
          desktop pt the photos butted up against Pricing while the gap below to the
          form looked twice as big — broken asymmetry). */}
      <section className="bg-white pb-20 md:pt-20 md:pb-24">
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
