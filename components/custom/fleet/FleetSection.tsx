"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
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
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Standards</div>
          <h2 className="fleet-section__heading">
            Red Carpet Service — Every Single Call
          </h2>
          <p className="fleet-section__intro">
            When Hub Plumbing technicians arrive at your home or business, they come in
            clean, crisp uniforms with visible ID badges. They cover their work boots with
            booties, lay drop cloths where needed, and clean the workspace thoroughly
            before leaving. Our Red Carpet Service was featured in{" "}
            <em>The Celebrity Experience</em> as a model for how to create lifelong
            customer relationships. This is how every job runs — regardless of size.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          <Image
            src="/images/about-row.jpg"
            alt="Hub Plumbing technician installing kitchen faucet"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/about-row-2.jpg"
            alt="Hub Plumbing modern chrome faucet installation"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/service-2.jpg"
            alt="Hub Plumbing under-sink inspection"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
