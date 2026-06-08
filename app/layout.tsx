import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = "https://hub-plumbing-nyc.vercel.app";
const siteName = "Hub Plumbing & Mechanical";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | NYC Licensed Plumbers — Same-Day Service`,
    template: `%s | ${siteName}`,
  },
  description:
    "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Drain repair, leak detection, water heaters, toilets & emergency plumbing. Red Carpet Service. Call (917) 634-8888.",
  keywords: [
    "NYC plumber",
    "Manhattan plumber",
    "Brooklyn plumber",
    "Queens plumber",
    "drain repair NYC",
    "water heater repair NYC",
    "leak detection NYC",
    "licensed plumber New York",
    "emergency plumber NYC",
    "Hub Plumbing",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | NYC Licensed Plumbers — Same-Day Service`,
    description:
      "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Red Carpet Service. Call (917) 634-8888.",
    url: siteUrl,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: `${siteName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | NYC Licensed Plumbers`,
    description: "Licensed NYC plumbers since 1999. Red Carpet Service. Call (917) 634-8888.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Hub Plumbing & Mechanical",
  "url": "https://hub-plumbing-nyc.vercel.app",
  "telephone": "+19176348888",
  "email": "info@hubplumbingnyc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "103 Charles Street",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10014",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7322,
    "longitude": -74.004,
  },
  "areaServed": [
    { "@type": "City", "name": "Manhattan" },
    { "@type": "City", "name": "Brooklyn" },
    { "@type": "City", "name": "Queens" },
    { "@type": "City", "name": "Bronx" },
    { "@type": "City", "name": "Staten Island" },
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59",
  },
  "priceRange": "$$",
  "foundingDate": "1999",
  "slogan": "Red Carpet Service",
  "hasCredential": "NYC Master Plumber License #2305",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="Hub Plumbing & Mechanical" expiryDate="June 20, 2026" trade="plumbers" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
