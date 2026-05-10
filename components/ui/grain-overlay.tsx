// Fixed grain texture — sits above everything, pointer-events: none.
// SVG data URL applied via inline style to avoid PostCSS parse issues in globals.css.

const svgNoise =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E";

export function GrainOverlay() {
  return (
    <div
      className="grain"
      aria-hidden="true"
      style={{ backgroundImage: `url("${svgNoise}")` }}
    />
  );
}
