export type IslandZone = "north" | "south" | "east" | "west" | "center" | "north-west" | "south-east";
export type AccessDifficulty = "low" | "medium" | "high" | "very-high";
export type PriceType = "free" | "paid" | "variable" | "unknown";
export type MarketDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface BaseEntity {
  id: string;
  slug: string;
  name: string;
  zone: IslandZone;
  googleMapsUrl: string;
}

export interface PlaceEntity extends BaseEntity {
  description: string;
  difficulty: AccessDifficulty;
  priceText: string;
  priceType: PriceType;
  town: string;
  notes?: string;
  tags?: string[];
}

export interface RestaurantEntity extends BaseEntity {
  description: string;
  difficulty: AccessDifficulty;
  priceText: string;
  priceType: PriceType;
  town: string;
  cuisine?: string[];
  notes?: string;
  tags?: string[];
}

export interface MarketEntry extends BaseEntity {
  day: MarketDay;
  town: string;
  area?: string;
  seasonalNotes?: string;
  notes?: string;
  priceText: string;
  priceType: PriceType;
}

export const buildGoogleMapsUrl = (query: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
