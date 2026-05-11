import type { Metadata } from "next";
import BlogClient from "./BlogClient";

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
  return <BlogClient />;
}
