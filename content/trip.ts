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
      description: "Good if you want company. Four to six people in the room.",
      featured: false,
    },
    {
      id: "private",
      name: "Private Room",
      accommodation: "Your own room in the house, shared bathroom",
      price: 1290,
      currency: "EUR",
      description: "Your own room. Shared bathroom, but you'll rarely queue.",
      featured: true,
    },
    {
      id: "premium",
      name: "Premium Stay",
      accommodation: "Private room with ensuite + sea view",
      price: 1690,
      currency: "EUR",
      description: "Private bathroom, sea view. More space if you need it.",
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
      body: "Shared house or private room, depending on your tier. Both have the same view of the street.",
    },
    {
      index: "02",
      title: "Daily meals",
      body: "Breakfast at the house at eight. Lunch at the port — usually sardines, sometimes tagine. Dinner wherever the day leads.",
    },
    {
      index: "03",
      title: "Five surf sessions",
      body: "With Yassine, who has surfed this coast since he was twelve. He knows every break from Anchor Point south.",
    },
    {
      index: "04",
      title: "Local transport",
      body: "Airport pickup from Agadir, daily rides to the beach, one day into the mountains — the Anti-Atlas, about an hour inland.",
    },
    {
      index: "05",
      title: "Hidden places",
      body: "A cafe near the main square that doesn't have a sign. A viewpoint above the village that takes about twenty minutes to reach.",
    },
    {
      index: "06",
      title: "Community",
      body: "Six people, usually traveling alone. A few dinners happen naturally. Nothing is mandatory.",
    },
    {
      index: "07",
      title: "Off-season calm",
      body: "January and February. The beaches are quiet, prices are lower, and some mornings you'll want a jacket.",
    },
  ],

  // The people who run and inhabit this place
  people: [
    {
      id: "hassan",
      name: "Hassan",
      role: "The Cook",
      bio: "Has been cooking here since the house opened. Goes to the souk most mornings.",
      quote: "The best part of the job is watching people try harira for the first time.",
    },
    {
      id: "yassine",
      name: "Yassine",
      role: "Surf Instructor",
      bio: "Has surfed this coast since he was twelve. Checks the swell at five in the morning.",
      quote: "Some weeks the swell is perfect. Some weeks we find other things to do.",
    },
    {
      id: "karim",
      name: "Karim",
      role: "House Owner",
      bio: "Built this house with his brothers. Has lived in Tamraght his whole life.",
      quote: "We didn't plan most of it. It grew.",
    },
    {
      id: "lina",
      name: "Lina",
      role: "Logistics & Organizer",
      bio: "Handles everything before and after you arrive — airport, bookings, the WhatsApp thread.",
      quote: "I'd rather sort something at midnight than have someone start their trip badly.",
    },
  ],

  // House details — rendered in Accommodation section detail strip
  house: {
    rooms: 6,
    terraces: 2,
    features: ["rooftop", "kitchen", "salon"],
  },

  // Manifesto lines — rendered staggered in About section
  manifesto: [
    "A house in a fishing village.",
    "A small group.",
    "Seven days.",
  ],

  // Short version of activities — trimmed for the revised about section
  activities: [
    "Surf the same break three days until it starts to make sense",
    "Walk out to the point before the fishing boats come back",
    "Eat at the same port stall enough times that they stop handing you a menu",
    "Finish a book",
  ],
} as const;
