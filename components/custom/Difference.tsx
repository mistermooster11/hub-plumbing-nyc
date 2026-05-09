import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

const stats = [
  {
    stat: "Same-Day",
    label: "& Emergency Service Available",
    linkText: "Book Service",
    href: "/contact-us",
  },
  {
    stat: "25+",
    label: "Years Serving Manhattan, Brooklyn & Queens",
    linkText: "About Us",
    href: "/explore/hub-plumbing",
  },
  {
    stat: "100%",
    label: "Upfront Pricing — You Approve Before We Start",
    linkText: "See Our Services",
    href: "/craft-catalog",
  },
];

export default function Difference() {
  return (
    <div className="front-difference py-20 md:py-48 border-none">
      <div className="inner inner--slim-1172 flex flex-col gap-0 md:gap-10">

        {/* Columns 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">

          {/* Left: heading + first stat */}
          <div className="flex-1">
            <div className="sub-heading">Why Hub Plumbing</div>
            <h2 className="h1 mb-[3rem]">
              Licensed NYC Pros You Can Actually Count On
            </h2>
            <div className="hidden md:flex flex-wrap gap-[3rem] py-[2rem]">
              <NumberStatsItem item={stats[0]} />
            </div>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[54%] shrink-0 relative z-20">
            <div className="front-difference__image">
              {/* [TODO: Replace with Hub Plumbing job site or team photo] */}
              <VapeImage src="https://hubplumbingnyc.com/images/NYC-Plumbers.png" />
            </div>
          </div>

        </div>

        {/* Columns 2: remaining stats */}
        <div className={[
          "flex flex-col justify-center gap-6",
          "md:flex-row md:items-center"
        ].join(" ")}>
          <div className="block md:hidden">
            <NumberStatsItem item={stats[0]} />
          </div>
          {stats.slice(1).map((item) => (
            <NumberStatsItem key={item.stat} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}
