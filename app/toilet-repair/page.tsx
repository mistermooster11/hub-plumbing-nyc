import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Toilet & Fixture Repair NYC — Hub Plumbing & Mechanical",
  description:
    "Toilet repair, replacement, and fixture installation in Manhattan, Brooklyn & Queens. Running toilets, faucets, sinks, and more. Licensed NYC plumbers. Call (917) 634-8888.",
};

export default function ToiletRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Toilet & Fixture Repair"
        subtitle="Professional toilet repair, replacement, and plumbing fixture installation across Manhattan, Brooklyn, and Queens. Fast service, upfront pricing, guaranteed work."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Toilet & Fixture Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Toilet & Fixture Repair"
        sidebarImage="/images/service-4.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Fixtures Fixed Right — Fast"
        intro={[
          "A running toilet, dripping faucet, or slow-draining sink might seem minor — but left unaddressed, they waste water, drive up bills, and can signal bigger problems. Hub Plumbing & Mechanical repairs and replaces toilets, faucets, sinks, and all plumbing fixtures for homes and businesses across Manhattan, Brooklyn, and Queens.",
          "We work with all brands and fixture types. You pick the fixture; we make sure it's installed correctly to manufacturer specifications and code requirements.",
        ]}
        whatWeDo={[
          "Toilet repair, rebuild, and full replacement",
          "Faucet repair and replacement — all brands",
          "Sink installation and drain repair",
          "Showerhead and shower valve replacement",
          "Garbage disposal installation and repair",
          "Bathroom and kitchen fixture upgrade consultation",
        ]}
        whyChooseUs={[
          "Licensed NYC Master Plumber (Lic. #2305) — installations meet NYC code",
          "Upfront pricing before any work begins — no surprises",
          "All fixture types and brands serviced",
          "Red Carpet Service — boot covers, clean work area, full cleanup",
          "Guaranteed work — we don't leave until the fixture works perfectly",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
