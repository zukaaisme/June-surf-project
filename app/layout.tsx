import type { Metadata } from "next";
import { Bricolage_Grotesque, Special_Elite, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { site } from "@/content/site";

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
      <body>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
