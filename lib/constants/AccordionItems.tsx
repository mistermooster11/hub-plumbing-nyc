
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Water Heater Repair & Installation",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Whether your water heater is leaking, won't stay lit, or has simply reached the end of its life, Hub Plumbing handles all types — tank, electric, power vent, and tankless — for homes and businesses throughout Manhattan, Brooklyn, and Queens.",
    learnHref: "/craft-catalog/water-heaters",
    steps: [
      { label: "Diagnose", body: "We assess the heater, identify the issue, and confirm whether repair or replacement is the right call — honestly." },
      { label: "Quote Upfront", body: "You get the price before any work begins. No surprise invoices — what we quote is what you pay." },
      { label: "Repair or Install", body: "Factory-trained technicians complete the repair or installation to manufacturer specifications and NYC code requirements." },
      { label: "Test & Confirm", body: "We run the system, verify correct operation, and leave the workspace clean before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Plumbing Remodeling",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "Remodeling a kitchen or bathroom requires a licensed NYC plumber who knows local codes and can work with building officials efficiently. Hub Plumbing has over 25 years of experience in NYC remodeling — with guaranteed work and no project abandonment.",
    learnHref: "/craft-catalog/plumbing-remodeling",
    steps: [
      { label: "Consult", body: "We review the scope, advise on fixtures and configurations, and confirm permit requirements before work begins." },
      { label: "Quote Upfront", body: "Detailed price before we start — no guessing, no mid-project surprises." },
      { label: "Remodel", body: "Our licensed plumbers handle all plumbing work in the kitchen or bathroom, coordinating efficiently with other trades as needed." },
      { label: "Inspect & Clean Up", body: "We confirm all work meets code, handle required inspections, and leave your space clean and ready to use." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Leak Detection",
    image: "/images/iStock-530983109-1.jpg",
    description:
      "Undetected leaks cause water damage, mold, and skyrocketing bills — often with no visible signs until it's expensive. Hub Plumbing uses professional detection methods to find hidden leaks in walls, slabs, and supply lines across NYC properties.",
    learnHref: "/craft-catalog/leak-detection",
    steps: [
      { label: "Inspect", body: "We assess the property and use professional methods to locate the source of the hidden leak." },
      { label: "Quote Upfront", body: "Once identified, you get the repair price before any work begins." },
      { label: "Repair", body: "The affected pipe, connection, or fitting is repaired or replaced — correctly and completely." },
      { label: "Test & Confirm", body: "We verify the leak is fully resolved before leaving, with no trace of our work other than a fixed plumbing system." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Heating & Boiler Services",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Hub Plumbing & Mechanical's Boiler Division handles NYC boiler inspection, repair, violation removal, and signoffs for residential and commercial properties. NYC boiler violations can mean fines and shutdowns — we handle the full compliance process.",
    learnHref: "/craft-catalog/heating-boiler-services",
    steps: [
      { label: "Assess the System", body: "We inspect the boiler or heating system, identify issues, and review any outstanding violations or inspection requirements." },
      { label: "Quote Upfront", body: "Clear price before any work begins — repair, replacement, or compliance filing." },
      { label: "Service & Repair", body: "Licensed technicians complete all necessary work, from part replacement to full boiler installation, to NYC code." },
      { label: "Signoff & Document", body: "We coordinate inspections, obtain required signoffs from city agencies, and document all completed work." },
    ] as AccordionStep[],
  },
];
