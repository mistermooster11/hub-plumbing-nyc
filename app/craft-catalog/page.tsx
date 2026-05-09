import CraftCatalogHero from "@/components/custom/craft-catalog/CraftCatalogHero";
import CraftCatalogClient from "@/components/custom/craft-catalog/CraftCatalogClient";

export const metadata = {
  title: "Our Services – Hub Plumbing & Mechanical",
  description:
    "Hub Plumbing & Mechanical offers licensed plumbing and heating services across Manhattan, Brooklyn, and Queens. Water heaters, boilers, leak detection, remodeling — same-day service, upfront pricing.",
};

export default function CraftCatalogPage() {
  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftCatalogHero />
      <CraftCatalogClient />
    </main>
  );
}
