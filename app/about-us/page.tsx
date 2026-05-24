import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import FleetSection from "@/components/custom/fleet/FleetSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us — Hub Plumbing & Mechanical | Licensed NYC Plumbers Since 1999",
  description:
    "Hub Plumbing & Mechanical has served Manhattan, Brooklyn & Queens since 1999. Licensed NYC Master Plumber #2305. Red Carpet Service, upfront pricing, and guaranteed work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999 — Red Carpet Service, expert technicians, and honest upfront pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <FleetSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
