import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Emergency Plumbing NYC — Hub Plumbing & Mechanical | 24/7 Service",
  description:
    "24/7 emergency plumbing repairs in Manhattan, Brooklyn & Queens. Burst pipes, major leaks, water heater failures — real operators answer every call. Call (917) 634-8888.",
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Plumbing"
        subtitle="Plumbing emergencies don't wait. Hub Plumbing & Mechanical offers available 24/7 emergency service across Manhattan, Brooklyn, and Queens. Real operators. Fast response."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Plumbing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Plumbing"
        sidebarImage="/images/service-5.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="When It Can't Wait — Call Hub Plumbing"
        intro={[
          "A burst pipe, major leak, sewage backup, or failed water heater demands immediate action. Hub Plumbing & Mechanical provides emergency plumbing services for homes and businesses across Manhattan, Brooklyn, and Queens — any time of day or night.",
          "When you call (917) 634-8888, you speak with a real, in-house operator who understands your situation — not an answering service or call center. We dispatch a licensed technician to you as quickly as possible.",
        ]}
        whatWeDo={[
          "Burst pipe repair and emergency shutoff",
          "Major water leak containment and repair",
          "Sewage backup and overflow response",
          "Water heater emergency repair and replacement",
          "Frozen pipe thawing and prevention",
          "Boiler failure emergency service",
        ]}
        whyChooseUs={[
          "Real in-house operators answer 24/7 — no call centers, no voicemail",
          "Licensed NYC Master Plumber (Lic. #2305) dispatched to your location",
          "Available same-day emergency response across all five NYC boroughs",
          "Upfront pricing even in emergencies — you know the cost before we start",
          "25+ years serving Manhattan, Brooklyn, and Queens — we know NYC buildings",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
