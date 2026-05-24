import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — Hub Plumbing & Mechanical | Licensed NYC Plumbers",
  description:
    "Explore Hub Plumbing's full range of services: drain repair, leak detection, water heater installation, toilet repair, and emergency plumbing in Manhattan, Brooklyn & Queens.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Professional plumbing services for homes and businesses across Manhattan, Brooklyn, and Queens — drain repair, leak detection, water heaters, emergencies, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
