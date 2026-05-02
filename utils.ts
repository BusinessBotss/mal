import type { BaseEntity, PlaceEntity, RestaurantEntity, MarketEntry, IslandZone, AccessDifficulty, MarketDay } from "./types";
import { beachesSeed } from "./beaches.seed";
import { restaurantsSeed } from "./restaurants.seed";
import { cafesSeed } from "./cafes.seed";
import { sunsetSpotsSeed } from "./sunset-spots.seed";
import { pointsOfInterestSeed } from "./points-of-interest.seed";
import { marketsSeed } from "./markets.seed";
import { collectionsSeed } from "./collections.seed";
import type { CollectionSeed } from "./collections.seed";
import { faqsSeed } from "./faqs.seed";
import { downloadsSeed } from "./downloads.seed";
import { gallerySeed } from "./gallery.seed";
import type { GalleryItem } from "./gallery.seed";

// ── Category registry ──

export type ContentCategory =
  | "beaches"
  | "restaurants"
  | "cafes"
  | "sunset-spots"
  | "points-of-interest"
  | "markets";

export interface CategoryMeta {
  slug: ContentCategory;
  label: string;
  labelEs: string;
  eyebrow: string;
  description: string;
  descriptionEs: string;
  emptyText: string;
  routeBase: string;
}

export const categories: CategoryMeta[] = [
  { slug: "beaches", label: "Beaches", labelEs: "Playas", eyebrow: "Discover", description: "Hidden coves and wild beaches across Mallorca.", descriptionEs: "Calas escondidas y playas salvajes por toda Mallorca.", emptyText: "No beaches match your filters.", routeBase: "/beaches" },
  { slug: "restaurants", label: "Restaurants", labelEs: "Restaurantes", eyebrow: "Curated", description: "Curated restaurants with real local criteria.", descriptionEs: "Restaurantes seleccionados con criterio local real.", emptyText: "No restaurants match your filters.", routeBase: "/restaurants" },
  { slug: "cafes", label: "Cafés & Brunch", labelEs: "Cafés y Brunch", eyebrow: "Coffee Guide", description: "Specialty coffee, brunch spots and aesthetic cafés.", descriptionEs: "Café de especialidad, brunch y cafeterías aesthetic.", emptyText: "No cafés match your filters.", routeBase: "/cafes" },
  { slug: "sunset-spots", label: "Sunset Spots", labelEs: "Atardeceres", eyebrow: "Golden Hour", description: "The best sunset viewpoints beyond the obvious.", descriptionEs: "Los mejores atardeceres de la isla, más allá de lo típico.", emptyText: "No sunset spots match your filters.", routeBase: "/sunset-spots" },
  { slug: "points-of-interest", label: "Points of Interest", labelEs: "Puntos de Interés", eyebrow: "Explore", description: "Monuments, viewpoints and culturally rich places.", descriptionEs: "Monumentos, miradores y lugares con peso visual y cultural.", emptyText: "No points of interest match your filters.", routeBase: "/points-of-interest" },
  { slug: "markets", label: "Markets", labelEs: "Mercados", eyebrow: "Plan Local", description: "Weekly local markets across the island.", descriptionEs: "Mercados semanales y locales por toda la isla.", emptyText: "No markets match your filters.", routeBase: "/markets" },
];

export function getCategoryConfig(slug: ContentCategory): CategoryMeta {
  return categories.find((c) => c.slug === slug)!;
}

export const zoneLabels: Record<IslandZone, string> = {
  north: "North",
  south: "South",
  east: "East",
  west: "West",
  center: "Center",
  "north-west": "North-West",
  "south-east": "South-East",
};

export const difficultyLabels: Record<AccessDifficulty, string> = {
  low: "Easy",
  medium: "Moderate",
  high: "Hard",
  "very-high": "Expert",
};

export const dayLabels: Record<MarketDay, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export const dayOrder: MarketDay[] = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
];

export const allZones: IslandZone[] = ["north", "south", "east", "west", "center", "north-west", "south-east"];
export const allDifficulties: AccessDifficulty[] = ["low", "medium", "high", "very-high"];

// ── Data accessors ──

export function getBeaches() { return beachesSeed; }
export function getRestaurants() { return restaurantsSeed; }
export function getCafes() { return cafesSeed; }
export function getSunsetSpots() { return sunsetSpotsSeed; }
export function getPointsOfInterest() { return pointsOfInterestSeed; }
export function getMarkets() { return marketsSeed; }
export function getCollections() { return collectionsSeed; }
export function getFaqs() { return faqsSeed; }
export function getDownloads() { return downloadsSeed; }
export function getGallery() { return gallerySeed; }

export function getItemsByCategory(category: ContentCategory): (PlaceEntity | RestaurantEntity | MarketEntry)[] {
  switch (category) {
    case "beaches": return beachesSeed;
    case "restaurants": return restaurantsSeed;
    case "cafes": return cafesSeed;
    case "sunset-spots": return sunsetSpotsSeed;
    case "points-of-interest": return pointsOfInterestSeed;
    case "markets": return marketsSeed;
  }
}

// ── Filtering ──

export function filterByZone<T extends BaseEntity>(items: T[], zone: IslandZone): T[] {
  return items.filter((item) => item.zone === zone);
}

export function filterByDifficulty<T extends PlaceEntity | RestaurantEntity>(items: T[], difficulty: AccessDifficulty): T[] {
  return items.filter((item) => item.difficulty === difficulty);
}

export function filterByTown<T extends { town?: string }>(items: T[], town: string): T[] {
  const t = town.toLowerCase();
  return items.filter((item) => item.town?.toLowerCase().includes(t));
}

export function filterByTags<T extends { tags?: string[] }>(items: T[], tag: string): T[] {
  return items.filter((item) => item.tags?.includes(tag));
}

// ── Search ──

export function searchItems<T extends { name: string; description?: string; town?: string; tags?: string[] }>(
  items: T[],
  query: string,
): T[] {
  const q = query.toLowerCase().trim();
  if (!q) return items;
  return items.filter((item) => {
    const haystack = [
      item.name,
      item.description ?? "",
      item.town ?? "",
      ...(item.tags ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

// ── Markets ──

export function getMarketsByDay(day: MarketDay): MarketEntry[] {
  return marketsSeed.filter((m) => m.day === day);
}

export function getMarketDayCounts(): Record<MarketDay, number> {
  const counts = {} as Record<MarketDay, number>;
  for (const day of dayOrder) {
    counts[day] = marketsSeed.filter((m) => m.day === day).length;
  }
  return counts;
}

export function getFeaturedMarketsByDay(): { day: MarketDay; label: string; count: number }[] {
  return dayOrder.map((day) => ({
    day,
    label: dayLabels[day],
    count: marketsSeed.filter((m) => m.day === day).length,
  }));
}

// ── Slug lookup ──

export function findBySlug<T extends { slug: string }>(items: T[], slug: string): T | undefined {
  return items.find((item) => item.slug === slug);
}

// ── Related items ──

export function getRelated<T extends BaseEntity & { tags?: string[] }>(
  items: T[],
  current: T,
  limit = 4,
): T[] {
  const currentTags = new Set(current.tags ?? []);
  return items
    .filter((item) => item.id !== current.id)
    .map((item) => {
      const itemTags = item.tags ?? [];
      const overlap = itemTags.filter((t) => currentTags.has(t)).length;
      const zoneMatch = item.zone === current.zone ? 2 : 0;
      return { item, score: overlap + zoneMatch };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}

// ── Gallery helpers ──

export type GalleryCategory = GalleryItem["category"];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  hidden: "Hidden Gems",
  sunrise: "Sunrise",
  sunset: "Sunset",
  mountain: "Mountains",
  beach: "Beach",
  city: "City",
  lifestyle: "Lifestyle",
  viewpoint: "Viewpoints",
};

export function getFeaturedGalleryItems(limit = 6): GalleryItem[] {
  return gallerySeed.slice(0, limit);
}

export function getGalleryByCategory(category: GalleryCategory): GalleryItem[] {
  return gallerySeed.filter((item) => item.category === category);
}

export function getGalleryCategories(): GalleryCategory[] {
  const cats = new Set(gallerySeed.map((g) => g.category));
  return Array.from(cats);
}

// ── Collections helpers ──

export function getFeaturedCollections(limit = 4): CollectionSeed[] {
  return collectionsSeed.slice(0, limit);
}

const collectionCategoryMap: Record<string, ContentCategory> = {
  beaches: "beaches",
  restaurants: "restaurants",
  cafes: "cafes",
  sunsets: "sunset-spots",
  markets: "markets",
  places: "points-of-interest",
  mountains: "points-of-interest",
  city: "points-of-interest",
};

const collectionPathMap: Record<string, string> = {
  beaches: "/beaches",
  restaurants: "/restaurants",
  cafes: "/cafes",
  sunsets: "/sunset-spots",
  markets: "/markets",
  places: "/points-of-interest",
  mountains: "/points-of-interest",
  city: "/points-of-interest",
};

export function getItemsForCollection(slug: string): { items: (PlaceEntity | RestaurantEntity | MarketEntry)[]; basePath: string } {
  const collection = findBySlug(collectionsSeed, slug);
  if (!collection) return { items: [], basePath: "/" };
  const contentCategory = collectionCategoryMap[collection.category];
  const basePath = collectionPathMap[collection.category] ?? "/";
  const items = contentCategory ? getItemsByCategory(contentCategory) : [];
  return { items, basePath };
}

// ── Homepage helpers ──

export function getHomepageRecommendations() {
  return {
    beaches: beachesSeed.slice(0, 3),
    restaurants: restaurantsSeed.slice(0, 3),
    sunsets: sunsetSpotsSeed.slice(0, 3),
    cafes: cafesSeed.slice(0, 3),
  };
}

// ── Unique values for filter dropdowns ──

export function getUniqueTowns<T extends { town?: string }>(items: T[]): string[] {
  const towns = new Set<string>();
  items.forEach((item) => {
    if (item.town) towns.add(item.town);
  });
  return Array.from(towns).sort();
}

export function getUniqueTags<T extends { tags?: string[] }>(items: T[]): string[] {
  const tags = new Set<string>();
  items.forEach((item) => {
    item.tags?.forEach((t) => tags.add(t));
  });
  return Array.from(tags).sort();
}

// ── FAQ grouped ──

export function getFaqsByCategory() {
  const grouped: Record<string, typeof faqsSeed> = {};
  faqsSeed.forEach((faq) => {
    if (!grouped[faq.category]) grouped[faq.category] = [];
    grouped[faq.category].push(faq);
  });
  return grouped;
}

export const faqCategoryLabels: Record<string, string> = {
  booking: "Booking",
  payments: "Payments",
  activities: "Activities",
  nightlife: "Nightlife",
  markets: "Markets",
  general: "General",
};

// ── SEO helpers ──

export function buildCategoryMetadata(slug: ContentCategory) {
  const cat = getCategoryConfig(slug);
  return {
    title: `${cat.label} — MallorcasLocal`,
    description: cat.description,
  };
}

export function buildDetailMetadata(name: string, categoryLabel: string, description: string) {
  return {
    title: `${name} — ${categoryLabel} — MallorcasLocal`,
    description,
  };
}

export function buildMarketDayMetadata(day: MarketDay) {
  const label = dayLabels[day];
  return {
    title: `${label} Markets — MallorcasLocal`,
    description: `All local markets in Mallorca on ${label}.`,
  };
}

// ── Cloudinary helpers ──

export function optimizeCloudinaryUrl(url: string): string {
  if (!url.includes("res.cloudinary.com")) return url;
  if (url.includes("/f_auto")) return url;
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
}

export function cloudinaryCard(url: string, w = 640, h = 800): string {
  if (!url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/w_${w},h_${h},c_fill,f_auto,q_auto/`);
}
