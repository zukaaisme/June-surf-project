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
          pt only (MOBILE_PADDING_SHRINK: pt-14 mobile = 56, pt-20 desktop = 80). No pb —
          ApplyForm's own pt provides the gap below. */}
      <section className="bg-white pt-14 md:pt-20">
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
