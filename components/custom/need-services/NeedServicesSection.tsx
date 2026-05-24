"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function NeedServicesSection() {
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
        gsap.from(".need-services__inner > *", {
          y: 35, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="need-services" ref={sectionRef}>
      <div className="need-services__inner">
        <h2 className="need-services__heading">
          Need a Licensed Plumber in
          <br />Manhattan, Brooklyn or Queens?
        </h2>
        <p className="need-services__text">
          Call Hub Plumbing &amp; Mechanical at <strong>(917) 634-8888</strong> — you&rsquo;ll
          speak with a real in-house operator, get upfront pricing, and have a licensed
          technician at your door fast.
        </p>
        <a href="tel:9176348888" className="need-services__btn">
          Call (917) 634-8888
        </a>
      </div>
    </section>
  );
}
