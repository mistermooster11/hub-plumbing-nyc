import type { Metadata } from "next";
import Script from "next/script";
import GeneralFaqsClient from "./GeneralFaqsClient";

export const metadata: Metadata = {
  title: "Plumbing FAQs | Hub Plumbing & Mechanical NYC",
  description:
    "Answers to common questions about Hub Plumbing's services, licensing, upfront pricing, and service area. NYC Master Plumber Lic. #2305. Same-day service available.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/general-faqs" },
  openGraph: {
    title: "Plumbing FAQs | Hub Plumbing & Mechanical NYC",
    description: "Get answers about response times, pricing, licensing, and our service area across Manhattan, Brooklyn & Queens.",
    url: "https://hub-plumbing-nyc.vercel.app/general-faqs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you get here?", acceptedAnswer: { "@type": "Answer", text: "We offer same-day scheduling and available emergency service throughout Manhattan, Brooklyn, and Queens. Call (917) 634-8888 to speak with a real, in-house operator." } },
    { "@type": "Question", name: "Do you give upfront pricing?", acceptedAnswer: { "@type": "Answer", text: "Always. Our technicians diagnose the issue, explain the solution in plain language, and give you the price before any work begins. No surprise invoices." } },
    { "@type": "Question", name: "Are you licensed and insured?", acceptedAnswer: { "@type": "Answer", text: "Yes. Hub Plumbing & Mechanical holds a New York City Master Plumber License (Lic. #2305) and is a New York State Certified Backflow Prevention Specialist (Cert. #10068). All work is fully insured and guaranteed." } },
    { "@type": "Question", name: "Can you help with NYC plumbing code violations?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We handle the full process — assessment, correction, permit filing, inspections, and signoffs with the relevant NYC agencies." } },
    { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve Manhattan, Brooklyn, Queens, The Bronx, and Staten Island — all neighborhoods, all five boroughs." } },
    { "@type": "Question", name: "What is Red Carpet Service?", acceptedAnswer: { "@type": "Answer", text: "Red Carpet Service is the Hub Plumbing standard — clean uniforms, ID badges, shoe covers, full cleanup after every job. Featured in The Celebrity Experience as a model for customer loyalty." } },
    { "@type": "Question", name: "Do you handle water heater repair and installation?", acceptedAnswer: { "@type": "Answer", text: "Yes — all types: tank, electric, power vent, and tankless water heaters, for residential and commercial properties. Factory-trained technicians handle all permits and inspections." } },
  ],
};

export default function GeneralFaqsPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GeneralFaqsClient />
    </>
  );
}
