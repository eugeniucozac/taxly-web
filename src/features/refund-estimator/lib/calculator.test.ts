import { describe, it, expect } from "vitest";
import { calculateRefund } from "./calculator";

describe("calculateRefund — W-2 only", () => {
  it("single filer, $50k wages, $7k withheld", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 50000,
      withholding: 7000,
      freelance: 0,
      children: 0,
    });
    // taxable = 50000 - 15000 = 35000
    // tax = 11925×0.10 + (35000-11925)×0.12 = 1192.50 + 2769 = 3961.50
    expect(r.taxableIncome).toBe(35000);
    expect(r.federalTax).toBeCloseTo(3961.5, 0);
    expect(r.refund).toBeCloseTo(7000 - 3961.5, 0);
    expect(r.refund).toBeGreaterThan(0);
  });

  it("MFJ, $120k wages, $18k withheld", () => {
    const r = calculateRefund({
      filingStatus: "mfj",
      wages: 120000,
      withholding: 18000,
      freelance: 0,
      children: 0,
    });
    // taxable = 120000 - 30000 = 90000
    // tax = 23850×0.10 + (90000-23850)×0.12 = 2385 + 7938 = 10323
    expect(r.taxableIncome).toBe(90000);
    expect(r.federalTax).toBeCloseTo(10323, 0);
    expect(r.refund).toBeCloseTo(18000 - 10323, 0);
  });

  it("no income → no tax, withholding is full refund", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 0,
      withholding: 500,
      freelance: 0,
      children: 0,
    });
    expect(r.taxAfterCredits).toBe(0);
    expect(r.refund).toBe(500);
  });

  it("income below standard deduction → no income tax", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 10000,
      withholding: 0,
      freelance: 0,
      children: 0,
    });
    expect(r.taxableIncome).toBe(0);
    expect(r.federalTax).toBe(0);
    expect(r.refund).toBe(0);
  });
});

describe("calculateRefund — freelance income", () => {
  it("applies SE tax and deducts half", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 0,
      withholding: 0,
      freelance: 50000,
      children: 0,
    });
    // netSE = 50000 × 0.9235 = 46175
    // seTax = 46175 × 0.153 = 7064.775
    // seTaxDeduction = 3532.39
    expect(r.seTaxDeduction).toBeCloseTo(3532, 0);
    // AGI = 50000 - 3532 = 46468
    expect(r.agi).toBeCloseTo(46468, 0);
    // federalTax includes SE tax
    expect(r.federalTax).toBeGreaterThan(7000);
  });

  it("mixed W-2 and freelance", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 40000,
      withholding: 5000,
      freelance: 20000,
      children: 0,
    });
    expect(r.grossIncome).toBe(60000);
    expect(r.seTaxDeduction).toBeGreaterThan(0);
    expect(r.federalTax).toBeGreaterThan(r.withheld - r.refund - 1); // sanity check
  });
});

describe("calculateRefund — Child Tax Credit", () => {
  it("2 children reduce tax by $4000 (capped at tax liability)", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 80000,
      withholding: 12000,
      freelance: 0,
      children: 2,
    });
    expect(r.childTaxCredit).toBe(4000);
    expect(r.taxAfterCredits).toBeLessThan(r.federalTax);
  });

  it("CTC phaseout above $200k for single", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 250000,
      withholding: 40000,
      freelance: 0,
      children: 2,
    });
    // AGI = 250000, phaseout threshold = 200000
    // excess = 50000 → 50 blocks × $50 = $2500 reduction
    // credit = 4000 - 2500 = 1500
    expect(r.childTaxCredit).toBe(1500);
  });

  it("no children → zero CTC", () => {
    const r = calculateRefund({
      filingStatus: "mfj",
      wages: 100000,
      withholding: 15000,
      freelance: 0,
      children: 0,
    });
    expect(r.childTaxCredit).toBe(0);
  });
});

describe("calculateRefund — amount owed", () => {
  it("under-withheld filer owes money (negative refund)", () => {
    const r = calculateRefund({
      filingStatus: "single",
      wages: 150000,
      withholding: 10000,
      freelance: 0,
      children: 0,
    });
    expect(r.refund).toBeLessThan(0);
  });
});
