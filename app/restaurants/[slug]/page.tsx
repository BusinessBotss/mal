import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRestaurants, findBySlug, getRelated, filterByZone, buildDetailMetadata } from "../../../../content/utils";
import { DetailHeader } from "@/components/DetailHeader";
import { RelatedItems } from "@/components/RelatedItems";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getRestaurants().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(getRestaurants(), slug);
  if (!item) return {};
  return buildDetailMetadata(item.name, "Restaurants", item.description);
}

export default async function RestaurantDetailPage({ params }: Props) {
  const { slug } = await params;
  const restaurants = getRestaurants();
  const item = findBySlug(restaurants, slug);
  if (!item) notFound();

  const related = getRelated(restaurants, item);
  const zoneItems = filterByZone(restaurants, item.zone).filter((r) => r.id !== item.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <DetailHeader
        name={item.name}
        description={item.description}
        zone={item.zone}
        difficulty={item.difficulty}
        priceText={item.priceText}
        town={item.town}
        googleMapsUrl={item.googleMapsUrl}
        tags={item.tags}
        notes={item.notes}
        cuisine={item.cuisine}
        backHref="/restaurants"
        backLabel="All Restaurants"
      />

      <RelatedItems items={related} basePath="/restaurants" />

      {zoneItems.length > 0 && (
        <section className="mt-20">
          <SectionTitle eyebrow="Same zone" title={`More in ${item.zone}`} />
          <CardGrid items={zoneItems} basePath="/restaurants" columns={3} />
        </section>
      )}
    </div>
  );
}
