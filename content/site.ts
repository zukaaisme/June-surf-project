// Brand, contact, SEO meta, and hero copy — v3
// All copy from Figma node 8:2235 (file yLe2GVz177buM1WYfL4f7l), 13 May 2026 audit.

export const site = {
  name: "Surf Morocco",
  tagline: "An adventure. Not tourism.",

  // Hero handwritten SVG headline. Kept as plain text for sr-only fallback.
  heroHeadline: "An adventure. Not tourism.",

  // Hero subhead — unchanged in the latest figma pass.
  heroSubhead:
    "Six days in a fishing village. You surf when the swell comes, eat where the locals eat, and spend the rest of the time living a simple life. Enjoying the smell and sound of the ocean that creates memories itself.",

  // SEO
  seoTitle: "Surf Morocco — An adventure, not tourism. Summer 2026",
  seoDescription:
    "Six days in Taghazout, a fishing village on the Atlantic. Small group, real house, local food. 22 – 28 June 2026.",
  seoUrl: "https://zukaaisme.com",

  // Contact — Tazuri Surfhouse (the place we're collaborating with) instagram.
  instagram: "https://www.instagram.com/tazuri_surfhouse",
  telegram: "https://t.me/zukaaisme",

  // Location chips under the About slider. The village is Taghazout (not Tamraght — that was older copy).
  location: "Taghazout, Morocco",
  mapsUrl: "https://maps.app.goo.gl/HdSLiTpBRvUizQ1N6?g_st=ic",
  locationWikiUrl: "https://en.wikipedia.org/wiki/Taghazout",

  // The third chip points at the surf house instagram — separate from the brand instagram in case
  // these ever diverge.
  tazuriInstagramUrl: "https://www.instagram.com/tazuri_surfhouse",
} as const;
