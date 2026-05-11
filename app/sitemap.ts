import type { MetadataRoute } from "next";
import { servicePages } from "@/data/craft-catalog/service-pages";

const base = "https://hub-plumbing-nyc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/craft-catalog`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/service-areas`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/general-faqs`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`,                lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/privacy-policy`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${base}/craft-catalog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...serviceRoutes];
}
