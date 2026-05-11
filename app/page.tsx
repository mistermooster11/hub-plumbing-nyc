import type { Metadata } from "next";
import Hero from "@/components/custom/Hero";
import HomeSectionWithLine from "@/components/custom/HomeSectionWithLine";
import Insights from "@/components/custom/Insights";
import Testimonial from "@/components/custom/Testimonial";
import HomeCTA from "@/components/custom/HomeCTA";

export const metadata: Metadata = {
  title: "Hub Plumbing & Mechanical | NYC Licensed Plumbers — Same-Day Service",
  description:
    "Licensed NYC plumbers serving Manhattan, Brooklyn & Queens since 1999. Water heaters, boilers, leak detection, remodeling & more. Red Carpet Service. Call (917) 634-8888.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app" },
};

export default function Home() {
  return (
    <>
      <main
        className="pt-76 relative max-[1150px]:pt-[6.2rem] before:content-[''] before:absolute before:left-0 before:bottom-full before:right-0 before:-mb-76 before:h-screen before:bg-brand-navy max-[1150px]:before:mb-[-6.2rem] overflow-hidden"
      >
        <Hero />
        <HomeSectionWithLine />
        <Insights />
        <Testimonial />
        <HomeCTA />
      </main>
    </>
  );
}
