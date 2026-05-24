export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-you-need-a-water-heater-replacement/",
    image: "/images/service-3.jpg",
    date: "15",
    monthYear: "May '26",
    category: "Water Heaters",
    categoryHref: "/blog/",
    title: "5 Signs Your Water Heater Needs Replacement (Not Just Repair)",
    excerpt:
      "Inconsistent hot water, rusty discoloration, and strange noises are all warning signs. Learn when repair is sufficient and when a full replacement is the smarter investment.",
  },
  {
    slug: "/blog/hidden-leaks-nyc-apartments/",
    image: "/images/service-2.jpg",
    date: "01",
    monthYear: "May '26",
    category: "Leak Detection",
    categoryHref: "/blog/",
    title: "Hidden Leaks in NYC Apartments: What Every Tenant and Owner Should Know",
    excerpt:
      "A slow drip inside a wall can cause thousands in damage before it's ever visible. Here's how to spot the early warning signs and what to do when you do.",
  },
  {
    slug: "/blog/drain-cleaning-vs-drain-repair/",
    image: "/images/service-1.jpg",
    date: "10",
    monthYear: "Apr '26",
    category: "Drain Services",
    categoryHref: "/blog/",
    title: "Drain Cleaning vs. Drain Repair: Understanding the Difference",
    excerpt:
      "Not every slow drain needs the same solution. This guide explains when a simple cleaning does the job and when a structural repair is necessary to prevent recurring issues.",
  },
];
