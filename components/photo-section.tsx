import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";

export function PhotoSection() {
  return (
    <section
      id="house"
      aria-label="Taghazout — Atlantic coastline"
      className="relative w-full overflow-hidden bg-[var(--color-paper)]"
      style={{ height: "clamp(420px, 56vw, 800px)" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(50,55,64,0.1)]" />
      <Parallax range={14} className="absolute inset-0">
        <div className="absolute -inset-y-[8%] inset-x-0">
          <Image
            src="/figma/photo-section.png"
            alt="Taghazout fishing village and the Atlantic"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Parallax>
    </section>
  );
}
