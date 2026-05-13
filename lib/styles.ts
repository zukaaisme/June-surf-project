import type { CSSProperties } from "react";

// Section vertical padding — every full-width section.
// House rule: blocks sit flush against each other, with 72px top / 92px bottom inside each block on desktop.
// Mobile is 56/72 — same proportions, scaled down.
export const SECTION_PADDING_Y = "pt-14 pb-[72px] md:pt-[72px] md:pb-[92px]";

// About is no longer a hard exception — its bottom padding now matches the top padding
// (72 desktop / 56 mobile) so the gap below the buttons row visually mirrors the gap
// above the next section's heading.
export const SECTION_PADDING_Y_ABOUT = "pt-14 pb-14 md:pt-[72px] md:pb-[72px]";

// Drop shadows for text laid over photos/video (hero) and over photos (pricing price chip).
export const TEXT_SHADOW_HERO = "0 1px 16px rgba(0,0,0,0.25)";
export const TEXT_SHADOW_HERO_SUB = "0 1px 16px rgba(0,0,0,0.25)";
export const TEXT_SHADOW_OVER_PHOTO = "0 1px 8px rgba(0,0,0,0.1)";

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
