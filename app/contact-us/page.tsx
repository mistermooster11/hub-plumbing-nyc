import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — Hub Plumbing & Mechanical | NYC Licensed Plumbers",
  description:
    "Contact Hub Plumbing & Mechanical for same-day plumbing service in Manhattan, Brooklyn & Queens. Available 24/7 — call (917) 634-8888 or fill out our quick quote form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Available 24/7 — speak with a real in-house operator, not a call center. Call (917) 634-8888 or fill out the form below."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Hub Plumbing & Mechanical — 103 Charles Street, New York NY"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1!2d-74.004!3d40.7322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259903f1f6d1b%3A0x0!2s103+Charles+St%2C+New+York%2C+NY+10014!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
