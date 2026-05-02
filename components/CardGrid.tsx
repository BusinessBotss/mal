import Link from "next/link";
import { optimizeCloudinaryUrl } from "../../content/utils";
import { zoneLabels, difficultyLabels } from "../../content/utils";
import type { IslandZone, AccessDifficulty } from "../../content/types";

export interface CardItem {
  slug: string;
  name: string;
  description?: string;
  zone: IslandZone;
  difficulty?: AccessDifficulty;
  priceText?: string;
  town?: string;
  image?: string;
  tags?: string[];
}

interface CardGridProps {
  items: CardItem[];
  basePath: string;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ items, basePath, columns = 3 }: CardGridProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colClass} gap-6`}>
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="group block rounded-2xl border border-card-border bg-card-bg overflow-hidden hover:border-accent/30 transition-colors"
        >
          {item.image && (
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={optimizeCloudinaryUrl(item.image)}
                alt={item.name}
                className="w-full h-full object-cover card-image-hover"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-accent">{zoneLabels[item.zone]}</span>
              {item.difficulty && (
                <>
                  <span className="text-card-border">·</span>
                  <span className="text-xs text-muted">{difficultyLabels[item.difficulty]}</span>
                </>
              )}
              {item.priceText && (
                <>
                  <span className="text-card-border">·</span>
                  <span className="text-xs text-muted">{item.priceText}</span>
                </>
              )}
            </div>
            <h3 className="text-base font-semibold group-hover:text-accent transition-colors">
              {item.name}
            </h3>
            {item.town && (
              <p className="text-xs text-muted mt-0.5">{item.town}</p>
            )}
            {item.description && (
              <p className="text-sm text-muted mt-2 line-clamp-2">{item.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
