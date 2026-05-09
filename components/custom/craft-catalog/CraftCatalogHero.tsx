"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CraftCatalogHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="hero-org fadeIn wow" ref={ref}>
      <div className="hero-org__top ia-bg-dark">
        <div className="inner inner--slim-1172 cleared">
          <div className="hero-org-in">

            {/* Text block */}
            <div className="hero-org__text">
              <div className={`breadcrumbs ia-sky fadeInUpS wow${vis}`}>
                <a href="/">Home</a>
                <em>&gt;</em>
                <span className="post post-page current-item">Our Services</span>
              </div>
              <h1 className={`ia-white fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                Our Services
              </h1>
              <div
                className={`content-entry ia-white fadeInUpS wow${vis}`}
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  From water heater failures to boiler violations, Hub Plumbing &amp; Mechanical
                  handles every plumbing and heating challenge in Manhattan, Brooklyn, and Queens.
                  Licensed NYC pros, upfront pricing, and Red Carpet Service — every job, every time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
