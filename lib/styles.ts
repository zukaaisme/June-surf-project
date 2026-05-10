import type { CSSProperties } from "react";

// Section vertical padding — used by every full-width section.
// Mirrors the Tailwind classes that were duplicated across 5 files.
export const SECTION_PADDING_Y = "py-16 md:py-20 lg:py-24";

// Drop shadows for text laid over photos/video (hero) and over photos (pricing price chip).
export const TEXT_SHADOW_HERO = "0 1px 12px rgba(0,0,0,0.3)";
export const TEXT_SHADOW_HERO_SUB = "0 1px 12px rgba(0,0,0,0.3)";
export const TEXT_SHADOW_OVER_PHOTO = "0 1px 8px rgba(0,0,0,0.1)";

// Bricolage Grotesque — display family used for every section heading.
export const headingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
} as const satisfies CSSProperties;

// Special Elite — typewriter family used for captions, labels, tag chips.
export const captionStyle = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "14px",
  letterSpacing: "0.01em",
} as const satisfies CSSProperties;

// Uppercase caption (chip label, footer signature) — wider tracking.
export const captionUppercase = {
  fontFamily: "var(--font-typewriter), serif",
  fontSize: "14px",
  letterSpacing: "0.07em",
  textTransform: "uppercase",
} as const satisfies CSSProperties;
