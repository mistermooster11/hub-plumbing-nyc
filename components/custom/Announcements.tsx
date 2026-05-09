'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Red Carpet Service, Every Time</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(https://hubplumbingnyc.com/images/residential-plumbing.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#101d2b',
                }}
              />
              {/* [TODO: Replace with Hub Plumbing team or job site photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Imagine your plumbers rolling out a red carpet — covering their work
                boots with booties, wearing ID badges, arriving in clean uniforms, and
                leaving your home spotless when they leave. That&apos;s Hub Plumbing
                &amp; Mechanical. Every call. Every tech.
              </p>
              <p>
                <strong>Step 1: Call &amp; Connect.</strong> You speak with a real,
                seasoned in-house operator — not a call center. We understand your
                needs and schedule service at your convenience.
              </p>
              <p>
                <strong>Step 2: Diagnose &amp; Quote.</strong> Our licensed technician
                arrives on time, assesses the issue, and gives you the price before
                any work begins. No surprises, no upsells.
              </p>
              <p>
                <strong>Step 3: Fix &amp; Clean Up.</strong> We complete the work,
                test it in front of you, clean the workspace thoroughly, and
                don&apos;t leave until the job is done right.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Schedule Service"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
