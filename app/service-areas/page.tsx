"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "manhattan",
    region: "Manhattan",
    headline: "Plumbing & Heating Services in Manhattan",
    description:
      "Manhattan is home to some of the most complex plumbing systems in the city — pre-war high-rises, historic brownstones in the West Village and Upper West Side, co-ops with shared building systems, and newer construction in Midtown and Downtown. Hub Plumbing & Mechanical has been serving Manhattan since 1999, and our licensed technicians know Manhattan buildings inside and out.",
    callouts: [
      "Pre-war and historic building specialists",
      "Co-op & condo-approved licensed plumbers",
      "Same-day and emergency service throughout all of Manhattan",
    ],
    neighborhoods:
      "West Village • Chelsea • SoHo • TriBeCa • Greenwich Village • East Village • NoHo • NoLita • Lower East Side • Kips Bay • Murray Hill • Midtown • Hell's Kitchen • Upper East Side • Upper West Side • Harlem • Washington Heights • Inwood • Carnegie Hill • Lenox Hill • Lincoln Square & More",
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Plumbing & Heating Services in Brooklyn",
    description:
      "Brooklyn's housing stock runs the full spectrum — pre-war brownstones in Park Slope and Crown Heights, mid-century apartment buildings in Bay Ridge and Flatbush, and newer construction throughout Williamsburg and Greenpoint. Hub Plumbing & Mechanical handles every type of Brooklyn plumbing challenge with licensed, experienced technicians and upfront pricing.",
    callouts: [
      "Brownstone & pre-war walk-up specialists",
      "Water heater and boiler services for multi-family buildings",
      "Same-day service across all Brooklyn neighborhoods",
    ],
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • Flatbush • Canarsie • East New York • Brooklyn Heights • Cobble Hill • Carroll Gardens & More",
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Plumbing & Heating Services in Queens",
    description:
      "Queens is one of the most diverse boroughs in the city — from single-family homes in Whitestone and Bayside to dense apartment buildings in Astoria and Flushing, and everything in between. Our Hub Plumbing team handles residential and commercial plumbing in Queens with the same Red Carpet standard we bring to every borough.",
    callouts: [
      "Residential plumbing for single-family and multi-unit homes",
      "Commercial plumbing for restaurants and retail in Queens",
      "Emergency service available throughout all of Queens",
    ],
    neighborhoods:
      "Astoria • Long Island City • Maspeth • Flushing • Whitestone • Bayside • Forest Hills • Rego Park • Jackson Heights • Elmhurst • Middle Village • Ridgewood • Woodside • Sunnyside • Jamaica • Howard Beach • Fresh Meadows • Kew Gardens • Corona & More",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your street?{" "}
              <a href="tel:9176348888" className="ia-link">Call (917) 634-8888</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Come to You
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Hub Plumbing &amp; Mechanical serves all of Manhattan, Brooklyn, and Queens. We don&apos;t
                  subcontract — our own licensed techs cover every neighborhood, every day, seven days a week.
                  Same-day scheduling is available across our entire service area.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.4s" }}>
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

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our dispatch is fast and our coverage is wide. Call <strong>(917) 634-8888</strong> and
                we&apos;ll confirm in 30 seconds and get you on the schedule the same day.
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
