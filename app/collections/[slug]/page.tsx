import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollections, findBySlug, getItemsForCollection, optimizeCloudinaryUrl } from "../../../../content/utils";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";
import { CTAButton } from "@/components/CTAButton";
import { WhatsappCTA } from "@/components/WhatsappCTA";
import type { CardItem } from "@/components/CardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = findBySlug(getCollections(), slug);
  if (!collection) return {};
  return { title: `${collection.name} — MallorcasLocal`, description: collection.description };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = findBySlug(getCollections(), slug);
  if (!collection) notFound();

  const { items, basePath } = getItemsForCollection(slug);

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[320px]">
        <img
          src={optimizeCloudinaryUrl(collection.image)}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <CTAButton href="/" label="&larr; Home" variant="secondary" />
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-accent mb-2">{collection.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">{collection.name}</h1>
            <p className="text-lg text-muted mt-3 max-w-xl">{collection.description}</p>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {items.length > 0 && (
          <>
            <SectionTitle title="Featured" />
            <CardGrid items={items.slice(0, 6) as CardItem[]} basePath={basePath} />
            <div className="mt-10">
              <CTAButton href={basePath} label={collection.cta} />
            </div>
          </>
        )}
      </div>

      <WhatsappCTA message={`Hola, quiero info sobre ${collection.name}`} />
    </div>
  );
}
