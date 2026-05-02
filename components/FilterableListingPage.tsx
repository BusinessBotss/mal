"use client";

import { useState, useMemo, useCallback } from "react";
import type { IslandZone, AccessDifficulty } from "../../content/types";
import { searchItems } from "../../content/utils";
import { FilterBar } from "./FilterBar";
import { CardGrid, type CardItem } from "./CardGrid";
import { EmptyState } from "./EmptyState";

type FilterableItem = CardItem & { id: string; zone: IslandZone; googleMapsUrl: string; difficulty?: AccessDifficulty; name: string; description?: string; town?: string; tags?: string[] };

interface FilterableListingPageProps {
  items: FilterableItem[];
  basePath: string;
  showDifficulty?: boolean;
  emptyText?: string;
}

export function FilterableListingPage({
  items,
  basePath,
  showDifficulty = true,
  emptyText,
}: FilterableListingPageProps) {
  const [zone, setZone] = useState<IslandZone | "">("");
  const [difficulty, setDifficulty] = useState<AccessDifficulty | "">("");
  const [search, setSearch] = useState("");

  const handleZone = useCallback((z: IslandZone | "") => setZone(z), []);
  const handleDifficulty = useCallback((d: AccessDifficulty | "") => setDifficulty(d), []);
  const handleSearch = useCallback((q: string) => setSearch(q), []);

  const filtered = useMemo(() => {
    let result = [...items];
    if (zone) result = result.filter((item) => item.zone === zone);
    if (difficulty) result = result.filter((item) => item.difficulty === difficulty);
    if (search) result = searchItems(result, search);
    return result;
  }, [items, zone, difficulty, search]);

  return (
    <>
      <FilterBar
        onZoneChange={handleZone}
        onDifficultyChange={showDifficulty ? handleDifficulty : undefined}
        onSearchChange={handleSearch}
        showDifficulty={showDifficulty}
        resultCount={filtered.length}
      />
      {filtered.length > 0 ? (
        <CardGrid items={filtered} basePath={basePath} />
      ) : (
        <EmptyState message={emptyText} />
      )}
    </>
  );
}
