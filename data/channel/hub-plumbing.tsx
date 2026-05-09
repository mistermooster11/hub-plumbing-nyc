import type { ChannelPageData } from "@/components/custom/channel/types";

const hubPlumbing: ChannelPageData = {
  slug: "hub-plumbing",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "NYC Plumbing & Heating Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://hubplumbingnyc.com/images/NYC-Plumbers.png) no-repeat center center / cover, #101d2b",
    description: (
      <p>
        Hub Plumbing &amp; Mechanical is a licensed NYC plumbing and heating
        company serving Manhattan, Brooklyn, and Queens since 1999. We bring
        expert technicians, honest pricing, and Red Carpet Service to every
        home and business we serve.
      </p>
    ),
  },

  learnMore: {
    title: "Red Carpet Service — Every Single Call",
    content: (
      <>
        <p>
          Established in 1999, Hub Plumbing &amp; Mechanical has been the
          trusted choice for plumbing and heating in the Greater New York City
          Metro Area for over 25 years. Our top-notch plumbers are hand-picked
          and trained in-house to ensure the highest level of customer
          satisfaction available.
        </p>

        <h5>Licensed &amp; Certified</h5>
        <p>
          Hub Plumbing &amp; Mechanical holds a New York City Master Plumber
          License (Lic. #2305) and is a New York State Certified Backflow
          Prevention Specialist (Cert. #10068). Every job meets or exceeds
          local plumbing code requirements.
        </p>

        <h5>Red Carpet Treatment</h5>
        <p>
          Imagine your plumbers rolling out a red carpet, covering their work
          boots with booties, wearing ID badges, and arriving in crisp, clean
          uniforms. That&rsquo;s Hub Plumbing. Our Red Carpet Service was
          featured in <em>The Celebrity Experience</em> as an example of how
          to create faithful lifelong customers by treating them like the
          important people they are.
        </p>

        <h5>Expert, In-House Technicians</h5>
        <p>
          We are also available to consult with Professional Engineers and
          registered architects to determine the most advantageous process for
          getting the job done. From Boiler Division violation removal to full
          plumbing remodels, our team handles it all.
        </p>

        <h5>Available When You Need Us</h5>
        <p>
          When you call Hub Plumbing, you speak with a seasoned, in-house
          operator who understands your needs — not a call center. We offer
          prompt expert plumbing &amp; heating services with available same-day
          and emergency plumbing repairs. No job is too big or too small.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (917) 634-8888",     href: "tel:9176348888",   icon: "icon-message" },
      { title: "Contact Us Online",                href: "/contact-us",      icon: "icon-mail"    },
      { title: "Our Services",                     href: "/craft-catalog",   icon: "icon-link"    },
      { title: "Service Areas",                    href: "/service-areas",   icon: "icon-info"    },
      { title: "Frequently Asked Questions",       href: "/general-faqs",    icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        Hub Plumbing &amp; Mechanical handles every plumbing and heating need
        across Manhattan, Brooklyn, and Queens — from water heater installation
        to full plumbing remodels, code violation correction, leak detection,
        and more. Our licensed technicians arrive prepared for any job.
      </p>
    ),
    craftLinks: [
      { label: "Water Heaters",                   href: "/craft-catalog/water-heaters"                   },
      { label: "Plumbing Remodeling",             href: "/craft-catalog/plumbing-remodeling"             },
      { label: "New Plumbing Fixtures",           href: "/craft-catalog/new-plumbing-fixtures"           },
      { label: "Code Violations",                 href: "/craft-catalog/code-violations"                 },
      { label: "Leak Detection",                  href: "/craft-catalog/leak-detection"                  },
      { label: "Water Quality",                   href: "/craft-catalog/water-quality"                   },
      { label: "Faucets, Sinks & Garbage Disposals", href: "/craft-catalog/faucets-sinks-garbage-disposals" },
      { label: "Residential Plumbing",            href: "/craft-catalog/residential-plumbing"            },
      { label: "Commercial Plumbing",             href: "/craft-catalog/commercial-plumbing"             },
      { label: "Heating & Boiler Services",       href: "/craft-catalog/heating-boiler-services"         },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:     "Excellent service at an affordable price. Would definitely use again!",
      name:     "Bob",
      position: "NYC Customer",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    title:       "Plumbing Emergency? Call Now.",
    body: (
      <p>
        Plumbing disasters don&rsquo;t adhere to a 9-to-5 schedule. Hub Plumbing
        &amp; Mechanical offers emergency repairs to get your life back to normal
        as quickly as possible. Call us at{" "}
        <strong>(917) 634-8888</strong> — you&rsquo;ll speak with a real, in-house
        operator ready to help right now.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:9176348888",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule service or have a question? Call us at{" "}
        <strong>(917) 634-8888</strong> or use our online contact form and
        we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default hubPlumbing;
