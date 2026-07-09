import { describe, expect, it } from "vitest";
import {
  HIGH_AGI_THRESHOLD,
  safeHarborQuarterly,
  selfEmploymentTax,
} from "./quarterly";

describe("safeHarborQuarterly", () => {
  it("targets 100% of prior-year tax at standard AGI", () => {
    const r = safeHarborQuarterly({ priorYearTax: 8000, highAgi: false, expectedWithholding: 0 });
    expect(r.annualTarget).toBe(8000);
    expect(r.quarterlyPayment).toBe(2000);
    expect(r.multiplier).toBe(1.0);
  });

  it("targets 110% when prior-year AGI was over $150k", () => {
    const r = safeHarborQuarterly({ priorYearTax: 8000, highAgi: true, expectedWithholding: 0 });
    expect(r.annualTarget).toBe(8800);
    expect(r.quarterlyPayment).toBe(2200);
    expect(r.multiplier).toBe(1.1);
  });

  it("subtracts expected withholding before splitting into quarters", () => {
    const r = safeHarborQuarterly({
      priorYearTax: 8000,
      highAgi: false,
      expectedWithholding: 6000,
    });
    expect(r.annualShortfall).toBe(2000);
    expect(r.quarterlyPayment).toBe(500);
  });

  it("floors at zero when withholding already covers the target", () => {
    const r = safeHarborQuarterly({
      priorYearTax: 8000,
      highAgi: false,
      expectedWithholding: 12000,
    });
    expect(r.annualShortfall).toBe(0);
    expect(r.quarterlyPayment).toBe(0);
  });

  it("handles a zero prior-year tax (first year, no penalty exposure)", () => {
    const r = safeHarborQuarterly({ priorYearTax: 0, highAgi: false, expectedWithholding: 0 });
    expect(r.quarterlyPayment).toBe(0);
  });

  it("rejects blank-ish input instead of treating it as zero", () => {
    expect(() =>
      safeHarborQuarterly({ priorYearTax: NaN, highAgi: false, expectedWithholding: 0 }),
    ).toThrow();
    expect(() =>
      safeHarborQuarterly({ priorYearTax: 100, highAgi: false, expectedWithholding: -1 }),
    ).toThrow();
  });

  it("pins the high-AGI threshold constant used by the UI copy", () => {
    expect(HIGH_AGI_THRESHOLD).toBe(150000);
  });
});

describe("selfEmploymentTax", () => {
  it("computes 15.3% on 92.35% of net profit", () => {
    // 50,000 × 0.9235 × 0.153 = 7064.78 (to the cent)
    expect(selfEmploymentTax(50000)).toBeCloseTo(7064.78, 2);
  });

  it("is zero on zero profit", () => {
    expect(selfEmploymentTax(0)).toBe(0);
  });

  it("rejects blank-ish input", () => {
    expect(() => selfEmploymentTax(NaN)).toThrow();
    expect(() => selfEmploymentTax(-100)).toThrow();
  });
});
