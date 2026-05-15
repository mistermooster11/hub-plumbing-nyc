"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

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

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #266DAE)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable links when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Plumbing Tips &amp; Homeowner Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Hub Plumbing Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from licensed NYC plumbers who work in Manhattan, Brooklyn, and
                  Queens every day. No fluff — just the honest information homeowners and building
                  managers actually need.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:9176348888">
                    <i className="icon-link" />
                    <span>Call (917) 634-8888</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from Hub Plumbing or connected CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Have a Plumbing Emergency?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Don&apos;t Wait — We Pick Up Fast
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(917) 634-8888</strong> and we&apos;ll give you an ETA on the spot.
                Same-day service available seven days a week across Manhattan, Brooklyn, and Queens.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:9176348888">
                  Call (917) 634-8888
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
