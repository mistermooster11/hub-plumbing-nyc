import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  /** Fallback background color while TODO image is pending */
  bgColor: string;
  navItems: ServiceNavItem[];
  /** Short intro paragraph shown in CraftOverview left column */
  overviewContent: ReactNode;
  /** Quick links shown in CraftOverview right column */
  overviewQuickLinks: { label: string; href: string }[];
  /** Middle content sections rendered between overview and related services */
  sections: { id: string; heading: string; content: ReactNode }[];
  /** "Related Services" links at page bottom */
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── WATER HEATERS ────────────────────────────────────────────────────── */
  "water-heaters": {
    title: "Water Heater Repair & Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Water heater repair and installation are often put off — water heaters
          last a long time without issues and are easily taken for granted. But
          calling Hub Plumbing &amp; Mechanical sooner rather than later can save
          you time and money. We have honest, upfront pricing and expert knowledge
          of all types of water heaters.
        </p>
        <p>
          Our NYC plumbing technicians service all major brands and types — tank,
          electric, power vent, and tankless water heaters — for both residential
          and commercial properties. Many water heaters can be repaired instead of
          replaced if you catch it in time.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You Need Water Heater Service",
        content: (
          <>
            <p>
              Your water heater is telling you it needs attention when you notice
              inconsistent hot water, water that won&rsquo;t heat at all, a leaking
              tank, unusual noises (popping, rumbling), rusty or discolored water,
              or a pilot light that won&rsquo;t stay lit. Any of these symptoms
              warrant a call before the problem escalates to a full failure.
            </p>
            <p>
              Fact: many water heaters can be repaired instead of replaced if you
              catch it in time. Our technicians will give you an honest assessment
              and the price before any work begins.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Tankless Water Heater Installation",
        content: (
          <>
            <p>
              Tankless water heaters heat water on demand — no storage tank, no
              standby heat loss. On average, homeowners can save up to 35% of
              heating costs with a correctly installed tankless unit. We can give
              you an endless supply of hot water while saving energy.
            </p>
            <p>
              Tankless units must be installed by a licensed, qualified technician
              to ensure the warranty remains valid. Installation may also require
              a permit and compliance with building code requirements. Hub Plumbing
              &amp; Mechanical handles the entire process — assessment, permit,
              installation, and final inspection — so you get top performance
              without the hassle.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"  },
      { label: "Commercial Plumbing",   href: "/craft-catalog/commercial-plumbing"   },
      { label: "Plumbing Remodeling",   href: "/craft-catalog/plumbing-remodeling"   },
      { label: "Code Violations",       href: "/craft-catalog/code-violations"       },
    ],
  },

  /* ─── PLUMBING REMODELING ──────────────────────────────────────────────── */
  "plumbing-remodeling": {
    title: "Plumbing Remodeling",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Plumbing remodeling starts out as an exciting project — new fixtures,
          new layouts, a refreshed kitchen or bathroom. Hub Plumbing &amp; Mechanical
          makes sure it stays that way. We have over 25 years of experience remodeling
          NYC kitchens and bathrooms, and we know the local codes, required permits,
          and how to coordinate jobs efficiently.
        </p>
        <p>
          Unlike big-box appliance stores, we pay our plumbing technicians by the
          hour — every job is of equal importance, and you won&rsquo;t be left
          waiting while another project takes priority.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Why Professional Plumbing Remodeling Matters",
        content: (
          <>
            <p>
              Remodeling your kitchen or bathroom requires a plumbing professional
              who knows New York City codes and can work with building officials to
              assure the job is done right in the most efficient manner. Attempting
              remodeling without the right plumber can result in code violations,
              permit issues, and costly do-overs.
            </p>
            <p>
              All of our work is guaranteed, in addition to the manufacturer&rsquo;s
              warranty — and we will leave your house as clean as we found it.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "From Small Upgrades to Major Remodels",
        content: (
          <>
            <p>
              <strong>Small Remodels.</strong> In many cases, we can complete a
              small bathroom remodel or kitchen upgrade on our own. We handle
              fixture replacement, pipe relocations, drain upgrades, and all related
              plumbing work — start to finish.
            </p>
            <p>
              <strong>Major Remodels.</strong> For larger projects involving multiple
              trades, we recommend hiring a general contractor to orchestrate the
              project. Hub Plumbing &amp; Mechanical can provide a list of New York
              City general contractors we work with to help you choose the right fit.
            </p>
            <p>
              From the smallest fixture replacement to the largest overhaul, we offer
              the best customer service and the most timely, clean renovations available
              in the industry.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "New Plumbing Fixtures",             href: "/craft-catalog/new-plumbing-fixtures"           },
      { label: "Code Violations",                   href: "/craft-catalog/code-violations"                 },
      { label: "Faucets, Sinks & Garbage Disposals",href: "/craft-catalog/faucets-sinks-garbage-disposals" },
      { label: "Residential Plumbing",              href: "/craft-catalog/residential-plumbing"            },
    ],
  },

  /* ─── NEW PLUMBING FIXTURES ────────────────────────────────────────────── */
  "new-plumbing-fixtures": {
    title: "New Plumbing Fixtures",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Upgrading plumbing fixtures is one of the most impactful improvements you
          can make to a kitchen or bathroom — improving function, efficiency, and
          appearance all at once. Hub Plumbing &amp; Mechanical installs new fixtures
          of all types, ensuring every installation meets New York City code and
          manufacturer specifications.
        </p>
        <p>
          We can also advise on the right fixtures for your space, water pressure,
          and usage — so your new installation works exactly as expected, from day one.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Upgrade Your Fixtures",
        content: (
          <>
            <p>
              New fixture installation is the right call when you&rsquo;re remodeling
              a kitchen or bathroom, when existing fixtures are leaking or corroded,
              when low-flow upgrades can reduce your water bill, or when outdated
              fixtures simply no longer meet your needs.
            </p>
            <p>
              We work with all brands and fixture types — faucets, showerheads,
              toilets, sinks, tubs, valves, and more. You pick the fixture; we make
              sure it&rsquo;s installed right.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle Fixture Installation",
        content: (
          <>
            <p>
              <strong>Step 1 — Assessment.</strong> We evaluate your existing
              plumbing connections and confirm compatibility with your chosen fixture.
              If there&rsquo;s a mismatch, we&rsquo;ll advise before ordering.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You get the price before
              any work begins. What we quote is what you pay.
            </p>
            <p>
              <strong>Step 3 — Install Clean.</strong> Fixtures are installed to
              manufacturer specifications, tested for leaks, and left in working
              order. We handle all cleanup and haul away old materials.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Plumbing Remodeling",               href: "/craft-catalog/plumbing-remodeling"             },
      { label: "Faucets, Sinks & Garbage Disposals",href: "/craft-catalog/faucets-sinks-garbage-disposals" },
      { label: "Residential Plumbing",              href: "/craft-catalog/residential-plumbing"            },
      { label: "Code Violations",                   href: "/craft-catalog/code-violations"                 },
    ],
  },

  /* ─── CODE VIOLATIONS ──────────────────────────────────────────────────── */
  "code-violations": {
    title: "Code Violations",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Both residential and commercial properties can receive plumbing code
          violations — often for reasons the owner didn&rsquo;t anticipate. At
          Hub Plumbing &amp; Mechanical, our experts are trained and ready to assist
          with plumbing code violations so your building standards are brought into
          spec quickly and completely.
        </p>
        <p>
          All of our work is guaranteed, so you can count on us to resolve the
          violation correctly the first time.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Common Reasons for Plumbing Code Violations",
        content: (
          <>
            <p>
              For commercial buildings, plumbing code violations are typically
              received during routine inspections, building renovations, and based
              on complaints lodged against older buildings. For residences, common
              violations relate to plumbing renovations done without a permit,
              illegal plumbing configurations, and tenant or neighbor complaints.
            </p>
            <p>
              A plumbing code violation doesn&rsquo;t necessarily mean you&rsquo;ve
              done something wrong — most people are simply unaware of current code
              requirements. Our team handles the process from assessment to signoff.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle Code Violations",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess the Violation.</strong> We review the
              violation notice, inspect the affected plumbing, and confirm exactly
              what needs to be corrected to bring the building into compliance.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You receive a clear price
              estimate before any work begins. We explain what needs to happen and
              why — in plain language.
            </p>
            <p>
              <strong>Step 3 — Correct &amp; Document.</strong> Our licensed
              technicians perform all necessary corrections, pull required permits,
              and coordinate inspections and signoffs with the relevant NYC agencies.
              We handle the paperwork so you don&rsquo;t have to.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Plumbing Remodeling",   href: "/craft-catalog/plumbing-remodeling"   },
      { label: "Commercial Plumbing",   href: "/craft-catalog/commercial-plumbing"   },
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"  },
      { label: "Heating & Boiler Services", href: "/craft-catalog/heating-boiler-services" },
    ],
  },

  /* ─── LEAK DETECTION ───────────────────────────────────────────────────── */
  "leak-detection": {
    title: "Leak Detection",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Undetected leaks cause water damage, mold growth, structural issues, and
          skyrocketing water bills — often before there&rsquo;s any visible sign.
          Hub Plumbing &amp; Mechanical provides professional leak detection services
          for residential and commercial properties throughout Manhattan, Brooklyn,
          and Queens.
        </p>
        <p>
          Early detection is always cheaper than the damage a slow leak causes over
          weeks or months. Don&rsquo;t wait for a water stain on your ceiling to
          call us.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You May Have a Hidden Leak",
        content: (
          <>
            <p>
              Warning signs include: unexplained increases in your water bill,
              the sound of running water when all fixtures are off, damp spots
              on walls, floors, or ceilings, mold or mildew appearing without
              an obvious source, reduced water pressure, or a water meter that
              continues to move when all taps are closed.
            </p>
            <p>
              Any one of these signs warrants a professional inspection. The longer
              a hidden leak goes undetected, the more expensive the eventual repair
              — and the more damage it causes along the way.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Find and Fix Leaks",
        content: (
          <>
            <p>
              <strong>Step 1 — Inspect.</strong> Our technicians use professional
              detection methods to locate the source of the leak — whether it&rsquo;s
              in a wall, under a slab, in a supply line, or within the drain system.
            </p>
            <p>
              <strong>Step 2 — Confirm &amp; Quote.</strong> Once the source is
              identified, we explain exactly what we found and give you the repair
              price before any work begins.
            </p>
            <p>
              <strong>Step 3 — Repair.</strong> We repair or replace the affected
              pipe, connection, or fitting — and test thoroughly to confirm the
              leak is fully resolved before leaving.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"  },
      { label: "Commercial Plumbing",   href: "/craft-catalog/commercial-plumbing"   },
      { label: "Water Quality",         href: "/craft-catalog/water-quality"         },
      { label: "Code Violations",       href: "/craft-catalog/code-violations"       },
    ],
  },

  /* ─── WATER QUALITY ────────────────────────────────────────────────────── */
  "water-quality": {
    title: "Water Quality",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          New York City tap water is generally considered safe — but building age,
          pipe materials, and local conditions can affect the quality of water at
          your tap. Hub Plumbing &amp; Mechanical offers water quality assessment
          and solutions for both residential and commercial properties.
        </p>
        <p>
          From backflow prevention to filtration system installation, we help you
          understand what&rsquo;s in your water and what to do about it.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Common Water Quality Concerns",
        content: (
          <>
            <p>
              Water quality issues in NYC buildings often stem from older pipe
              materials (lead or galvanized steel), sediment buildup in aging
              water mains, backflow contamination in multi-unit buildings, or
              hard water deposits that affect taste and appliance life.
            </p>
            <p>
              If your water has an unusual taste, odor, color, or if you have
              concerns about the pipes in your building, a professional assessment
              is the right first step.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Water Quality Services",
        content: (
          <>
            <p>
              <strong>Backflow Prevention.</strong> Hub Plumbing &amp; Mechanical is
              a New York State Certified Backflow Prevention Specialist (Cert. #10068).
              We install, test, and certify backflow prevention devices in compliance
              with NYC requirements.
            </p>
            <p>
              <strong>Filtration &amp; Treatment.</strong> We assess your water and
              recommend appropriate filtration, softening, or treatment solutions
              for your home or building — and handle the installation correctly.
            </p>
            <p>
              <strong>Pipe Assessment.</strong> If you have concerns about pipe
              materials in your building, we assess the system and advise on
              replacement or remediation options.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Leak Detection",        href: "/craft-catalog/leak-detection"        },
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"  },
      { label: "Commercial Plumbing",   href: "/craft-catalog/commercial-plumbing"   },
      { label: "Code Violations",       href: "/craft-catalog/code-violations"       },
    ],
  },

  /* ─── FAUCETS, SINKS & GARBAGE DISPOSALS ──────────────────────────────── */
  "faucets-sinks-garbage-disposals": {
    title: "Faucets, Sinks & Garbage Disposals",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Dripping faucets, slow sinks, a garbage disposal that hums but won&rsquo;t
          grind — these are exactly the kind of jobs Hub Plumbing &amp; Mechanical
          handles every day across Manhattan, Brooklyn, and Queens. Fast, clean, and
          priced upfront.
        </p>
        <p>
          We repair and replace faucets, sinks, and garbage disposals of all brands
          and configurations — and we can advise on upgrades that improve function
          and efficiency.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When to Call for Faucet, Sink & Disposal Service",
        content: (
          <>
            <p>
              Call us when: a faucet drips constantly (wasting water and money),
              a sink drain is slow or backing up, a garbage disposal fails to
              start, makes unusual grinding noises, or leaks from the bottom or
              from the connection to the sink.
            </p>
            <p>
              These are all repairs that are straightforward when done by a pro
              with the right parts — and can become expensive water damage situations
              if ignored.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We assess the faucet, sink, or
              disposal and identify the exact issue — worn cartridge, failed seal,
              jammed impeller, broken motor, or drain blockage — before recommending
              repair or replacement.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Price confirmed before any
              work begins.
            </p>
            <p>
              <strong>Step 3 — Fix It Clean.</strong> Repairs are completed to
              manufacturer spec. We test the fixture thoroughly, clean the work area,
              and leave the kitchen or bathroom exactly as we found it — or better.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Plumbing Remodeling",   href: "/craft-catalog/plumbing-remodeling"   },
      { label: "New Plumbing Fixtures", href: "/craft-catalog/new-plumbing-fixtures"  },
      { label: "Leak Detection",        href: "/craft-catalog/leak-detection"         },
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"   },
    ],
  },

  /* ─── RESIDENTIAL PLUMBING ─────────────────────────────────────────────── */
  "residential-plumbing": {
    title: "Residential Plumbing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Hub Plumbing &amp; Mechanical provides expert residential plumbing
          installation and repair at your convenience throughout Manhattan,
          Brooklyn, and Queens. Get trusted expert service with available same-day
          and emergency plumbing repairs.
        </p>
        <p>
          You can rely on the quality and consistency of Hub Plumbing &amp; Heating.
          As your trusted local experts, we provide top-tier plumbing solutions for
          residential properties. We understand that plumbing emergencies don&rsquo;t
          adhere to a 9-to-5 schedule.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Residential Services We Provide",
        content: (
          <>
            <p>
              Our residential plumbing services cover the full scope of what a NYC
              homeowner or renter may need: water heater repair and installation,
              fixture replacement, drain and sewer service, leak detection,
              plumbing remodeling for kitchens and bathrooms, backflow prevention,
              pipe repairs, and plumbing code violation correction.
            </p>
            <p>
              No job is too big or too small. From a dripping faucet to a full
              plumbing remodel, Hub Plumbing handles it all — with the same standard
              of quality and the same Red Carpet Service every time.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Red Carpet Service — What That Means",
        content: (
          <>
            <p>
              When Hub Plumbing technicians arrive at your home, they arrive in
              clean, crisp uniforms with visible ID badges. They cover their work
              boots with booties before entering, lay drop cloths where needed, and
              clean the workspace thoroughly before leaving.
            </p>
            <p>
              You speak with a real, in-house operator when you call — not a national
              call center. Our technicians explain the issue and the price before any
              work begins. We guarantee our work and we don&rsquo;t leave until you&rsquo;re
              satisfied.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Water Heaters",         href: "/craft-catalog/water-heaters"         },
      { label: "Leak Detection",        href: "/craft-catalog/leak-detection"        },
      { label: "Plumbing Remodeling",   href: "/craft-catalog/plumbing-remodeling"   },
      { label: "Code Violations",       href: "/craft-catalog/code-violations"       },
    ],
  },

  /* ─── COMMERCIAL PLUMBING ──────────────────────────────────────────────── */
  "commercial-plumbing": {
    title: "Commercial Plumbing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Hub Plumbing &amp; Mechanical is your premier plumbing and heating company
          with experienced technicians serving commercial properties throughout the
          Greater New York City Metro Area. From restaurants and retail spaces to
          office buildings and multi-unit residential properties, we handle commercial
          plumbing of all scales.
        </p>
        <p>
          We are also available to consult with Professional Engineers and registered
          architects to determine the most advantageous process for commercial
          plumbing projects.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Commercial Plumbing Services",
        content: (
          <>
            <p>
              Our commercial plumbing services include new plumbing installations,
              pipe repairs, water heater service, drain and sewer maintenance,
              backflow prevention device installation and certification, plumbing
              renovations, code violation correction, Boiler Division services, and
              inspections, signoffs, and permits.
            </p>
            <p>
              Commercial buildings have unique plumbing demands and higher stakes
              when something goes wrong. Hub Plumbing &amp; Mechanical responds
              promptly and works efficiently to minimize disruption to your business
              or tenants.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Why Commercial Clients Choose Hub Plumbing",
        content: (
          <>
            <p>
              As a locally owned, community-focused New York City plumbing company,
              Hub Plumbing &amp; Mechanical has the edge over chain service providers.
              Our plumbing technicians are the best in the industry — factory trained,
              licensed, and familiar with the full range of NYC commercial plumbing
              requirements.
            </p>
            <p>
              We provide honest, upfront pricing, guarantee our work, and offer
              available same-day and emergency service. You speak with a real,
              in-house operator every time you call.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Code Violations",           href: "/craft-catalog/code-violations"           },
      { label: "Heating & Boiler Services", href: "/craft-catalog/heating-boiler-services"   },
      { label: "Water Quality",             href: "/craft-catalog/water-quality"             },
      { label: "Leak Detection",            href: "/craft-catalog/leak-detection"            },
    ],
  },

  /* ─── HEATING & BOILER SERVICES ────────────────────────────────────────── */
  "heating-boiler-services": {
    title: "Heating & Boiler Services",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Hub Plumbing &amp; Mechanical&rsquo;s Boiler Division handles heating
          system inspection, repair, violation removal, and signoffs for residential
          and commercial properties throughout Manhattan, Brooklyn, and Queens.
        </p>
        <p>
          Whether you have a gas boiler, steam heating system, or hydronic radiant
          system, our licensed technicians have the knowledge and experience to keep
          it running safely and efficiently.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (917) 634-8888", href: "tel:9176348888" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Heating System Needs Service",
        content: (
          <>
            <p>
              Call us when: the boiler or furnace fails to provide heat, you notice
              unusual sounds (banging, clanking, or hissing), the pilot light keeps
              going out, there are open violations or pending inspections related to
              your boiler, you notice unusual fuel consumption, or you need a boiler
              inspection or signoff for compliance purposes.
            </p>
            <p>
              Boiler violations in NYC can result in fines and heating shutdowns
              during cold months. Hub Plumbing &amp; Mechanical handles violation
              removal and obtains the necessary signoffs to bring your system back
              into compliance.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "Our Heating & Boiler Services",
        content: (
          <>
            <p>
              <strong>Boiler Repair &amp; Maintenance.</strong> We service all major
              boiler brands — diagnosing issues, replacing parts, and restoring safe,
              efficient operation. Preventative maintenance extends boiler life and
              reduces the risk of unexpected failures during winter.
            </p>
            <p>
              <strong>Violation Removal &amp; Inspections.</strong> Our Boiler
              Division specializes in NYC boiler violation removal, inspections,
              signoffs, and permits. We work directly with the relevant city agencies
              to resolve compliance issues efficiently.
            </p>
            <p>
              <strong>New Boiler Installation.</strong> When repair is no longer
              cost-effective, we install replacement systems — sized correctly for
              your building and installed to code.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Commercial Plumbing",   href: "/craft-catalog/commercial-plumbing"   },
      { label: "Code Violations",       href: "/craft-catalog/code-violations"       },
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing"  },
      { label: "Water Heaters",         href: "/craft-catalog/water-heaters"         },
    ],
  },

};
