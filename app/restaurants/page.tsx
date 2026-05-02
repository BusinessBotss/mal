import type { Metadata } from "next";
import { getRestaurants, getCategoryConfig } from "../../../content/utils";
import { PageIntro } from "@/components/PageIntro";
import { FilterableListingPage } from "@/components/FilterableListingPage";

const cat = getCategoryConfig("restaurants");

export const metadata: Metadata = {
  title: `${cat.label} — MallorcasLocal`,
  description: cat.description,
};

export default function RestaurantsPage() {
  const items = getRestaurants();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro eyebrow={cat.eyebrow} title={cat.label} subtitle={cat.description} />
      <FilterableListingPage items={items} basePath="/restaurants" emptyText={cat.emptyText} />
    </div>
  );
}
