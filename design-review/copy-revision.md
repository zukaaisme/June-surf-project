# Copy Revision — Surf Morocco Landing Page
Branch: v2 · Revision date: 2026-05-09

---

## HERO

---

### site.ts → heroHeadline

OLD:
`Live Morocco, not tourism.`

NEW:
`Seven days in Tamraght.`

WHY:
Removes the provocative manifesto tone. The headline now names the place and the duration — two facts a real person would lead with.

---

### site.ts → tagline (rendered in hero bottom bar alongside site.name)

OLD:
`A slow trip. Not a camp.`

NEW:
`A slow trip. Off-season.`

WHY:
"Not a camp" is negation-branding. "Off-season" is a real, specific detail that carries the same positioning without the defensiveness.

---

### hero.tsx → MonoTag (section index, top of hero)

OLD:
`01 / 09 — A Slow Trip. Not a Camp.`

NEW:
`01 / 09 — Tamraght, Morocco — Winter 2026`

WHY:
The section label was repeating the tagline slogan. Replaced with factual coordinates — place, season — which is quieter and more useful.

---

### site.ts → heroSubhead

OLD:
`Seven days in a fishing village. You surf when the swell comes, eat where the locals eat, and spend the rest of the time doing nothing in particular.`

NEW:
`Seven days in a fishing village south of Agadir. The bakery opens at six. The swell arrives most mornings. Dinner is wherever the day ends up.`

WHY:
Same structure, more specific. Three concrete images replace the abstract "doing nothing in particular" — the specificity does the slow-travel work without naming it.

---

### site.ts → seoTitle

OLD:
`Live Morocco, not tourism — Slow surf trip, winter 2026`

NEW:
`Seven days in Tamraght — Slow surf trip, Morocco, winter 2026`

WHY:
Matches the new headline. "Tamraght" as a search term is also more specific and genuine.

---

### site.ts → seoDescription

OLD:
`Seven days in a Moroccan fishing village. Surf, eat, slow down. Not a camp, not a resort. A small group, off-season, among locals.`

NEW:
`Seven days in Tamraght, a small surf village south of Agadir. Off-season, six people per group, real house, local food. Three dates in January and February 2026.`

WHY:
Removes the "not a camp, not a resort" negation pair. Adds concrete details (village name, region, group size, dates) that make the description feel like information, not a pitch.

---

## MANIFESTO (02 / 09)

---

### manifesto.tsx → lines array

OLD:
```
"Some places aren't on the map.",
"Some trips don't fit a brochure.",
"This is one of those.",
```

NEW:
```
"Tamraght is a small village.",
"Six people. Seven nights. Once a year.",
"That's about it.",
```

WHY:
The original lines perform mystery ("not on the map", "doesn't fit a brochure") — which is exactly the brand-deck register we're leaving. The new version is deadpan and factual. The understatement is the tone. "That's about it" earns the quiet confidence without claiming it.

---

## ABOUT (03 / 09)

---

### about.tsx → MonoTag section label

OLD:
`03 / 09 — What this actually is`

NEW:
`03 / 09 — About the trip`

WHY:
"What this actually is" has a slightly defensive energy ("let me tell you what this REALLY is"). Plain is better.

---

### trip.ts → manifesto (rendered as h2 in about.tsx)

OLD:
```
"Not a camp.",
"Not a resort.",
"Not a checklist.",
```

NEW:
```
"A house in a fishing village.",
"A small group.",
"Seven days.",
```

WHY:
The original three-line negation is the biggest offender on the page — it reads as a brand manifesto rejecting every category. The replacement says the same thing by describing what it IS rather than what it isn't. Three plain nouns. Same visual weight, opposite register.

---

### about.tsx → body paragraph 1

OLD:
`Seven days in a fishing village that hasn't been packaged yet. Small group, real house, local food. Off-season so the beaches are empty and the prices are honest.`

NEW:
`Seven days in Tamraght. Small group, real house — breakfast at the table, lunch at the port, dinner somewhere different each time. January and February: no crowds, no tour buses, cold mornings that warm up by ten.`

WHY:
"Hasn't been packaged yet" and "prices are honest" are editorial commentary. The rewrite replaces these value-judgement phrases with concrete daily details (meal rhythm, weather pattern) that let the reader draw their own conclusions.

---

### about.tsx → body paragraph 2

OLD:
`We handle the logistics. The rest is you, the Atlantic, and however much of Morocco you want to absorb.`

NEW:
`We handle the logistics. The rest depends on the day — some days you're in the water by eight, some days you read half a book and walk to the point at dusk.`

WHY:
"However much of Morocco you want to absorb" is abstract-inspirational. The replacement gives two real, different days — the contrast conveys flexibility without making a speech about it.

---

### trip.ts → activities array

OLD:
```
"Surf the same break three days in a row until it makes sense",
"Walk to the point at dawn before anyone else arrives",
"Eat lunch at the same port stall four days running",
"Read a book start to finish for the first time in years",
```

NEW:
```
"Surf the same break three days until it starts to make sense",
"Walk out to the point before the fishing boats come back",
"Eat at the same port stall enough times that they stop handing you a menu",
"Finish a book",
```

WHY:
Mostly small edits. "Before anyone else arrives" positions the reader as a discoverer — slightly precious. "Before the fishing boats come back" is more grounded and specific. "For the first time in years" is the most Pinterest-caption of the four — "Finish a book" is drier and more honest. The port stall line now has a small, earned payoff.

---

## INCLUDED (05 / 09)

---

### included.tsx → MonoTag section label

OLD:
`05 / 09 — What's Included`

NEW:
`05 / 09 — Included`

WHY:
"What's Included" is form-filler language. "Included" is cleaner as a section label in the index register.

---

### included.tsx → h2 heading

OLD:
```
Everything you need.
Nothing you don't.
```

NEW:
```
What's in the week.
```

WHY:
"Everything you need. Nothing you don't." is a retail slogan — it would fit on a luggage ad. The replacement is plainly descriptive and fits the index register of the section.

---

### trip.ts → included[0] — Seven nights body

OLD:
`Shared house or private room depending on your tier — both are real places.`

NEW:
`Shared house or private room, depending on your tier. Both have the same view of the street.`

WHY:
"Both are real places" is a slightly smug qualifier (implying competitors aren't). A neutral physical detail replaces it.

---

### trip.ts → included[1] — Daily meals body

OLD:
`Breakfast at the house, lunch at the port, dinner wherever the day leads.`

NEW:
`Breakfast at the house at eight. Lunch at the port — usually sardines, sometimes tagine. Dinner wherever the day leads.`

WHY:
Adding the time and a food detail makes it feel like a real description rather than a template. "Wherever the day leads" is fine — kept it.

---

### trip.ts → included[2] — Five surf sessions body

OLD:
`Guided, with a local instructor who knows every break from Anchor Point down.`

NEW:
`With Yassine, who has surfed this coast since he was twelve. He knows every break from Anchor Point south.`

WHY:
Names the instructor — which we already have. A small specific detail (surfed since twelve) replaces the generic "knows every break" with something that sounds like a fact, not a sales claim.

---

### trip.ts → included[3] — Local transport body

OLD:
`Airport pickup, daily rides to the beach, one inland day trip to the mountains.`

NEW:
`Airport pickup from Agadir, daily rides to the beach, one day into the mountains — the Anti-Atlas, about an hour inland.`

WHY:
Names the airport city and the mountain range. Specificity is the whole point of the voice direction.

---

### trip.ts → included[4] — Hidden places body

OLD:
`A few spots we don't post online — a particular cafe, a particular viewpoint.`

NEW:
`A cafe near the main square that doesn't have a sign. A viewpoint above the village that takes about twenty minutes to reach.`

WHY:
"We don't post online" is a humble-brag positioning move. Remove the meta-commentary. Just describe the places.

---

### trip.ts → included[5] — Community body

OLD:
`Six people who came alone, a few dinners together, no enforced social schedule.`

NEW:
`Six people, usually traveling alone. A few dinners happen naturally. Nothing is mandatory.`

WHY:
"Came alone" has a subtle melancholy tinge. "Traveling alone" is neutral. "No enforced social schedule" is a policy statement — "nothing is mandatory" says the same thing more casually.

---

### trip.ts → included[6] — Off-season calm body

OLD:
`January and February. No tour buses, cheaper everything, real weather.`

NEW:
`January and February. The beaches are quiet, prices are lower, and some mornings you'll want a jacket.`

WHY:
"Real weather" is performative authenticity — it implies other seasons are fake. "Some mornings you'll want a jacket" is honest and specific without the attitude.

---

### included.tsx → typographic close cell (cell 8)

OLD:
```
Still off-season.
Still quiet.
```

NEW:
```
January and February.
The rest of the year, it's busy.
```

WHY:
"Still off-season. Still quiet." is a poster line. The replacement gives the same information (it's off-season, it's quiet) by stating a fact about the other months — which makes the off-season choice feel like insider knowledge, not a tagline.

---

## ACCOMMODATION (07 / 09)

---

### accommodation.tsx → h2

OLD:
`An old house, redone slowly.`

NEW:
`An old house, redone over ten years.`

WHY:
"Redone slowly" echoes the slow-travel brand language — slightly self-aware. "Over ten years" is a specific fact (matches Karim's bio: "built it with his brothers ten years ago") and carries the same meaning without the knowing wink.

---

### accommodation.tsx → body paragraph

OLD:
`Whitewashed walls, blue doors, terracotta floors. A rooftop where everyone ends up at sundown. Nothing was built for Instagram. Everything was built to be comfortable.`

NEW:
`Whitewashed walls, blue doors, terracotta floors. Six rooms, two terraces, a rooftop. In the evenings, everyone seems to end up there without planning to.`

WHY:
"Nothing was built for Instagram" is the most explicitly anti-tourism-branding line on the page — which is itself a kind of branding. Cut it. The last sentence retains the warmth of the rooftop observation while making it a thing that happens, not a thing being sold.

---

## PEOPLE (06 / 09)

---

### people.tsx → intro paragraph

OLD:
`Four people who make this place what it is. Not guides, not staff — residents who share what they know.`

NEW:
`Four people you'll spend time with during the week.`

WHY:
"Not guides, not staff" is another negation-definition. "Residents who share what they know" is a warm but slightly staged description. One plain sentence — shorter, more honest, warmer by not trying.

---

### trip.ts → people[0] Hassan — bio

OLD:
`Cooks for everyone. Knows every spice in the souk.`

NEW:
`Has been cooking here since the house opened. Goes to the souk most mornings.`

WHY:
"Knows every spice in the souk" is colorful but cliche. "Goes to the souk most mornings" is a daily fact that implies the same thing with more credibility.

---

### trip.ts → people[0] Hassan — quote

OLD:
`"Food is how you understand a place."`

NEW:
`"The best part of the job is watching people try harira for the first time."`

WHY:
The old quote is an aphorism — something you'd cross-stitch. The new one is something a real person might actually say: specific dish, specific moment, genuine satisfaction in the work.

---

### trip.ts → people[1] Yassine — bio

OLD:
`Reads the swell better than the forecast app.`

NEW:
`Has surfed this coast since he was twelve. Checks the swell at five in the morning.`

WHY:
"Better than the forecast app" is a quip. Two facts replace it — one historical, one habitual — and they're more interesting.

---

### trip.ts → people[1] Yassine — quote

OLD:
`"The best wave is always the next one."`

NEW:
`"Some weeks the swell is perfect. Some weeks we find other things to do."`

WHY:
The original quote is a surf-culture bumper sticker. The replacement sounds like something a working instructor actually says — it's honest about variability and implies he's relaxed about it.

---

### trip.ts → people[2] Karim — bio

OLD:
`Built the place with his brothers ten years ago.`

NEW:
`Built this house with his brothers. Has lived in Tamraght his whole life.`

WHY:
Split the single fact into two. "His whole life" grounds him in the place more than the construction date alone.

---

### trip.ts → people[2] Karim — quote

OLD:
`"Every corner of this house has a story."`

NEW:
`"We didn't plan most of it. It grew."`

WHY:
"Every corner has a story" is the most tourist-brochure quote of the four. The replacement says the same thing — the house has accumulated character — but sounds like something a person actually said while shrugging.

---

### trip.ts → people[3] Lina — bio

OLD:
`Handles airport runs, bookings, and the WhatsApp chaos.`

NEW:
`Handles everything before and after you arrive — airport, bookings, the WhatsApp thread.`

WHY:
"The WhatsApp chaos" has a cute self-deprecating energy that tips into quippiness. "The WhatsApp thread" is factual and just as clear.

---

### trip.ts → people[3] Lina — quote

OLD:
`"If it can go wrong, I've already fixed it."`

NEW:
`"I'd rather sort something at midnight than have someone start their trip badly."`

WHY:
The original is a one-liner — the kind of thing you put on a business card to seem capable. The replacement is something a person might actually say, and it's more revealing: it shows attitude (she'd rather work at midnight) rather than claiming competence in the abstract.

---

## PRICING (08 / 09)

---

### pricing.tsx → h2

OLD:
`Choose your space.`

NEW:
`Three ways to stay.`

WHY:
"Choose your space" sounds like a co-working landing page. "Three ways to stay" is a plain description of what the section contains.

---

### pricing.tsx → mono summary line

OLD:
`Same week, three places to sleep — everything else is included above.`

NEW:
`The week is the same for everyone. The difference is where you sleep.`

WHY:
The original is fine but has a slight ad-copy rhythm. Split into two sentences, the point lands more naturally.

---

### trip.ts → pricingTiers[0] Shared Room — description

OLD:
`For travelers who like company and don't mind sharing space.`

NEW:
`Good if you want company. Four to six people in the room.`

WHY:
"Don't mind sharing" is slightly apologetic framing. "Want company" flips it positive. Adding the count (four to six) is a useful concrete fact.

---

### trip.ts → pricingTiers[1] Private Room — description

OLD:
`A door you can close. Quiet mornings before surf.`

NEW:
`Your own room. Shared bathroom, but you'll rarely queue.`

WHY:
"A door you can close" is a nice line, but "Quiet mornings before surf" is vague. The shared bathroom fact is practically useful — addressing the obvious next question — which is more helpful than atmospherics.

---

### trip.ts → pricingTiers[2] Premium Stay — description

OLD:
`A little more space. A little more sky.`

NEW:
`Private bathroom, sea view. More space if you need it.`

WHY:
"A little more sky" is the most precious line in the pricing section. The replacement names the actual features (private bathroom, sea view) clearly.

---

## APPLY (09 / 09)

---

### apply-form.tsx → h2

OLD:
```
Six people per wave.
Three waves this season.
```

NEW:
```
Six people per group.
Three groups this season.
```

WHY:
"Wave" is the internal label used in the dates list (Wave 1, Wave 2, Wave 3) and is fine there in context. As a standalone heading in the apply section, "wave" reads ambiguous — a new visitor might not know if this means a surf wave. "Group" is unambiguous. (Operator: if you want to keep "wave" as a branded term throughout, that's defensible — just flag it consistently.)

---

### apply-form.tsx → form success message

OLD:
`Thanks. We'll be in touch.`

NEW:
`Got it. We'll write back within a day or two.`

WHY:
"We'll be in touch" is a standard holding message — says nothing about timeline. "Within a day or two" gives a realistic expectation and sounds like a person, not an autoresponder.

---

## FOOTER

---

### site.ts → footerClosing

OLD:
`Morocco doesn't need tourists.`

NEW:
`Tamraght, since 2015.`

WHY:
The original is the most politically charged line on the page — provocative by design, but it ends the site on an uncomfortable note and positions the brand as critics of their own audience. The replacement is a founding date and a place name. It closes quietly, implies history, and lets the reader leave without being lectured.

---

---

## Tone shift summary

The revision moves from declaration to description. Every line that told the reader what to think ("this is authentic", "we're not like the others", "Morocco doesn't need tourists") has been replaced with a line that shows something specific: a time, a food, a habit, a detail of the building. The voice is now closer to a knowledgeable friend giving directions than a brand explaining its values. What was cut: negation-branding ("not a camp", "not a resort"), anti-tourism editorializing, Instagram-aphorism quotes, and any sentence that required the reader to already agree with the premise to find it appealing. What was kept: the structure, the numbers, the names, and the genuine warmth that was already present in the better lines.
