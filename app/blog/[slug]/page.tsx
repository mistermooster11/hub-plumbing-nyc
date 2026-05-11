import type { Metadata } from "next";
import { redirect } from "next/navigation";

// [TODO: Replace this redirect with real blog post pages once content is ready.
// Each slug should have its own page with full article content, schema markup, and metadata.]

const postTitles: Record<string, string> = {
  "water-heater-repair-or-replace":
    "Water Heater Repair vs. Replacement: How to Know Which One You Need",
  "nyc-plumbing-code-violations":
    "Got a NYC Plumbing Code Violation? Here's Exactly What to Do",
  "pre-war-building-plumbing":
    "Pre-War Building Plumbing in NYC: What Owners and Managers Need to Know",
  "tankless-water-heater-nyc":
    "Tankless Water Heaters in NYC: Are They Worth It?",
  "boiler-violation-nyc":
    "NYC Boiler Violations: What They Mean and How to Clear Them",
  "hidden-leak-warning-signs":
    "7 Signs You Have a Hidden Plumbing Leak (And What to Do About It)",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = postTitles[slug];
  if (!title) return {};
  return {
    title,
    description: `Read the full article: ${title} — from the Hub Plumbing & Mechanical team.`,
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  return Object.keys(postTitles).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Redirect to blog index until real post pages are built
  redirect("/blog");
}
