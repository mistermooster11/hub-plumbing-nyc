"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you get here?",
    content: (
      <p>
        We offer same-day scheduling and available emergency service throughout
        Manhattan, Brooklyn, and Queens. When you call{" "}
        <a href="tel:9176348888" className="ia-link">(917) 634-8888</a>,
        you speak with a real, in-house operator who understands your needs
        and will give you an accurate ETA on the spot.
      </p>
    ),
  },
  {
    title: "Do you give upfront pricing?",
    content: (
      <p>
        Always. Our technicians diagnose the issue, explain the solution in
        plain language, and give you the price before any work begins. No
        surprise invoices, no upsell pressure. What we quote is what you pay.
      </p>
    ),
  },
  {
    title: "Are you licensed and insured?",
    content: (
      <p>
        Yes. Hub Plumbing &amp; Mechanical holds a New York City Master Plumber
        License (Lic. #2305) and is a New York State Certified Backflow
        Prevention Specialist (Cert. #10068). All of our work is fully insured
        and guaranteed.
      </p>
    ),
  },
  {
    title: "Can you help with NYC plumbing code violations?",
    content: (
      <p>
        Absolutely. We handle the full process — assessment, correction, permit
        filing, inspections, and signoffs with the relevant NYC agencies. Both
        residential and commercial violations are within our wheelhouse. Call
        us as soon as you receive a violation notice to avoid fines and delays.
      </p>
    ),
  },
  {
    title: "Do you service commercial buildings and multi-unit properties?",
    content: (
      <p>
        Yes — we work with commercial buildings, multi-family homes, co-ops,
        condos, restaurants, retail spaces, and office buildings throughout
        Manhattan, Brooklyn, and Queens every day. We coordinate with building
        managers, work efficiently to minimize disruption, and document all
        completed work.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>We serve Manhattan, Brooklyn, Queens, The Bronx, and Staten Island including:</p>
        <p>
          <strong>Manhattan:</strong> West Village, Chelsea, SoHo, TriBeCa,
          Upper East Side, Upper West Side, Harlem, Hell&apos;s Kitchen,
          Greenwich Village, and all Manhattan neighborhoods.
        </p>
        <p>
          <strong>Brooklyn:</strong> Park Slope, Williamsburg, Bay Ridge,
          Brooklyn Heights, Crown Heights, Sunset Park, Dyker Heights, and more.
        </p>
        <p>
          <strong>Queens:</strong> Astoria, Long Island City, Flushing, Bayside,
          Forest Hills, Rego Park, Jackson Heights, and more.
        </p>
      </>
    ),
  },
  {
    title: "What is Red Carpet Service?",
    content: (
      <p>
        Red Carpet Service is the Hub Plumbing &amp; Mechanical standard —
        crisp, clean uniforms; visible ID badges; shoe covers before entering
        your home; full cleanup before leaving. Our technicians treat every
        home as if it were their own. This approach was featured in the book
        <em> The Celebrity Experience</em> as a model for creating lifelong
        customer loyalty.
      </p>
    ),
  },
  {
    title: "Do you handle water heater repair and installation?",
    content: (
      <p>
        Yes — all types: tank, electric, power vent, and tankless water heaters,
        for both residential and commercial properties. Many water heaters can
        be repaired instead of replaced if you catch the issue in time. Our
        factory-trained technicians are certified to service all major brands
        and handle all required permits and inspections.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(917) 634-8888</strong> — our team picks up fast
                  and can answer any question, schedule a same-day visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (917) 634-8888"
                    href="tel:9176348888"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
