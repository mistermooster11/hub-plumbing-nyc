export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "water-heaters",
    title: "Water Heater Repair & Installation",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "plumbing-remodeling",
    title: "Plumbing Remodeling",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "new-plumbing-fixtures",
    title: "New Plumbing Fixtures",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "code-violations",
    title: "Code Violations",
    categories: ["Compliance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-quality",
    title: "Water Quality",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "faucets-sinks-garbage-disposals",
    title: "Faucets, Sinks & Garbage Disposals",
    categories: ["Plumbing"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "residential-plumbing",
    title: "Residential Plumbing",
    categories: ["Plumbing"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    categories: ["Plumbing"],
    disciplines: ["Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "heating-boiler-services",
    title: "Heating & Boiler Services",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Plumbing",
  "Heating",
  "Compliance",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Residential",
  "Commercial",
] as const;
