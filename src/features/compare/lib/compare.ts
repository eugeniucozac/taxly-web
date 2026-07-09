import type { Comparison } from "../data/en";

export type { Comparison };

export async function getComparisons(locale: string): Promise<Comparison[]> {
  const { comparisons } =
    locale === "es" ? await import("../data/es") : await import("../data/en");
  return comparisons;
}

export async function getComparisonBySlug(
  slug: string,
  locale: string,
): Promise<Comparison | undefined> {
  const comparisons = await getComparisons(locale);
  return comparisons.find((c) => c.slug === slug);
}
