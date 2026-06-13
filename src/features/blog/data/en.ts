export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "tax-filing-deadlines-2026",
    title: "Tax Filing Deadlines for 2026 — Every Date You Need to Know",
    excerpt:
      "Missing a tax deadline costs you money in penalties and interest. Here are every federal and key state deadline for the 2025 tax year, filed in 2026.",
    date: "2026-01-05",
    author: "Taxly Team",
    tags: ["deadlines", "basics"],
    content: `
Missing a tax deadline isn't just stressful — it costs money. The IRS charges a failure-to-file penalty of 5% of unpaid tax per month (up to 25%), plus interest. Here are the dates that matter for the 2025 tax year.

## Federal Deadlines

**April 15, 2026 — Individual returns due (Form 1040)**

This is the main deadline for most Americans. Your federal income tax return for the 2025 tax year is due on April 15, 2026. If you owe taxes, payment is also due on this date — even if you file an extension.

**April 15, 2026 — First quarterly estimated tax payment**

If you're self-employed, a freelancer, or have income without withholding, your first estimated tax payment for the 2026 tax year is due April 15.

**April 15, 2026 — IRA contribution deadline**

You have until April 15 to make a traditional or Roth IRA contribution and have it count for the 2025 tax year.

**June 16, 2026 — Second quarterly estimated payment**

**September 15, 2026 — Third quarterly estimated payment**

**October 15, 2026 — Extended return deadline**

If you filed Form 4868 by April 15, your extended deadline is October 15. Remember: an extension gives you more time to file, not more time to pay. Any taxes owed were still due April 15.

**January 15, 2027 — Fourth quarterly estimated payment**

## W-2 and 1099 Receipt Deadlines

Your employer must send your W-2 by January 31. Banks and brokerages have until February 15 for most 1099s (some corrected forms can arrive later). If you haven't received them by mid-February, contact the issuer directly.

## State Deadlines

Most states follow the federal April 15 deadline, but there are exceptions:

- **Hawaii:** April 20
- **Delaware, Iowa, Louisiana, Virginia:** May 1
- **California:** April 15 for most filers; disaster extensions may apply

Always check your state's department of revenue website for the current year's exact dates.

## What Happens if You Miss a Deadline?

**Filed late, owed tax:** 5% of unpaid tax per month, up to 25%. Plus interest (currently around 7–8% annually).

**Filed late, no tax owed:** No penalty for late filing if you're due a refund. But you have only 3 years to claim a refund — after that, the IRS keeps it.

**Paid late:** 0.5% of unpaid tax per month, plus interest.

**Can't pay?** File your return on time anyway to avoid the larger failure-to-file penalty. Then work out a payment plan with the IRS.

## The Easiest Way to Stay on Top of Deadlines

Taxly sends you reminder notifications before every deadline that applies to your situation. Set up your account and we'll keep track of the dates — so you don't have to.
    `.trim(),
  },
  {
    slug: "w2-vs-1099-difference",
    title: "W-2 vs 1099: What's the Difference and Why It Matters at Tax Time",
    excerpt:
      "Whether you get a W-2 or a 1099 changes how much tax you owe and how you file. Here's a plain-English breakdown of both forms.",
    date: "2026-01-19",
    author: "Taxly Team",
    tags: ["basics", "w-2", "1099"],
    content: `
Every January, employers and businesses send out tax forms. The two most common are the W-2 and the 1099. They look similar — both report income — but they have very different implications for how much you owe and how you file.

## What Is a W-2?

A W-2 is sent by your employer if you're a traditional employee. It shows:

- Your total wages for the year
- How much federal and state income tax was withheld
- Social Security and Medicare taxes withheld (FICA)
- Any benefits like health insurance or retirement contributions

If you receive a W-2, your employer has already been withholding taxes from each paycheck throughout the year. At tax time, you're settling up — getting a refund if too much was withheld, or paying the difference if too little was.

## What Is a 1099?

A 1099 is sent when you receive income that wasn't subject to withholding. There are many types:

- **1099-NEC:** Freelance or contractor income (replaces the old 1099-MISC for this purpose)
- **1099-MISC:** Rent, prizes, royalties, and other miscellaneous income
- **1099-INT:** Interest income from a bank or savings account
- **1099-DIV:** Dividend income from investments
- **1099-B:** Proceeds from selling stocks, crypto, or other investments
- **1099-R:** Retirement distributions (401k, IRA, pension)
- **SSA-1099:** Social Security benefits

Any entity that paid you $600 or more (for services) or $10 or more (for interest/dividends) must issue a 1099.

## The Key Difference: Self-Employment Tax

If you receive a W-2, your employer pays half of your Social Security and Medicare taxes (7.65%). You pay the other half through withholding.

If you receive a 1099-NEC as a contractor or freelancer, you pay **both halves** — the full 15.3% self-employment tax on top of your regular income tax. This is the most common tax surprise for people who go freelance for the first time.

**Example:** You earn $60,000 as a freelancer (1099-NEC). You owe:
- Self-employment tax: ~$8,478 (15.3% of 92.35% of net earnings — there's a small adjustment)
- Federal income tax: depends on your deductions, filing status, and other income
- State income tax: depends on your state

The good news: you can deduct half of the self-employment tax from your income. And if you're self-employed, you can also deduct health insurance premiums, a home office, business expenses, and more.

## Can You Get Both?

Yes, and many people do. If you have a full-time job (W-2) and do freelance work on the side (1099-NEC), you'll receive both forms. Taxly handles this in a single return — no need to file separately.

## What If I Don't Receive a Form?

All income is taxable even if you don't receive a 1099 or W-2. If you were paid cash for services, that's still reportable income. The IRS knows more than you might think — payment apps like Venmo and PayPal are required to issue 1099-Ks for business payments over $600.

## How Taxly Handles Both

When you start your Taxly return, we ask about your income sources. Upload your W-2 directly, import your 1099-NEC, or enter figures manually. We calculate your self-employment tax, suggest every deduction you qualify for, and handle both on a single federal return.
    `.trim(),
  },
  {
    slug: "how-to-file-self-employment-taxes",
    title: "How to File Self-Employment Taxes (Without Losing Your Mind)",
    excerpt:
      "Self-employed? You pay taxes differently than employees — and you have deductions employees don't. Here's exactly how it works.",
    date: "2026-02-02",
    author: "Taxly Team",
    tags: ["self-employed", "freelance", "schedule-c"],
    content: `
If you're a freelancer, independent contractor, or run your own business — even part time — you're self-employed for tax purposes. That changes how you file, how much you owe, and what you can deduct.

## Step 1: Gather Your Income Records

Collect all your 1099-NEC forms from clients who paid you $600 or more. But also report any income you received even without a 1099 — cash payments, Venmo transfers, whatever it was.

Your total self-employment income goes on **Schedule C** (Profit or Loss from Business), which flows into your Form 1040.

## Step 2: Calculate Self-Employment Tax (Schedule SE)

As a self-employed person, you pay both the employer and employee portions of Social Security and Medicare:

- Social Security: 12.4% on net earnings up to $176,100 (2025 limit)
- Medicare: 2.9% on all net earnings
- Additional Medicare: 0.9% on net earnings over $200,000 (single)

**Total: 15.3%** on most self-employment income, compared to 7.65% for employees.

The good news: you can deduct **half of your self-employment tax** from your gross income, reducing your taxable income.

## Step 3: Claim Every Deduction You're Entitled To

This is where self-employed filers have a big advantage over employees. On Schedule C, you can deduct ordinary and necessary business expenses:

- **Home office:** If you use part of your home exclusively for work, you can deduct a portion of rent/mortgage, utilities, and internet. Use the simplified method ($5/sq ft, up to 300 sq ft) or the actual expense method.
- **Self-employed health insurance:** 100% of premiums for you and your family, deducted from gross income (not just Schedule C).
- **Retirement contributions:** SEP-IRA, Solo 401(k), or SIMPLE IRA contributions — up to $70,000/year in a SEP-IRA for 2025.
- **Vehicle:** Business mileage at the IRS standard rate (67 cents/mile for 2024), or actual vehicle expenses.
- **Equipment and software:** Computers, cameras, phones (business portion), software subscriptions.
- **Professional services:** Accountant fees, legal fees related to your business.
- **Education:** Courses, books, conferences that maintain or improve skills required in your current work.

## Step 4: Pay Quarterly Estimated Taxes

Unlike employees, nothing is withheld from your payments throughout the year. You're expected to pay taxes quarterly:

- **Q1:** April 15
- **Q2:** June 16
- **Q3:** September 15
- **Q4:** January 15 (of the following year)

To avoid an underpayment penalty, you generally need to pay either 90% of the current year's tax or 100% of the prior year's tax (110% if your income was over $150,000).

Taxly calculates your estimated payments automatically when you file, so you know exactly what to pay and when.

## Step 5: File by April 15

Self-employed filers use Form 1040 with Schedule C and Schedule SE attached. If you had a net loss from self-employment (expenses exceeded income), that loss can offset other income.

If you can't file by April 15, file Form 4868 for an automatic extension to October 15. Any tax owed is still due April 15.

## Common Mistakes to Avoid

- **Not reporting all income** — The IRS cross-references 1099s and bank records.
- **Mixing personal and business expenses** — Keep separate accounts. It makes deductions cleaner and protects you in an audit.
- **Missing estimated payments** — The penalty is small (around 8% annualized) but avoidable.
- **Forgetting the home office deduction** — It's the most-missed deduction for remote workers and freelancers.
    `.trim(),
  },
  {
    slug: "standard-vs-itemized-deduction",
    title: "Standard vs. Itemized Deduction: Which One Should You Take?",
    excerpt:
      "Most Americans take the standard deduction. But if you own a home, made large charitable gifts, or had high medical expenses, itemizing might save you more. Here's how to decide.",
    date: "2026-02-16",
    author: "Taxly Team",
    tags: ["deductions", "basics", "homeowners"],
    content: `
Every taxpayer faces the same choice: take the standard deduction or itemize. You can't do both. In most cases, the standard deduction wins — but for homeowners and high-income filers, itemizing can save significantly more.

## What Is the Standard Deduction?

The standard deduction is a fixed dollar amount that reduces your taxable income. For the 2025 tax year:

- **Single:** $15,000
- **Married Filing Jointly:** $30,000
- **Head of Household:** $22,500
- **65 or older / blind:** Additional $1,550–$1,950 per qualifying condition

About 90% of US taxpayers take the standard deduction because it's larger than what they'd get by itemizing.

## What Is Itemizing?

Itemizing means adding up specific deductions on Schedule A and deducting that total instead. The major itemized deductions are:

- **State and local taxes (SALT):** Capped at $10,000 for income/property taxes combined
- **Mortgage interest:** On up to $750,000 of home loan principal (for mortgages originated after Dec 15, 2017)
- **Charitable contributions:** Cash and non-cash gifts to qualified organizations
- **Medical expenses:** The portion exceeding 7.5% of your Adjusted Gross Income (AGI)
- **Casualty and theft losses:** Only losses in federally declared disaster areas

## When Does Itemizing Make Sense?

You should itemize if your total qualified expenses exceed your standard deduction. This is most likely if you:

- Own a home with significant mortgage interest (common in the first years of a mortgage)
- Live in a high-tax state (New York, California, New Jersey) and hit the $10,000 SALT cap
- Made large charitable donations
- Had significant unreimbursed medical expenses
- Are a single filer — the lower standard deduction makes itemizing easier to beat

**Quick example:** You're married, own a home, and have:
- Mortgage interest: $18,000
- Property taxes: $8,000
- State income tax: $5,000 (SALT capped at $10,000 combined with property tax)
- Charitable donations: $4,000

Your total: $32,000, which exceeds the $30,000 standard deduction by $2,000. At a 22% tax rate, itemizing saves you $440.

## The $10,000 SALT Cap Complication

Since 2018, the deduction for state and local taxes (income + property) has been capped at $10,000. This disproportionately affects high-income residents of high-tax states. If your state income tax and property taxes alone would exceed $10,000, the excess provides no additional benefit.

## Can I Switch Every Year?

Yes. You choose every year whether to take the standard deduction or itemize. There's no commitment to one approach.

Taxly automatically compares both options and selects whichever gives you a lower tax bill — you don't need to calculate it yourself.

## What About AMT?

Some higher-income taxpayers must calculate the Alternative Minimum Tax (AMT), which disallows certain deductions. If you're subject to AMT, some itemized deductions (like SALT) provide no benefit. Taxly calculates AMT automatically when it applies.

## The Bottom Line

If you rent, have little mortgage interest, and don't make large charitable gifts, take the standard deduction. If you own a home, itemizing is worth checking every year. Taxly does the comparison automatically — you always get the best result.
    `.trim(),
  },
  {
    slug: "what-you-need-to-file-taxes-checklist",
    title: "What You Need to File Your Taxes: The Complete Checklist",
    excerpt:
      "Gather these documents before you sit down to file and you'll be done in under an hour. Here's a complete list by income type.",
    date: "2026-03-02",
    author: "Taxly Team",
    tags: ["basics", "checklist"],
    content: `
The biggest reason people procrastinate on their taxes is not having everything in one place. Spend 15 minutes gathering these documents before you start and you'll sail through the filing process.

## Personal Information (Everyone)

- Social Security numbers for you, your spouse, and any dependents
- Date of birth for all household members
- Last year's tax return (useful for prior-year AGI, which e-filing requires)
- Bank account and routing numbers for direct deposit of your refund

## Income Documents

**If you're an employee:**
- W-2 from each employer (arrives by January 31)

**If you're self-employed or a contractor:**
- 1099-NEC from each client who paid you $600+
- Business income and expense records (income not on a 1099 must still be reported)
- Mileage log if you drove for business

**If you have investment income:**
- 1099-B from your brokerage (stock/crypto sales)
- 1099-DIV (dividends)
- 1099-INT (bank interest — usually arrives in January)
- Cost basis records for assets you sold (what you paid for them and when)

**Other income:**
- 1099-R if you took retirement distributions (401k, IRA, pension)
- SSA-1099 if you received Social Security benefits
- 1099-G if you received state/local tax refunds or unemployment compensation
- Rental income records (rent collected, expenses, mortgage interest on rental property)
- Gambling winnings (W-2G)
- Alimony received (for divorce agreements before 2019)

## Deductions and Credits

**If you itemize:**
- Mortgage interest statement (Form 1098 from your lender)
- Property tax records
- State and local income tax paid (from last year's state return)
- Charitable donation receipts (cash and non-cash — non-cash over $250 requires written acknowledgment)
- Medical expense receipts (only amounts exceeding 7.5% of AGI are deductible)

**Other deductions and credits:**
- 1098-T from colleges and universities (education credits)
- 1098-E for student loan interest
- HSA contributions and distributions (Form 5498-SA / 1099-SA)
- Childcare provider name, address, and Tax ID (for Child and Dependent Care Credit)
- Energy-efficient home improvement receipts (heat pumps, solar, insulation)

## If You're Filing for the First Time

You'll also need:
- Your prior-year AGI — if this is truly your first return, use $0
- An email address for your IRS account (useful for checking refund status)

## How Long Does It Take?

If you have a W-2 and take the standard deduction, filing with Taxly takes about 15 minutes. Add self-employment income or itemized deductions, and budget 45–60 minutes. The more complex your situation, the more documents you'll need — but Taxly walks you through each one.

## Import Instead of Type

Taxly can import your W-2 directly from many employers, pull 1099-B data from major brokerages (Fidelity, Schwab, Vanguard, Robinhood), and import last year's return from TurboTax or H&R Block as a PDF. That cuts data entry time by 80% for most filers.
    `.trim(),
  },
  {
    slug: "how-to-file-a-tax-extension",
    title: "How to File a Tax Extension (And What It Actually Gets You)",
    excerpt:
      "An extension gives you more time to file — not more time to pay. Here's how to file Form 4868, who should do it, and what the common misconceptions are.",
    date: "2026-03-16",
    author: "Taxly Team",
    tags: ["extension", "deadlines", "basics"],
    content: `
Every year, about 19 million Americans file a tax extension. Most do it for the right reasons — missing documents, complicated returns, or life getting in the way. But extensions are widely misunderstood. Here's what you actually get.

## What a Tax Extension Does (and Doesn't Do)

An extension gives you **6 more months to file your return** — moving the deadline from April 15 to October 15.

An extension does **not** give you more time to pay. Any taxes you owe are still due on April 15. If you pay late, the IRS charges interest and a late payment penalty (0.5% per month). Filing late without paying is worse — the failure-to-file penalty is 5% per month.

**The rule:** Always file on time (or file an extension). Pay as much as you can by April 15.

## Who Should File an Extension?

- You're missing a tax document (K-1 from a partnership, corrected 1099, foreign income records)
- Your return is complex and you want more time to get it right
- You had a major life event (divorce, death in family, natural disaster) that disrupted your records
- You want to make a backdoor Roth IRA contribution and need more time to confirm the numbers
- You're a US citizen living abroad (you automatically get until June 16, but can extend to October 15)

## How to File Form 4868

Form 4868, "Application for Automatic Extension of Time to File," is simple — it's half a page. You just need:

- Your name, address, and Social Security number
- An estimate of your total tax liability for the year
- The amount you've already paid (through withholding or estimated payments)
- Payment of any remaining balance due

The extension is automatic. The IRS doesn't notify you that it's granted — if you file correctly and on time, you get it.

**Deadline:** You must file Form 4868 by April 15 (or the current year's equivalent).

Taxly handles the extension filing automatically — just tell us you want to extend, and we'll file it for you.

## Estimating Your Tax Liability

To avoid an underpayment penalty when you file your actual return, you should pay at least:

- 90% of the current year's tax liability, or
- 100% of the prior year's tax liability (110% if your prior-year AGI was over $150,000)

If you're not sure, use your prior year's tax bill as a baseline and pay at least that amount by April 15.

## Can You File an Extension for State Taxes Too?

Usually, but state rules vary. Many states automatically accept the federal extension. Others require you to file a separate state extension form. A few (California, for example) grant an automatic extension without requiring any form at all — but still require payment by April 15.

Check your state's department of revenue website, or let Taxly handle it.

## Common Misconceptions

**"I should file an extension to avoid an audit."** False. The IRS doesn't audit more — or less — based on whether you extended.

**"If I'm getting a refund, I can skip the extension."** True that there's no penalty for filing late when you're getting a refund, but the IRS has 3 years to audit you, and some banks require recent returns for loan applications. Just file on time.

**"An extension means I owe more interest."** Only if you owe taxes and pay them late. If you're owed a refund, an extension costs you nothing — except the time value of getting your refund later.

## The Bottom Line

If April 15 is approaching and you're not ready, file Form 4868. It takes 5 minutes and gives you 6 months. Pay your best estimate of what you owe. File the actual return before October 15. Simple.
    `.trim(),
  },
  {
    slug: "crypto-and-your-taxes",
    title: "Crypto and Your Taxes: What You Must Report (and What Happens If You Don't)",
    excerpt:
      "The IRS treats cryptocurrency as property, not currency. Every sale, trade, or use of crypto is a taxable event. Here's what you need to know.",
    date: "2026-03-30",
    author: "Taxly Team",
    tags: ["crypto", "investments", "capital-gains"],
    content: `
The IRS has been clear since 2014: cryptocurrency is property, not currency. That means every time you sell, trade, or use crypto to buy something, you may owe capital gains tax. Here's how it actually works.

## What Is a Taxable Event?

A taxable event is anything that triggers a gain or loss you must report. For crypto, taxable events include:

- **Selling crypto for US dollars** (or any fiat currency)
- **Trading one crypto for another** (Bitcoin → Ethereum is a taxable event)
- **Using crypto to buy goods or services** (paying for a coffee with Bitcoin = taxable)
- **Receiving crypto as payment for work** (treated as ordinary income, not capital gain)
- **Mining, staking rewards, and airdrops** (treated as ordinary income when received)

## What Is NOT a Taxable Event?

- Buying crypto with dollars
- Holding crypto
- Transferring crypto between your own wallets
- Gifting crypto (the recipient owes taxes when they eventually sell; gift tax rules apply for large gifts)

## Short-Term vs. Long-Term Capital Gains

How long you held the crypto determines the tax rate:

- **Short-term (held 1 year or less):** Taxed as ordinary income — same rate as your salary (10–37%)
- **Long-term (held more than 1 year):** Taxed at preferential capital gains rates — 0%, 15%, or 20%, depending on your income

**The strategy implication:** If you're planning to sell, holding just past the 1-year mark can dramatically reduce your tax rate.

## How to Calculate Gains and Losses

**Cost basis** is what you paid for the crypto, including fees. Your gain or loss is the sale price minus cost basis.

Example: You bought 1 ETH for $2,000 in January 2024. You sold it for $3,500 in March 2026.
- Hold period: more than 1 year → long-term
- Gain: $3,500 − $2,000 = $1,500
- Tax: at 15% long-term rate = $225

If you bought the same ETH at different times and different prices (called "lots"), you can choose which lot to sell — FIFO (first in, first out) is the default, but you can specify higher-cost lots to minimize gains. Taxly handles this automatically.

## What About Losses?

Crypto losses are deductible. You can use crypto losses to offset crypto gains, then to offset other capital gains, and finally up to $3,000 of ordinary income per year. Excess losses carry forward to future years.

**Tax-loss harvesting** — selling losing positions to realize the loss — is a legitimate strategy. Unlike stocks, crypto doesn't have wash-sale rules (yet), meaning you can sell at a loss and immediately rebuy the same crypto.

## Where Do You Report Crypto?

- **Sales:** Form 8949 and Schedule D (same as stocks)
- **Ordinary income from mining/staking/payments:** Schedule 1 or Schedule C
- **Foreign crypto accounts:** FBAR (FinCEN 114) if the value exceeded $10,000 at any point in the year

The IRS asks about crypto on the first page of Form 1040: "At any time during 2025, did you receive, sell, exchange, or otherwise dispose of any digital assets?" Answer honestly — it's a signed declaration.

## 1099-DA: The New Form

Starting with the 2025 tax year, some crypto exchanges are required to issue Form 1099-DA, reporting your crypto transactions. Even if your exchange doesn't issue one, you're still required to report.

## What If I Don't Report?

The IRS receives data from US-based crypto exchanges (Coinbase, Kraken, and others) and matches it against your return. Unreported crypto gains are one of the IRS's active enforcement areas. Penalties for tax fraud start at 75% of the unpaid tax, plus potential criminal charges in serious cases.

Taxly imports your transaction history directly from major exchanges. We calculate every gain and loss, identify which lots to use, and handle Form 8949 automatically.
    `.trim(),
  },
  {
    slug: "first-time-filing-start-here",
    title: "First Time Filing Taxes? Start Here.",
    excerpt:
      "Filing taxes for the first time feels overwhelming. It doesn't have to be. Here's a plain-English walkthrough of everything you need to know.",
    date: "2026-01-12",
    author: "Taxly Team",
    tags: ["basics", "first-time", "getting-started"],
    content: `
Filing your taxes for the first time doesn't have to be scary. Most first-time filers have simple situations — a W-2 job, no investments, no self-employment. If that's you, you can file for free and be done in 20 minutes. Here's exactly how.

## Do You Even Need to File?

Not everyone is required to file a tax return. For the 2025 tax year, you generally must file if your income exceeds these thresholds:

- **Single, under 65:** $14,600
- **Married filing jointly, both under 65:** $29,200
- **Head of household, under 65:** $21,900

Even if you're below these thresholds, you should file if you had any federal income tax withheld — you'll likely get a refund of that money.

## What Filing Status Should You Use?

Your filing status affects your standard deduction and tax rates. The most common statuses for first-time filers:

- **Single:** You're unmarried and don't qualify for another status
- **Married Filing Jointly:** You're married — usually the best tax outcome for couples
- **Head of Household:** You're unmarried and pay more than half the costs of a home for a qualifying dependent (child, parent) — gives you a higher standard deduction than Single

## What You'll Need for a Simple Return

For a basic W-2 return, you need:

- Your W-2 from your employer (arrives by January 31)
- Your Social Security number
- Your prior-year AGI (use $0 if this is truly your first return)
- Bank account details for direct deposit

That's it. No receipts, no complex math.

## Understanding Your W-2

Box 1: Wages (what you're taxed on)
Box 2: Federal income tax already withheld
Boxes 3–6: Social Security and Medicare wages and taxes
Box 16–17: State wages and tax withheld

When you file, you're essentially reporting Box 1 as income and claiming Box 2 as a credit. If more was withheld than you owe, you get a refund. If less, you pay the difference.

## The Standard Deduction

For your first return, you'll almost certainly take the standard deduction — it's larger than what most first-time filers would get by itemizing. For 2025, the standard deduction is $15,000 if you're single. This amount is subtracted from your income before your tax is calculated.

## Tax Credits You Might Qualify For

Even on a simple return, you might qualify for valuable credits:

- **Earned Income Tax Credit (EITC):** For lower-to-moderate income workers, worth up to $7,830 with three or more children. It's refundable — meaning you get it even if you owe no taxes.
- **Saver's Credit:** If you contributed to a 401(k) or IRA, you might get a credit of 10–50% of contributions, up to $1,000.
- **American Opportunity Credit:** If you're in your first four years of college, up to $2,500 per year.

## How to Actually File

There are three ways to file:

1. **DIY software (like Taxly):** Guided questions, usually done in 20–45 minutes, free for simple returns
2. **Free File:** The IRS's free filing program for incomes under $84,000
3. **Tax professional:** An accountant or enrolled agent — worth the cost for complex situations, not necessary for a simple W-2 return

## What Happens After You File?

If you e-file, the IRS typically accepts your return within 24–48 hours. Refunds are usually deposited within 21 days. You can track your refund at IRS.gov/refunds using your SSN, filing status, and refund amount.

If you owe money, you can pay directly from your bank account through the IRS website, by debit/credit card, or by check.

## Keep a Copy of Your Return

Download and save your return (Taxly stores it for you too). You'll need your prior-year Adjusted Gross Income (AGI) when you file next year — it's the IRS's way of verifying your identity for e-filing.

## You've Got This

Your first return is almost certainly simpler than you think. If you made under $100,000, have one or two W-2s, and didn't sell investments, you can file free with Taxly in under 30 minutes. Start now, and you'll have it done before the April 15 deadline.
    `.trim(),
  },
];
