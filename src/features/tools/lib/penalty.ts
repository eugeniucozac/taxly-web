/**
 * IRS late-filing / late-payment penalty estimate — pure logic, no UI.
 *
 * Illustrative planning numbers, clearly labelled in the UI. Rates:
 * - Failure-to-file: 5% of unpaid tax per month (or part-month), capped at 25%.
 * - Failure-to-pay: 0.5% per month (or part-month), capped at 25%.
 * - When both apply in the same month, the FTF penalty is reduced by the FTP
 *   amount (net 4.5% + 0.5%).
 * - Returns over 60 days late owe a minimum FTF penalty: the lesser of the
 *   inflation-adjusted floor or 100% of the unpaid tax.
 * - Interest accrues on top at the IRS underpayment rate (set quarterly).
 * Verify current figures: https://www.irs.gov/payments/penalties
 */

export const FTF_RATE_PER_MONTH = 0.05;
export const FTP_RATE_PER_MONTH = 0.005;
export const FTF_CAP = 0.25;
export const FTP_CAP = 0.25;
/** Inflation-adjusted minimum FTF penalty for returns 60+ days late (verify each year). */
export const MIN_PENALTY_60_DAYS = 510;
/** IRS underpayment interest rate %/yr — set quarterly, verify before relying on it. */
export const INTEREST_RATE_PCT = 7;

export interface PenaltyInput {
  /** Unpaid tax at the deadline, in dollars. Must be a finite number ≥ 0. */
  unpaidTax: number;
  /** Whole or part months past the deadline (a part month counts as a full month). */
  monthsLate: number;
  /** True if the return itself was filed on time (or extended) and only payment is late. */
  filedOnTime: boolean;
}

export interface PenaltyResult {
  failureToFile: number;
  failureToPay: number;
  interest: number;
  total: number;
  /** True when the 60-day minimum penalty kicked in. */
  minimumApplied: boolean;
  /** True when a cap limited one of the penalties. */
  capped: boolean;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function estimatePenalty(input: PenaltyInput): PenaltyResult {
  const { unpaidTax, monthsLate, filedOnTime } = input;
  if (!Number.isFinite(unpaidTax) || unpaidTax < 0) {
    throw new Error("unpaidTax must be a finite number ≥ 0");
  }
  if (!Number.isFinite(monthsLate) || monthsLate < 0) {
    throw new Error("monthsLate must be a finite number ≥ 0");
  }

  const months = Math.ceil(monthsLate);
  let capped = false;
  let minimumApplied = false;

  // Failure-to-pay: 0.5%/month, capped at 25%.
  const ftpRaw = unpaidTax * FTP_RATE_PER_MONTH * months;
  const ftpCap = unpaidTax * FTP_CAP;
  let failureToPay = ftpRaw;
  if (ftpRaw > ftpCap) {
    failureToPay = ftpCap;
    capped = true;
  }

  // Failure-to-file: only when the return is late. Net 4.5%/month while FTP
  // also runs (the FTF cap of 25% is reached after 5 months either way).
  let failureToFile = 0;
  if (!filedOnTime && months > 0 && unpaidTax > 0) {
    const ftfMonths = Math.min(months, 5); // 5 × 5% = the 25% cap
    if (months >= 5) capped = true;
    failureToFile = unpaidTax * (FTF_RATE_PER_MONTH - FTP_RATE_PER_MONTH) * ftfMonths;

    // 60-day minimum: lesser of the floor or 100% of unpaid tax.
    if (months >= 3) {
      // months is a whole-month approximation; 60+ days ≈ 3rd month onward
      const minimum = Math.min(MIN_PENALTY_60_DAYS, unpaidTax);
      if (failureToFile < minimum) {
        failureToFile = minimum;
        minimumApplied = true;
      }
    }
  }

  // Interest on the unpaid tax, simple-rate approximation by month.
  const interest = unpaidTax * (INTEREST_RATE_PCT / 100) * (months / 12);

  const result: PenaltyResult = {
    failureToFile: round2(failureToFile),
    failureToPay: round2(failureToPay),
    interest: round2(interest),
    total: 0,
    minimumApplied,
    capped,
  };
  result.total = round2(result.failureToFile + result.failureToPay + result.interest);
  return result;
}
