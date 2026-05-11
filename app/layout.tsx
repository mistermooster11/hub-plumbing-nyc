import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const siteName = "Hub Plumbing & Mechanical";
const siteUrl  = "https://hub-plumbing-nyc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | NYC Licensed Plumbers — Same-Day Service`,
    template: `%s | ${siteName}`,
  },
  description:
    "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Water heaters, boilers, leak detection & remodeling. Red Carpet Service. Call (917) 634-8888.",
  keywords: [
    "NYC plumber",
    "Manhattan plumber",
    "Brooklyn plumber",
    "Queens plumber",
    "water heater repair NYC",
    "boiler service NYC",
    "leak detection NYC",
    "licensed plumber New York",
    "same day plumber NYC",
    "Hub Plumbing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | NYC Licensed Plumbers — Same-Day Service`,
    description:
      "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Water heaters, boilers, leak detection & remodeling. Red Carpet Service. Call (917) 634-8888.",
    url: siteUrl,
    // [TODO: Replace with a real OG image (1200x630) — upload to /public/og-image.jpg]
    images: [
      {
        url: "/images/NYC-Plumbers.png",
        width: 1200,
        height: 630,
        alt: "Hub Plumbing & Mechanical — Licensed NYC Plumbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | NYC Licensed Plumbers`,
    description:
      "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Red Carpet Service. Call (917) 634-8888.",
    // [TODO: Replace with real OG image]
    images: ["/images/NYC-Plumbers.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Hub Plumbing & Mechanical",
  url: siteUrl,
  telephone: "+19176348888",
  priceRange: "$$",
  image: `${siteUrl}/images/NYC-Plumbers.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "103 Charles Street",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10014",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7322,
    longitude: -74.004,
  },
  areaServed: [
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "The Bronx" },
    { "@type": "City", name: "Staten Island" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "NYC Master Plumber License #2305",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "NY State Certified Backflow Prevention Specialist #10068",
    },
  ],
  sameAs: [
    "https://www.facebook.com/pages/Hub-Plumbing-NYC/208105895896448",
    "https://twitter.com/hub_plumbing",
    "https://www.youtube.com/user/hubplumbingtest",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
