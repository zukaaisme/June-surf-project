import type { Metadata } from "next";
import { Bricolage_Grotesque, Special_Elite, Covered_By_Your_Grace } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { site } from "@/content/site";
import { trip } from "@/content/trip";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["opsz"],
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-typewriter",
  display: "swap",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.seoDescription,
  metadataBase: new URL(site.seoUrl),
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    url: site.seoUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org structured data — Google can use this to render a rich event card with
// dates, location, and price range right in the SERP. Pulled from trip.ts so it stays
// in sync with the rest of the page.
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${site.name} — ${trip.season}`,
  description: site.seoDescription,
  startDate: "2026-06-22",
  endDate: "2026-06-28",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: trip.location,
    address: { "@type": "PostalAddress", addressCountry: "MA", addressLocality: "Taghazout" },
  },
  organizer: {
    "@type": "Person",
    name: "Zukaa",
    url: site.seoUrl,
  },
  offers: trip.pricingTiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price,
    priceCurrency: tier.currency,
    availability: "https://schema.org/InStock",
    url: `${site.seoUrl}/#apply`,
    validFrom: "2026-05-01",
  })),
  image: `${site.seoUrl}/opengraph-image.jpg`,
  url: site.seoUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${specialElite.variable} ${coveredByYourGrace.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body>
        <GrainOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
