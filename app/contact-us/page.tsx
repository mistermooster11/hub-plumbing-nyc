import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Plumbing Service in NYC",
  description:
    "Schedule same-day plumbing service with Hub Plumbing & Mechanical. Call (917) 634-8888 or use our online form. Serving Manhattan, Brooklyn & Queens. Lic. #2305.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/contact-us" },
  openGraph: {
    title: "Contact Hub Plumbing & Mechanical | Schedule Service in NYC",
    description: "Call (917) 634-8888 or message us online. Same-day service available across Manhattan, Brooklyn & Queens.",
    url: "https://hub-plumbing-nyc.vercel.app/contact-us",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
