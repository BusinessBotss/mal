import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSunsetSpots, findBySlug, getRelated, filterByZone, buildDetailMetadata } from "../../../../content/utils";
import { DetailHeader } from "@/components/DetailHeader";
import { RelatedItems } from "@/components/RelatedItems";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getSunsetSpots().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(getSunsetSpots(), slug);
  if (!item) return {};
  return buildDetailMetadata(item.name, "Sunset Spots", item.description);
}

export default async function SunsetSpotDetailPage({ params }: Props) {
  const { slug } = await params;
  const spots = getSunsetSpots();
  const item = findBySlug(spots, slug);
  if (!item) notFound();

  const related = getRelated(spots, item);
  const zoneItems = filterByZone(spots, item.zone).filter((s) => s.id !== item.id).slice(0, 3);

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
        backHref="/sunset-spots"
        backLabel="All Sunset Spots"
      />

      <RelatedItems items={related} basePath="/sunset-spots" />

      {zoneItems.length > 0 && (
        <section className="mt-20">
          <SectionTitle eyebrow="Same zone" title={`More in ${item.zone}`} />
          <CardGrid items={zoneItems} basePath="/sunset-spots" columns={3} />
        </section>
      )}
    </div>
  );
}
