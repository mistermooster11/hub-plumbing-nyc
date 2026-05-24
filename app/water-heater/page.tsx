import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Water Heater Installation & Repair NYC — Hub Plumbing & Mechanical",
  description:
    "Water heater installation, repair, and replacement in Manhattan, Brooklyn & Queens. Tank, tankless, and power-vent units. Licensed NYC plumbers. Call (917) 634-8888.",
};

export default function WaterHeaterPage() {
  return (
    <>
      <PageHeroSection
        title="Water Heater Installation & Repair"
        subtitle="Expert water heater installation, repair, and replacement for homes and businesses across Manhattan, Brooklyn, and Queens. All brands and types. Upfront pricing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Water Heater Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Water Heater Installation"
        sidebarImage="/images/service-3.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Hot Water When You Need It — Every Time"
        intro={[
          "Water heater problems rarely give you advance warning. Whether you're dealing with inconsistent hot water, a leaking tank, or a unit that simply stopped working, Hub Plumbing & Mechanical provides expert repair and installation for all water heater types across Manhattan, Brooklyn, and Queens.",
          "Our NYC plumbing technicians service all major brands — tank, electric, power-vent, and tankless water heaters — for both residential and commercial properties. Many water heaters can be repaired instead of replaced if you catch the issue in time.",
        ]}
        whatWeDo={[
          "Tank water heater repair and replacement",
          "Tankless (on-demand) water heater installation",
          "Electric and gas water heater service",
          "Power-vent water heater installation",
          "Permit procurement and code-compliant installation",
          "Expansion tank installation and pressure regulation",
        ]}
        whyChooseUs={[
          "Licensed NYC Master Plumber (Lic. #2305) — all installations meet code",
          "Honest assessment: repair vs. replace recommendation with no pressure",
          "Tankless units save up to 35% on heating costs — we size it right",
          "Upfront pricing before any work begins — what we quote is what you pay",
          "Available same-day installation when your water heater fails unexpectedly",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
