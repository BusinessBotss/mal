import { optimizeCloudinaryUrl } from "../../content/utils";
import type { GalleryItem } from "../../content/gallery.seed";

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative rounded-2xl overflow-hidden bg-card-bg border border-card-border hover:border-accent/30 transition-colors"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={optimizeCloudinaryUrl(item.image)}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-16">
            <span className="inline-block text-[10px] uppercase tracking-widest text-accent/90 mb-1">
              {item.category}
            </span>
            <h3 className="text-sm font-medium text-white leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
