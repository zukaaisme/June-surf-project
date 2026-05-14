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
          pt only (universal V2 values: pt-16 mobile / pt-20 desktop). No pb — ApplyForm's
          own pt provides the gap below, so we avoid stacking two pbs+pts and ending up
          with a "double" empty band beneath the photos. Above the photos lands at the
          system gap (144 mobile / 176 desktop, same as every other section transition). */}
      <section className="bg-white pt-16 md:pt-20">
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
