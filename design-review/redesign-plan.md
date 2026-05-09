# Surf Morocco — Redesign Plan
Date: 2026-05-09 · Author: ux-designer agent · Status: ready for fullstack-dev

This document is implementation-grade. Numbers are exact. Tokens are existing only — no new tokens, no new fonts, no new spacing values.

---

## 0. Design hypothesis (one paragraph)

The page is broken because the hero treats photos as an absolute-positioned stage prop and the rest of the page treats photos as content cells, with no shared spatial language between them. The fix is **one composition rule used throughout**: photos live in deterministic grid cells with explicit aspect-ratios; the only place where rotation/overlap is allowed is a single hero device and a polaroid card. Everything else is a clean editorial grid. Tone target: a printed surf zine spread, not a scrapbook.

---

## 1. Triage

### P0 — must fix this pass
1. **Hero composition** — rebuild as a 12-column grid where text and photos do not overlap. Photo collage is contained to right ~7 columns, headline owns left 5. Mobile becomes a stacked vertical mosaic with text first, photo strip second.
2. **LifestyleCollage `fill` bug** — every cell needs an explicit `position: relative` + an aspect-ratio container; `fill` then becomes safe. Switch from "the photo class itself has the aspect" to "an inner wrapper has the aspect, the `fill` Image is inside it".
3. **Accommodation imagery** — replace all 3 photos and re-pair captions to actual content (caption equals what is in the photo, not where the photo is in the grid).
4. **People imagery** — pivot from 4 portrait headshots to 4 candid object/scene polaroids (a hand, a board, a pot of tagine, a van wheel) labeled with role + first name. Removes the "stock model" failure mode entirely.

### P1 — next pass (after P0 ships clean)
5. About photo — swap to warm, sun-lit subject; let the existing `.photo` filter do the rest.
6. EmotionalIntro — fill the empty right half with a single tall vertical filmstrip (3 stacked frames) on belacan, OR center-justify the manifesto (recommended path: center).
7. Included — drop the staggered translateY; commit to a clean 4-column row × 2 rows grid (4+3 with last cell empty + caption).

### Deprioritized
- Footer cinematic upgrade — works well enough; defer.
- Pricing — already strong.
- ApplyForm — already strong.

---

## 2. Section-by-section

### 01 Nav — keep as is
No changes. The `Apply` nav CTA muted-on-cream issue from critique can stay; a chip-style ring would feel startup-y. Trust hierarchy: it’s the bottom-right cinnamon hero CTA that does the conversion work.

### 02 Hero — REBUILD
See Section 3 below for full spec. Mockup at `design-review/hero-mockup.html`.

### 03 EmotionalIntro — light fix
Keep belacan full-bleed. **Center the three manifesto lines** in the column (max-width 28ch, `text-h1`, `text-align:center`). Move mono caption `TAMRAGHT, MOROCCO — WINTER 2026` to top-center, `text-caption` size, opacity 0.5. Result: a quiet title-card frame, like a Wes Anderson chapter break. Vertical padding `py-40 md:py-48`. No photo here — the empty wine field is the point if the text is centered.

### 04 About — swap photo only
Layout is good (asymmetric photo stack right, 2-col). Action: replace `aboutSide` and `aboutRooftop` images with warmer sun-on-skin shots (queries below). Keep the inset polaroid offset, keep the activities list. Ensure inset photo doesn't crash into the section bottom on mobile — clamp `bottom-[-3rem]` to `bottom-[-2rem]` below `md`.

### 05 LifestyleCollage — REBUILD GRID
See Section 4 below.

### 06 Included — minor
Drop the alternating `translateY(+16px)` stagger. Use `grid-cols-2 md:grid-cols-4` with consistent vertical alignment. 7 cards as 4+3: in the second row leave the rightmost cell empty and place a `font-mono-accent` caption inside that empty cell (`STILL OFF-SEASON. STILL QUIET.`). Rationale: turns the orphan card into a typographic period.

### 07 People — REBUILD CONTENT MODEL
See Section 5.

### 08 Accommodation — REBUILD IMAGERY + LAYOUT
See Section 6.

### 09 Pricing — keep as is
Strongest section. Don't touch.

### 10 ApplyForm — keep as is
Add nothing. Maybe tighten `Send application` button width to `auto` rather than full-width if not already (operator's call).

### 11 Footer — keep as is
Defer cinematic upgrade.

### Section order verdict — KEEP CURRENT 11-SECTION FLOW
The order works narratively: hook (Hero) → manifesto (EmotionalIntro) → what (About) → mood (LifestyleCollage) → what's-in (Included) → who (People) → where (Accommodation) → how-much (Pricing) → CTA (Apply) → close (Footer). Don't restructure. Restructuring is a P2 distraction.

---

## 3. Hero composition rules

### Idiom choice
**Drop the absolute-positioned 4-photo collage.** Replace with a **postcard-stack collage contained inside a defined right-column zone**, plus a clean left-column text zone. The "postcard feel" survives — but in a sandbox, not on top of the headline.

### Desktop (≥1024px) — 12-column grid

Section: `min-h-svh`, vertical padding `pt-32 pb-24`, horizontal `px-10`. Container `max-w-7xl mx-auto`. Inner: `grid grid-cols-12 gap-8`.

**Left zone — text — `col-span-5`** (cols 1–5)
Vertical stack, `flex flex-col gap-8`, top-aligned with `pt-8`:
1. Mono section index — `01 / 10 — A SLOW TRIP. NOT A CAMP.`, opacity 0.6, `mb-2`.
2. Headline `Live Morocco, / not tourism.` — `.text-display`, italic, ink, `max-width: 11ch` so it breaks naturally into 2 lines. Letter-spacing per existing class. **No background chip. The chip is gone.**
3. Subhead `Seven days in a fishing village…` — body 17, ink at 0.7, `max-width: 38ch`, `mt-2`.
4. CTA row — `Apply` (cinnamon) + `View Program` (ghost), `gap-4`, `mt-4`.
5. Bottom mono bar with section name + `01 / 10` is **moved out of left zone**. Place it as a full-width strip below the grid, separated by a hairline divider — `mt-24 pt-6 border-t`.

**Right zone — photo collage — `col-span-7`** (cols 6–12), height clamped to `min(640px, 70vh)`, `position: relative`, contained.

3 photos, deterministic absolute placement inside this contained box (NOT inside the section). Rotations stay subtle.

| # | role | aspect | size (% of right zone) | top | left | rotate | z | polaroid | caption |
|---|---|---|---|---|---|---|---|---|---|
| A | hero anchor — surfer/wave | 3/4 | width 58%, ~370px | 4% | 6% | -2.5deg | 1 | yes | none |
| B | village/door | 4/5 | width 42%, ~270px | 38% | 50% | 2.5deg | 2 | yes | `TAMRAGHT '26` |
| C | accent (wax/film/hand) | 1/1 | width 26%, ~165px | 2% | 62% | -4deg | 3 | no (raw photo) | `FILM 200` |

z-order top-to-bottom: C > B > A. C is the small spice that breaks the two-card duet.

Critical: the right zone has `overflow: visible` so the slight rotations breathe past edges, but `pointer-events-none` on photos so they never intercept clicks aimed at left zone CTAs.

### Tablet (768px–1023px)
Switch to `grid-cols-1`. Text first, then collage zone (height 56vh, max 480px) below. Photo positions same as desktop, scaled.

### Mobile (<768px) — stacked vertical mosaic
1. Mono index, full-width, `pt-24 px-5`.
2. Headline `.text-display` (clamp already handles size) — full-width, `max-width: 12ch`.
3. Subhead full-width, `max-width: 38ch`.
4. CTA row, `flex-col` if narrower than 380px; else `flex-row gap-3`.
5. **Single below-fold photo strip** (NOT a collage). One large polaroid (photo A, aspect 3/4) at width 78vw, slightly rotated -2deg, `mx-auto mt-12`. Caption below in mono.
6. Bottom mono bar full-width, `mt-12 pt-6 border-t`.

No overlapping photos on mobile. No exceptions. Mobile is the one breakpoint where collisions are guaranteed in the current build, so we ban overlaps there entirely.

### Hero polish
- Headline italic kept (current code).
- Parallax on photos: keep but reduce factor to 0.04 max so motion is barely perceptible.
- Animation: stagger photos in at `delay = i * 0.08`, duration 0.6s ease-out. Headline has no entrance animation — it's there from frame 1.

---

## 4. LifestyleCollage spec

### Concept
"Film strip + contact sheet". 8 photos. **Drop the col-span-2 wide cells** — they were the source of visual instability. All cells uniform width on a 4-column grid; aspect-ratios vary cell-by-cell to keep editorial rhythm.

### Markup contract (this is the bug fix)
For each cell:
```
<div class="photo relative w-full" style="aspect-ratio: <ratio>">
  <Image src=… fill … class="object-cover" />
</div>
```
The `aspect-ratio` lives on the **parent of `<Image fill>`**, and the parent is `position: relative`. Without both, `fill` blows up to viewport — that's the current bug. Do not put `aspect-ratio` on a sibling and `fill` on the image; they must be on the same element or parent–child.

### Desktop grid
`grid grid-cols-4 gap-3`, `max-w-7xl mx-auto px-10`.

8 cells, each `col-span-1`:
| # | content | aspect | row position |
|---|---|---|---|
| 1 | tea pour close-up | 1/1 | r1 |
| 2 | surfboards leaning on wall | 4/5 | r1 |
| 3 | market spices | 3/4 | r1 |
| 4 | rooftop sunset | 4/5 | r1 |
| 5 | scooter on dirt road | 3/4 | r2 |
| 6 | ocean horizon | 1/1 | r2 |
| 7 | friends laughing at table | 4/5 | r2 |
| 8 | coffee + cigarette | 3/4 | r2 |

Two rows of 4. Aspect-ratios vary so the bottom edges of row 1 and top edges of row 2 don't form a hard horizontal line — that's the editorial rhythm. CSS Grid will auto-align rows; the gap stays even.

### Mobile
Horizontal scroll snap, `flex gap-3 overflow-x-auto px-5 pb-3 snap-x snap-mandatory`. Each cell `flex-shrink-0 w-[68vw]` with its own aspect-ratio (use the desktop ratio per cell). The mixed ratios feel like flipping through Polaroids — better than forcing all to 3/4.

### Caption bar
Below the grid, full-width `.font-mono-accent`: `MOMENTS · TAMRAGHT · WINTER '26 · ROLL 03/04`. The `ROLL 03/04` is a small typographic gift that signals "this is from a series".

### Section spacing
`py-32 md:py-40`. No section-index mono header here — the section is a wordless interlude between About (text) and Included (text). Silence is the function.

---

## 5. People — content model pivot

### Problem
Generic Unsplash portrait queries return model shoots. Solution: **decouple person from face**.

### New model: 4 "object polaroids" instead of headshots

Each card represents the person via what they touch / make / drive, not their face. Layout grid is unchanged (4 col, polaroid cards), only the photo content + composition inside the card changes.

| # | person | photo subject | aspect | quote stays |
|---|---|---|---|---|
| 1 | Hassan — the cook | hands lifting the lid off a tagine, steam rising | 4/5 | yes |
| 2 | Yassine — surf instructor | a wax block + bar of sex-wax on a deck | 1/1 | yes |
| 3 | Karim — house owner | a hand turning a key in a blue door | 3/4 | yes |
| 4 | Lina — logistics | a notebook + Nokia phone on a café table | 4/5 | yes |

Card body order:
1. Photo (above ratios).
2. Mono caption with role: `THE COOK`, `THE INSTRUCTOR`, `THE HOST`, `THE FIXER` — opacity 0.6.
3. Display first name only: `Hassan`, `Yassine`, `Karim`, `Lina`. `text-h2`-equivalent (h2 class), 700 weight, `mb-2`.
4. One-line bio at body 17, opacity 0.7.
5. Italic typewriter quote (existing).

Rotations stay (-2/1/-1/2). Polaroid frame stays. This keeps the "4 cards on belacan" rhythm — only the photographic content changes from "stranger's face" to "their world".

If the operator pushes back and wants real faces: requirement becomes that you ship real photos of the actual people, not stock. There's no Unsplash query that returns "Hassan, a Berber cook in Tamraght" — that's an ontological problem, not a query problem.

---

## 6. Accommodation — rebuild

### Layout
Keep 3-photo collage above copy, but tier the photos with different aspect-ratios and **bind caption to photo content**, not to fixed labels.

`grid grid-cols-1 md:grid-cols-12 gap-3 mb-12`:
| slot | desktop col-span | aspect | content | caption |
|---|---|---|---|---|
| 1 | col-span-5 | 4/5 | whitewashed wall + blue door | `BLUE DOOR` |
| 2 | col-span-4 | 1/1 | terracotta tile floor + bare feet OR a corner | `TERRACOTTA` |
| 3 | col-span-3 | 3/4 | rooftop with mint tea / cushions at sundown | `ROOFTOP` |

Each caption is `.font-mono-accent`, `mt-2`, opacity 0.5. **The caption describes what's in the frame**, so a swapped image doesn't desync.

### Copy
Keep verbatim — copy is good. Place left-aligned, `max-w-xl`, immediately below the grid.

---

## 7. Photo curation — Unsplash query playbook

Rule of thumb: prefer queries with **objects, hands, materials, and place names** over abstractions. "candid surf morocco" returns models. "wax board fingers close" returns the thing.

### Hero (3 photos: A anchor, B village, C accent)
- **A — hero anchor (surfer/wave)**:
  - `morocco surf taghazout sunset`
  - `lone surfer paddling out atlantic film`
  - `surfer silhouette ocean golden hour 35mm`
- **B — village/door (Tamraght character)**:
  - `tamraght morocco blue door`
  - `whitewashed berber village morning`
  - `moroccan alley cat blue wall`
- **C — accent (small detail)**:
  - `surf wax close up bar`
  - `film negatives strip handheld`
  - `kodak portra wax board fingers`

### EmotionalIntro
No photo (centered text). Skip.

### About (2 photos: aboutSide tall + aboutRooftop inset)
- **aboutSide — vertical sun-warm**:
  - `young woman surfboard morocco beach golden`
  - `walking with longboard barefoot warm`
  - `surfer morning silhouette beach analog`
- **aboutRooftop — wide warm**:
  - `moroccan rooftop tea cushions sunset`
  - `tagine cooking hands close up`
  - `terracotta rooftop palms morocco`

### LifestyleCollage (8 photos)
1. **Tea**: `moroccan mint tea pour close up`, `tea glass steam morning`
2. **Surfboards**: `surfboards leaning whitewashed wall`, `quiver rack surf shop morocco`
3. **Market spices**: `marrakech spice souk pyramids color`, `moroccan spice market piles`
4. **Rooftop sunset**: `rooftop morocco sunset friends`, `coastal rooftop golden hour cushions`
5. **Scooter**: `scooter dirt road morocco dust`, `vintage moped coastal village`
6. **Ocean horizon**: `atlantic horizon empty wave gray`, `morning ocean line minimal`
7. **Friends**: `friends laughing dinner candlelight`, `group meal courtyard morocco`
8. **Coffee + cigarette**: `espresso cigarette cafe table morning`, `coffee cup ashtray film grain`

### People (4 object polaroids per Section 5)
1. **Hassan/cook**: `tagine lifting lid steam hands`, `moroccan kitchen pot hands`
2. **Yassine/instructor**: `surf wax bar deck close`, `sex wax board hands`
3. **Karim/host**: `key in blue door hand morocco`, `door handle blue weathered`
4. **Lina/fixer**: `notebook nokia phone cafe table`, `paper notes cafe analog`

### Accommodation (3 photos per Section 6)
1. **Blue door**: `moroccan blue door whitewashed wall`, `tamraght riad doorway`
2. **Terracotta**: `terracotta tile floor moroccan`, `clay floor bare feet rug`
3. **Rooftop**: `riad rooftop cushions tea sunset`, `morocco rooftop palms tea`

### Curation acceptance test
Before integrating a photo, the engineer/operator should be able to write the caption *from the image alone*. If the image needs explanation, it's wrong.

---

## 8. Token + class usage cheat sheet (no new tokens)

- Backgrounds: `bg-[var(--color-paper)]` body, `bg-[var(--color-belacan)]` for EmotionalIntro / People / Pricing / Footer.
- Text on light: `text-[var(--color-ink)]` primary, `opacity-70` secondary, `opacity-50` tertiary.
- Text on dark: `text-[var(--color-paper)]` primary, `text-[var(--color-cream)] opacity-60` secondary.
- Accent: cinnamon for primary CTAs only. Sriracha never as background; sparingly as text emphasis or mono caption hover.
- Type: `.text-display` once per page (Hero). `.text-h1` for section openers (About, People, Pricing). `.text-h2` for subheads. Body inherits. `.text-caption` + `.font-mono-accent` for indices.
- Spacing: section vertical `py-30 md:py-40` (existing); intra-section `gap-8` / `gap-16`; tight `gap-3` for grid-of-photos.

---

## 9. Definition of done

- [ ] Hero rebuilt; no photo overlaps text on any breakpoint.
- [ ] LifestyleCollage shows 8 photos at correct aspect-ratios; no cream rectangles.
- [ ] Accommodation captions match photo content.
- [ ] People uses object polaroids, no stock model headshots.
- [ ] About photos read warm not desaturated.
- [ ] WCAG AA verified on all text-over-image overlays (none should exist after this pass — text and photos no longer overlap).

---

## 10. Open questions for operator

1. People model pivot — comfortable shipping object-polaroids instead of faces, or insist on real photos of the four humans? (Real photos > both options; stock faces < both options.)
2. EmotionalIntro — center-justified text on empty belacan, or kill the section entirely and fold the manifesto into the hero subhead block? Recommend center-justified, kept.
3. Hero accent photo C (wax/film/hand) — keep all three, or drop to two photos in the right zone for more breathing room? Try three first, A/B if it feels busy.
