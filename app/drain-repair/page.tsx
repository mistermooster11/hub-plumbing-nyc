import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Drain Repair & Cleaning NYC — Hub Plumbing & Mechanical",
  description:
    "Professional drain repair and cleaning for homes and businesses in Manhattan, Brooklyn & Queens. Clogged drains cleared fast. Licensed NYC plumbers. Call (917) 634-8888.",
};

export default function DrainRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Drain Repair & Cleaning"
        subtitle="Fast, professional drain clearing and repair for homes and businesses across Manhattan, Brooklyn, and Queens. Licensed NYC plumbers with upfront pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Drain Repair & Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Drain Repair & Cleaning"
        sidebarImage="/images/service-1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Clear Drains. No Mess. No Surprises."
        intro={[
          "Slow drains, gurgling pipes, and recurring clogs are signs of a drainage problem that won't fix itself. Hub Plumbing & Mechanical clears and repairs drains of all types throughout Manhattan, Brooklyn, and Queens — fast, clean, and with upfront pricing before any work begins.",
          "From a single clogged kitchen sink to a main sewer line backup, our licensed technicians arrive prepared with the right tools to diagnose and resolve the issue the first time.",
        ]}
        whatWeDo={[
          "Kitchen and bathroom drain cleaning and clearing",
          "Main sewer line clearing and inspection",
          "Shower, tub, and floor drain repair",
          "Drain snaking and hydro-jetting",
          "Root intrusion removal from sewer lines",
          "Drain line repair and replacement",
        ]}
        whyChooseUs={[
          "Licensed NYC Master Plumber (Lic. #2305) — every job meets code",
          "Upfront pricing confirmed before work begins — no hidden fees",
          "Available same-day and emergency drain service",
          "Red Carpet Service — uniformed technicians, boot covers, full cleanup",
          "Real in-house operators answer every call — not a call center",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
