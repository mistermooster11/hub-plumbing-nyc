import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Plumbing Tips & Guides | Hub Plumbing & Mechanical NYC",
  description:
    "Expert plumbing advice from licensed NYC plumbers. Water heaters, boilers, code violations, leak detection & more. From the Hub Plumbing & Mechanical team.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/blog" },
  openGraph: {
    title: "Plumbing Tips & Guides | Hub Plumbing & Mechanical NYC",
    description: "Practical plumbing advice for NYC homeowners and building managers from our licensed technicians.",
    url: "https://hub-plumbing-nyc.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Plumbing Tips & Homeowner Guides"
        subtitle="Practical advice from licensed NYC plumbers who work in Manhattan, Brooklyn, and Queens every day. No fluff — just the honest information homeowners and building managers actually need."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <CTAFormSection />
    </>
  );
}
