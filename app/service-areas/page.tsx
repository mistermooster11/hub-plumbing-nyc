import type { Metadata } from "next";
import ServiceAreasClient from "./ServiceAreasClient";

export const metadata: Metadata = {
  title: "Service Areas | Hub Plumbing & Mechanical — Manhattan, Brooklyn & Queens",
  description:
    "Hub Plumbing & Mechanical serves all Manhattan neighborhoods, Brooklyn boroughs, and Queens. Licensed NYC plumbers with same-day scheduling. Call (917) 634-8888.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/service-areas" },
  openGraph: {
    title: "Service Areas | Hub Plumbing & Mechanical NYC",
    description: "Serving Manhattan, Brooklyn, and Queens — every neighborhood, every day. Same-day scheduling available.",
    url: "https://hub-plumbing-nyc.vercel.app/service-areas",
  },
};

export default function ServiceAreasPage() {
  return <ServiceAreasClient />;
}
