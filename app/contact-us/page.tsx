"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://hubplumbingnyc.com/images/NYC-Plumbers.png"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Schedule Service or Ask a Question
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(917) 634-8888</strong>. We follow up fast — usually
            within the hour. In-house operators available for same-day and
            emergency service.
          </p>

          {/*
            Two-column: form left, map right. Stacks on mobile.
            align-items: stretch makes both columns match height on desktop
            so the form expands to fill the same height as the map column.
          */}
          <div className="contact-layout-grid">

            {/* ── Form (expands to full column height) ── */}
            <div
              className={`fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.2s", display: "flex", flexDirection: "column" }}
            >
              {/* TODO: Replace with Hub Plumbing's preferred form backend (HubSpot, JotForm, Gravity Forms, etc.) */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  flex: 1,
                }}
              >
                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="name" className="p3 ia-medium">Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="(555) 000-0000"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="email" className="p3 ia-medium">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                    <select
                      id="service" name="service"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                    >
                      <option value="">Select a service…</option>
                      <option>Water Heater Repair &amp; Installation</option>
                      <option>Plumbing Remodeling</option>
                      <option>New Plumbing Fixtures</option>
                      <option>Code Violations</option>
                      <option>Leak Detection</option>
                      <option>Water Quality</option>
                      <option>Faucets, Sinks &amp; Garbage Disposals</option>
                      <option>Residential Plumbing</option>
                      <option>Commercial Plumbing</option>
                      <option>Heating &amp; Boiler Services</option>
                      <option>Emergency Service</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message — flex: 1 makes this grow to fill remaining column height */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe the issue — what's happening and where?"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                      resize: "vertical",
                      flex: 1,
                      minHeight: "120px",
                    }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              {/* TODO: Confirm map embed centered on Hub Plumbing's primary service area (Manhattan / West Village) */}
              <iframe
                title="Hub Plumbing & Mechanical — Manhattan, Brooklyn & Queens"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-74.0040!3d40.7322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259eb003122d1%3A0xdde09f6a7d1e2a03!2s103%20Charles%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="360"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>Hub Plumbing &amp; Mechanical</strong><br />
                103 Charles Street, New York, NY 10014<br />
                <a href="tel:9176348888" style={{ color: "inherit" }}>(917) 634-8888</a><br />
                Same-Day &amp; Emergency Service Available<br />
                NYC Master Plumber Lic. #2305
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
