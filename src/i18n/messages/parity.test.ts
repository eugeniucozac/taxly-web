import { describe, it, expect } from "vitest";
import en from "./en.json";
import es from "./es.json";

type JsonValue = string | number | boolean | null | JsonValue[] | { [k: string]: JsonValue };

function leafPaths(obj: JsonValue, prefix = ""): string[] {
  if (obj === null || typeof obj !== "object") return [prefix];
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => leafPaths(item as JsonValue, `${prefix}[${i}]`));
  }
  return Object.entries(obj).flatMap(([key, value]) =>
    leafPaths(value as JsonValue, prefix ? `${prefix}.${key}` : key),
  );
}

describe("i18n message parity", () => {
  const enPaths = new Set(leafPaths(en as unknown as JsonValue));
  const esPaths = new Set(leafPaths(es as unknown as JsonValue));

  it("en and es have the same number of leaf keys", () => {
    expect(enPaths.size).toBe(esPaths.size);
  });

  it("every en key exists in es", () => {
    const missing: string[] = [];
    for (const path of enPaths) {
      if (!esPaths.has(path)) missing.push(path);
    }
    expect(missing, `Keys in en but missing in es:\n${missing.join("\n")}`).toHaveLength(0);
  });

  it("every es key exists in en", () => {
    const extra: string[] = [];
    for (const path of esPaths) {
      if (!enPaths.has(path)) extra.push(path);
    }
    expect(extra, `Keys in es but missing in en:\n${extra.join("\n")}`).toHaveLength(0);
  });
});
