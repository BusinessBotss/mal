"use client";

import { useState, useCallback } from "react";
import type { IslandZone, AccessDifficulty } from "../../content/types";
import { zoneLabels, difficultyLabels, allZones, allDifficulties } from "../../content/utils";

interface FilterBarProps {
  onZoneChange: (zone: IslandZone | "") => void;
  onDifficultyChange?: (difficulty: AccessDifficulty | "") => void;
  onSearchChange: (query: string) => void;
  showDifficulty?: boolean;
  resultCount?: number;
}

export function FilterBar({
  onZoneChange,
  onDifficultyChange,
  onSearchChange,
  showDifficulty = true,
  resultCount,
}: FilterBarProps) {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setSearch(v);
      onSearchChange(v);
    },
    [onSearchChange],
  );

  return (
    <div className="mb-10 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by name, town, tag..."
            className="w-full bg-card-bg border border-card-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>

        {/* Zone select */}
        <select
          onChange={(e) => onZoneChange(e.target.value as IslandZone | "")}
          className="bg-card-bg border border-card-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer min-w-[140px]"
        >
          <option value="">All Zones</option>
          {allZones.map((z) => (
            <option key={z} value={z}>
              {zoneLabels[z]}
            </option>
          ))}
        </select>

        {/* Difficulty select */}
        {showDifficulty && onDifficultyChange && (
          <select
            onChange={(e) => onDifficultyChange(e.target.value as AccessDifficulty | "")}
            className="bg-card-bg border border-card-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer min-w-[140px]"
          >
            <option value="">All Difficulty</option>
            {allDifficulties.map((d) => (
              <option key={d} value={d}>
                {difficultyLabels[d]}
              </option>
            ))}
          </select>
        )}
      </div>

      {resultCount !== undefined && (
        <p className="text-xs text-muted">
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </p>
      )}
    </div>
  );
}
