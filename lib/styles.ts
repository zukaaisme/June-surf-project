import type { CSSProperties } from "react";

// ─────────────────────────────────────────
// Section vertical padding — versioned for fast rollback.
//
// ROLLBACK to V1:
//   $ git revert <THIS_COMMIT_HASH>     ← single command, reverts everything in one go.
//
// OR manually: swap the exports back to the V1 pair below and restore the inline
// overrides on Program + Apply (they used to carry their own +8 boosts).
//
// V1 — values before the unification pass:
//   export const SECTION_PADDING_Y       = "pt-14 pb-[72px] md:pt-[72px] md:pb-[92px]";  // 56/72 mobile, 72/92 desktop
//   export const SECTION_PADDING_Y_ABOUT = "pt-14 pb-14 md:pt-[72px] md:pb-[72px]";       // 56/56 mobile, 72/72 desktop
//   + Program had inline pt-14 pb-[80px] md:pt-[72px] md:pb-[100px]  (its own +8 pb)
//   + Apply   had inline pt-16 pb-[72px] md:pt-[80px] md:pb-[92px]   (its own +8 pt)
//
// V2 — current. Unified to ONE universal pair + ONE About exception. Multiples of 4.
//   Direction: slightly bigger. Program/Apply overrides folded into the universal.
// ─────────────────────────────────────────

// Universal section padding — applies to every full-width section.
// Mobile: 64 top / 80 bottom. Desktop: 80 top / 96 bottom.
export const SECTION_PADDING_Y = "pt-16 pb-20 md:pt-20 md:pb-24";

// About is the only exception: bottom padding equals top padding (no extra bottom airspace)
// so the gap from the chips row to the next section visually mirrors the gap above the
// next section's heading.
export const SECTION_PADDING_Y_ABOUT = "pt-16 pb-16 md:pt-20 md:pb-20";

// Drop shadows for text laid over photos/video (hero) and over photos (pricing price chip).
// Opacity 0.32 (was 0.25) — slightly stronger so the white copy stays legible against bright
// frames of the hero video.
export const TEXT_SHADOW_HERO = "0 1px 16px rgba(0,0,0,0.32)";
export const TEXT_SHADOW_HERO_SUB = "0 1px 16px rgba(0,0,0,0.32)";
export const TEXT_SHADOW_OVER_PHOTO = "0 1px 8px rgba(0,0,0,0.1)";

// Shared section heading + subhead recipe — Program, Team, Pricing all use this.
// Colour is per-section via className (slate / magenta-light). Apply Form uses its own
// heading recipe (smaller clamp min, tighter line-height) so it isn't reused there.
// font-size clamp lower comes from --fs-h-section (MOBILE_TYPE_EXPERIMENT) so mobile gets
// the shrunk value and desktop stays on 2.25rem.
export const sectionHeadingStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "clamp(var(--fs-h-section), 5vw, 3.5rem)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
} as const satisfies CSSProperties;

// Subhead recipe — every section that has a subhead under the headline uses this.
// Each section applies its own `maxWidth` inline (the readable measure differs by content).
// font-size comes from --fs-body-shrink (MOBILE_TYPE_EXPERIMENT).
export const sectionSubheadStyle = {
  fontFamily: "var(--font-bricolage), sans-serif",
  fontSize: "var(--fs-body-shrink)",
  fontWeight: 400,
  lineHeight: 1.4,
} as const satisfies CSSProperties;

// Heading→subhead gap is `gap-4` (16px) everywhere — kept inline at the JSX level via
// the Tailwind utility, since centring/orientation differs by section.

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
