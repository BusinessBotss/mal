export interface DownloadSeed {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: "guide" | "checklist" | "itinerary" | "map";
  fileUrl?: string;
  cta: string;
  isLocked?: boolean;
}

export const downloadsSeed: DownloadSeed[] = [
  {
    id: "download-hidden-beaches-guide",
    slug: "hidden-beaches-guide",
    title: "Hidden Beaches Guide",
    description:
      "A curated shortlist of lesser-known coves and beach areas with access notes and vibe indicators.",
    type: "guide",
    cta: "Download guide",
    isLocked: true,
  },
  {
    id: "download-sunset-map",
    slug: "sunset-map",
    title: "Sunset Spots Map",
    description:
      "A practical visual guide to the island's best sunset viewpoints, beaches and low-key evening spots.",
    type: "map",
    cta: "Get the map",
    isLocked: true,
  },
  {
    id: "download-weekend-itinerary",
    slug: "mallorca-weekend-itinerary",
    title: "Mallorca Weekend Itinerary",
    description:
      "A ready-made 2-day itinerary with food, viewpoints, beach time and nightlife balance.",
    type: "itinerary",
    cta: "View itinerary",
    isLocked: true,
  },
  {
    id: "download-markets-checklist",
    slug: "local-markets-checklist",
    title: "Local Markets Checklist",
    description:
      "A simple checklist to plan which market to visit based on weekday, area and vibe.",
    type: "checklist",
    cta: "Open checklist",
    isLocked: false,
  },
  {
    id: "download-brunch-guide",
    slug: "best-brunch-guide",
    title: "Best Brunch Guide",
    description:
      "A quick-reference guide to aesthetic brunch and coffee spots around Palma and beyond.",
    type: "guide",
    cta: "Open guide",
    isLocked: true,
  },
];
