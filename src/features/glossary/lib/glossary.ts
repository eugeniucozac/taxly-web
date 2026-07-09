import type { GlossaryTerm } from "../data/en";

export type { GlossaryTerm };

export async function getGlossaryTerms(locale: string): Promise<GlossaryTerm[]> {
  const { glossaryTerms } =
    locale === "es" ? await import("../data/es") : await import("../data/en");
  return glossaryTerms;
}
