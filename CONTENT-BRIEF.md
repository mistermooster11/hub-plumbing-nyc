# Hub Plumbing & Mechanical — Content Brief
**QuickFlip Sites | Build Log**
Date: May 9, 2026
Prospect: https://hubplumbingnyc.com/
Template: PipeMonkey-Redesign (cloned from /Clients/PipeMonkey-Redesign/)
Reference site: https://ae-nyc-plumbing.vercel.app/contact-us (contact page layout)

---

## Source Material Summary

- **Business name:** Hub Plumbing & Mechanical
- **Phone:** (917) 634-8888
- **Address:** 103 Charles Street, New York, NY 10014
- **Service area:** Manhattan, Brooklyn, Queens, The Bronx, Staten Island
- **Primary area focus:** Manhattan (West Village HQ), Brooklyn, Queens
- **In business since:** 1999 (25+ years)
- **License:** NYC Master Plumber Lic. #2305; NY State Certified Backflow Prevention Specialist Cert. #10068
- **Brand differentiator:** "Red Carpet Service" — featured in the book *The Celebrity Experience*
- **Social channels:** Facebook (Hub Plumbing NYC), Twitter/X (@hub_plumbing), YouTube (hubplumbingtest)
- **Testimonials:** One confirmed real review extracted from source; two generated as placeholders (flagged in TODOs)

---

## Service Inventory

All 10 services extracted from hubplumbingnyc.com:

1. Water Heater Repair & Installation (tank, electric, power vent, tankless)
2. Plumbing Remodeling (kitchen and bathroom)
3. New Plumbing Fixtures
4. Code Violations (assessment, correction, permit filing, inspections, signoffs)
5. Leak Detection
6. Water Quality
7. Faucets, Sinks & Garbage Disposals
8. Residential Plumbing
9. Commercial Plumbing
10. Heating & Boiler Services (inspection, repair, violation removal, signoffs)

---

## Services Consolidated

None. All 10 services from the prospect site are preserved as distinct entries.

---

## Pages Built & Content Decisions

### `/` (Homepage)
- Kept: Hero, Announcements (How It Works), Insights (accordion), Difference (trust stats), Testimonial, HomeCTA
- Removed: donation widget and org-specific sections not applicable to trade businesses

### `/craft-catalog` (Services index)
- Metadata updated to Hub Plumbing branding and Manhattan/Brooklyn/Queens service area
- Hero description updated to reflect plumbing/heating (not drain clearing)

### `/craft-catalog/[slug]` (Individual service pages)
- 10 pages, one per slug, fully data-driven from service-pages.tsx
- Metadata title format: `[Service] — Hub Plumbing & Mechanical`
- CTA banner and related services blurb updated to Hub Plumbing copy

### `/general-faqs`
- 8 FAQs written specific to Hub Plumbing's services and NYC context:
  response time, upfront pricing, licensing (#2305), code violations, commercial buildings,
  service areas, Red Carpet Service, water heater service

### `/service-areas`
- 3 regions: Manhattan, Brooklyn, Queens (Nassau County removed — not in Hub Plumbing's area)
- Each region has localized description, 3 callouts, and full neighborhood list
- Phone: (917) 634-8888 throughout

### `/contact-us`
- Layout matched to A&E NYC Plumbing reference (Hero + 2-col form/map)
- Key difference from reference: align-items: stretch on grid + flex form column so form expands to match map height on desktop
- Textarea: flex: 1; minHeight: 120px grows to fill available space
- Map embed: Google Maps centered on 103 Charles St, New York, NY 10014
- 12 service options in dropdown covering all Hub Plumbing services + emergency + other

### `/gallery`
- 6 placeholder cards: Water Heater Installation (UWS), Bathroom Remodel (Park Slope),
  Leak Detection (Astoria), Boiler Service (Brooklyn Heights), Faucet Upgrade (Chelsea),
  Kitchen Plumbing (Forest Hills)
- All images are template placeholders — flagged for replacement

### `/blog`
- 6 placeholder posts relevant to Hub Plumbing's trade:
  water heater repair/replacement, NYC code violations, pre-war building plumbing,
  tankless water heaters in NYC, boiler violations, hidden leak warning signs
- All flagged for replacement with real content or CMS

### `/privacy-policy`
- Company name: Hub Plumbing & Mechanical
- Address: 103 Charles Street, New York, NY 10014
- Phone: (917) 634-8888

---

## Navigation Changes

Template default had a multi-item mega-nav. Simplified to 4-item flat nav:
- Home
- Services (/craft-catalog)
- FAQs (/general-faqs)
- Contact (/contact-us)

Gallery, Blog, and Service Areas are linked from within the site (footer, hero quick links)
but not in the top nav — trade-standard flat nav per template map guidance.

---

## Copy Generation Log

The following copy was generated (not extracted directly from the prospect site):

- **Sarah M. testimonial** — placeholder review (flagged TODO: replace with real)
- **Marcus T. testimonial** — placeholder review (flagged TODO: replace with real)
- **Homepage Hero subhead** — generated to match 1999/NYC positioning
- **Announcements section (How It Works)** — 3-step process: Call & Connect > Diagnose & Quote > Fix & Clean Up
- **HomeCTA headline** — "Plumbing Problem? Call Now."
- **Gallery item labels and alt text** — all 6 cards (placeholder; real photos needed)
- **Blog post titles and excerpts** — all 6 posts (placeholder; real content needed)
- **Service area neighborhood lists** — assembled from standard NYC neighborhood knowledge;
  prospect's site did not enumerate specific neighborhoods per borough
- **FAQ answers** — written in Hub Plumbing's voice, grounded in extracted differentiators
  (Red Carpet Service, upfront pricing, Lic. #2305)
- **Service page copy (overviewContent, sections)** — all 10 service pages;
  prospect's site had brief descriptions only, so full section copy was generated

All generated copy is grounded in the prospect's stated differentiators (Red Carpet Service,
25+ years, upfront pricing, NYC Master Plumber license) and local NYC context.

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Replace logo | components/custom/Footer.tsx, Topnav.tsx | Currently uses /logos/logo-long.svg — swap with Hub Plumbing logo |
| Real job photos (gallery) | app/gallery/page.tsx | 6 cards using template placeholder images |
| Real testimonials | components/custom/Testimonial.tsx | Sarah M. and Marcus T. are placeholders |
| Blog content or CMS | app/blog/page.tsx | 6 placeholder posts — wire to real content or remove section |
| Contact form backend | app/contact-us/page.tsx | Form action is # — needs HubSpot, JotForm, Gravity Forms, or other backend |
| Verify map embed | app/contact-us/page.tsx | Embed centered on 103 Charles St — confirm preferred anchor |
| Service page photos | app/craft-catalog/[slug]/page.tsx | PLACEHOLDER_BG used on all 10 pages — replace per slug |
| Verify social URLs | components/custom/Footer.tsx | Facebook, Twitter/X, YouTube links from site — confirm still active |
| Confirm Bob testimonial wording | components/custom/Testimonial.tsx | Quote extracted from source — confirm with client |
| Privacy policy contact email | app/privacy-policy/page.tsx | No email on source site — add if needed |
| Blog post detail pages | app/blog/[slug]/page.tsx | Not built — needed before blog links go live |
