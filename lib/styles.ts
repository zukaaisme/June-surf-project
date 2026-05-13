import type { CSSProperties } from "react";

// Section vertical padding — every full-width section.
// House rule: blocks sit flush against each other, with 64px top / 84px bottom inside each block on desktop.
// Mobile scales down a touch to keep the rhythm visible without burning screen real estate.
export const SECTION_PADDING_Y = "pt-12 pb-16 md:pt-[64px] md:pb-[84px]";

// Exception: About ends with a buttons row tucked 36px under the slider — so the section also
// closes with 36px instead of 84px, keeping slider→buttons and buttons→next-section symmetrical.
export const SECTION_PADDING_Y_ABOUT = "pt-12 pb-9 md:pt-[64px] md:pb-[36px]";

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
