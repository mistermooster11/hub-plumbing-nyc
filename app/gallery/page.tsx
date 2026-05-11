import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Before & After Gallery | Hub Plumbing & Mechanical NYC",
  description:
    "Real plumbing and heating job photos from Hub Plumbing & Mechanical. Water heaters, boilers, leak detection, and remodeling in Manhattan, Brooklyn & Queens.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/gallery" },
  openGraph: {
    title: "Before & After Gallery | Hub Plumbing & Mechanical NYC",
    description: "See real results from our licensed NYC plumbers — water heaters, boilers, remodeling, and more.",
    url: "https://hub-plumbing-nyc.vercel.app/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
