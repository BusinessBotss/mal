import type { Metadata } from "next";

const SITE_NAME = "MallorcasLocal";
const DEFAULT_DESCRIPTION = "Planes, spots, mercados, restaurantes y experiencias seleccionadas con criterio real.";

export function buildMeta(title: string, description?: string): Metadata {
  return {
    title: `${title} — ${SITE_NAME}`,
    description: description ?? DEFAULT_DESCRIPTION,
  };
}

export function buildCategorySEO(label: string, description: string): Metadata {
  return buildMeta(label, description);
}

export function buildDetailSEO(name: string, categoryLabel: string, description: string): Metadata {
  return buildMeta(`${name} — ${categoryLabel}`, description);
}

export function buildMarketDaySEO(dayLabel: string): Metadata {
  return buildMeta(`${dayLabel} Markets`, `All local markets in Mallorca on ${dayLabel}.`);
}

export { SITE_NAME };
