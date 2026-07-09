/**
 * Quarterly estimated-tax (Form 1040-ES) helper — pure logic, no UI.
 *
 * Safe-harbor rule: no underpayment penalty if withholding + estimates reach
 * at least 100% of last year's total tax (110% if last year's AGI was over
 * $150,000), or 90% of this year's tax. This helper targets the prior-year
 * number because it is known in advance.
 *
 * Self-employment tax: 15.3% on 92.35% of net self-employment profit
 * (Social Security portion capped at the annual wage base — not modelled here;
 * flagged in the UI as an approximation for high earners).
 * Verify current figures: https://www.irs.gov/forms-pubs/about-form-1040-es
 */

export const SAFE_HARBOR_STANDARD = 1.0;
export const SAFE_HARBOR_HIGH_AGI = 1.1;
export const HIGH_AGI_THRESHOLD = 150000;
export const SE_TAX_RATE = 0.153;
export const SE_NET_EARNINGS_FACTOR = 0.9235;

export interface QuarterlyInput {
  /** Last year's total tax (Form 1040 line "total tax"). Finite, ≥ 0. */
  priorYearTax: number;
  /** Was last year's AGI over $150,000? */
  highAgi: boolean;
  /** Expected withholding this year (W-2 job etc.). Finite, ≥ 0. */
  expectedWithholding: number;
}

export interface QuarterlyResult {
  /** The safe-harbor annual target. */
  annualTarget: number;
  /** What estimates must cover after withholding. */
  annualShortfall: number;
  /** One quarterly payment (shortfall / 4). */
  quarterlyPayment: number;
  /** Multiplier used (1.0 or 1.1). */
  multiplier: number;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function safeHarborQuarterly(input: QuarterlyInput): QuarterlyResult {
  const { priorYearTax, highAgi, expectedWithholding } = input;
  if (!Number.isFinite(priorYearTax) || priorYearTax < 0) {
    throw new Error("priorYearTax must be a finite number ≥ 0");
  }
  if (!Number.isFinite(expectedWithholding) || expectedWithholding < 0) {
    throw new Error("expectedWithholding must be a finite number ≥ 0");
  }
  const multiplier = highAgi ? SAFE_HARBOR_HIGH_AGI : SAFE_HARBOR_STANDARD;
  const annualTarget = round2(priorYearTax * multiplier);
  const annualShortfall = round2(Math.max(0, annualTarget - expectedWithholding));
  return {
    annualTarget,
    annualShortfall,
    quarterlyPayment: round2(annualShortfall / 4),
    multiplier,
  };
}

/** The first-year-freelancer shock number: SE tax on a given net profit. */
export function selfEmploymentTax(netProfit: number): number {
  if (!Number.isFinite(netProfit) || netProfit < 0) {
    throw new Error("netProfit must be a finite number ≥ 0");
  }
  return round2(netProfit * SE_NET_EARNINGS_FACTOR * SE_TAX_RATE);
}
