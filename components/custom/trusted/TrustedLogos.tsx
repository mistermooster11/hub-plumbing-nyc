"use client";

import { useRef, useEffect } from "react";

export default function TrustedLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const credentials = [
    { label: "NYC Master Plumber", value: "Lic. #2305" },
    { label: "Backflow Prevention Specialist", value: "Cert. #10068" },
    { label: "Serving NYC Since", value: "1999" },
    { label: "Service Area", value: "Manhattan · Brooklyn · Queens" },
  ];

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Licensed, Certified &amp; Trusted by NYC Homeowners &amp; Businesses
        </h2>
        <div className="trusted__logos">
          {credentials.map((cred) => (
            <div key={cred.label} className="trusted__logo-item" style={{ textAlign: "center", padding: "0 1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-dark)" }}>{cred.value}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--color-text)", marginTop: "4px" }}>{cred.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
