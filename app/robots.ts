import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/explore/", "/programs-crafts/"],
    },
    sitemap: "https://hub-plumbing-nyc.vercel.app/sitemap.xml",
  };
}
