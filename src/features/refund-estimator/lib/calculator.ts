// TY2026 tax figures (based on 2025 law; 2026 IRS adjustments TBD)
export type FilingStatus = "single" | "mfj" | "hoh";

export interface EstimatorInput {
  filingStatus: FilingStatus;
  wages: number;
  withholding: number;
  freelance: number;
  children: number;
}

export interface EstimatorResult {
  grossIncome: number;
  seTaxDeduction: number;
  agi: number;
  standardDeduction: number;
  taxableIncome: number;
  federalTax: number;
  childTaxCredit: number;
  taxAfterCredits: number;
  withheld: number;
  refund: number; // positive = refund, negative = amount owed
}

type Bracket = [number, number, number]; // [from, to, rate]

const BRACKETS: Record<FilingStatus, Bracket[]> = {
  single: [
    [0, 11925, 0.1],
    [11925, 48475, 0.12],
    [48475, 103350, 0.22],
    [103350, 197300, 0.24],
    [197300, 250525, 0.32],
    [250525, 626350, 0.35],
    [626350, Infinity, 0.37],
  ],
  mfj: [
    [0, 23850, 0.1],
    [23850, 96950, 0.12],
    [96950, 206700, 0.22],
    [206700, 394600, 0.24],
    [394600, 501050, 0.32],
    [501050, 751600, 0.35],
    [751600, Infinity, 0.37],
  ],
  hoh: [
    [0, 17000, 0.1],
    [17000, 64850, 0.12],
    [64850, 103350, 0.22],
    [103350, 197300, 0.24],
    [197300, 250500, 0.32],
    [250500, 626350, 0.35],
    [626350, Infinity, 0.37],
  ],
};

const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 15000,
  mfj: 30000,
  hoh: 22500,
};

// CTC phaseout thresholds (AGI)
const CTC_PHASEOUT: Record<FilingStatus, number> = {
  single: 200000,
  mfj: 400000,
  hoh: 200000,
};

const CTC_PER_CHILD = 2000;
const SE_TAX_RATE = 0.153;
const SE_NET_FACTOR = 0.9235; // IRS: net SE income = gross × 0.9235

function applyBrackets(taxableIncome: number, brackets: Bracket[]): number {
  if (taxableIncome <= 0) return 0;
  let tax = 0;
  for (const [from, to, rate] of brackets) {
    if (taxableIncome <= from) break;
    tax += (Math.min(taxableIncome, to) - from) * rate;
  }
  return tax;
}

function calcChildTaxCredit(agi: number, children: number, status: FilingStatus): number {
  if (children === 0) return 0;
  const maxCredit = children * CTC_PER_CHILD;
  const excess = Math.max(0, agi - CTC_PHASEOUT[status]);
  // Phaseout: $50 per $1,000 (or fraction) over threshold
  const phaseoutBlocks = Math.ceil(excess / 1000);
  const reduction = phaseoutBlocks * 50;
  return Math.max(0, maxCredit - reduction);
}

export function calculateRefund(input: EstimatorInput): EstimatorResult {
  const { filingStatus, wages, withholding, freelance, children } = input;

  // Self-employment tax on freelance income
  const netSEIncome = freelance * SE_NET_FACTOR;
  const seTax = netSEIncome * SE_TAX_RATE;
  const seTaxDeduction = seTax / 2; // deductible half of SE tax

  const grossIncome = wages + freelance;
  const agi = Math.max(0, grossIncome - seTaxDeduction);

  const standardDeduction = STANDARD_DEDUCTION[filingStatus];
  const taxableIncome = Math.max(0, agi - standardDeduction);

  const federalTax = applyBrackets(taxableIncome, BRACKETS[filingStatus]);

  // Add SE tax on top of income tax (SE tax applies regardless of deductions)
  const totalTaxBeforeCredits = federalTax + seTax;

  const childTaxCredit = Math.min(
    calcChildTaxCredit(agi, children, filingStatus),
    totalTaxBeforeCredits, // credit can't exceed tax liability (simplified — excludes ACTC)
  );

  const taxAfterCredits = Math.max(0, totalTaxBeforeCredits - childTaxCredit);
  const refund = withholding - taxAfterCredits;

  return {
    grossIncome,
    seTaxDeduction,
    agi,
    standardDeduction,
    taxableIncome,
    federalTax: totalTaxBeforeCredits,
    childTaxCredit,
    taxAfterCredits,
    withheld: withholding,
    refund,
  };
}
