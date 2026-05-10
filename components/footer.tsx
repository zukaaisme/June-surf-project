// V3 Footer — magenta-light brand band per Figma (08-top_bar-fixed_scroll)
// "Surf Morocco" in magenta color, big text, left-aligned
// Additional text: rotated details (collaborator email, date)

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-magenta-light)", minHeight: "230px" }}
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 h-full flex items-center" style={{ minHeight: "230px" }}>
        {/* Big brand name in magenta color */}
        <span
          className="text-[var(--color-magenta)]"
          style={{
            fontFamily: "var(--font-bricolage), sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          {site.footerBrand}
        </span>

        {/* Right side — collaboration text (positioned per Figma) */}
        <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-end gap-2">
          <p
            style={{
              fontFamily: "var(--font-typewriter), serif",
              fontSize: "14px",
              color: "var(--color-slate)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            {site.footerTagline}
          </p>
          <p
            style={{
              fontFamily: "var(--font-typewriter), serif",
              fontSize: "14px",
              color: "var(--color-slate)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              transform: "rotate(1.67deg)",
            }}
          >
            {site.footerEmail}
          </p>
        </div>
      </div>
    </footer>
  );
}
