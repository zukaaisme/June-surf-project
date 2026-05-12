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
          ApplyForm already provides the gap above (its own pb-72). Adding a pt here
          would double the spacing and leave a huge dead zone above the photos. */}
      <section className="bg-white pb-14 md:pb-[72px]">
        <GallerySlider id="slider-2" photos={trip.slider2Photos} />
      </section>
      <Footer />
    </main>
  );
}
