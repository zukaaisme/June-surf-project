# V2 — System Spec

V1 reads code-driven because every section was solved as its own design problem with its own grid and its own rhythm. V2 fixes this by collapsing all 10 sections to **one parametric template** plus a small set of **explicit overrides**. Variation comes from filling the same skeleton differently — not from inventing a new layout per section.

---

## Part 1 — System extraction (refs)

### Grid

- **endel.io**: 12-col contained grid at ~1280–1440 max. Below ~768px collapses to 1-col. Section column-span ratios vary in two registers: **6/6** (symmetric pair) and **5/7** (asymmetric pair). Hero and press band go full-bleed; everything else stays inside the container. Gutter constant across the page.
- **basehabitation.com**: same 12-col contained at ~1320 max, 1-col below ~768px. Three column-span ratios: **12** (full-bleed media or full-width text), **6/6** (asymmetric image-text pair, side alternates), **4/4/4** (triptych of equal cards). Hero and gallery moments break to full-bleed; copy stays in container.

**Combined rule**: ONE 12-col contained grid + ONE escape valve (full-bleed for media-only beats). No third grid system.

### Block skeleton (canonical)

Both refs use the same 4-slot template per section:

```
[index]      — small fixed-height meta line, top of section
[heading]    — fixed type role (text-h1)
[body]       — variable: 0 / short / long
[media]      — variable: absent / contained / full-bleed
[detail]     — optional list, caption strip, or numeric meta
```

Variation = which slots are filled, in what column-span, in what order. **The template is invariant; the parameters are not.**

### Variability axes (4 only)

1. **Column-span pair**: `12` | `6/6` | `5/7` | `7/5` | `4/4/4`.
2. **Media weight**: `none` | `contained` (≤ col-span 7) | `full-bleed`.
3. **Body length**: `none` | `≤ 28ch manifesto` | `≤ 55ch paragraph(s)` | `list/grid`.
4. **Heading scale**: `text-h1` (default) | `text-h1 centered ≤ 28ch` (manifesto register) | `text-display` (hero only, once).

Anything outside these axes is forbidden. Side-by-side photo offsets, rotations, polaroid stacks, asymmetric translateY — V1's bespoke moments — are not parameters. They were the bug.

### Rhythm rules

A 4-beat repeating measure. Each section is tagged with one beat:

- **Open** — hero, full presence, media full-bleed.
- **Breathing** — text-dominant, big margins, body ≤ 38ch.
- **Dense** — grid (4-up, 3-up, list), low whitespace.
- **Dark beat** — inverted surface (ink/belacan/palm), single idea, low information density.

Rule: never two **Dense** in a row, never two **Dark** in a row. Every Dense is preceded or followed by a Breathing. Dark beats arrive on a roughly 3-section cadence and reset attention.

### Hierarchy strategy

One **dominant** section per page acts as the visual anchor — the section with the most column-span, the largest media, and the longest pause before/after. On a trip page, that is the **People** section (the human point of the trip), not Hero. Hero is loud but short; the dominant section is quiet and tall. Everything else orbits around the dominant section's gravity.

---

## Part 2 — Application to our sections

Container: `max-w-7xl` (1280) for the 12-col grid. Page padding: `px-5 md:px-10`. Vertical rhythm: Breathing = `py-40`; Dense = `py-28`; Dark beat = `py-48`; Open = `min-h-100svh`. Gutter on the 12-col: `gap-8` desktop, `gap-4` mobile. All values from existing tokens / Tailwind defaults — no new tokens.

Section count: **10 → 9**. Merge **Apply + Footer** into one closing block (they currently duplicate contact links). Keep Nav as fixed chrome (not a section).

| # | Section | Beat | Bg | Cols | Span pair | Media | Body | Heading |
|---|---|---|---|---|---|---|---|---|
| 01 | Hero | Open | paper | 12 | 5 / 7 | full-bleed media right (cols 6–12), bleeds to viewport edge on right only | ≤ 32ch | text-display, max 11ch |
| 02 | Manifesto (was EmotionalIntro) | Dark beat | belacan | 12 | 12 centered | none | none | text-h1 centered, ≤ 28ch |
| 03 | About | Breathing | cream | 12 | 7 / 5 | contained right, aspect 4/5, no inset overlay | ≤ 55ch + numbered list | text-h1 |
| 04 | Lifestyle | Dense | paper | 12 | 4 / 4 / 4 / 4 (triptych +1, see below) | full-bleed strip | none | none — caption strip only |
| 05 | Included | Dense | paper | 12 | 4 / 4 / 4 (3 rows of 3) | none | 9 cells of icon + label | text-h1 leading row |
| 06 | People (DOMINANT) | Breathing | belacan | 12 | 12 → 6 / 6 grid | contained, aspect 4/5 each | quote + role per card | text-h1 + 12-col band |
| 07 | Accommodation | Dark beat → Breathing | ink | 12 | 7 / 5 | contained left (cols 1–7), aspect 3/2 | ≤ 50ch right | text-h1 |
| 08 | Pricing | Dense | palm | 12 | 4 / 4 / 4 | none | 3 tier cards | text-h1 |
| 09 | Apply + Footer (merged) | Breathing | paper → ink at bottom | 12 | 5 / 7 | none | form right, contact left | text-h1 |

### Per-section parameters

**01 Hero — Open / 5–7 asymmetric**
Cols 1–5: index, headline (text-display, max 11ch), 1-paragraph subhead (≤ 32ch), CTA pair. Cols 6–12: ONE photo, aspect 4/5, full-bleed to right viewport edge (escape the container). No collage, no rotations, no polaroid, no parallax. Min height `100svh`. The collage moves to Lifestyle.

**02 Manifesto — Dark beat / centered**
3 lines, text-h1, max-width 28ch, centered. Mono index top. `py-48`. No media. Same as V1 — already correct.

**03 About — Breathing / 7–5**
Cols 1–7: index, h1 (3 lines), 2 paragraphs (≤ 55ch each), numbered activity list (mono index + label, single column, no animation stagger). Cols 8–12: one photo, aspect 4/5, sticky-top alignment. Remove the inset overlay photo — it was a bespoke move that doesn't belong to the system.

**04 Lifestyle — Dense / full-bleed strip**
Break the container. Full-viewport-width 4-column grid of 8 photos (2 rows × 4). Aspect ratios per cell from a fixed set: row 1 = `1/1, 4/5, 3/4, 4/5`; row 2 = `3/4, 1/1, 4/5, 3/4`. Gap 12px. Mobile: same h-scroll snap. Caption mono strip below, contained. **Move from cumin bg → paper bg** — the cumin slab broke the page rhythm; this section earns its drama from full-bleed, not from color.

**05 Included — Dense / 3×3**
9 cells in a 3-col grid (was 4-col + orphan). 7 included items + 1 typographic period cell + 1 mono-meta cell ("STILL OFF-SEASON / STILL QUIET"). Each cell: top hairline border, icon, mono index, h2 title, body. Heading row spans cols 1–8 above the grid.

**06 People — DOMINANT / Breathing**
The trip's human anchor. Two-row layout:
- Row A (cols 1–12): index + h1 ("Who you'll meet") + intro line ≤ 50ch in cols 1–7.
- Row B (cols 1–12): 4 cards in a `3 / 3 / 3 / 3` (= 4-up of col-span-3 each) on desktop, 2-up on tablet, 1-up on mobile. Each card: photo aspect 4/5, mono role, name (text-h2), bio, italic mono quote.
- Drop the per-card rotation and 2px/4px shadow. The dominant section earns weight by space + size, not by decoration.
- `py-48` top and bottom — the long pause before and after is what makes it dominant.

**07 Accommodation — Dark beat / 7–5**
On `bg=ink` (was cream). Cols 1–7: ONE photo, aspect 3/2, contained inside the column band (no triptych). Cols 8–12: index, h1, body ≤ 50ch. The 3 photos collapse to one editorial frame; the other two move to Lifestyle if useful. This is the second dark beat, paced ~6 sections after Manifesto.

**08 Pricing — Dense / 4-4-4**
3 tier cards on palm green. Already close to correct in V1. Keep card structure. Drop the "All tiers include" recap — it duplicates Section 05. Replace it with a single mono line above the cards. Dates + meta moves to a 2-col footer band inside the section.

**09 Apply + Footer (merged) — Breathing closing**
Cols 1–5: index, h1, dates list, 4 contact cards stacked vertically (was a 4-up grid in V1; vertical reads slower and is more correct for a closing beat). Cols 6–12: form, single column, fields stacked. Below the grid a `bg-ink` footer band (full-width, contained content): brand name, mono copyright, closing line. One section, two surfaces.

### Section ordering (final 9)

```
01 Hero          [Open]      paper
02 Manifesto     [Dark]      belacan
03 About         [Breathing] cream
04 Lifestyle     [Dense]     paper, full-bleed
05 Included      [Dense]     paper           <-- two Dense in a row, see note
06 People        [Breathing] belacan         <-- dominant, palm/cardamom dropped
07 Accommodation [Dark]      ink
08 Pricing       [Dense]     palm
09 Apply+Footer  [Breathing→Dark] paper→ink
```

Note on 04 → 05 (two Dense): allowed because 04 is media-only (no reading load) and 05 is text-only (no visual load). They're complementary modes of density, not the same beat. The page reads them as one extended Dense passage bracketed by Manifesto and People. If this still feels heavy in build, insert a `divider` band (8vh paper, mono caption only) between them — cheaper than a real section.

---

## Part 3 — Diff vs V1

- **Hero**: 3-photo collage → 1 photo full-bleed right. Drop polaroid frames, rotations, parallax. Drop bg chip already gone.
- **EmotionalIntro → Manifesto**: unchanged.
- **About**: drop inset overlay photo + 4px paper border + offset shadow. One photo only, sticky top.
- **Lifestyle**: cumin slab → paper full-bleed. 4-col grid stays; remove the caption "ROLL 03/04" framing flourish to one line.
- **Included**: 4-col 7+1 → 3-col 7+2 (period + meta). Heading band above grid.
- **People**: drop rotations + shadow + palm corner texture. Larger vertical padding to mark dominance. Bg stays belacan.
- **Accommodation**: cream → ink. Triptych → single 3/2 photo. 7/5 split.
- **Pricing**: drop "All tiers include" duplicate list; one-line summary instead.
- **Apply**: 4-up contact cards → vertical list. Form unchanged.
- **Footer**: merge into Apply section as ink-band tail. Saves one section break.

---

## Part 4 — Open questions

1. **People section card count**: spec assumes 4 cards (matches V1 content). If the operator wants the dominant section to feel heavier, alternative is **2 large cards (col-span-6 each, photo aspect 3/4) + 2 small below (col-span-3 each)** — a 2/2 hierarchy instead of 4-flat. Which?
2. **Hero photo full-bleed escape**: the photo bleeds past the container to the right viewport edge. Confirm this is the one allowed grid-break on the page (besides Lifestyle's full-bleed strip), or keep Hero contained at `max-w-7xl`.
3. **Section 04 ↔ 05 separation**: accept the two-Dense run as designed, or insert a thin paper divider band between them? Recommend accept; revisit only if the QA pass flags it as heavy.
