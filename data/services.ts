export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Drain Repair & Cleaning",   href: "/drain-repair/" },
  { label: "Leak Detection & Repair",   href: "/leak-detection/" },
  { label: "Water Heater Installation", href: "/water-heater/" },
  { label: "Toilet & Fixture Repair",   href: "/toilet-repair/" },
  { label: "Emergency Plumbing",        href: "/emergency-plumbing/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Drain Repair & Cleaning",
    image: "/images/service-1.jpg",
    href: "/drain-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Leak Detection & Repair",
    image: "/images/service-2.jpg",
    href: "/leak-detection/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Water Heater Installation",
    image: "/images/service-3.jpg",
    href: "/water-heater/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Toilet & Fixture Repair",
    image: "/images/service-4.jpg",
    href: "/toilet-repair/",
    width: 535,
    height: 643,
  },
];
