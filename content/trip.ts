// All trip-specific content: dates, pricing, included items, people bios — V3
// Prices and dates updated per Figma/operator spec.

export const trip = {
  season: "Summer 2026",
  location: "Tamraght, Morocco",
  duration: "7 days",

  // Nearest dates — per Figma apply section
  nearestDates: "24 June – 1 July",
  dates: [
    { label: "Wave 1", range: "24 June – 1 July, 2026" },
  ],

  // Pricing tiers — prices per Figma: €800 / €960 / €1400
  pricingTiers: [
    {
      id: "dorm",
      name: "Dorm Room",
      accommodation: "Bunk in a shared house room (4–6 people)",
      price: 800,
      priceDisplay: "€800",
      perUnit: "/per person",
      currency: "EUR",
      description: "For travelers who like company and don't mind sharing space.",
      featured: false,
    },
    {
      id: "shared",
      name: "Shared Room",
      accommodation: "A door you can close. Quiet mornings before surf.",
      price: 960,
      priceDisplay: "€960",
      perUnit: "/per person",
      currency: "EUR",
      description: "Your own room in the house, shared bathroom.",
      featured: true,
    },
    {
      id: "double",
      name: "Double Bed",
      accommodation: "Private room with double bed",
      price: 1400,
      priceDisplay: "€1400",
      perUnit: "/per couple",
      currency: "EUR",
      description: "Private double room. The most space, the quietest setup.",
      featured: false,
    },
  ],

  // Included — 7 items per Figma icon grid
  included: [
    {
      icon: "seven_days" as const,
      title: "Seven days",
      body: "Shared house or private room depending on your tier — both are real places.",
    },
    {
      icon: "food" as const,
      title: "Food",
      body: "Breakfast at the house, lunch at the port, dinner wherever the day leads.",
    },
    {
      icon: "surf" as const,
      title: "Surf sessions",
      body: "Guided, with a local instructor who knows every break from Anchor Point down.",
    },
    {
      icon: "transfer" as const,
      title: "Transfer",
      body: "Airport pickup, daily rides to the beach, one inland day trip to the mountains.",
    },
    {
      icon: "place_to_stay" as const,
      title: "Place to stay",
      body: "Shared house or private room depending on your tier — both are real places.",
    },
    {
      icon: "community" as const,
      title: "Community",
      body: "Breakfast at the house, lunch at the port, dinner wherever the day leads.",
    },
    {
      icon: "season" as const,
      title: "Off-season calm",
      body: "Guided, with a local instructor who knows every break from Anchor Point down.",
    },
  ],

  // People — per Figma cards
  // photoKey maps to content/images.ts keys for per-person photos
  people: [
    {
      id: "hassan",
      name: "Hassan",
      role: "The Cook",
      bio: "Cooks for everyone. Knows every spice in the souk.",
      quote: "Food is how you understand a place.",
      photoKey: "hassan" as const,
    },
    {
      id: "yassine",
      name: "Yassine",
      role: "The Instructor",
      bio: "Reads the swell better than the forecast app.",
      quote: "The best wave is always the next one.",
      photoKey: "yassine" as const,
    },
    {
      id: "karim",
      name: "Karim",
      role: "The Host",
      bio: "Built the place with his brothers ten years ago.",
      quote: "Food is how you understand a place.",
      photoKey: "karim" as const,
    },
    {
      id: "zuka",
      name: "Zuka",
      role: "The Fixer",
      bio: "Handles airport runs, bookings, and the WhatsApp chaos.",
      quote: "If it can go wrong, I've already fixed it.",
      photoKey: "lina" as const,
    },
  ],

  // About section — 3-column cards
  aboutCards: [
    {
      title: "Not a resort",
      body: "Seven days in a fishing village that hasn't been packaged yet. Small group, real house, local food. Off-season so the beaches are empty and the prices are honest.",
    },
    {
      title: "Not a checklist",
      body: "Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.",
    },
    {
      title: "Not a checklist",
      body: "Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.",
    },
    {
      title: "Not a checklist",
      body: "Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.",
    },
  ],

  // Pricing section copy
  pricingHeadline: "Choose what fits you better",
  pricingSubhead: "All tiers include accommodation, daily meals, five surf sessions with local instructors, transport around the region, hidden spots, and the full slow-living Morocco experience. The only difference between the tiers is the type of room and living setup you choose.",

  // Apply section
  applyHeadline: "Nearest dates: 24 June – 1 July",
  applySubhead: "We handle the logistics. The rest is you, the Atlantic, and however much of Morocco you want to absorb.",
} as const;

export type IncludedIcon = "seven_days" | "food" | "surf" | "transfer" | "place_to_stay" | "community" | "season";
