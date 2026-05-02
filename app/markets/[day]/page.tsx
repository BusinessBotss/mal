import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMarketsByDay, dayLabels, dayOrder, zoneLabels, buildMarketDayMetadata, filterByZone } from "../../../../content/utils";
import type { MarketDay, IslandZone } from "../../../../content/types";
import { PageIntro } from "@/components/PageIntro";
import { CTAButton } from "@/components/CTAButton";
import { MapsButton } from "@/components/MapsButton";

interface Props {
  params: Promise<{ day: string }>;
}

export async function generateStaticParams() {
  return dayOrder.map((day) => ({ day }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { day } = await params;
  if (!dayOrder.includes(day as MarketDay)) return {};
  return buildMarketDayMetadata(day as MarketDay);
}

export default async function MarketDayPage({ params }: Props) {
  const { day } = await params;
  if (!dayOrder.includes(day as MarketDay)) notFound();

  const markets = getMarketsByDay(day as MarketDay);
  const label = dayLabels[day as MarketDay];

  // Group markets by zone
  const zones = Array.from(new Set(markets.map((m) => m.zone))).sort();
  const sorted = [...markets].sort((a, b) => a.town.localeCompare(b.town));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <CTAButton href="/markets" label="&larr; All Days" variant="secondary" />

      <div className="mt-8">
        <PageIntro
          eyebrow={label}
          title={`${label} Markets`}
          subtitle={`${markets.length} markets across the island.`}
        />
      </div>

      {/* Zone filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {zones.map((zone) => {
          const count = filterByZone(markets, zone).length;
          return (
            <span key={zone} className="text-xs px-3 py-1.5 rounded-full border border-card-border text-muted">
              {zoneLabels[zone]} ({count})
            </span>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((market) => (
          <div
            key={market.id}
            className="rounded-2xl border border-card-border bg-card-bg p-5 hover:border-accent/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-accent font-medium">{zoneLabels[market.zone]}</span>
              {market.area && (
                <span className="text-xs text-muted">{market.area}</span>
              )}
            </div>
            <h3 className="text-base font-semibold">{market.town}</h3>
            {market.seasonalNotes && (
              <p className="text-xs text-accent/80 mt-1 italic">{market.seasonalNotes}</p>
            )}
            {market.notes && (
              <p className="text-xs text-muted mt-1">{market.notes}</p>
            )}
            <div className="flex items-center justify-between mt-4">
              <MapsButton url={market.googleMapsUrl} />
              {market.priceText && (
                <span className="text-xs text-muted">{market.priceText}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
