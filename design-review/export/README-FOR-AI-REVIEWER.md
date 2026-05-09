# Design audit request — Surf Morocco landing

You are reviewing a one-page promo landing for a 7-day slow-travel surf trip in Tamraght, Morocco. The product positioning is editorial / cinematic / film-photography / 90s-2000s surf culture, NOT startup, NOT luxury retreat.

The operator (himself a designer) feels the implementation lacks visual consistency and reads as "code, not design". Specific complaints:

1. **Pricing block sloppy**: spacing, wrappers were not properly recolored when the section background changed.
2. **Too much beige**: the page uses driftwood/cream as the dominant background across many sections. Beige should appear LESS — preferably only as accents on contrast-color sections.
3. **Inconsistency between sections**: each section was implemented in isolation, no shared visual language beyond design tokens. Layouts feel disconnected.
4. **Disconnected from real-world UI patterns**: the result lacks the rhythmic, intentional quality of well-designed travel/editorial sites.

## What to review

Files included:

- `page.html` — rendered HTML output of the live page (Next.js SSR + initial state). Contains all section markup, contact links, pricing, etc.
- `styles.css` — compiled Tailwind 4 CSS used by the running page.
- `source-globals.css` — design tokens, type ramp, spacing scale, button/card variants, base typography rules.
- `section.tsx` — the shared `<Section>` primitive that wraps every section with a `bg` variant.

## Locked design system (don't propose new tokens)

- **Palette** (10 spice→coastal-film tokens): paper/driftwood #D8C7AF, cream #EFE3CC, ink/plum #4A394B, cinnamon/coral #D96C4A, sriracha/deep-coral #C25A3D, satay/sand #D4B06A, cardamom/palm-green #78866B, cumin/turquoise #5FA7A7, belacan/navy #2F4754, anise (= ink) #4A394B.
- **Typography**: Bricolage Grotesque (display + body, weights 400/700/800) + Special Elite (typewriter mono, captions).
- **Type ramp**: 6 sizes — display, h1, h2, body 17px, label 15px, caption 13px. Defined as classes in `source-globals.css`.
- **Spacing scale**: 12 values mapping to Tailwind 1/2/3/4/6/8/12/16/20/24/30/40 (4–160px).
- **Components**: `.btn-primary` / `.btn-secondary` / `.btn-on-dark`, `.card` / `.card--polaroid` / `.card--dark`, `.photo` wrapper.
- **Section bg variants**: paper / cream / palm / turquoise / belacan / ink (see `section.tsx`).

## What we want from you

Do NOT redesign tokens, fonts, or palette. The brand identity is locked.

DO give us:

1. **Top 5 concrete visual issues**, each with: what's wrong + which section / element / class, why it weakens the design, how to fix it (specific Tailwind classes or CSS rules from the existing system).
2. **Section-by-section rhythm assessment**: is the bg-color sequence creating warm/cool variety or fatiguing the eye? Recommend specific bg swaps if needed (must use only the 6 existing Section variants).
3. **Cross-section consistency audit**: spacing rhythm between sections, heading-to-body relationships, mono-caption usage, list/grid behavior. Flag inconsistencies.
4. **Pricing block specifically**: it was just refactored. Tell us what's still off (or if it's now OK).
5. **What's actually working** — if anything reads well, name it so we don't break it.

Style: punchy, specific, design-literate. Reference real well-designed surf or editorial travel sites if it sharpens a point. Avoid hedging language ("might consider"). State what to change.

Output format: markdown with H2 per category and bullets. Under 1000 words.
