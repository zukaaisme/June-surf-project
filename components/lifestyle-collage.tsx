// V3 Interstitial photo section — full-bleed beach photo (04-photo_section)
// Uses /figma/interstitial-beach.png (Figma asset cd7096ea = imgPhoto5)
// Height: fixed 780px on desktop, auto/full-bleed on mobile

import Image from "next/image";

export function LifestyleCollage() {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(400px, 55vw, 780px)" }}
      aria-label="Surf camp lifestyle photo — beach and Atlantic"
    >
      <Image
        src="/figma/interstitial-beach.png"
        alt="Surfer on the Atlantic beach, Tamraght Morocco"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    </section>
  );
}
