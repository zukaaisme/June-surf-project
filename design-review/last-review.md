# Design review — V2 pass 2 — 2026-05-09

## Summary

V2 pass 2 lands clean. All four polish fixes verified in screenshots and code. Hero now reads 5/7 (photo column visibly taller than text — asymmetry restored). Included grid closes on a typographic display note (cell 8 promoted, cell 9 dropped — no more redundant mono blocks). Accommodation right column fills properly to the photo's bottom edge via the mono detail strip. Pricing summary copy now reads as a sentence, not internal numbering. Manifesto migrated to `<Section>` primitive — codebase consistency complete.

People decision (4 equal cards) is respected and **not** re-flagged. The operator chose flat-equal reading of the four collaborators over a 2/2 hierarchy. Lifestyle remains the heaviest visual moment of the page; that is now the operator's intended hierarchy, not drift.

**No P0. No P1. No new P2.** V2 is ship-ready.

---

## Resolved since pass 1

Pass-1 list had 5 items. Operator rejected #1 (People dominance — kept 4 equal). Remaining 4 verified:

### 1. Hero asymmetry: photo aspect 4/5 → 3/4 — RESOLVED ✓
**File:** `components/hero.tsx:73`
Photo is now `aspectRatio: "3/4"` at `lg:col-span-7`. Screenshot confirms: the photo column extends visibly past the bottom of the text column, restoring the felt 5/7 split. The empty paper region beside the photo is gone — text bottoms out, then bottom mono bar closes both columns at the same baseline.

### 2. Included grid: cell 8 promoted, cell 9 dropped — RESOLVED ✓
**File:** `components/included.tsx:97, 136–152`
Grid now contains 8 cells (7 trip items + 1 display close). Final cell renders `font-display text-h2` with "Still off-season. / Still quiet." instead of two redundant mono blocks. Hairline-border-top continues the 3-col rhythm; the cell sits with `flex items-end` so the typographic close anchors to the bottom — feels like a period at the end of a paragraph, not a stray label. Screenshot shows the 3+3+2 layout reading as "7 things and a quiet final note." Correct.

### 3. Accommodation detail strip — RESOLVED ✓
**File:** `components/accommodation.tsx:63–68`
Below the 50ch body, a mono line: `6 ROOMS · 2 TERRACES · ROOFTOP · KITCHEN · SALON` at `opacity-50 text-[var(--color-paper)]`. The right column now closes flush with the photo's bottom edge — no more empty ink area. Skeleton parity restored: index → heading → body → media → **detail** all present.

### 4. Polish batch — RESOLVED ✓
- **Hero bottom mono bar opacity 70 → 60.** Verified `components/hero.tsx:114, 117`. Sits in the same opacity register as other light-bg monos. ✓
- **Pricing summary copy.** `components/pricing.tsx:32` now reads "Same week, three places to sleep — everything else is included above." No more "section 05" internal numbering. The em-dash structure matches the page's voice. ✓
- **Manifesto → `<Section>` primitive.** `components/manifesto.tsx:23` uses `<Section bg="belacan" beat="dominant" className="overflow-hidden">`. No more inline `<section>` opt-out. Codebase is now 100% Section-driven. ✓

---

## Drift check — anything new break?

Walked the full screenshot stack (`desktop-FULL.png`, all section-level desktop and mobile crops). No new drift introduced by pass 2:

- Bg rhythm unchanged: paper → belacan → cream → paper → paper → belacan → ink → palm → paper→ink. ✓
- All sections still using `Section` primitive vertical padding tokens. ✓
- Mono opacity discipline still in 50/55/60 band on light, 50/55/60 on dark. ✓
- Photo treatment unified — `.photo` wrapper everywhere. ✓
- Section indices `NN / 09 — Title` consistent. ✓
- No hidden third grid. No new card variant. No rotation/parallax/slab-color regressions. ✓

The Included grid going from 9 → 8 cells does NOT break the 3×3 promise visually — the empty bottom-right slot reads as deliberate negative space, not as a missing tile, because the typographic close sits in cell 8 and the hairline border-top doesn't extend into the empty ninth slot. This is the cleanest of the three fix options proposed in pass 1.

---

## Section-by-section (pass 2 deltas only)

- **Hero** — photo column now tall enough to anchor right zone. Bottom mono bar opacity 60 reads quieter. Single CTA accepted as V2.1 simplification (spec was stale, not the implementation).
- **Manifesto** — primitive migration is invisible in screenshots (intended) but now consistent in code.
- **About** — unchanged, still correct.
- **Lifestyle** — unchanged, still the strongest visual moment.
- **Included** — closing cell 8 is the right move. The display "Still off-season. / Still quiet." feels like signing off the section in voice rather than meta-tagging it.
- **People** — kept 4-equal per operator decision. Respected.
- **Accommodation** — detail strip closes the right column. Best-balanced section on the page now.
- **Pricing** — summary line is human language now. Dates band still bottom-left orphaned (pass-1 #7, P2, deferred — not in pass-2 scope).
- **Apply + Footer** — unchanged, still cohesive.

---

## Open items (deferred from pass 1, NOT blocking ship)

These were P2 in pass 1 and remain P2. Not required for V2 ship; revisit in V2.1 polish:

- Pricing dates band orphaned bottom-left (pass 1 #7).
- Lifestyle mobile h-scroll vs grid-cols-2 (pass 1 #8).
- People dominance — explicitly rejected by operator. Not a future item.

---

## What's working — preserve

1. The 4-slot skeleton is now visible AND complete in every section (Accommodation was the last holdout — fixed).
2. The display close in Included cell 8 is a tiny but architecturally-significant move: it shows the system can use heading-scale type as a *closing voice*, not just a section opener. Worth remembering for future sections.
3. Pricing summary copy now matches the page's "second-person, plain-spoken" register (Hero "Live Morocco, not tourism." / Manifesto "Some places aren't on the map."). Keep this voice.
4. Hero photo aspect 3/4 + col-span-7 is now the canonical "single contained editorial photo" recipe — same shape used by Accommodation logic (3/2 there, 3/4 here, both fill their column). Don't unify them; the difference is correct.

---

## Verdict

**V2 is ship-ready.** All four planned fixes landed. No new drift. People dominance question is closed by operator decision, not unresolved.

Recommend committing on branch `v2`:

```
git add -A
git commit -m "v2 pass 2: hero asymmetry, included close, accommodation detail, polish batch"
```

Then merge `v2` → `main` when the operator is ready. No further design-review pass needed before merge.
