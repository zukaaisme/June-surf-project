# V3 Implementation Spec

V3 = Surf Camp redesign per operator's Figma. Branch: `v3` (currently checked out, starts from `v2` HEAD).

**Figma source of truth**: file `yLe2GVz177buM1WYfL4f7l`, root frame node `8:2235`. Frame is 1440×5883 desktop only (no mobile frame — implementer must invent responsive behavior per best practices).

## Source files on disk

All in `/Users/sx/Desktop/Серф кэмп/design-review/figma-v3/`:

- `full-3k.png` — full-page screenshot, 735×3000 (downscaled from 1440×5883). Visual reference.
- `figma-export.tsx` — Figma's auto-translated React code (~70KB). **Use as STRUCTURAL REFERENCE only**. Do NOT 1:1 transplant — code uses fractional pixel padding (`p-[142.13px]` etc.) which is Figma absolute-positioning artifact. Read it for: layout intent, element hierarchy, image placements, asset URLs. Then write IDIOMATIC Tailwind / clean Next.js.
- `assets/` — 11 downloaded Figma assets keyed by UUID. See `figma-export.tsx` for the named-variable → UUID mapping (e.g. `imgPhoto3 = "...cfa44300..."` means asset `assets/cfa44300-61c0-4d0d-a959-6f5f7d820729.png`).
- `design-context.json` — raw MCP response, redundant with figma-export.tsx. Skip unless you need raw JSON.

## Operator constraints (verbatim)

1. **Hover** — only opacity 30% on clickable elements. No lifts, no color shifts, no fancy transitions.
2. **Top nav** — fixed (not sticky-when-scrolled) at top of viewport. Anchor links to sections.
3. **Mobile responsive** — yes. No mobile frame in Figma. Use best practices: 12-col → 1-col stack, hero scales, gallery horizontal scroll, pricing tier stack. Don't change desktop design when adding mobile.
4. **Light fade-in on sections** — keep V2's `<FadeIn>` behavior on scroll-into-view. Drop everything fancier.
5. **Follow Figma strictly** — copy in Figma is source of truth (the cozy-revision copy from `design-review/copy-revision.md` is OUT for V3). If headline says "RAD MOROCCO. NOT TOURISM." in Figma, that's what we ship.

## Extracted from Figma

### Palette (8 colors observed in figma-export.tsx)

| Hex | Likely role |
|---|---|
| `#1E1E1E` | Body / heading dark text |
| `#323740` | Secondary text (slate) |
| `#EAEAEA` | Light grey (dividers / subtle bg) |
| `#EEF5FF` | Pale blue (background or accent surface) |
| `#EFE3CC` | Cream (bg, **same as our V2 cream token!**) |
| `#F095F0` | Magenta primary accent |
| `#FFB0FF` | Magenta light (hover or surface) |
| `#FFD7FF` | Palest pink (subtle accent surface) |

This is a **completely different palette** from V2's coastal-film. Replace V2 tokens entirely. Suggested mapping in `app/globals.css` `@theme`:

```css
--color-paper:      #EFE3CC;  /* cream — primary page bg, kept from V2 */
--color-ink:        #1E1E1E;  /* near-black text */
--color-slate:      #323740;  /* secondary text */
--color-bone:       #EAEAEA;  /* light grey dividers */
--color-mist:       #EEF5FF;  /* pale blue surfaces */
--color-magenta:    #F095F0;  /* primary accent */
--color-magenta-light: #FFB0FF; /* lighter magenta */
--color-pink:       #FFD7FF;  /* palest accent */
```

Drop the entire coastal-film palette (`cinnamon, sriracha, satay, cardamom, cumin, belacan, anise, cream`). Keep `paper` token name pointing to `#EFE3CC` for backward-compat in components that still reference it.

### Type scale (12 sizes observed)

`14, 16, 18, 21, 22, 25, 26, 28, 32, 56, 72, 96` (px)

12 sizes is too many for a clean system. Cluster into 6 named roles. Operator earlier accepted 6-size discipline. Proposed map (verify against Figma after first build):

| Class | Px | Likely use |
|---|---|---|
| `.text-display` | 96 | Hero headline only |
| `.text-h1` | 56 / 72 | Section headings (use 56 default, 72 for hero subhead if Figma uses it there) |
| `.text-h2` | 28 / 32 | Subheads, card titles |
| `.text-body` | 18 | Default body |
| `.text-label` | 16 | Buttons, nav, captions |
| `.text-caption` | 14 | Mono captions, fine print |

The 21/22/25/26 are likely Figma's optical-tweak choices for specific labels. Round to nearest in our 6-size set during implementation.

### Type — fonts

`figma-export.tsx` doesn't bind to font-family. Inspect screenshot: looks like a single sans-serif throughout. Best guesses:
- Operator may have used Inter, Geist, Bricolage, or default sans
- **No second/mono font visible** — V3 likely drops Special Elite typewriter

**Action for implementer**: try `Inter` (variable, weights 400/600/700/800) first. If screenshots reveal a clearly different face (rounded, condensed, etc.), ask operator. Add Special Elite back ONLY if mono captions appear in design.

## Section structure (from screenshot inspection + figma-export.tsx)

Top to bottom, observed sections:

1. **Top nav** — fixed bar, brand left, menu items, Apply CTA right
2. **Hero** — full-bleed background photo of surfer/wave, headline overlay "RAD MOROCCO. NOT TOURISM.", possibly subhead, CTAs
3. **Gallery strip** — 4 large photos in horizontal row, with magenta/pink accent tape/caption "ATLANTIC '26"
4. **What's included** — title "Everything you need / Nothing you don't" + 6-cell icon grid (icons: community, food, place_to_stay, season, seven_days, surf, transfer)
5. **Hero photo of person on beach** (transition / interstitial)
6. **People section** — "Who you'll meet" + 4 portrait cards
7. **Pricing** — "Choose where you stay" + 3 tier cards (€690 / €1290 / €2900 — operator changed prices!)
8. **Apply / dates section** — "Nearest dates: 24 June – 1 July" + form
9. **Footer** — magenta header band "SURF MOROCCO" + small footer details

Note: section count and ordering may differ from V2. Trust Figma layout, don't try to map V2 sections 1:1.

## Layout / grid

From figma-export.tsx: appears to use absolute positioning at root frame level (auto-generated). The IMPLEMENTER must abstract this into:
- Container `max-w-7xl mx-auto`
- 12-col grid where appropriate
- Vertical rhythm via section padding (size-by-eye from screenshot, then standardize)

Padding values from Figma are fractional (e.g. `p-[112.11px]`). Round to clean Tailwind scale: 4/8/12/16/24/32/48/64/80/96/120/160 px.

## Components needed

- `<Nav>` — fixed top bar, anchor links, Apply CTA, opacity-30 hovers
- `<Hero>` — full-bleed bg photo, overlay text, CTAs
- `<GalleryStrip>` — 4-photo horizontal row + tape caption
- `<Included>` — icon grid (7 icons named in figma-export.tsx)
- `<People>` — 4 portrait cards
- `<Pricing>` — 3 tier cards (NEW PRICES from Figma: €690 / €1290 / €2900)
- `<ApplyForm>` — form with dates banner
- `<Footer>` — magenta brand band

Existing V2 components are useful as scaffold — but layouts and styling will largely be rewritten.

## Icons (line-art SVG, 7 needed)

From figma-export.tsx `Icons` component, these named types exist:
- `icons.community`
- `icons.food`
- `icons.place_to_stay`
- `icons.season`
- `icons.seven_days`
- `icons.surf`
- `icons.transfer`

Figma exported them as icon component variants. Implementer should look at the screenshots, draw clean inline SVG icons (line-art, single stroke 1.5px, currentColor) matching the visual style.

## Mobile (no frame, decide via best practices)

Per operator: "не меняй основной дизайн на десктопе, контент будет меняться, фото видео тексты, но верстать можно так как есть сейчас". Translation: desktop layout is final, mobile is a responsive collapse. Rules:

- `<768px`: stack everything vertically, full-width cards
- Top nav: hamburger menu drawer
- Hero: photo background height adjusts via `min-h-svh`, headline scales via clamp()
- Gallery strip: horizontal scroll-snap (4 photos still visible by scroll)
- Icon grid: 2-col on tablet, 1-col on mobile, OR 3×2 grid that becomes 2×3 / 1×6
- Pricing tiers: stacked
- People cards: 2×2 on tablet, 1×4 on mobile

## Animation

Light scroll fade-in only. `<FadeIn>` from `components/ui/fade-in.tsx` already exists in v2 — keep it. Strip per-element parallax, snap-scroll, complex stagger. Hover = `transition-opacity hover:opacity-30`.

## Anchor links from nav

Each menu item links to a section ID:
- `About` → `#about`
- `Gallery` → `#lifestyle` or `#gallery`  
- `Included` → `#included`
- `People` → `#people`
- `Pricing` → `#pricing`
- `Contact` → `#apply`

Smooth scroll via `html { scroll-behavior: smooth }` (already in `app/globals.css`).

## Definition of done

- [ ] All section IDs match anchor link targets
- [ ] Top nav `position: fixed`, opacity-30 hovers
- [ ] Hero full-bleed bg with text overlay
- [ ] All 7 icons present in Included grid
- [ ] 4 people portrait cards
- [ ] 3 pricing tiers with new prices €690 / €1290 / €2900
- [ ] Magenta accent (`#F095F0`) used per Figma
- [ ] Mobile: stacked, hamburger nav, gallery h-scroll
- [ ] `npm run build` clean
- [ ] Site rendered on `npm run start`, screenshots refreshed

## What stays from V2

- `<FadeIn>` primitive
- Apply form + zod schema (just restyle)
- API route `/api/apply` (stub stays)
- Branch + capture pipeline (Figma-export, capture.mjs work as-is)

Almost everything else is rewritten.
