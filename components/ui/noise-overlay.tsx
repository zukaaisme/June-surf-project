// Noise texture overlay — multiply-blended on top of a color fill.
// Per operator: apply to every block that has a color background (Program, Pricing, Footer).
// Image: public/figma/program-noise.png (1280×1080 from Figma export).

type Props = {
  opacity?: number;
  className?: string;
};

export function NoiseOverlay({ opacity = 0.6, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 mix-blend-multiply ${className ?? ""}`}
      style={{
        opacity,
        backgroundImage: "url('/figma/program-noise.png')",
        backgroundSize: "1280px 1080px",
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
