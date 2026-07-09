import { describe, expect, it } from "vitest";
import {
  estimatePenalty,
  FTF_CAP,
  INTEREST_RATE_PCT,
  MIN_PENALTY_60_DAYS,
} from "./penalty";

describe("estimatePenalty", () => {
  it("returns zero across the board when nothing is owed", () => {
    const r = estimatePenalty({ unpaidTax: 0, monthsLate: 4, filedOnTime: false });
    expect(r.failureToFile).toBe(0);
    expect(r.failureToPay).toBe(0);
    expect(r.interest).toBe(0);
    expect(r.total).toBe(0);
  });

  it("returns zero when not late at all", () => {
    const r = estimatePenalty({ unpaidTax: 5000, monthsLate: 0, filedOnTime: false });
    expect(r.total).toBe(0);
  });

  it("charges only failure-to-pay + interest when the return was filed on time", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 2, filedOnTime: true });
    expect(r.failureToFile).toBe(0);
    expect(r.failureToPay).toBe(100); // 10000 × 0.5% × 2
    expect(r.interest).toBeCloseTo(10000 * (INTEREST_RATE_PCT / 100) * (2 / 12), 2);
  });

  it("nets FTF to 4.5%/month while FTP runs (1 month, no 60-day minimum)", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 1, filedOnTime: false });
    expect(r.failureToFile).toBe(450); // 4.5%
    expect(r.failureToPay).toBe(50); // 0.5%
    expect(r.minimumApplied).toBe(false);
  });

  it("counts a part month as a full month", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 0.2, filedOnTime: false });
    expect(r.failureToFile).toBe(450);
  });

  it("caps failure-to-file at 25% (5 months) even when later", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 12, filedOnTime: false });
    // 4.5% × 5 months = 2250 (the 5%/mo gross reaches its 25% cap at 5 months)
    expect(r.failureToFile).toBe(2250);
    expect(r.capped).toBe(true);
  });

  it("caps failure-to-pay at 25% for very long delays", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 60, filedOnTime: true });
    expect(r.failureToPay).toBe(10000 * FTF_CAP);
  });

  it("applies the 60-day minimum penalty on small balances filed very late", () => {
    const r = estimatePenalty({ unpaidTax: 400, monthsLate: 6, filedOnTime: false });
    // 100% of unpaid tax (400) < the fixed floor → minimum = 400
    expect(r.minimumApplied).toBe(true);
    expect(r.failureToFile).toBe(400);
  });

  it("uses the fixed floor when unpaid tax exceeds it but computed FTF is lower", () => {
    // 4.5% × 3 = 13.5% of 1000 = 135 < 510 → floor applies (100% of 1000 > 510)
    const r = estimatePenalty({ unpaidTax: 1000, monthsLate: 3, filedOnTime: false });
    expect(r.minimumApplied).toBe(true);
    expect(r.failureToFile).toBe(MIN_PENALTY_60_DAYS);
  });

  it("rejects blank-ish input instead of treating it as zero", () => {
    expect(() => estimatePenalty({ unpaidTax: NaN, monthsLate: 1, filedOnTime: false })).toThrow();
    expect(() =>
      estimatePenalty({ unpaidTax: 100, monthsLate: Infinity, filedOnTime: false }),
    ).toThrow();
    expect(() =>
      estimatePenalty({ unpaidTax: -5, monthsLate: 1, filedOnTime: false }),
    ).toThrow();
  });

  it("totals the three components", () => {
    const r = estimatePenalty({ unpaidTax: 10000, monthsLate: 2, filedOnTime: false });
    expect(r.total).toBeCloseTo(r.failureToFile + r.failureToPay + r.interest, 2);
  });
});
