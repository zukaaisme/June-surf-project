// All image URLs in one place. Replace any URL here to swap photos site-wide.
// Format: images.unsplash.com/photo-{id}?w={width}&q={quality}&fit=crop&auto=format
// All photos verified 200 via curl -I as of 2026-05-09.

export const images = {
  // Hero collage — 3 photos per Section 3 spec (A anchor / B village / C accent)
  // A: lone surfer paddling out, atlantic, golden hour — polaroid 3/4
  heroAnchor: {
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=85&fit=crop&auto=format",
    alt: "Lone surfer paddling out into the Atlantic at golden hour",
  },
  // B: whitewashed wall, vivid blue door, Taghazout character — polaroid 4/5
  heroVillage: {
    src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=85&fit=crop&auto=format",
    alt: "Whitewashed wall and blue door, Taghazout fishing village",
  },
  // C: surf wax bar on a deck, close-up detail — raw photo 1/1
  heroAccent: {
    src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=85&fit=crop&auto=format",
    alt: "Surf wax bar close-up, board deck",
  },

  // Legacy keys — not rendered, preserved for type safety
  heroWave: {
    src: "https://images.unsplash.com/photo-1706007473856-14c727df7da5?w=900&q=85&fit=crop&auto=format",
    alt: "Atlantic wave breaking on a Moroccan point break",
  },
  heroCandy: {
    src: "https://images.unsplash.com/photo-1669542755488-879d80c10405?w=700&q=80&fit=crop&auto=format",
    alt: "Warm film scan of surfer on Moroccan beach at golden hour",
  },
  heroSurf: {
    src: "https://images.unsplash.com/photo-1741692052559-5e19fa9c035b?w=1200&q=85&fit=crop&auto=format",
    alt: "Morocco Atlantic coastline, surf village warm afternoon light",
  },
  heroRooftop: {
    src: "https://images.unsplash.com/photo-1533733740154-c5bb441ceee6?w=700&q=80&fit=crop&auto=format",
    alt: "Rooftop view over whitewashed buildings toward the ocean",
  },

  // About section — warm sun-lit subjects
  // aboutSide: surfer silhouette walking with board at fiery orange sunset, reflection on wet sand
  aboutSide: {
    src: "https://images.unsplash.com/photo-1773420656116-4b3b0b0c19da?w=900&q=85&fit=crop&auto=format",
    alt: "Surfer silhouette walking along the shoreline at fiery orange sunset, surfboard under arm",
  },
  // aboutRooftop: rooftop terrace at golden hour, cushions and open sky
  aboutRooftop: {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85&fit=crop&auto=format",
    alt: "Rooftop terrace at sunset, warm evening light",
  },

  // People — object polaroids (no faces): each person represented by their world
  // Hassan / The Cook: tagine pot, lid lifted, steam rising from hands
  hassan: {
    src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85&fit=crop&auto=format",
    alt: "Hands lifting the lid off a tagine, steam rising from the pot",
  },
  // Yassine / Surf Instructor: row of colorful surfboards at a surf shack, outdoor field
  yassine: {
    src: "https://images.unsplash.com/photo-1547955973-d7c7a6ec4970?w=600&q=85&fit=crop&auto=format",
    alt: "Row of colorful surfboards lined up at a surf shack, ready to ride",
  },
  // Karim / House Owner: close-up weathered blue wooden door with ornate Moroccan door knocker
  karim: {
    src: "https://images.unsplash.com/photo-1774449584144-a5622baad386?w=600&q=85&fit=crop&auto=format",
    alt: "Close-up of a weathered blue painted wooden door with ornate Moroccan door knocker",
  },
  // Lina / Logistics: notebook and old phone on a cafe table, analog
  lina: {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=85&fit=crop&auto=format",
    alt: "Open notebook and phone on a cafe table, pen resting on the page",
  },

  // Lifestyle collage — 8 candid moments per Section 4 spec
  // 1. tea pour close-up 1/1
  lifestyleTea: {
    src: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800&q=80&fit=crop&auto=format",
    alt: "Moroccan mint tea being poured into a glass, steam rising",
  },
  // 2. surfboards leaning on wall 4/5
  lifestyleSurfboards: {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&fit=crop&auto=format",
    alt: "Surfboards leaning against a whitewashed wall in morning light",
  },
  // 3. market spices 3/4
  lifestyleMarket: {
    src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80&fit=crop&auto=format",
    alt: "Moroccan spice market, pyramids of color and dried goods",
  },
  // 4. moroccan riad terrace, kilim cushions, terracotta walls, lanterns overhead
  lifestyleRooftop: {
    src: "https://images.unsplash.com/photo-1570133435529-62359fac701b?w=800&q=80&fit=crop&auto=format",
    alt: "Moroccan riad terrace in warm afternoon sun — low couch with kilim cushions, lanterns overhead",
  },
  // 5. man on vintage Vespa on dusty red dirt road with palms, golden hazy light
  lifestyleScooter: {
    src: "https://images.unsplash.com/photo-1770703740592-a2cde69b689b?w=800&q=80&fit=crop&auto=format",
    alt: "Man riding a vintage scooter on a dusty palm-lined coastal road, warm hazy light",
  },
  // 6. ocean horizon 1/1
  lifestyleOcean: {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&fit=crop&auto=format",
    alt: "Atlantic ocean horizon at dawn, flat gray light",
  },
  // 7. friends laughing at table 4/5
  lifestyleFriends: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&fit=crop&auto=format",
    alt: "Friends laughing together at a dinner table, candlelight",
  },
  // 8. coffee + cigarette 3/4
  lifestyleCoffee: {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fit=crop&auto=format",
    alt: "Espresso cup and ashtray on a cafe table, morning light",
  },

  // Accommodation — 3 photos per Section 6, captions match photo content
  // 1. Blue door: vivid blue arched door in Taghazout, Morocco — caption BLUE DOOR
  accomBlueDoor: {
    src: "https://images.unsplash.com/photo-1591299089822-9ea8fd3c8472?w=900&q=85&fit=crop&auto=format",
    alt: "Vivid blue arched door on a whitewashed Moroccan building, Taghazout",
  },
  // 2. Terracotta: close-up of warm orange Moroccan zellige/terracotta decorative tiles — caption TERRACOTTA
  accomTerracotta: {
    src: "https://images.unsplash.com/photo-1517574012247-6941b83050d5?w=900&q=85&fit=crop&auto=format",
    alt: "Close-up of warm terracotta orange Moroccan decorative tiles, intricate geometric pattern",
  },
  // 3. Rooftop: actual outdoor rooftop terrace with cushioned seating, open sky, ocean view — caption ROOFTOP
  accomRooftop: {
    src: "https://images.unsplash.com/photo-1705095605806-4b2936e90471?w=900&q=85&fit=crop&auto=format",
    alt: "Outdoor rooftop terrace with cushioned seating overlooking the ocean under open sky",
  },

  // Legacy accommodation keys — kept for type safety, not rendered
  accomRoom: {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85&fit=crop&auto=format",
    alt: "Room interior — whitewashed walls, simple furniture",
  },
  accomCourtyard: {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85&fit=crop&auto=format",
    alt: "Courtyard with blue door and plants",
  },

  // Ambient / section texture
  surfboard: {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&fit=crop&auto=format",
    alt: "Atlantic waves breaking on a point break",
  },
  market: {
    src: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=800&q=80&fit=crop&auto=format",
    alt: "Moroccan market with dried goods and warm colors",
  },
  waves: {
    src: "https://images.unsplash.com/photo-1741692293604-698a8943e862?w=1200&q=80&fit=crop&auto=format",
    alt: "Surf session — film scan mood, warm light",
  },
  texture: {
    src: "https://images.unsplash.com/photo-1677688013109-61dda1cfc53f?w=1200&q=60&fit=crop&auto=format",
    alt: "Warm Moroccan texture, terracotta tones",
  },
} as const;

export type ImageKey = keyof typeof images;
