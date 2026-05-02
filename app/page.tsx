import Link from "next/link";
import { heroContentSeed } from "../../content/hero-content.seed";
import {
  getHomepageRecommendations,
  getFeaturedCollections,
  getFeaturedGalleryItems,
  getFeaturedMarketsByDay,
  getFaqs,
  getDownloads,
  categories,
  optimizeCloudinaryUrl,
} from "../../content/utils";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid } from "@/components/CardGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTAButton } from "@/components/CTAButton";
import { WhatsappCTA } from "@/components/WhatsappCTA";

export default function HomePage() {
  const hero = heroContentSeed;
  const recs = getHomepageRecommendations();
  const collections = getFeaturedCollections(4);
  const gallery = getFeaturedGalleryItems(6);
  const marketDays = getFeaturedMarketsByDay();
  const faqs = getFaqs().slice(0, 4);
  const downloads = getDownloads().slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[85vh] min-h-[550px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={optimizeCloudinaryUrl(hero.image)}
            alt="Mallorca"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-2xl leading-[1.08]">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted mt-5 max-w-lg">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <CTAButton href="/beaches" label={hero.ctaPrimary} />
            <CTAButton
              href="https://wa.me/34600000000?text=Hola%2C%20quiero%20reservar"
              label={hero.ctaSecondary}
              variant="whatsapp"
              external
            />
          </div>
        </div>
      </section>

      {/* ── Featured Collections ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <SectionTitle eyebrow="Editorial" title="Collections" description="Curated guides for every kind of trip." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group block rounded-2xl border border-card-border bg-card-bg overflow-hidden hover:border-accent/30 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={optimizeCloudinaryUrl(col.image)}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-accent mb-1">{col.eyebrow}</p>
                <h3 className="text-base font-semibold group-hover:text-accent transition-colors">{col.name}</h3>
                <p className="text-sm text-muted mt-1 line-clamp-2">{col.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Explore" title="Categories" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.routeBase}
              className="group rounded-2xl border border-card-border bg-card-bg p-5 text-center hover:border-accent/30 transition-colors"
            >
              <p className="text-sm font-medium group-hover:text-accent transition-colors">
                {cat.label}
              </p>
              <p className="text-xs text-muted mt-1">{cat.labelEs}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Gallery Block ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle eyebrow="Visual" title="Gallery" description="The island through our lens." />
        <GalleryGrid items={gallery} columns={3} />
        <div className="mt-8">
          <CTAButton href="/gallery" label="View full gallery" variant="secondary" />
        </div>
      </section>

      {/* ── Featured Beaches ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Hidden" title="Beaches" description="Wild coves and crystal-clear water." />
        <CardGrid items={recs.beaches} basePath="/beaches" />
        <div className="mt-8">
          <CTAButton href="/beaches" label="View all beaches" variant="secondary" />
        </div>
      </section>

      {/* ── Featured Restaurants ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Curated" title="Restaurants" description="Real recommendations, not tourist traps." />
        <CardGrid items={recs.restaurants} basePath="/restaurants" />
        <div className="mt-8">
          <CTAButton href="/restaurants" label="View all restaurants" variant="secondary" />
        </div>
      </section>

      {/* ── Featured Sunsets ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Golden Hour" title="Sunset Spots" description="Beyond the obvious." />
        <CardGrid items={recs.sunsets} basePath="/sunset-spots" />
        <div className="mt-8">
          <CTAButton href="/sunset-spots" label="View all sunset spots" variant="secondary" />
        </div>
      </section>

      {/* ── Markets ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionTitle eyebrow="Plan Local" title="Markets by Day" description="Pick a day, find your market." />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {marketDays.map((md) => (
            <Link
              key={md.day}
              href={`/markets/${md.day}`}
              className="group rounded-xl border border-card-border bg-card-bg p-4 text-center hover:border-accent/30 transition-colors"
            >
              <p className="text-sm font-medium group-hover:text-accent transition-colors">
                {md.label}
              </p>
              <p className="text-2xl font-semibold text-accent mt-1">{md.count}</p>
              <p className="text-[10px] text-muted mt-0.5">markets</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQs Preview ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Help" title="Common Questions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {faqs.map((faq) => (
            <div key={faq.id} className="rounded-2xl border border-card-border bg-card-bg p-5">
              <h3 className="text-sm font-semibold">{faq.question}</h3>
              <p className="text-sm text-muted mt-2 line-clamp-2">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="/faqs" label="View all FAQs" variant="secondary" />
        </div>
      </section>

      {/* ── Downloads Preview ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle eyebrow="Resources" title="Free Guides" description="Plan your trip with our curated downloads." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {downloads.map((dl) => (
            <div key={dl.id} className="rounded-2xl border border-card-border bg-card-bg p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase tracking-widest text-accent">{dl.type}</span>
                {dl.isLocked && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">Premium</span>
                )}
              </div>
              <h3 className="text-sm font-semibold">{dl.title}</h3>
              <p className="text-xs text-muted mt-1 line-clamp-2">{dl.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="/downloads" label="View all downloads" variant="secondary" />
        </div>
      </section>

      {/* ── Final WhatsApp CTA ── */}
      <WhatsappCTA />
    </div>
  );
}
