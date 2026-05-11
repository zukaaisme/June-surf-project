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
      {/* Slider 2 — second photo cluster after the form. Same bottom spacing as ApplyForm so the gap to Footer matches the gap from form to photos. Uses its own data array (trip.slider2Photos) so the photos can diverge later. */}
      <section className="bg-white pb-16 md:pb-20 lg:pb-24">
        <GallerySlider id="slider-2" photos={trip.slider2Photos} />
      </section>
      <Footer />
    </main>
  );
}
