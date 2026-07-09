import { describe, expect, it } from "vitest";
import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import { getAlternates } from "./metadata";

interface MetaEntry {
  title: string;
  description: string;
}

describe("page metadata (SERP sanity)", () => {
  for (const [locale, messages] of [
    ["en", en],
    ["es", es],
  ] as const) {
    const entries = Object.entries(messages.metadata as Record<string, MetaEntry>);

    it(`${locale}: has metadata namespaces`, () => {
      expect(entries.length).toBeGreaterThanOrEqual(15);
    });

    for (const [ns, meta] of entries) {
      it(`${locale}/${ns}: title is SERP-sane (10–70 chars)`, () => {
        expect(meta.title.length).toBeGreaterThanOrEqual(10);
        expect(meta.title.length).toBeLessThanOrEqual(70);
      });

      it(`${locale}/${ns}: description is SERP-sane (50–250 chars)`, () => {
        expect(meta.description.length).toBeGreaterThanOrEqual(50);
        expect(meta.description.length).toBeLessThanOrEqual(250);
      });
    }
  }
});

describe("getAlternates", () => {
  it("builds canonical + hreflang + x-default", () => {
    const alt = getAlternates("es", "pricing");
    expect(alt.canonical).toMatch(/\/es\/pricing$/);
    expect(alt.languages["en-US"]).toMatch(/\/en\/pricing$/);
    expect(alt.languages["es-US"]).toMatch(/\/es\/pricing$/);
    // x-default points at the site's default locale (en), not the current one
    expect(alt.languages["x-default"]).toMatch(/\/en\/pricing$/);
  });

  it("carries RSS autodiscovery in types (page alternates override the layout's)", () => {
    const alt = getAlternates("en");
    expect(alt.types["application/rss+xml"]).toMatch(/\/feed\.xml$/);
  });
});
