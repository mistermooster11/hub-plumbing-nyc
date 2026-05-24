export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Drain Repair & Cleaning",   href: "/drain-repair" },
      { label: "Leak Detection & Repair",   href: "/leak-detection" },
      { label: "Water Heater Installation", href: "/water-heater" },
      { label: "Toilet & Fixture Repair",   href: "/toilet-repair" },
      { label: "Emergency Plumbing",        href: "/emergency-plumbing" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about-us/" },
  { label: "Services",   href: "/services-page/" },
  { label: "FAQ",        href: "/faq/" },
  { label: "Blog",       href: "/blog/" },
  { label: "Contact",    href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Drain Repair & Cleaning",   href: "/drain-repair/" },
  { label: "Leak Detection & Repair",   href: "/leak-detection/" },
  { label: "Water Heater Installation", href: "/water-heater/" },
  { label: "Toilet & Fixture Repair",   href: "/toilet-repair/" },
  { label: "Emergency Plumbing",        href: "/emergency-plumbing/" },
];
