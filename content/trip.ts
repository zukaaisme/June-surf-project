// Source of truth: Figma file yLe2GVz177buM1WYfL4f7l, frame 8:2235.
// Texts pulled fresh from the 13 May 2026 audit. Figma typos fixed in code
// where they were obvious: TECHER -> TEACHER, Prefered -> Preferred.

const SLIDER_1_COUNT = 14;
const SLIDER_2_COUNT = 14;

// Slider strips serve compressed -mini JPEGs (~100KB each).
// Lightbox loads the full JPEG (~600KB) only when a thumbnail is clicked.
const buildPhotoList = (
  folder: "slider-1" | "slider-2",
  count: number,
  altPrefix: string,
) =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      src: `/figma/${folder}/photo-${n}-mini.jpg`,
      full: `/figma/${folder}/photo-${n}.jpg`,
      alt: `${altPrefix} ${n}`,
    };
  });

export const trip = {
  season: "Summer 2026",
  location: "Taghazout, Morocco",
  duration: "7 days",

  nearestDates: "22 – 28 June 2026",
  dates: [
    { label: "Wave 1", range: "22 – 28 June 2026" },
  ],

  // Pricing tiers — €600 / €650 / €800 per Figma 06-pricing (iter 3)
  pricingTiers: [
    {
      id: "dorm",
      name: "Dorm room",
      accommodation: "8-bed dormitory room.",
      price: 655,
      priceDisplay: "€655",
      perUnit: "/per person",
      currency: "EUR",
      description: "For travelers who like company and don't mind sharing space.",
      featured: false,
      photo: "/figma/pricing/tier-01.png",
    },
    {
      id: "shared",
      name: "Shared Room",
      accommodation: "4 single or 2 double beds in one room.",
      price: 725,
      priceDisplay: "€725",
      perUnit: "/per person",
      currency: "EUR",
      description: "Shared space, but with less people and a bit more privacy",
      featured: true,
      photo: "/figma/pricing/tier-02.png",
    },
    {
      id: "double",
      name: "Double Bed",
      accommodation: "A door you can close. Quiet mornings before surf.",
      price: 875,
      priceDisplay: "€875",
      perUnit: "/per person",
      currency: "EUR",
      description: "Your own room in the house, shared bathroom, ideal for couples",
      featured: false,
      photo: "/figma/pricing/tier-03.png",
    },
  ],

  // Program — 8 items, 4×2 grid. Order matches Figma top-line then bottom-line.
  program: [
    {
      icon: "seven_days" as const,
      title: "Seven days",
      body: "6 nights included. You can stay after the trip as long as you want by agreement with the owner.",
    },
    {
      icon: "food" as const,
      title: "Food",
      body: "Breakfasts & dinners at the house. Lunch cooked at home or in a cafe in the village or at the beach, there's a lot of them! Worth to try.",
    },
    {
      icon: "surf" as const,
      title: "Surf sessions",
      body: "5 surf lessons in the week with a local instructor. Equipment included & beginner friendly.",
    },
    {
      icon: "transfer" as const,
      title: "Transfer",
      body: "Agadir airport pickup, daily rides to the beach, depending where are the good waves. A trip to Paradise Valley.",
    },
    {
      icon: "place_to_stay" as const,
      title: "Place to stay",
      body: "Shared house or private room depending on your tier — both are real places.",
    },
    {
      icon: "community" as const,
      title: "Community",
      body: "A chance to meet not only locals, but like-minded travellers who look for adventures and meaningful connections.",
    },
    {
      icon: "season" as const,
      title: "Off-season",
      body: "Locals say that this year thanks to the rains there will still be waves for beginners and less tourists as a bonus.",
    },
    {
      icon: "activities" as const,
      title: "Activities",
      body: "3 sunrise yoga sessions, collective gatherings, thrifting, cinema, street walks and pics. Also leave some room for surprises we've planned.",
    },
  ],

  // Team — 4 people per Figma 05-team_section
  people: [
    {
      id: "zukaa",
      name: "Zukaa",
      role: "YOURS TRULY",
      bio: "Will be your friend, photographer and guide to my favourite spots.",
      photo: "/figma/team/person-04.png",
    },
    {
      id: "khalid",
      name: "Khalid",
      role: "OUR MANAGER aka ANGEL",
      bio: "Handles airport runs, bookings, and the WhatsApp chaos and just being there.",
      photo: "/figma/team/person-03.png",
    },
    {
      id: "hassan",
      name: "Hassan",
      role: "THE COOK",
      bio: "Will cook traditional recipes for you to have a great food experience.",
      photo: "/figma/team/person-01.png",
    },
    {
      id: "chajara",
      name: "Chajara",
      role: "OUR TEACHER",
      bio: "Your guide in the ocean and on the beach before every surf session.",
      photo: "/figma/team/person-02.png",
    },
  ],

  // About — Not_a cards
  aboutCards: [
    {
      title: "Not a marathon",
body: "Start the day with yoga, breakfast and surf to set the energy for the day. Join group activities if you want or use your initiative. We’re not here to rush.",
    },
    {
      title: "Not a resort",
body: "3-story house in Taghazout, Morocco owned by locals, with an Atlantic ocean-view rooftop. Near surf spots, the beach, local skatepark and places to go out.",
    },
    {
      title: "Not a checklist",
body: "Part of understanding how people live here is being open. To the weather, the people and the time around you. Just be spontaneous and trust the process.",
    },
  ],

  // Gallery sliders — 14 photos each.
  // `src` = -mini thumbnail (fast load on the strip).
  // `full` = full-res, served only when the lightbox opens.
  galleryPhotos: buildPhotoList("slider-1", SLIDER_1_COUNT, "Surf trip moment"),
  slider2Photos: buildPhotoList("slider-2", SLIDER_2_COUNT, "Taghazout life moment"),

  // Pricing section copy
  pricingHeadline: "Choose what fits you better",
  pricingSubhead:
    "All tiers include accommodation, daily meals, five surf sessions with local instructors, transport around the region, spontaneous activities, hidden spots, and the full slow-living Morocco experience. The only difference between the tiers is the type of room and living setup you choose.",

  // Program section copy
  programHeadline: "Everything you need.",
  programHeadlineLine2: "Nothing you don't.",

  // Team section copy
  teamHeadline: "Meet the Team",
  teamSubhead:
    "“I’m collaborating with Tazuri Surf house and inviting you to join spending a week there. I will be with and one of you. There’s a lot to discover!”",
  teamSubheadAttribution: "- Zukaa ✌️",

  // Apply / Contact section
  applyHeadline: "Nearest dates",
  applyHeadlineLine2: "22 – 28 June 2026",
  applySubhead:
    "If these dates don't work for you, feel free to apply anyway — we're putting together a second group for September–October 2026. Don't hesitate to ask any questions, I'm open.",

  // Footer
  footerHeadline: "Let's go on an adventure together!",
  footerDate: "June 2026 EDITION",
  footerCollaboration: "Send me a letter if you want to collaborate",
  footerEmail: "zukaaisme@gmail.com",
} as const;

export type ProgramIcon =
  | "seven_days"
  | "food"
  | "surf"
  | "transfer"
  | "place_to_stay"
  | "community"
  | "season"
  | "activities";
