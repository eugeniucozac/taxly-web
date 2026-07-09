export interface GlossaryTerm {
  /** Anchor + JSON-LD id. Must be identical across locales. */
  slug: string;
  term: string;
  /** Two honest sentences, plain English. */
  definition: string;
  /** Optional deep link into a tool, guide, or page. */
  link?: { href: string; label: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "adjusted-gross-income",
    term: "Adjusted gross income (AGI)",
    definition:
      "Your total income for the year minus a short list of specific adjustments, like deductible IRA contributions or student-loan interest. Almost everything else in your return — credits, deduction limits, even IRS Free File eligibility — is measured against this number.",
    link: { href: "/refund-estimator", label: "Estimate your refund" },
  },
  {
    slug: "taxable-income",
    term: "Taxable income",
    definition:
      "Your AGI minus your standard or itemized deduction — the number the tax brackets are actually applied to. Two people with the same salary can have very different taxable incomes depending on their deductions.",
  },
  {
    slug: "standard-deduction",
    term: "Standard deduction",
    definition:
      "A flat amount everyone can subtract from income with no receipts required; the IRS adjusts it for inflation every year. Roughly nine in ten filers take it because it beats adding up itemized deductions.",
  },
  {
    slug: "itemized-deductions",
    term: "Itemized deductions",
    definition:
      "The receipts route: mortgage interest, state and local taxes (capped), large charitable gifts, and big medical bills, listed on Schedule A. Only worth it when the total beats your standard deduction — good software checks both and picks the better one.",
  },
  {
    slug: "tax-deduction",
    term: "Tax deduction",
    definition:
      "Something that reduces the income you're taxed on, not the tax itself. A $1,000 deduction in the 22% bracket saves you about $220 — useful, but much less than a $1,000 credit.",
  },
  {
    slug: "tax-credit",
    term: "Tax credit",
    definition:
      "A dollar-for-dollar reduction of the tax you owe — a $1,000 credit saves you $1,000. Some credits are refundable, which means they can push your refund below zero tax owed and put money in your pocket.",
  },
  {
    slug: "filing-status",
    term: "Filing status",
    definition:
      "The category you file under: single, married filing jointly, married filing separately, head of household, or qualifying surviving spouse. It sets your standard deduction and bracket thresholds, so picking the right one matters more than most people think.",
  },
  {
    slug: "head-of-household",
    term: "Head of household",
    definition:
      "A filing status for unmarried people who pay more than half the cost of keeping up a home for a qualifying person, usually a child. It comes with a bigger standard deduction and wider brackets than filing single — and it's one of the most commonly missed upgrades.",
  },
  {
    slug: "dependent",
    term: "Dependent",
    definition:
      "A child or relative you support financially who qualifies under IRS rules on age, residency, and income. Claiming a dependent can unlock the Child Tax Credit, head-of-household status, and other credits.",
  },
  {
    slug: "form-w-2",
    term: "Form W-2",
    definition:
      "The form your employer sends by the end of January showing wages paid and tax withheld. If your only income is on a W-2 and you take the standard deduction, your return is about as simple as returns get.",
  },
  {
    slug: "withholding",
    term: "Withholding (Form W-4)",
    definition:
      "The tax your employer takes out of each paycheck and sends to the IRS, controlled by the W-4 you filled in when hired. A big refund means you withheld too much all year; a surprise bill means too little.",
  },
  {
    slug: "form-1099-nec",
    term: "Form 1099-NEC",
    definition:
      "The form a client sends when they paid you $600 or more for freelance or contract work. It reports gross pay with zero tax withheld — which is why gig income so often produces a surprise tax bill.",
    link: { href: "/tools/quarterly-tax", label: "Quarterly tax calculator" },
  },
  {
    slug: "form-1099-k",
    term: "Form 1099-K",
    definition:
      "The form payment platforms (Stripe, PayPal, marketplaces) send reporting the payments they processed for you. The IRS gets a copy too, so the income on it needs to show up on your return even if it overlaps with other 1099s.",
  },
  {
    slug: "schedule-c",
    term: "Schedule C",
    definition:
      "The form where self-employed people and gig workers report business income and expenses; the profit flows into your 1040. Legitimate expenses — mileage, supplies, home office — reduce both income tax and self-employment tax, so tracking them pays twice.",
  },
  {
    slug: "self-employment-tax",
    term: "Self-employment tax",
    definition:
      "The 15.3% Social Security and Medicare tax on self-employment profit — the piece W-2 employees split with their employer, but you pay in full. It applies on top of income tax and is the single biggest surprise for first-year freelancers.",
    link: { href: "/tools/quarterly-tax", label: "Estimate your quarterly payments" },
  },
  {
    slug: "quarterly-estimated-taxes",
    term: "Quarterly estimated taxes",
    definition:
      "Four payments a year (roughly April, June, September, and January) that self-employed people make because no employer is withholding for them. Skip them and the IRS charges an underpayment penalty even if you pay in full by April 15.",
    link: { href: "/tools/quarterly-tax", label: "Quarterly tax calculator" },
  },
  {
    slug: "safe-harbor",
    term: "Safe harbor (estimated tax)",
    definition:
      "The rule that protects you from underpayment penalties: pay at least 90% of this year's tax or 100% of last year's (110% if your AGI was over $150,000) through withholding and estimates. Most freelancers aim for the prior-year number because it's known in advance.",
  },
  {
    slug: "earned-income-tax-credit",
    term: "Earned Income Tax Credit (EITC)",
    definition:
      "A refundable credit for working people with low to moderate income, worth up to several thousand dollars depending on income and children. The IRS itself estimates about a fifth of eligible workers don't claim it — it's the most valuable commonly-missed credit.",
  },
  {
    slug: "child-tax-credit",
    term: "Child Tax Credit (CTC)",
    definition:
      "A per-child credit for qualifying children under 17, partially refundable for lower incomes and phased out at higher ones. The exact amount and refundable portion have changed several times in recent years, so check the current-year figure rather than a remembered one.",
  },
  {
    slug: "marginal-tax-rate",
    term: "Marginal tax rate (brackets)",
    definition:
      "The rate on your last dollar of income — the bracket you're 'in'. Moving into a higher bracket only taxes the income above the threshold at the higher rate; it never reduces your take-home pay.",
  },
  {
    slug: "effective-tax-rate",
    term: "Effective tax rate",
    definition:
      "Your total tax divided by your total income — the average rate you actually paid. It's always lower than your marginal rate and it's the honest number to use when judging your tax burden.",
  },
  {
    slug: "form-1040",
    term: "Form 1040",
    definition:
      "The main US individual income tax return that everything else attaches to. Schedules and forms feed into it, and the last lines tell you the only two numbers most people care about: refund or amount owed.",
  },
  {
    slug: "state-return",
    term: "State tax return",
    definition:
      "A separate return most states require on top of the federal one, usually starting from your federal numbers. Nine states — including Texas, Florida, and Washington — have no state income tax, so residents there file federal only.",
  },
  {
    slug: "e-file",
    term: "E-file",
    definition:
      "Filing electronically through IRS-authorized software instead of mailing paper. E-filed returns are confirmed within about 48 hours and refund in weeks; paper returns can take months.",
  },
  {
    slug: "irs-direct-file",
    term: "IRS Direct File",
    definition:
      "The IRS's own free filing tool for simple returns in participating states. If you qualify, it's genuinely a good option — its limits are scope (few income types, not all states), not quality.",
    link: { href: "/vs/irs-direct-file", label: "Taxly vs IRS Direct File" },
  },
  {
    slug: "irs-free-file",
    term: "IRS Free File",
    definition:
      "A partnership where commercial software companies offer free federal filing to people under an AGI threshold, reached through irs.gov. It's different from the companies' own 'free' editions, which often have narrower limits and upsell paths.",
  },
  {
    slug: "tax-extension",
    term: "Extension (Form 4868)",
    definition:
      "An automatic six-month extension to file — usually to October 15 — that anyone can request by the April deadline. It extends the paperwork, not the payment: tax owed is still due in April, so pay your best estimate with the extension.",
    link: { href: "/tools/penalty-estimator", label: "Penalty estimator" },
  },
  {
    slug: "amended-return",
    term: "Amended return (Form 1040-X)",
    definition:
      "The form for fixing a return you already filed — a missed 1099, a wrong status, a forgotten credit. You generally have three years from the original deadline to amend and claim a bigger refund.",
  },
  {
    slug: "failure-to-file-penalty",
    term: "Failure-to-file penalty",
    definition:
      "The penalty for filing late when you owe: 5% of the unpaid tax per month, capped at 25% — ten times harsher than the late-payment penalty. The practical rule: always file on time (or extend), even if you can't pay yet.",
    link: { href: "/tools/penalty-estimator", label: "Estimate your penalty" },
  },
  {
    slug: "failure-to-pay-penalty",
    term: "Failure-to-pay penalty",
    definition:
      "The penalty for paying late: 0.5% of the unpaid tax per month (plus interest), capped at 25%. It's small enough that filing on time and paying late beats not filing at all — and the IRS offers payment plans.",
    link: { href: "/tools/penalty-estimator", label: "Estimate your penalty" },
  },
];
