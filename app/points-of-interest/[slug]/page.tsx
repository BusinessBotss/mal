import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPointsOfInterest, findBySlug, getRelated, filterByZone, buildDetailMetadata } from "../../../../content/utils";
import { DetailHeader } from "@/components/DetailHeader";
import { RelatedItems } from "@/components/RelatedItems";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPointsOfInterest().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(getPointsOfInterest(), slug);
  if (!item) return {};
  return buildDetailMetadata(item.name, "Points of Interest", item.description);
}

export default async function POIDetailPage({ params }: Props) {
  const { slug } = await params;
  const pois = getPointsOfInterest();
  const item = findBySlug(pois, slug);
  if (!item) notFound();

  const related = getRelated(pois, item);
  const zoneItems = filterByZone(pois, item.zone).filter((p) => p.id !== item.id).slice(0, 3);

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
        backHref="/points-of-interest"
        backLabel="All Points of Interest"
      />

      <RelatedItems items={related} basePath="/points-of-interest" />

      {zoneItems.length > 0 && (
        <section className="mt-20">
          <SectionTitle eyebrow="Same zone" title={`More in ${item.zone}`} />
          <CardGrid items={zoneItems} basePath="/points-of-interest" columns={3} />
        </section>
      )}
    </div>
  );
}
