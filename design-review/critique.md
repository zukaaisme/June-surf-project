# Surf Morocco Landing — Visual Critique (2026-05-09)

Captured from `http://localhost:3000` at 1440×900 desktop and 375×812 mobile. Each section described as observed.

## Operator's grievance (verbatim)

> «Как-то все потеряло дизайн, и он стал глючным [...] это просто код, без дизайна, потому что вместо структурирования системы мы получили сломанный дизайн.»

The system is now codified (palette tokens, type ramp, spacing scale, button/card variants) but the **composition** has broken. The page reads as a sum of correctly-styled fragments, not a single designed thing. Several sections have actual layout bugs.

## Brand context (already locked)

- **Real reference**: Tazuri Surfhouse, Tamraght, Morocco. Editorial / film / documentary mood.
- **Palette (10 spice tokens)**: paper #FFECB6, cream #F9CCAD, ink #681F24, cinnamon #C15C28, sriracha #EC5422, satay #D5A83A, cardamom #AEB479, cumin #C8D7D3, belacan #653651, anise #876046.
- **Fonts**: Bricolage Grotesque (display + body, weight 400/700/800) + Special Elite (typewriter mono, captions only).
- **Type ramp** (in `app/globals.css`): `.text-display` clamp(3.25, 8vw, 7rem) / `.text-h1` clamp(2.25, 5vw, 4rem) / `.text-h2` clamp(1.5, 2.6vw, 2rem) / body 17px / `.text-label` 15px / `.text-caption` 13px.
- **Spacing**: only Tailwind values mapping to 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 120 / 160 px. Section vertical rhythm `py-30 md:py-40`.
- **Buttons**: `.btn-primary` (cinnamon/paper), `.btn-secondary` (transparent/ink border), `.btn-on-dark` (paper bg).
- **Cards**: `.card`, `.card--polaroid`, `.card--dark`. Zero radius across the board.

## Section-by-section diagnostic (desktop 1440)

### 1. Hero (`components/hero.tsx`) — CRITICAL ISSUES
What I see:
- 4 photos absolute-positioned with rotations, scaled to 1.5× from previous pass.
- `Live Morocco, not tourism.` headline sits behind a `bg-paper/85` chip but the chip extends through 60% of viewport width while the headline only fills the left 50%. So the chip looks like a giant translucent rectangle.
- A surfer photo (top-right) overlaps the right edge of the headline.
- Subhead "Seven days in a fishing village..." starts behind a beach photo (left side photo of someone on sand). Roughly 30% of subhead text is unreadable because the photo overlaps it.
- Two CTAs `Apply` (cinnamon) and `View Program` (ghost border): both partially clipped by another photo overlapping at bottom-left.
- Mono captions at very bottom (`SURF MOROCCO — A SLOW TRIP. NOT A CAMP.` / `FILM 200`) collide with photo edges.
- Top-right `Apply` nav CTA has no contrast over the cream paper (cinnamon-on-paper is fine ratio-wise but visually muted).

Root cause: too many overlapping absolutely-positioned photos at scaled-up sizes, no zoning between text region and photo region. The intended "postcard collage" became "broken absolute layout".

### 2. EmotionalIntro (`components/emotional-intro.tsx`) — okay, weak
What I see:
- Full-width belacan (deep wine) section.
- Three lines stacked: "Some places aren't on the map. / Some trips don't fit a brochure. / This is one of those."
- All text occupies left ~50%. Right ~50% empty. Mono caption "TAMRAGHT, MOROCCO — WINTER 2026" floats lonely bottom-left.
- No visual element on the right — just empty wine field.

Issue: the section reads as half-finished. Either compose with a vertical photo strip on the right, or center the manifesto, or use a much smaller caption-style intro instead of a full belacan section.

### 3. About (`components/about.tsx`) — solid foundation
What I see:
- Two columns. Left: "Not a camp. / Not a resort. / Not a checklist." manifesto in display weight 800, then short body, then numbered list of 4 things people do.
- Right: tall vertical surf photo, looks heavily desaturated (almost monochrome).
- Mono header `04 / 10 — WHAT THIS ACTUALLY IS` top-left.

Issue: the photo's `.photo` class applies `filter: contrast(0.97) saturate(0.92)` but the underlying image is also chosen to be greyscale-ish. End result: too cold. Wants a warm-toned beach/surf shot to match the "tropical film" mood, not B&W.

### 4. LifestyleCollage (`components/lifestyle-collage.tsx`) — BROKEN LAYOUT
What I see: 5+ cream-peach colored rectangles in an irregular grid. NO photos visible — just cream solid blocks where photos should be.

Root cause confirmed via DOM inspection: each `<img>` inside the section has `displayWidth: 1440, displayHeight: 900` — i.e. each individual photo is being stretched to FULL viewport size. The grid cells render as cream because the `.photo` wrapper has `bg-cream` (the loading-state color) and the image is positioned absolutely outside the cell or not constrained.

Likely cause: `next/image` with `fill` mode requires the parent to have `position: relative` AND a defined aspect-ratio / explicit height. The lifestyle-collage parents have neither, so `fill` blows out to viewport.

### 5. Included (`components/included.tsx`) — decent, minor issues
What I see:
- `06 / 10 — WHAT'S INCLUDED` mono header.
- Headline `Everything you need. / Nothing you don't.` (good).
- 7 cards in 4-column grid, every other card translateY(+16px) for stagger.
- Each card: small SVG line-art icon, mono index `01`-`07`, title `text-h2`, body description.
- Subtle wave texture pattern in section background.

Issues:
- Stagger feels slightly chaotic — irregular without strong intent. Could be 2x4 with last card centered, or just remove stagger.
- "Off-season calm" card (07, last) is partially clipped at bottom of the visible 900px frame; suggests the section is running long because of stagger.
- `04 Local transport` icon (a van shape) reads slightly different in stroke weight from neighbors — handcraft inconsistency.

### 6. People (`components/people.tsx`) — WRONG PHOTO CONTENT
What I see:
- `07 / 10 — THE PEOPLE` mono header on belacan dark section.
- Headline `Who you'll meet.` paper text on belacan.
- 4 polaroid cards: Hassan / Yassine / Karim / Lina. Each: photo, name in display 700, role in mono caption, italic typewriter quote.

Issues:
- **Hassan** ("the cook"): clean studio headshot, model in shawl-collar sweater, black backdrop. Reads as actor/model agency portrait. Zero "cook" or "Morocco" or "warmth".
- **Yassine** ("surf instructor"): silhouetted figure on a wave from behind. Acceptable — at least surf-themed and atmospheric.
- **Karim** ("house owner"): pink-background portrait of woman with bun. Reads female + fashion editorial. Doesn't match name or role of "house owner who built it with his brothers".
- **Lina** ("logistics & organizer"): yoga class group photo with multiple women in tank tops. Reads as a yoga retreat ad. Doesn't read as one person.

Root cause: Unsplash query terms used were too generic ("candid surf morocco" returns model shoots that happen to have surfboards in them). Need much more specific recuration, OR drop the 4-portrait approach entirely and use group/candid shots without identifying individuals.

### 7. Accommodation (`components/accommodation.tsx`) — WRONG IMAGERY
What I see:
- `08 / 10 — THE HOUSE` mono header.
- 3 photos in a grid: a clean modern bedroom with framed prints (caption "ROOFTOP"), a tropical pool/wooden deck with palms (caption "ROOM"), a luxury resort poolside (caption "COURTYARD").
- Caption + body below: `An old house, redone slowly. / Whitewashed walls, blue doors, terracotta floors. A rooftop where everyone ends up at sundown.`

Issues:
- Captions are SCRAMBLED versus the photos: ROOFTOP caption sits on a bedroom photo, ROOM caption sits on a pool/deck photo, COURTYARD caption sits on a resort hotel.
- Photos read as Maldives / Bali / luxury resort — none of them say "Moroccan riad with whitewashed walls and blue doors".
- Copy is great, imagery is opposite of copy.

### 8. Pricing (`components/pricing.tsx`) — solid
What I see:
- Dark belacan section. `09 / 10 — PRICING`. Headline `Choose your space.` 
- Mono row `ALL TIERS INCLUDE: 01 SEVEN NIGHTS / 02 DAILY MEALS / ... / 07 OFF-SEASON CALM`
- Horizontal rule.
- 3 tier cards in a row: Shared Room €890 / Private Room €1,290 (with `MOST CHOSEN` quiet label) / Premium Stay €1,690.
- Each card: price in display, label, description, Apply button paper-on-dark style.

Verdict: this is the strongest section on the page. Hierarchy works, tier differentiation is visible without being aggressive, dark section provides cinematic break.

### 9. Apply (`components/apply-form.tsx`) — solid
What I see:
- `10 / 10 — APPLY`.
- 4-card row of direct contacts: Email / WhatsApp / Telegram / Instagram (each `.card`).
- Two-column layout below: left is `Six people per wave. / Three waves this season.` plus copy + wave dates. Right is form (Name / How to reach you / Anything to add) plus full-width cinnamon `Send application` button.

Verdict: works.

### 10. Footer (`components/footer.tsx`) — functional, weak
What I see:
- Belacan dark section. 3 columns: brand block (`Surf Morocco / MOROCCO · WINTER 2026`), Contact links (Instagram / Telegram / hello@), Ready? + paper-bg `Apply for a spot` CTA.
- Bottom row: `Morocco doesn't need tourists.` italic + `© 2026 Surf Morocco`.

Could be more cinematic (a single film-strip image, a wider closing line treatment) but functional.

## Mobile (375×812)

### Hero — CATASTROPHIC
- Photos overlap headline AND each other AND the buttons.
- "Apply" button bottom-left is half-covered by another photo.
- "View Program" button has "TAMRAGHT" caption text overlapping its right edge.
- Subhead "Seven days in a fishing village..." has a third photo plopped right on top of it, making half the words unreadable.
- This is the single biggest layout failure on the site.

### Included mobile — okay
- Stacks 1-column. Icons render. Cards readable.

### People mobile — content still wrong
- Cards stack 1-column at full width. Layout fine. Photos still corporate/wrong as on desktop.

## Priority of fixes (highest impact first)

1. **HERO** desktop and mobile — redesign the composition entirely. Either: (a) drop the absolute-positioned collage approach in favor of a clean grid-based collage where text and photos occupy non-overlapping zones, OR (b) keep collage but with rigorous z-index and headroom rules. Mobile must collapse to a clean stacked vertical mosaic, not collide.
2. **LifestyleCollage** — fix the broken `fill` usage so photos actually render at their grid cell sizes (likely needs explicit `aspect-ratio` on parents + proper relative positioning, or just switch from `fill` to `width/height` props with intrinsic sizing).
3. **Accommodation imagery** — replace the 3 photos with images that actually look like a Moroccan house: blue-doored riad courtyard, terracotta tile floor, whitewashed wall with surfboards, rooftop terrace with mint tea. Re-pair captions to photos.
4. **People imagery** — recurate with much more specific, non-corporate photos. Or pivot to a different format: 4 small candid scenes (a hand pouring tea, a board waxing close-up, hands on a steering wheel of a van, someone laughing through a beach scarf) labeled with names + roles, rather than 4 staring portraits.
5. **About photo** — swap to a warm tropical surf shot, not desaturated near-B&W.
6. **EmotionalIntro composition** — fill the empty right half (small vertical photo, or center the text).
7. **Included stagger** — either commit to the irregular pattern or drop it; current state reads accidental.

## What I'd like back from the designer

(a) A prioritized fix list confirming or amending the priorities above.
(b) A concrete redesign of the **Hero section** as either:
   - an inline HTML mockup (using the existing design tokens and class names) saved at `design-review/hero-mockup.html`, OR
   - a precise spec describing each element's grid placement, dimensions, z-order, rotation, and rules for desktop + mobile breakpoints.
(c) A composition rule for **LifestyleCollage** — exact grid (cols/rows, aspect ratios, gap), image count, and behavior on mobile (horizontal scroll vs. stacked).
(d) Specific Unsplash search queries (or alternate sourcing strategy) for People + Accommodation that will actually return Tamraght-/Morocco-real-house imagery.
(e) Whether any sections should be cut, merged, or reordered now that we've seen the result.

Don't write code. Produce a design document that fullstack-dev can implement deterministically.
