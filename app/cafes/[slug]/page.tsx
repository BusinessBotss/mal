import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCafes, findBySlug, getRelated, filterByZone, buildDetailMetadata } from "../../../../content/utils";
import { DetailHeader } from "@/components/DetailHeader";
import { RelatedItems } from "@/components/RelatedItems";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCafes().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(getCafes(), slug);
  if (!item) return {};
  return buildDetailMetadata(item.name, "Cafes", item.description);
}

export default async function CafeDetailPage({ params }: Props) {
  const { slug } = await params;
  const cafes = getCafes();
  const item = findBySlug(cafes, slug);
  if (!item) notFound();

  const related = getRelated(cafes, item);
  const zoneItems = filterByZone(cafes, item.zone).filter((c) => c.id !== item.id).slice(0, 3);

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
        backHref="/cafes"
        backLabel="All Cafes"
      />

      <RelatedItems items={related} basePath="/cafes" />

      {zoneItems.length > 0 && (
        <section className="mt-20">
          <SectionTitle eyebrow="Same zone" title={`More in ${item.zone}`} />
          <CardGrid items={zoneItems} basePath="/cafes" columns={3} />
        </section>
      )}
    </div>
  );
}
