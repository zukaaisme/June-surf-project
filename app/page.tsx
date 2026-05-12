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
      {/* Slider 2 — its own section, same 56/72 rhythm as everything else. Uses trip.slider2Photos so the photos can diverge from slider 1 later. */}
      <section className="bg-white pt-10 pb-14 md:pt-[56px] md:pb-[72px]">
        <GallerySlider id="slider-2" photos={trip.slider2Photos} />
      </section>
      <Footer />
    </main>
  );
}
