# Design review — 2026-05-09 (pass 3)

## Summary

All five pass-2 cleanup items landed cleanly. No regressions. The page is ship-ready: section rhythm holds (paper → belacan → cream → cumin → paper → belacan → cream → palm → paper → ink), index sequence is intact, hierarchy ladders correctly, mono opacity discipline is consistent, photo content matches captions across all sections including Accommodation. Pricing now reads as a deliberate composition — three cream tiles on palm green, `MOST CHOSEN` mono caption visually grouped with the cinnamon top stripe sitting directly under it, padding generous enough for the six-element stack inside each card to breathe.

No P0. No P1. Two P2 polish items remain (Hero photo C at narrow desktop, Hero bottom mono bar slightly bright) and both were explicitly deferred by operator in pass 2. Nothing new has drifted in.

---

## Resolved since last review

1. **`accomRooftop` photo swap.** ✓ RESOLVED. Slot 3 now shows an outdoor terrace — cushioned bench, geometric rug pattern, open sky/sea on the right. Caption-from-image test passes: "ROOFTOP" reads from the photo alone. Pairs cleanly with slot 1 (BLUE DOOR exterior) and slot 2 (TERRACOTTA zellige close-up). The triptych now reads as exterior → detail → exterior.
2. **Pricing featured-tier accent moved from `border-left` to `border-top`.** ✓ RESOLVED. `components/pricing.tsx:55-57` confirms `borderTop: "4px solid var(--color-cinnamon)"`. Visually the cinnamon stripe sits directly under the `MOST CHOSEN` mono caption — they read as one typographic unit. Featured-tier hierarchy is now obvious from across the room without competing with the cream-on-palm contrast.
3. **Pricing tier card padding `p-6` → `p-8 md:p-10`.** ✓ RESOLVED. `components/pricing.tsx:51` confirms `p-8 md:p-10`. The six-element vertical stack (price h1 / per-person mono / tier h2 / accommodation mono / description body / CTA) now has air. Cards no longer feel packed.
4. **Pricing "All tiers include" indices opacity 50 → 65.** ✓ RESOLVED. `components/pricing.tsx:32` confirms `opacity-65`. The `01..08` numerals are now legible against the `opacity-70` item text without dominating. Index/item hierarchy reads correctly.
5. **Apply contact cards mono opacity 70 → 85.** ✓ RESOLVED. Mono on cumin now lifts to legible territory in the screenshot. The contact email/phone reads cleanly against the cumin field.

**Net: 5/5 fully resolved.**

---

## Top issues (priority order)

### P0
None.

### P1
None.

### P2 (deferred from pass 2 — no new drift)
- **Hero photo C (FILM 200) busyness at 1024–1180px.** Operator deferred. Hold.
- **Hero bottom mono bar `opacity-70` brighter than other monos.** Operator deferred. Hold.

No new issues found in pass 3.

---

## Section-by-section

- **Hero** — no change. Composition holds. P2 photo C and bottom-bar opacity unchanged.
- **EmotionalIntro** — clean, no change.
- **About** — clean, no change.
- **LifestyleCollage** — clean, no change.
- **Included** — clean, no change.
- **People** — clean, no change.
- **Accommodation** — fully resolved. Triptych BLUE DOOR / TERRACOTTA / ROOFTOP all match captions. The strongest content-driven set of photos on the page.
- **Pricing** — fully resolved. Top-border accent + generous card padding + readable index numbers. Three cream tiles on palm green with `MOST CHOSEN` cinnamon-stripe pairing on the middle tier. Reads deliberate, not improvised.
- **Apply** — fully resolved. Contact mono now WCAG-comfortable on cumin.
- **Footer** — clean, no change.

---

## What's working — preserve specifically

All items from pass 2 still apply. Adding pass-3 specifics:

- **Pricing featured-tier cinnamon `border-top` + `MOST CHOSEN` caption pairing.** The horizontal stripe under the mono label is the single best small move on the page. Don't refactor it back to a left border or to a different surface color.
- **Pricing card `p-8 md:p-10`.** Don't tighten this back. The cards earn the extra padding because of the dense six-element stack inside.
- **Pricing "All tiers include" indices at `opacity-65`.** This is the right spot — visible without dominating. Don't drift either direction.
- **Accommodation triptych content.** All three photos earn their captions. Don't re-randomize.
- **Apply contact mono `opacity-85`.** WCAG-comfortable. Don't reduce.

---

## Cross-section consistency

- **Spacing rhythm**: `Section py-[7.5rem] md:py-40` rule still enforced everywhere except deliberate exceptions (Intro `py-40 md:py-48`, Footer half-height). ✓
- **Heading→body**: display once → h1 every section opener → h2 for tier names + footer brand → body 17px. ✓
- **Mono opacity**: 50/55/60 band on dark bgs, 60-65 on light bgs, 65-70 for high-priority lists (pricing index now 65). Coherent. ✓
- **Card behavior**: `.card` + cream override + cinnamon top-border on featured tier reads consistently with the `.card` + paper bg pattern elsewhere. No drift.
- **Section index format**: `NN / 09 — Title`, em-dash, sequential. ✓
- **Bg alternation**: paper → belacan → cream → cumin → paper → belacan → cream → palm → paper → ink. True alternation, no warm-light stacking. ✓

---

## Next priorities

For fullstack-dev: **none blocking.** The page is ship-ready.

If operator wants optional polish later, the two deferred P2 items remain:
1. Hero photo C narrow-desktop overlap (1024–1180px window).
2. Hero bottom mono bar opacity 70 → 60.

Both are taste-level. Neither blocks shipping.
