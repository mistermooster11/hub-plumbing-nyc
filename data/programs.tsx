import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "/images/IMG_9750-1024x683.jpg",
    title: "Our Services",
    description: (
      <p>
        Hub Plumbing &amp; Mechanical handles every plumbing and heating need
        across Manhattan, Brooklyn, and Queens — from water heater installation
        and leak detection to full plumbing remodels and boiler services.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts the same way: we diagnose the problem, explain the
          solution in plain language, and give you the price before any work
          begins. Our licensed technicians carry professional-grade equipment
          and are factory trained to handle every type of plumbing and heating
          challenge.
        </p>
        <p>
          We work in homes, apartments, co-ops, condos, commercial buildings,
          and multi-family properties. Same-day and emergency service available.
          Call <a href="tel:9176348888">(917) 634-8888</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Water Heater Repair & Installation",
      content: (
        <p>
          We service all major brands and types — tank, electric, power vent,
          and tankless water heaters — for residential and commercial properties.
          Many water heaters can be repaired instead of replaced if you catch
          the problem in time. Our NYC technicians are factory trained to repair
          and install all types of water heaters, from high-efficiency tankless
          units to large commercial models, with honest upfront pricing and
          guaranteed work.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-heaters",
    },
    {
      title: "Plumbing Remodeling",
      content: (
        <p>
          Hub Plumbing &amp; Mechanical has over 25 years of experience remodeling
          NYC kitchens and bathrooms. We know local plumbing codes, required permits,
          and how to coordinate jobs efficiently so your project stays on track.
          Unlike big-box stores, we pay by the hour — every job is treated as the
          priority, and you won&rsquo;t be left waiting while another project takes
          precedence. All work is guaranteed plus manufacturer&rsquo;s warranty.
        </p>
      ),
      learnMoreHref: "/craft-catalog/plumbing-remodeling",
    },
    {
      title: "New Plumbing Fixtures",
      content: (
        <p>
          We install new fixtures of all types — faucets, showerheads, toilets,
          sinks, tubs, valves, and more — ensuring every installation meets NYC
          code and manufacturer specifications. Whether you&rsquo;re upgrading
          for aesthetics, efficiency, or function, our technicians handle the
          installation correctly and leave the workspace clean.
        </p>
      ),
      learnMoreHref: "/craft-catalog/new-plumbing-fixtures",
    },
    {
      title: "Code Violations",
      content: (
        <p>
          Both residential and commercial properties can receive plumbing code
          violations — for reasons ranging from unpermitted renovations to
          outdated configurations in older buildings. Hub Plumbing &amp;
          Mechanical handles the full process: assessment, correction, permit
          filing, inspections, and signoffs with the relevant NYC agencies.
          Our technicians are quick and dependable, and all work is guaranteed.
        </p>
      ),
      learnMoreHref: "/craft-catalog/code-violations",
    },
    {
      title: "Leak Detection",
      content: (
        <p>
          Undetected leaks cause water damage, mold growth, and structural
          issues — often before there&rsquo;s any visible sign. Our team uses
          professional detection methods to find the source of hidden leaks in
          walls, slabs, supply lines, and drain systems, then confirms the
          exact issue and price before beginning any repair. Early detection
          is always cheaper than the damage a slow leak causes over time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/leak-detection",
    },
    {
      title: "Water Quality",
      content: (
        <p>
          Hub Plumbing &amp; Mechanical is a New York State Certified Backflow
          Prevention Specialist (Cert. #10068). We install, test, and certify
          backflow prevention devices in compliance with NYC requirements. We
          also assess water quality concerns related to pipe materials, sediment,
          or taste and odor issues, and recommend appropriate filtration or
          treatment solutions for your home or commercial building.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-quality",
    },
    {
      title: "Faucets, Sinks & Garbage Disposals",
      content: (
        <p>
          Dripping faucets, slow sinks, and failing garbage disposals are exactly
          the kind of jobs we handle every day. We repair and replace all brands
          and configurations — quickly, cleanly, and with upfront pricing. We assess
          the issue first, explain the repair or replacement, confirm the price, and
          fix it right the first time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/faucets-sinks-garbage-disposals",
    },
    {
      title: "Residential Plumbing",
      content: (
        <p>
          Hub Plumbing &amp; Mechanical provides expert residential plumbing
          installation and repair at your convenience throughout Manhattan, Brooklyn,
          and Queens. Our Red Carpet Service means clean uniforms, ID badges, shoe
          covers, and a spotless workspace when we leave. Same-day and emergency
          service available. You speak with a real, in-house operator every time
          you call — not a national call center.
        </p>
      ),
      learnMoreHref: "/craft-catalog/residential-plumbing",
    },
    {
      title: "Commercial Plumbing",
      content: (
        <p>
          From restaurants and retail spaces to office buildings and multi-unit
          residential properties, we handle commercial plumbing of all scales.
          We consult with Professional Engineers and registered architects on
          complex projects, handle inspections, permits, and signoffs, and respond
          promptly to minimize disruption to your business or tenants.
        </p>
      ),
      learnMoreHref: "/craft-catalog/commercial-plumbing",
    },
    {
      title: "Heating & Boiler Services",
      content: (
        <p>
          Hub Plumbing &amp; Mechanical&rsquo;s Boiler Division handles heating
          system inspection, repair, violation removal, and signoffs for residential
          and commercial properties. NYC boiler violations can result in fines and
          heating shutdowns — we handle the full compliance process from assessment
          to signoff with the relevant city agencies, as well as repair, maintenance,
          and new boiler installation.
        </p>
      ),
      learnMoreHref: "/craft-catalog/heating-boiler-services",
    },
  ],

  partners: [],
};
