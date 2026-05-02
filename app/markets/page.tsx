import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedMarketsByDay } from "../../../content/utils";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Markets — MallorcasLocal",
  description: "Weekly local markets across Mallorca, organized by day.",
};

export default function MarketsPage() {
  const marketDays = getFeaturedMarketsByDay();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro
        eyebrow="Plan Local"
        title="Markets"
        subtitle="Weekly local markets across the island. Pick a day and explore what Mallorca has to offer."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {marketDays.map((md) => (
          <Link
            key={md.day}
            href={`/markets/${md.day}`}
            className="group block rounded-2xl border border-card-border bg-card-bg p-6 hover:border-accent/30 transition-colors"
          >
            <p className="text-2xl font-semibold group-hover:text-accent transition-colors">
              {md.label}
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-bold text-accent">{md.count}</span>
              <span className="text-sm text-muted">{md.count === 1 ? "market" : "markets"}</span>
            </div>
            <p className="text-xs text-muted mt-3 group-hover:text-foreground transition-colors">
              View all &rarr;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
