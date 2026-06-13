"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

/* ── Blog Posts ─────────────────────────────────────────────── */
const posts = [
  {
    id: "water-heater-repair-or-replace",
    title: "Water Heater Repair vs. Replacement: How to Know Which One You Need",
    excerpt:
      "Age, repair history, and the type of failure all factor in. A 12-year-old tank that's leaking at the base is a replacement — a faulty thermocouple on a 4-year-old unit is a repair. Here's how our techs make the call.",
    category: "Water Heaters",
    date: "April 2026",
    href: "/blog/water-heater-repair-or-replace",
  },
  {
    id: "nyc-plumbing-code-violations",
    title: "Got a NYC Plumbing Code Violation? Here's Exactly What to Do",
    excerpt:
      "Ignoring a violation notice compounds the problem fast. We walk through the process — assessment, correction, permit filing, and agency signoff — and explain why acting immediately saves money.",
    category: "Code Violations",
    date: "March 2026",
    href: "/blog/nyc-plumbing-code-violations",
  },
  {
    id: "pre-war-building-plumbing",
    title: "Pre-War Building Plumbing in NYC: What Owners and Managers Need to Know",
    excerpt:
      "Cast iron, galvanized steel, and older trap configurations are standard in Manhattan and Brooklyn brownstones. We explain the common failure points and how to stay ahead of them.",
    category: "Homeowner Guide",
    date: "February 2026",
    href: "/blog/pre-war-building-plumbing",
  },
  {
    id: "tankless-water-heater-nyc",
    title: "Tankless Water Heaters in NYC: Are They Worth It?",
    excerpt:
      "Space is at a premium in Manhattan apartments. Tankless heaters eliminate the tank footprint and can cut energy costs — but they're not right for every situation. An honest breakdown.",
    category: "Water Heaters",
    date: "January 2026",
    href: "/blog/tankless-water-heater-nyc",
  },
  {
    id: "boiler-violation-nyc",
    title: "NYC Boiler Violations: What They Mean and How to Clear Them",
    excerpt:
      "A boiler violation from the DOB or FDNY isn't something to sit on. We explain the most common violations in multi-family NYC buildings and what the compliance process looks like.",
    category: "Heating & Boilers",
    date: "December 2025",
    href: "/blog/boiler-violation-nyc",
  },
  {
    id: "hidden-leak-warning-signs",
    title: "7 Signs You Have a Hidden Plumbing Leak (And What to Do About It)",
    excerpt:
      "Higher water bills, unexplained damp spots, musty smells, and peeling paint are all symptoms. Catching a hidden leak early can prevent tens of thousands in water damage. Here's what to look for.",
    category: "Leak Detection",
    date: "November 2025",
    href: "/blog/hidden-leak-warning-signs",
  },
];

/* ── Blog Card ──────────────────────────────────────────────── */
function BlogCard({ post }: { post: (typeof posts)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <div
      ref={ref}
      className="blog-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__date">{post.date}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <a href={post.href} className="blog-card__link">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function BlogClient() {
  return (
    <>
      <PageHeroSection
        title="Plumbing Tips &amp; Homeowner Guides"
        subtitle="Practical advice from licensed NYC plumbers who work in Manhattan, Brooklyn, and Queens every day. No fluff — just the honest information homeowners and building managers actually need."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* ── Post Grid ── */}
      <section className="blog-listing">
        <div className="blog-listing__inner">
          <h2 className="blog-listing__section-title">Latest Articles</h2>
          <div className="blog-listing__grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="blog-cta">
        <p className="blog-cta__eyebrow">Have a Plumbing Emergency?</p>
        <h2 className="blog-cta__heading">Don&apos;t Wait — We Pick Up Fast</h2>
        <p className="blog-cta__sub">
          Call <strong>(917) 634-8888</strong> and we&apos;ll give you an ETA on the spot.
          Same-day service available seven days a week across Manhattan, Brooklyn, and Queens.
        </p>
        <a href="tel:9176348888" className="blog-cta__btn">
          Call (917) 634-8888
        </a>
      </section>
    </>
  );
}
