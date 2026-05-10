# Design review — 2026-05-10 (V3 pass 2 — resolution check)

## Summary
Pass 1 produced 9 fix items (3 P0 + 2 P1 + 4 P2 hover/select micro-fixes). All 9 landed cleanly and are verifiable from the fresh `desktop-*.png` snaps and the source on branch `v3`. No regressions introduced. Branch is ship-ready.

## Resolved since pass 1

1. **P0 Pricing prices €800/€960/€1400** — ✓
   Verified in `content/trip.ts:21,33,43` (price + priceDisplay both updated). Live snap `desktop-07-pricing.png` shows €800 / €960 / €1400 on the three tier cards. Apply form `<select>` now derives from `trip.pricingTiers` so prices stay in sync.

2. **P0 People photos** — ✓
   `content/trip.ts:100,108,116,124` adds `photoKey` per person (`hassan` / `yassine` / `karim` / `lina` for Zuka). `desktop-05-people.png` confirms four real photos: tagine bowl, surfboards lined up, blue door, hand drawing/letter. No more transparent checker.

3. **P0 Pricing photos** — ✓
   `desktop-07-pricing.png` shows three distinct photos (gallery-2 surfers / gallery-3 group eating / gallery-4 morning surfer) above each €-block. Placeholder `/figma/people-card-photo.png` is gone from `components/pricing.tsx`.

4. **P0 Shared Room copy swap** — ✓
   `content/trip.ts:31,36`: accommodation now reads "A door you can close. Quiet mornings before surf.", description "Your own room in the house, shared bathroom.". Confirmed in pricing snap — middle card top line is the "door you can close" copy, typewriter line below the divider is the room description.

5. **P0 Tier 3 description** — ✓
   `content/trip.ts:47`: "Private double room. The most space, the quietest setup." — no longer the contradicting "don't mind sharing space" sentence. Visible in snap.

6. **P1 About strip 4→6** — ✓
   `desktop-02-about.png` shows 6-cell row at desktop: leftmost is dark slate void cell, then 5 photos (cliff, surfer-back, beach group, tagine spread, beach walker). Reads as a contact sheet, not a generic gallery — exactly the rhythm Figma calls for.

7. **P1 Hero overlay** — ✓
   `components/hero.tsx:27` is `bg-black/25` (with explicit comment "bumped from /10"). `desktop-00-hero.png` — subhead body text under the handwritten headline is legible against the surf photo.

8. **P2 Apply form select** — ✓
   `components/apply-form.tsx:162-166` maps options from `trip.pricingTiers`. `lib/apply-schema.ts:13` includes `plan` in the zod schema. Default disabled option "Choose plan..." renders correctly in `desktop-08-apply.png`.

9. **P2 Hover audit (hamburger + contact chips)** — ✓
   `components/nav.tsx:76` hamburger button has `hover-fade`. `components/apply-form.tsx:218` contact chips have `hover-fade`. Mobile menu links and Apply button already had it. No color-shift hovers detected.

## New issues
None blocking. Two minor observations (not asks):

- **About cards copy** — three of four cards still say "Not a checklist" with identical body text. Faithful to Figma (placeholder copy on Figma's side), pass 1 already cleared this as not-a-bug. Operator can vary copy later — copywriter task, not design drift.
- **Footer** — magenta-on-magenta "Surf Morocco" wordmark intentional per pass 1; right side reads "SEND ME A LETTER IF YOU WANT TO COLLABORATE / ZUKAAISME@GMAIL.COM" — matches Figma.

## Cross-section consistency (delta vs pass 1)
- Section bg rhythm preserved: white → white → mist → photo → white → bone → white → magenta. No regressions.
- Spacing rhythm unchanged (still inline `style={...}` per section — pass 1's P2 token-system follow-up is still open, but explicitly out of scope for this pass).
- Hover states now consistent: opacity-only fade across nav, hamburger, mobile menu links, Apply button, contact chips. No lifts, no color shifts. Pricing cards remain hover-less by design.

## V3 final verdict
**Ship-ready.** All 9 fix items from pass 1 resolved cleanly and verifiable from screenshots + source. No new layout bugs, no regressions, no fresh visual drift. The remaining open item (replace inline `style={{...}}` with design-token classes) is a P2 hygiene task that does not block ship.

Operator can commit this branch and merge to main with confidence.
