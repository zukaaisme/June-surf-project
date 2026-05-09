# Reference analysis — endel.io & basehabitation.com

Date: 2026-05-09
Operator-provided refs. Both editorial product/lifestyle sites with strong design discipline. Not surf camps — picked for **grid + design system** patterns, not UI components.

## Common patterns

| Principle | Endel | Base Habitation | Our landing |
|---|---|---|---|
| BG variety | near-monochrome + 1 accent | off-white + photo materials | 5 bg colors zigzag |
| Photos per section | 1 dominant | 1 dominant | 3-8 |
| Display : body ratio | ~2.8× | ~3× | 4-6× (stronger) |
| Section module repetition | single skeleton, 6 reps | image⟷text toggle | bespoke per section |
| Section padding | 60-100 px | 60-80 px | 120-160 px (more) |
| Color entry | via photography / 1 accent only | via materials in photos | via section BGs (drift) |
| Stat callouts | oversized numbers as trust signals | clean specs | none |
| CTA discipline | one primary repeated | one primary repeated | one primary, secondary "View Program" extra in hero |

## Diagnosis

The operator's grievance ("looks like code, not design") maps to **lack of modular consistency**. Each section was solved as its own design problem. References treat the WHOLE page as variations on one repeating beat.

The "too much beige" complaint is a symptom: we tried to fix monotony by ADDING bg colors, but refs achieve rhythm by **constraint** (1 dominant bg, sparingly broken by a single dark beat).

## 5 actionable changes

### 1. Reduce bg variety — 5 → 3
Current: paper, cream, palm, turquoise, belacan, ink (6 distinct).
Target: paper (everything), belacan-navy (2-3 contrast beats: EmotionalIntro, People, maybe Footer), 1 accent surface (cream OR palm — pick ONE for the lifted moments).

Where the current accents live and how they map:
- About cream → paper
- Accommodation cream → paper
- Lifestyle cumin → paper (photos carry the variety, not the bg)
- Pricing palm → keep (this is the single accent surface)
- Apply paper → paper
- Footer ink → ink (= plum)

Result: paper / belacan / palm / ink only. 4 colors, used decisively.

### 2. Establish ONE section module
Every section gets the same skeleton:
```
[mono index "NN / 09 — TITLE" — opacity 60]
[display heading, .text-h1]
[lead body, max 2 lines, opacity 70]
[hero element: 1 photo OR 1 stat OR 1 quote]
[detail block: list / cards / CTAs]
```

Variation lives only in the hero element type and detail block content. Spacing between blocks is identical: `mb-8` after index, `mb-6` after heading, `mb-12` before hero element.

### 3. One dominant photo per section
- **Hero**: keep photo A (surfer anchor) crisp on the right. Drop photos B and C. The collage was the wrong instinct — Endel/Base trust a single image.
- **Lifestyle**: 1 hero photo (full-bleed at top of section) + 4-photo film strip below. Not 8 equal grid cells.
- **Accommodation**: 1 dominant 4/5 photo (the rooftop) + 2 small `1/1` cards (door + tile). Not equal trio.
- **About**: keep current asymmetric 2-photo stack (this works).
- **People**: keep 4 polaroids (works).

### 4. Stat callout module (new)
Insert between About and Lifestyle:
```
SECTION 04 / 09 — BY THE NUMBERS

  6                7                5                3
  PEOPLE           NIGHTS           SURF DAYS        WAVES
  per wave         slow living      with locals      this season
```

Numbers at `.text-display` size, mono caption underneath. Pure typography section, no photos. Acts as visual rest point between the abstract manifesto and the photo-heavy gallery.

This bumps total sections to 11, renumbering needed. Keep current section order otherwise.

### 5. CTA discipline
Drop the secondary "View Program" button in the hero. References use ONE primary CTA repeated; secondary creates choice paralysis. The hero "Apply" + section index already say "this is the trip you're applying to".

Footer keeps "Apply for a spot" as it serves as final-conversion-anchor.

## Effort tiers

- **Small** (30 min): items 4 + 5. New stat module + drop secondary hero CTA.
- **Medium** (1 hr): items 1 + 4 + 5. Reduce bg variety + stat module + CTA cleanup.
- **Large** (2-3 hr agent time): all 5. Real shift from per-section to whole-page system. ux-designer should re-spec hero/lifestyle/accommodation before fullstack-dev implements.

## Recommendation

If shipping soon → **small** keeps the design improvements minimal and the current state stable.
If iterating further → **large** is what would actually answer the "code-driven, not design-driven" complaint. Items 1-3 alone would make the page read coherent.
