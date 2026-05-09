// All trip-specific content: dates, pricing, included items, people bios.
// Edit this file to update season details, prices, or team.

export const trip = {
  season: "Winter 2026",
  location: "Tamraght, Morocco",
  duration: "7 nights",

  dates: [
    { label: "Wave 1", range: "Jan 18 – Jan 25, 2026" },
    { label: "Wave 2", range: "Feb 1 – Feb 8, 2026" },
    { label: "Wave 3", range: "Feb 15 – Feb 22, 2026" },
  ],

  // Three pricing tiers. All include the same experience — only accommodation differs.
  pricingTiers: [
    {
      id: "shared",
      name: "Shared Room",
      accommodation: "Bunk in a shared house room (4–6 people)",
      price: 890,
      currency: "EUR",
      description: "For travelers who like company and don't mind sharing space.",
      featured: false,
    },
    {
      id: "private",
      name: "Private Room",
      accommodation: "Your own room in the house, shared bathroom",
      price: 1290,
      currency: "EUR",
      description: "A door you can close. Quiet mornings before surf.",
      featured: true,
    },
    {
      id: "premium",
      name: "Premium Stay",
      accommodation: "Private room with ensuite + sea view",
      price: 1690,
      currency: "EUR",
      description: "A little more space. A little more sky.",
      featured: false,
    },
  ],

  // Shared across all tiers
  pricingMeta: {
    deposit: "300 EUR deposit to hold your spot",
    spots: "6 people maximum per wave",
    deposit_note: "Balance due 30 days before arrival.",
  },

  included: [
    {
      index: "01",
      title: "Seven nights",
      body: "Shared house or private room depending on your tier — both are real places.",
    },
    {
      index: "02",
      title: "Daily meals",
      body: "Breakfast at the house, lunch at the port, dinner wherever the day leads.",
    },
    {
      index: "03",
      title: "Five surf sessions",
      body: "Guided, with a local instructor who knows every break from Anchor Point down.",
    },
    {
      index: "04",
      title: "Local transport",
      body: "Airport pickup, daily rides to the beach, one inland day trip to the mountains.",
    },
    {
      index: "05",
      title: "Hidden places",
      body: "A few spots we don't post online — a particular cafe, a particular viewpoint.",
    },
    {
      index: "06",
      title: "Community",
      body: "Six people who came alone, a few dinners together, no enforced social schedule.",
    },
    {
      index: "07",
      title: "Off-season calm",
      body: "January and February. No tour buses, cheaper everything, real weather.",
    },
  ],

  // The people who run and inhabit this place
  people: [
    {
      id: "hassan",
      name: "Hassan",
      role: "The Cook",
      bio: "Cooks for everyone. Knows every spice in the souk.",
      quote: "Food is how you understand a place.",
    },
    {
      id: "yassine",
      name: "Yassine",
      role: "Surf Instructor",
      bio: "Reads the swell better than the forecast app.",
      quote: "The best wave is always the next one.",
    },
    {
      id: "karim",
      name: "Karim",
      role: "House Owner",
      bio: "Built the place with his brothers ten years ago.",
      quote: "Every corner of this house has a story.",
    },
    {
      id: "lina",
      name: "Lina",
      role: "Logistics & Organizer",
      bio: "Handles airport runs, bookings, and the WhatsApp chaos.",
      quote: "If it can go wrong, I've already fixed it.",
    },
  ],

  // Manifesto lines — rendered staggered in About section
  manifesto: [
    "Not a camp.",
    "Not a resort.",
    "Not a checklist.",
  ],

  // Short version of activities — trimmed for the revised about section
  activities: [
    "Surf the same break three days in a row until it makes sense",
    "Walk to the point at dawn before anyone else arrives",
    "Eat lunch at the same port stall four days running",
    "Read a book start to finish for the first time in years",
  ],
} as const;
