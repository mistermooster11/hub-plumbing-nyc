import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Leak Detection & Repair NYC — Hub Plumbing & Mechanical",
  description:
    "Professional leak detection and repair for residential and commercial properties in Manhattan, Brooklyn & Queens. Hidden leaks found fast. Call (917) 634-8888.",
};

export default function LeakDetectionPage() {
  return (
    <>
      <PageHeroSection
        title="Leak Detection & Repair"
        subtitle="Professional hidden leak detection and repair for homes and businesses across Manhattan, Brooklyn, and Queens. Find it fast. Fix it right."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Leak Detection & Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Leak Detection & Repair"
        sidebarImage="/images/service-2.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Find the Leak Before It Finds You"
        intro={[
          "Undetected leaks cause water damage, mold growth, structural issues, and skyrocketing water bills — often before there is any visible sign. Hub Plumbing & Mechanical provides professional leak detection services for residential and commercial properties throughout Manhattan, Brooklyn, and Queens.",
          "Early detection is always cheaper than the damage a slow leak causes over weeks or months. Warning signs include unexplained increases in your water bill, damp spots on walls or ceilings, the sound of running water when all fixtures are off, or a water meter that keeps moving when all taps are closed.",
        ]}
        whatWeDo={[
          "Hidden leak detection in walls, floors, and ceilings",
          "Supply line and drain line leak inspection",
          "Water meter leak testing and analysis",
          "Leak repair and pipe replacement",
          "Mold and moisture assessment referrals",
          "Backflow prevention installation and certification",
        ]}
        whyChooseUs={[
          "Licensed NYC Master Plumber (Lic. #2305) with 25+ years of experience",
          "Professional detection methods — no guesswork, no unnecessary demolition",
          "Upfront pricing before any work begins",
          "NY State Certified Backflow Prevention Specialist (Cert. #10068)",
          "Guaranteed work — we don't leave until the leak is fully resolved",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
