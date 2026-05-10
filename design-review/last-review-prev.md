# Design review — 2026-05-10 (V3 deep-diff vs Figma)

## Summary
V3 layout is broadly correct, but three classes of drift make it read like an unfinished mock: (1) **prices wrong** — €690/€1290/€2900 instead of Figma's €800/€960/€1400; (2) **photos missing** — both People cards (4) and Pricing cards (3) are rendering the transparent placeholder `/figma/people-card-photo.png` because that PNG is empty; (3) **About copy strip** uses 4 photos in a hard grid, Figma uses a 6-cell scrolling strip (5 photos + 1 dark void cell). Spacing-wise the page works, but every section uses ad-hoc inline `style={...}` numbers instead of a real spacing scale, so any pixel polish has to be done manually section-by-section. The Section primitive (`components/ui/section.tsx`) exists but nothing uses it.

## Top issues (priority order)

### P0 — Pricing prices don't match Figma
- **What**: Live shows €690 / €1290 / €2900. Figma shows €800 / €960 / €1400.
- **Where**: `content/trip.ts:21,33,43`.
- **Why wrong**: Operator's source of truth here is Figma, not the earlier spec doc. The 4× spread between dorm and double in V3 is also commercially absurd (a couple shouldn't pay €2900 when a single in a private room pays €1290 — Figma's €1400 for double = 2 × €700 makes sense as 2 people sharing).
- **Fix**: In `content/trip.ts` set `price: 800 / 960 / 1400`, `priceDisplay: "€800" / "€960" / "€1400"`. Update the `<select>` option label in `components/apply-form.tsx` if it embeds the price (it does — `Shared Room · €1290` → `Shared Room · €960`).

### P0 — People + Pricing cards render as empty grey checker
- **What**: All 4 People cards and all 3 Pricing cards show transparent checkerboard.
- **Where**: `public/figma/people-card-photo.png` is a transparent 256×256 PNG. Both `components/people.tsx:35` and `components/pricing.tsx:40` reference it.
- **Why wrong**: Figma's source asset (`e563c6fe-…png`) is also a transparent placeholder, so the live page is "honest" to Figma — but the operator review explicitly says "people cards rendering as empty grey placeholders" is a bug. We have real photos in `content/images.ts` (`hassan`, `yassine`, `karim`, `lina`) plus a generic surf placeholder.
- **Fix**:
  - People: replace `src="/figma/people-card-photo.png"` with per-person photo from `content/images.ts`. Add `photoKey` to each `trip.people[]` entry and render `images[person.photoKey].src`.
  - Pricing: pricing cards in Figma all share the *same* photo (one wide-shot of the village/house). Ship one real photo (e.g. reuse `gallery-2.png` or pick a house interior) and remove the transparent placeholder.

### P0 — Pricing tier 2 (Shared Room) accommodation/description swapped
- **What**: Tier 2 in live shows accommodation "Your own room in the house, shared bathroom" and description "A door you can close. Quiet mornings before surf. Your own room in the house, shared bathroom." — the description has the accommodation copy duplicated inside it.
- **Where**: `content/trip.ts:31,36`.
- **Why wrong**: Figma puts "A door you can close. Quiet mornings before surf." in the accommodation slot (sans-serif top text under the price/title), and "Your own room in the house, shared bathroom" in the typewriter description slot below the divider.
- **Fix**: In `content/trip.ts` tier 2: `accommodation: "A door you can close. Quiet mornings before surf."`, `description: "Your own room in the house, shared bathroom."`.

### P1 — About photo strip: 4 cells in live, 6 cells in Figma
- **What**: Live renders 4 photos in `md:grid-cols-4`. Figma renders 6 cells: 5 photos at 308×396 + 1 dark slate cell (`bg-[#323740]`) as a "negative-space" tile.
- **Where**: `components/about.tsx:73-99`.
- **Why wrong**: The 6-cell rhythm is what makes the strip feel filmic (like a contact sheet). 4 evenly-spaced photos read as a generic gallery.
- **Fix**: Switch to a horizontally-scrolling row at desktop too (or use `md:grid-cols-6`). Use 5 photos (`hero-bg`, `gallery-2`, `gallery-3`, `gallery-4`, plus one more — pick from `images.ts` `lifestyleTea` or similar) and a 6th `<div>` with `bg-[var(--color-slate)]` and no image.

### P1 — Pricing card description duplicated tier 1 ↔ tier 3
- **What**: Tier 1 and Tier 3 both show "For travelers who like company and don't mind sharing space."
- **Where**: `content/trip.ts:25, 47`.
- **Why wrong**: Figma also has this duplication — but it's clearly a Figma mock placeholder, not intent. A "Double Bed" tier described as "for travelers who like company and don't mind sharing space" is the opposite of what a private double-bed room offers.
- **Fix**: Tier 3 description → something like `"For couples or close friends. One private bedroom, shared house common areas."` (operator confirm, but at minimum it must NOT say "don't mind sharing space").

## Section-by-section

### Hero — OK
Background photo + handwritten white headline read correctly. The subhead body text is rendering inside a thin overlay that's barely legible (`text-white/90` + `bg-black/10` scrim). Figma reference has higher contrast — bump scrim to `bg-black/25` on `components/hero.tsx:27` or add a max-w 480 dark plate behind the body text.

### About — needs work
- Cards: 4 columns, 3× "Not a checklist" duplicated. **This matches Figma exactly** — Figma also shows 3 identical cards. Operator flagged it as suspicious but it's faithful to source. If operator wants variation, that's a copy task, not a bug fix.
- Photo strip: see P1 above.
- Tags row (`Tamraght, Morocco` / `Check on Google Maps` / `More Photos`): pixel-correct match. Good.

### Included — OK
Layout 4+3 grid matches Figma. Magenta-light heading correct. Icons rendering. Body text "Shared house or private room…" duplicates between Seven days and Place to stay — same in Figma, faithful match.

### People — broken (see P0)
Once the photo is fixed, layout works. The grey "TUC TOOK / TUC INSTRUCTOR / TUC HOST / TUC FIXER" labels are OCR artifacts from the screenshot — actual rendered text is `THE COOK / THE INSTRUCTOR / THE HOST / THE FIXER`. Confirm in DOM.

### Pricing — broken (see P0)
Heading + subhead correct. Cards have wrong prices, wrong tier-2 copy, transparent photos.

### Apply — OK with one snag
Form layout, contact chips (4 across), pink Send Application button — all correct vs Figma. **The `<select>` "Preferred Plan" default option says "Shared Room · €1290"** — this needs to match the corrected Figma price. `components/apply-form.tsx` (where the option is rendered).

### Footer — OK
Brand band, "Surf Morocco" magenta-on-magenta, right-aligned typewriter text — all matches.

## What's working — DO NOT BREAK
- Hero handwritten headline (Covered By Your Grace) at 7.5vw clamp.
- Section bg rhythm: white → white → mist → photo → white → bone → white → magenta. This alternation reads correctly on the FULL screenshot.
- The magenta-light (`#FFB0FF`) is reserved for the two "thesis" headlines (Included + Pricing) plus footer band — that restraint is the page's strongest visual decision. Don't expand its use.
- Tags row in About (slate / pink / pink-50%): pixel-correct, good as is.
- Icon row in Included: 36px icons in magenta-light beside 28px slate titles — clean.
- Apply form: 56px field height, mist (5%-slate) field bg, typewriter labels — correct.
- Footer "Surf Morocco" magenta-on-magenta low-contrast: that's the intended Figma effect.

## Cross-section consistency

### Spacing rhythm — flag P2
- Every section: `py-20 md:py-28`. Consistent. Good.
- BUT all internal spacing is inline `style={{...}}` with raw px values: `gap-7 px-9 py-8` (Pricing), `gap-7 px-5 py-7` (People), `gap-3` everywhere else. There's no spacing scale being enforced. This is fragile — any future polish pass will create more drift.
- **Recommend**: in a follow-up pass, replace inline pixel `style={{ fontSize: "32px" }}` etc. with the design tokens declared in `app/globals.css` (`.text-h2`, `.text-display`, etc.). The Section primitive at `components/ui/section.tsx` is unused — kill it or actually use it.

### Hover states — verify
- `.hover-fade` is used on the Maps tag in About (`components/about.tsx:49`). Good.
- Nav links + Apply button: need to confirm they use opacity-only fade, not color shift. Check `components/nav.tsx` and `components/ui/button.tsx`.
- Pricing cards: no hover state at all. Operator said "no lifts, no color shifts" — so no-hover is fine, but a subtle `hover:opacity-90` on the whole card would help discoverability. P2.
- Contact chips at bottom of Apply: no hover state visible. Add `transition-opacity hover:opacity-60` per system. P2.

### Heading hierarchy
- Hero: handwritten clamp 2.75-6rem (white).
- Included + Pricing: clamp 2-3.5rem (magenta-light), font-weight 600.
- People + Apply: clamp 2-3.5rem (slate), font-weight 700/600.
- About cards: 32px slate, font-weight 600.
- People card name: 28px font-weight 700.
- Included item title: 28px font-weight 700.

This is consistent enough but the weights jiggle (600 vs 700). Lock to 600 across all section H2s.

## Resolved since last review
The previous `last-review.md` was the V1 final review (different design system entirely — beige/coastal). Not directly comparable; V3 is a redesign, not an iteration. Treat this as a fresh baseline.

## Next priorities (for fullstack-dev)

1. **`content/trip.ts`** — fix prices (800/960/1400), swap tier-2 accommodation/description, rewrite tier-3 description to not contradict its own product.
2. **People photos** — add `photoKey` field to each `trip.people[]`, wire `components/people.tsx:35` to use `images[person.photoKey].src` from `content/images.ts`. Use existing `hassan`/`yassine`/`karim`/`lina` keys.
3. **Pricing photos** — replace `/figma/people-card-photo.png` in `components/pricing.tsx:40` with one real photo (reuse `/figma/gallery-2.png` is fine for v3, all three Figma cards use the same image anyway).
4. **About photo strip** — `components/about.tsx:73-99`: switch to 6 cells (5 photos + 1 dark `bg-[var(--color-slate)]`), keep horizontal scroll on mobile, use `md:grid-cols-6` on desktop.
5. **Apply select default** — `components/apply-form.tsx`: make the "Preferred Plan" `<select>` options pull from `trip.pricingTiers` so the prices stay in sync automatically. Right now they're hard-coded.
6. **Hero scrim** — bump `bg-black/10` → `bg-black/25` on `components/hero.tsx:27` for body-text legibility.
7. **Hover states audit** — confirm Nav, Apply button, Pricing cards, Contact chips all have `transition-opacity hover:opacity-X` (no lifts, no color shifts).
8. **Spacing system** — P2 follow-up: replace inline pixel `style={{ fontSize / lineHeight / letterSpacing }}` with design-token classes from `app/globals.css`. Either resurrect `components/ui/section.tsx` or delete it.
