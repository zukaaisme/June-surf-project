// Source of truth: Figma file yLe2GVz177buM1WYfL4f7l, frame 8:2235.

export const trip = {
  season: "Summer 2026",
  location: "Tamraght, Morocco",
  duration: "7 days",

  // Nearest dates — per Figma footer
  nearestDates: "22 June 2026",
  dates: [
    { label: "Wave 1", range: "22 June – 28 June, 2026" },
  ],

  // Pricing tiers — €600 / €650 / €800 per Figma 06-pricing (iter 2)
  pricingTiers: [
    {
      id: "dorm",
      name: "Dorm room",
      accommodation: "Bunk in a shared house room (4–6 people)",
      price: 600,
      priceDisplay: "€600",
      perUnit: "/per person",
      currency: "EUR",
      description: "For travelers who like company and don't mind sharing space.",
      featured: false,
      photo: "/figma/pricing/tier-01.png",
    },
    {
      id: "shared",
      name: "Shared Room",
      accommodation: "A door you can close. Quiet mornings before surf.",
      price: 650,
      priceDisplay: "€650",
      perUnit: "/per person",
      currency: "EUR",
      description: "Your own room in the house, shared bathroom.",
      featured: true,
      photo: "/figma/pricing/tier-02.png",
    },
    {
      id: "double",
      name: "Double Bed",
      accommodation: "A door you can close. Quiet mornings before surf.",
      price: 800,
      priceDisplay: "€800",
      perUnit: "/per couple",
      currency: "EUR",
      description: "For travelers who like company and don't mind sharing space.",
      featured: false,
      photo: "/figma/pricing/tier-03.png",
    },
  ],

  // Program — 8 items per Figma 03-program_section (4×2 grid)
  // Order matches Figma top-line then bottom-line.
  program: [
    {
      icon: "seven_days" as const,
      title: "Seven days",
      body: "6 nights included. Shared dorm or private double room, you choose. You can stay longer afterwards by agreement with the owner.",
    },
    {
      icon: "food" as const,
      title: "Food",
      body: "Breakfast at the house, lunch at the port or cooked together, dinner at the house.",
    },
    {
      icon: "surf" as const,
      title: "Surf sessions",
      body: "Guided, with a local instructor who knows what he's doing. Equipment included.",
    },
    {
      icon: "transfer" as const,
      title: "Transfer",
      body: "Airport pickup, daily rides to the beach depending on where the good waves are. A trip to Paradise Valley.",
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
      title: "Off season",
      body: "Locals say that this year, thanks to the rains, there will still be waves for beginners and fewer tourists as a bonus.",
    },
    {
      icon: "activities" as const,
      title: "Activities",
      body: "Movie nights, desert trip, morning yoga and other experiences can be organized depending on the group vibe.",
    },
  ],

  // Team — 4 people per Figma 05-team_section
  // photo paths point to public/figma/team/*.png
  people: [
    {
      id: "zukaa",
      name: "Zukaa",
      role: "YOURS TRULY",
      bio: "Will be your friend and photographer for the week, as well as showing my favourite spots.",
      photo: "/figma/team/person-04.png",
    },
    {
      id: "khalid",
      name: "Khalid",
      role: "OUR MANAGER aka ANGEL",
      bio: "Handles airport runs, bookings, the WhatsApp chaos, and just being there.",
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

  // Headings are tilted per Figma. Hover on the card straightens the heading
  // back to 0° via CSS transform — container height is fixed to prevent layout shift.
  aboutCards: [
    {
      title: "Not a marathon",
      rotate: -2,
      body: "Start the day with a delicious breakfast and surf to set the energy for the day, then have the rest of the afternoon for yourself. Join the group activities or use your own initiative.",
    },
    {
      title: "Not a resort",
      rotate: 1,
      body: "A 3-story house in Tamraght, Morocco, with an Atlantic ocean-view rooftop. Near surf spots, the beach, and the local skatepark.",
    },
    {
      title: "Not a checklist",
      rotate: -2,
      body: "Only group surf is on a schedule. For the rest, trust the process. We want to live a life, be spontaneous, and let things unfold.",
    },
  ],

  // Gallery slider 1 — first cluster (after About section)
  galleryPhotos: [
    { src: "/figma/gallery/photo-1.png", alt: "Tamraght beach at golden hour" },
    { src: "/figma/gallery/photo-2.png", alt: "Surf session on the Atlantic" },
    { src: "/figma/gallery/photo-3.png", alt: "Village street in Tamraght" },
    { src: "/figma/gallery/photo-4.png", alt: "House rooftop with ocean view" },
    { src: "/figma/gallery/photo-5.png", alt: "Local food at the port" },
    { src: "/figma/gallery/photo-6.png", alt: "Surfboards leaning on a wall" },
    { src: "/figma/gallery/photo-7.png", alt: "Atlantic horizon from the cliffs" },
  ],

  // Gallery slider 2 — second cluster (after Apply form). Different photos go in later;
  // for now mirrors slider 1.
  slider2Photos: [
    { src: "/figma/gallery/photo-1.png", alt: "Tamraght beach at golden hour" },
    { src: "/figma/gallery/photo-2.png", alt: "Surf session on the Atlantic" },
    { src: "/figma/gallery/photo-3.png", alt: "Village street in Tamraght" },
    { src: "/figma/gallery/photo-4.png", alt: "House rooftop with ocean view" },
    { src: "/figma/gallery/photo-5.png", alt: "Local food at the port" },
    { src: "/figma/gallery/photo-6.png", alt: "Surfboards leaning on a wall" },
    { src: "/figma/gallery/photo-7.png", alt: "Atlantic horizon from the cliffs" },
  ],

  // Pricing section copy
  pricingHeadline: "Choose what fits you better",
  pricingSubhead:
    "All tiers include accommodation, daily meals, five surf sessions with local instructors, transport around the region, hidden spots, and the full slow-living Morocco experience. The only difference between the tiers is the type of room and living setup you choose.",

  // Program section copy
  programHeadline: "Everything you need.",
  programHeadlineLine2: "Nothing you don't.",

  // Team section copy
  teamHeadline: "Meet the Team",
  teamSubhead:
    "“I’m collaborating with Tazuri Surf house and inviting you to join, spending a week there. I will be with each one of you. There’s a lot to discover!”",
  teamSubheadAttribution: "— Zukaa ✌️",

  // Apply / Contact section
  applyHeadline: "Nearest dates",
  applyHeadlineLine2: "24 June – 1 July",
  applySubhead:
    "If these dates don't work for you, feel free to apply anyway — we're putting together a second group for September–October 2026.",

  // Footer
  footerHeadline: "Let's go on an adventure together!",
  footerDate: "22 June 2026",
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
