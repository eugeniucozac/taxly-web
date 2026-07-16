export type BlogCategory = "basics" | "gig" | "deadlines";

export type BlogStatus = "draft" | "scheduled" | "published";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  /** ISO y-m-d. For scheduled posts this is the go-live date. */
  date: string;
  author: string;
  tags: string[];
  category: BlogCategory;
  /** Publication gating — see lib/blog.ts isLive(). */
  status: BlogStatus;
  /** Estimated minutes to read. */
  readTime: number;
}

export const posts: BlogPost[] = [
  {
    slug: "tax-filing-deadlines-2026",
    category: "deadlines",
    status: "published",
    readTime: 5,
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
    category: "gig",
    status: "published",
    readTime: 5,
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
    category: "gig",
    status: "published",
    readTime: 6,
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
    category: "basics",
    status: "published",
    readTime: 5,
    title: "Standard vs. Itemized Deduction: Which One Should You Take?",
    excerpt:
      "Most Americans take the standard deduction. But if you own a home, made large charitable gifts, or had high medical expenses, itemizing might save you more.",
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
    category: "basics",
    status: "published",
    readTime: 6,
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
    category: "deadlines",
    status: "published",
    readTime: 5,
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
    category: "gig",
    status: "published",
    readTime: 6,
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
    category: "basics",
    status: "published",
    readTime: 6,
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
  {
    slug: "quarterly-taxes-first-year-freelancer",
    category: "gig",
    status: "scheduled",
    readTime: 6,
    title: "Quarterly Taxes for First-Year Freelancers — The Guide Nobody Gives You",
    excerpt: "Nobody withholds taxes from freelance income, and the IRS wants its share four times a year. Here's the safe-harbor rule that makes quarterly payments simple.",
    date: "2026-07-13",
    author: "Taxly Team",
    tags: ["self-employment","quarterly-taxes"],
    content: `
The first year of freelancing comes with a tax surprise nobody warns you about: no one is withholding anything. Every dollar a client pays you arrives gross, and the IRS expects you to send in your own tax — not once a year, but four times.

## Why quarterly payments exist

W-2 employees pay tax every paycheck through withholding. The IRS wants the same pay-as-you-go treatment from the self-employed, so it requires estimated payments roughly every quarter: April 15, June 15, September 15, and January 15. Miss them and you owe an underpayment penalty — even if you pay everything you owe by the April filing deadline.

## The safe-harbor rule (the only rule you really need)

Working out your exact current-year tax in advance is hard. The IRS gives you an easier target called the safe harbor: pay at least **100% of last year's total tax** (110% if last year's AGI was over $150,000), spread across the year, and no underpayment penalty applies — no matter what this year's final bill turns out to be.

Last year's total tax is a number you already know: it's the "total tax" line on your Form 1040. Divide the target by four, and that's each payment.

- Find last year's total tax on your 1040
- Multiply by 1.0 (or 1.1 if AGI was over $150k)
- Subtract any W-2 withholding you'll still have this year
- Divide the rest by four

Our free quarterly tax calculator does exactly this arithmetic and shows the due dates.

## Don't forget self-employment tax

The other first-year shock: **self-employment tax**. It's 15.3% for Social Security and Medicare on 92.35% of your net profit — on top of income tax. An employee splits that 15.3% with their employer; you pay both halves. On $50,000 of profit that's roughly $7,000 before income tax even starts.

The partial consolation: you deduct the employer half, and legitimate business expenses reduce both taxes at once. Track every expense from day one.

## How to actually pay

The IRS accepts estimated payments through your IRS Online Account, IRS Direct Pay, or by mailing Form 1040-ES vouchers. Pay from a business account if you have one, and keep the confirmations — you'll report the total paid when you file.

## What if your first year is going badly?

If last year's tax was zero (a student year, say), the prior-year safe harbor can literally be zero — you may owe nothing until April. And if income swings quarter to quarter, the annualized-income method lets you pay less in lean quarters, though it takes more bookkeeping.

**The honest summary:** quarterly taxes are annoying but mechanical. One known number, divided by four, paid on four dates. The people who get burned aren't the ones who calculated wrong — they're the ones who didn't know the system existed.
`,
  },
  {
    slug: "missed-tax-deadline-what-now",
    category: "deadlines",
    status: "scheduled",
    readTime: 5,
    title: "Missed the Tax Deadline? Here's Exactly What to Do (and What It Costs)",
    excerpt: "The penalty for not filing is ten times the penalty for not paying. If you missed April 15, the order of operations matters — here it is, step by step.",
    date: "2026-07-20",
    author: "Taxly Team",
    tags: ["deadlines","penalties"],
    content: `
Missing the tax deadline feels catastrophic. It usually isn't — but the clock is running, and what you do first matters more than most people realize.

## The one fact that changes everything

The IRS charges two separate penalties, and they are wildly different sizes:

- **Failure-to-file:** 5% of the unpaid tax per month, up to 25%
- **Failure-to-pay:** 0.5% of the unpaid tax per month, up to 25%

Filing late is **ten times** more expensive per month than paying late. That gives you the entire strategy: file immediately, even if you can't pay a single dollar of what you owe.

## Step 1: file now, whatever your bank balance says

Every month that passes before you file adds 5% (a part month counts as a full month). Filing today stops that clock immediately, leaving only the much smaller late-payment penalty and interest. If your return is more than 60 days late, a minimum penalty also kicks in — the lesser of an inflation-adjusted floor (around $500) or 100% of the tax owed — which hits small balances hardest.

Our free penalty estimator shows what your specific delay costs.

## Step 2: pay what you can, then get a plan

Interest and the 0.5% monthly penalty apply to the *unpaid* balance, so any partial payment shrinks them. For the rest, the IRS offers payment plans you can set up online in minutes — and while you're on one, the failure-to-pay rate is cut in half.

## Step 3: ask about first-time abatement

If this is your first slip after years of filing cleanly, the IRS's **first-time penalty abatement** can remove the penalties entirely (not the interest). It's one phone call or letter. A remarkable number of eligible people never ask.

## What if you're owed a refund?

Then there is no penalty at all — penalties are percentages of unpaid tax, and yours is zero. But don't drift: you have three years from the original deadline to file and claim the refund. After that the money becomes the government's, permanently.

## Next year, in one sentence

If April is looking impossible, file **Form 4868** by the deadline — it's an automatic six-month filing extension that anyone can have for free. It doesn't extend the payment date, but pairing it with a best-guess payment turns a 5%-per-month problem into a rounding error.

**The honest summary:** the tax system punishes silence far more than poverty. File, pay what you can, ask for the abatement — in that order, starting today.
`,
  },
  {
    slug: "turbotax-alternatives-honest-guide",
    category: "basics",
    status: "scheduled",
    readTime: 6,
    title: "TurboTax Alternatives in 2026 — An Honest Guide (From a Competitor)",
    excerpt: "Yes, we're a competitor. So this guide names the free government option first, credits the budget rival that deserves it, and says who should stay with TurboTax.",
    date: "2026-07-27",
    author: "Taxly Team",
    tags: ["comparisons","basics"],
    content: `
A tax company writing about TurboTax alternatives has an obvious conflict of interest. So let's handle it the only honest way: by naming the options that don't make us a cent first, and by telling you plainly when the answer is "stay where you are."

## Start here: IRS Direct File (free, official)

If your income is all W-2, you take the standard deduction, and your state participates, **IRS Direct File** is simply the right choice. It's free, it's run by the IRS itself, and your data goes nowhere else. Its limits are scope, not quality: no self-employment income, no itemizing, and a state list that changes each season — check the current one on irs.gov.

## The honest budget pick: FreeTaxUSA

**FreeTaxUSA** charges $0 for federal returns — including self-employment — and about $15 per state. It has quietly filed millions of returns for years, and its pricing is genuinely upsell-free. The trade-off is the interface: it's form-like and assumes you broadly know what goes where. If you've filed before and know your situation, it is the cheapest credible option, and we mean that.

## The other big name: H&R Block

Block's software is polished and its checkout behaviour is milder than TurboTax's, with one real differentiator: thousands of physical offices if you want to hand the whole thing to a human mid-way. You pay brand-name prices, but if in-person backup matters, it's the reason to pick Block.

## Cash App Taxes

Completely free, federal and state — funded by the rest of the Cash App ecosystem. Coverage has genuine gaps (multi-state returns, some situations), and support is thin. Worth a look for simple-to-moderate returns if you're already comfortable in Cash App.

## When you should honestly stay with TurboTax

- Your return is genuinely complex — K-1s, foreign income, multi-state business
- You want a live CPA review before you file, this year, with no friction
- Years of your history imports cleanly and the checkout price doesn't sting

TurboTax's problem was never quality. The FTC's 2024 ruling was about deceptive "free" advertising and the upsell ambush — the price finding you at checkout. If those don't bother you, the software itself is excellent.

## Where Taxly fits

Taxly opens for TY2026 returns in January 2027, built for the gig and 1099 filer TurboTax routes to its most expensive tier: a guided plain-English interview, $69 federal + $29 state for self-employment returns, and a price-lock guarantee — the number you see at the start is the number you pay at the end. Our detailed comparisons against TurboTax, FreeTaxUSA, and Direct File spell out exactly where each rival wins.

**The honest summary:** simple return in a covered state → Direct File. Know your taxes, want cheap → FreeTaxUSA. Complex return or need a human → TurboTax or Block. First-year 1099 filer who wants guidance without the ambush → that's who we're building for.
`,
  },
  {
    slug: "irs-direct-file-who-qualifies",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "IRS Direct File: Who Qualifies, What It Covers, and Where It Runs Out",
    excerpt: "The IRS's own free filing tool is genuinely good — if you fit inside its lines. Here's exactly who qualifies, plus the three most common reasons filers outgrow it.",
    date: "2026-08-03",
    author: "Taxly Team",
    tags: ["basics","comparisons"],
    content: `
IRS Direct File is the rarest thing in the tax industry: a genuinely free option with no catch. It's run by the IRS itself, there is no paid tier, and no one is mining your return to sell you something. If you fit inside its lines, use it. The question is whether you fit.

## Who qualifies

Direct File is built around the simple end of the return spectrum. Broadly, you're in if:

- Your income comes from **W-2 wages** (plus limited interest, Social Security, and unemployment)
- You take the **standard deduction** rather than itemizing
- You claim the mainstream credits it supports — EITC and the Child Tax Credit among them
- You live in a **participating state**

The state list is the moving part. It has grown, shrunk, and shifted with politics since the program launched — never assume last season's list, check the current one on irs.gov before you plan around it.

## What it's like to use

Honest answer: competent and clean. Plain-language questions, decent mobile support, and a live chat that answers procedural questions. It files your federal return; participating states then hand you to their own linked tool for the state side, which varies in quality by state.

## The three most common ways filers outgrow it

**1. A 1099 arrives.** Any self-employment or gig income — a 1099-NEC from freelance work, serious 1099-K activity — puts you outside Direct File's scope entirely. This is the single most common exit.

**2. Itemizing starts to win.** Buy a house, and mortgage interest plus state and local taxes may beat your standard deduction. Direct File only supports the standard deduction.

**3. Your state isn't on the list.** No participating state means no state return through the program, and for most people that's a dealbreaker on its own.

## Will it exist next season?

The program's funding and scope have been political footballs. That's not a reason to avoid it — while it's live and you qualify, it's the right choice — but verify its status each January rather than assuming.

## The bottom line

We say this as a company that sells tax software: if Direct File covers you, file with it. Software you don't need is exactly what this industry oversold for two decades. When a 1099 shows up or your state falls outside the lines — that's the moment products like ours earn their fee, and our comparison page spells out exactly where that line sits.
`,
  },
  {
    slug: "1099-k-what-it-means",
    category: "gig",
    status: "scheduled",
    readTime: 5,
    title: "Got a 1099-K? What It Actually Means for Your Taxes",
    excerpt: "Payment apps and marketplaces now report far more activity to the IRS. A 1099-K isn't a tax bill — but ignoring it is how small sellers get surprise letters.",
    date: "2026-08-10",
    author: "Taxly Team",
    tags: ["self-employment","forms"],
    content: `
A form 1099-K in your mailbox causes more unnecessary panic than almost any other tax document. Here's what it is, what it isn't, and what to actually do with it.

## What a 1099-K is

It's an information report from a **payment platform** — Stripe, PayPal, Venmo (business), Etsy, eBay, rideshare and delivery apps — showing the gross payments they processed for you during the year. One copy goes to you; one goes to the IRS.

The reporting threshold has bounced around for years as Congress revised it, so don't be surprised if you get one for a fairly modest amount — check the current threshold on irs.gov rather than relying on an old number.

## What it is not

- **It is not a tax bill.** It reports gross volume, not profit, and not tax owed.
- **It doesn't make hobby sales taxable business income by itself.** Selling your old couch below what you paid isn't taxable profit.
- **It isn't the only income you report.** Your actual income is what you earned, whether or not a form reported it.

## The number on it is gross — your taxes are on net

The 1099-K shows everything processed: refunds you gave, fees the platform took, shipping the buyer paid. If you're running a real side business, your taxable profit is that gross figure minus refunds, fees, cost of goods, and expenses — reported on Schedule C. Keeping your own records is what turns a scary gross number into an accurate net one.

## The trap: double counting

Freelancers sometimes get a 1099-NEC from a client *and* a 1099-K from the platform that processed the same payment. Report the income once — from your own records — and keep both forms so you can explain any mismatch. Software that asks about each form separately without reconciling them inflates your income; this is exactly the kind of thing a guided flow should catch.

## Personal payments between friends

Splitting rent or dinner on a payment app isn't income, and personal accounts generally shouldn't generate 1099-Ks. If one arrives for personal transfers anyway, don't ignore it — the IRS has a copy. There's a designated way to note the erroneous amount on your return; handle it there rather than pretending the form doesn't exist.

## What to actually do

- Check the gross figure against your own records
- Track refunds, fees, and expenses — they reduce taxable profit
- Report income once, even when two forms cover the same dollars
- Never ignore the form: the IRS matches returns against it automatically

**The honest summary:** a 1099-K is a mirror, not a bill. If your records are good, it changes nothing. If you don't have records, it's the reason to start — the IRS's copy arrives whether you're organized or not.
`,
  },
  {
    slug: "no-income-tax-states-federal-only",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "Living in a No-Income-Tax State? Your Filing Is Simpler (Not Free)",
    excerpt: "Nine states charge no tax on wages — which means no state return for most residents. What that actually saves you, what it doesn't, and the fine print in two states.",
    date: "2026-08-17",
    author: "Taxly Team",
    tags: ["states","basics"],
    content: `
If you live in Texas, Florida, Washington, Nevada, Tennessee, South Dakota, Wyoming, Alaska — or, for wage income, New Hampshire — you're in one of the states with no personal income tax on wages. For tax-filing season, that changes exactly one thing, and it's a good one.

## What it means at filing time

**Most residents file a federal return only.** No state return to prepare, no state software fee, no second deadline. Whatever tool you use, the entire "and now your state" step — often $15 to $60 in software fees, plus the time — simply disappears.

That also widens your free options: IRS Direct File's biggest limitation for many filers is state coverage, which is irrelevant when there's no state return to file.

## What it does not mean

- **Not a tax-free life.** These states fund themselves through sales and property taxes instead — often above-average ones. You're trading where the tax hits, not whether it exists.
- **Not zero federal complexity.** Self-employment tax, quarterly estimates, 1099s — all fully federal, all still yours.
- **Not automatic if you have out-of-state income.** Worked remotely for part of the year from a taxing state, or earned rental income in one? You may owe a *nonresident* return there even though your home state wants nothing.

## The two asterisks

**Washington** has no wage income tax but does levy a capital-gains tax on large gains above a substantial threshold — high earners with big stock sales should check it. **New Hampshire** taxed interest and dividends for years; that tax has been phased out, but verify the current rule if you have significant investment income.

## The moving-state year

Move between a taxing state and a no-tax state mid-year, and you'll typically file a part-year return for the taxing state covering the months you lived there. The savings start the day residency changes — one reason relocations to Texas and Florida cluster in December.

## The honest summary

No-income-tax states are the one place tax filing genuinely is as simple as it sounds: one federal return and done, for most people. That's why they're Taxly's launch states — TX, FL, and WA residents get the full guided federal experience with no state return to charge for. The free tier plus a no-tax state is about as cheap as legitimate filing gets.
`,
  },
  {
    slug: "w4-withholding-checkup",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "The August W-4 Checkup: Fix Your Withholding Before It Costs You",
    excerpt:
      "A twenty-minute W-4 checkup in late summer can fix a year of over- or under-withholding. How to read your paystub, when to adjust, and the honest math.",
    date: "2026-08-24",
    author: "Taxly Team",
    tags: ["basics", "forms"],
    content: `
Your W-4 decides how much tax comes out of every paycheck. Most people set it once — on their first day of work — and never look at it again. By late summer you have seven months of paystubs to check it against, and enough paychecks left in the year to fix what's wrong. That's why August is the right month for this, not December.

## The two ways a W-4 goes wrong

**Under-withholding: you'll owe in April.**

If too little comes out of each check, you get a bill at filing time — possibly with an underpayment penalty on top. The usual causes: a second job, a working spouse when both W-4s claim the full standard deduction, or side income with no withholding at all.

**Over-withholding: you're making the IRS an interest-free loan.**

A big refund feels great, but it means you handed over money all year that you could have used. A $3,600 refund is $300 a month you didn't have to give up. Some people genuinely prefer the forced savings — that's a fair choice if you make it on purpose.

## How to actually check

The IRS's own Tax Withholding Estimator at irs.gov is genuinely good — we say that as a company that competes with free government tools. Grab your most recent paystub (and your spouse's, if filing jointly), enter the year-to-date numbers, and it tells you whether you're on track and exactly what to put on a new W-4.

Our free refund estimator does a faster version of the same check: rough in your year's income and withholding and see the direction and size of your April number.

## When you should re-do your W-4

- You got married, divorced, or had a child this year
- You or your spouse started or left a job
- You picked up freelance or gig income with no withholding
- Last year's refund or bill surprised you in either direction

## The fix takes one form

Ask payroll for a new W-4 (or update it in your payroll portal — most let you). Changes usually take effect within one or two pay cycles. If you're behind, Step 4(c) lets you add a flat extra amount per paycheck — with several months left, even a modest extra amount per check can close most gaps by December.

## The honest summary

A W-4 checkup is twenty minutes that decides whether April is a shrug or a surprise. Do it while there are enough paychecks left for small adjustments to work.
`,
  },
  {
    slug: "llc-first-year-taxes",
    category: "gig",
    status: "scheduled",
    readTime: 6,
    title: "Your First Year with an LLC: What Actually Changes at Tax Time",
    excerpt:
      "A single-member LLC changes your legal setup more than your taxes. What a disregarded entity means, when an EIN matters, and which elections change the math.",
    date: "2026-08-31",
    author: "Taxly Team",
    tags: ["self-employed", "schedule-c"],
    content: `
You formed an LLC this year. Congratulations — and here's the anticlimax: for federal income tax, a single-member LLC changes almost nothing. Knowing exactly what changed (and what didn't) saves you from both overpaying and overcomplicating.

## The default: a "disregarded entity"

The IRS ignores a single-member LLC by default. You still file Schedule C with your personal return, you still pay self-employment tax on the profit, and you still make quarterly estimated payments. Same forms as a sole proprietor, same math. The LLC's benefits in this setup are legal (liability separation) and practical (a business name, a business bank account) — not tax savings.

**An LLC does not, by itself, lower your taxes.**

Anyone who sold you the LLC promising tax magic skipped this part. The deductions you can take — home office, supplies, mileage, software — were already available to you as a sole proprietor.

## What you should actually do differently

- Get an EIN (free, five minutes, on irs.gov — never pay a third-party site for one)
- Open a separate business bank account and run all business income and expenses through it
- Keep quarterly estimated payments going — the LLC doesn't pause self-employment tax
- Check your state's rules: some charge LLC franchise taxes or annual fees regardless of profit — California's is famously $800 a year — and that's state money, not federal

## The election everyone asks about: S-corp

An LLC can elect S-corp taxation. The pitch: pay yourself a reasonable salary, take the rest as distributions not subject to self-employment tax. The honest version: it only wins once profits are comfortably clear of a reasonable salary for your work — commonly tens of thousands above it — because payroll service costs, a separate business return, and state rules eat the savings below that. Plenty of first-year owners elect too early and lose money on the overhead.

Run the numbers before electing, not after. If your profit is modest, the default disregarded-entity setup is usually right, and you can elect later when the math turns.

## Quarterlies with a new LLC

Your first LLC year often means income that's lumpier than a salary. Our free quarterly tax calculator does the safe-harbor arithmetic and shows the due dates, so the new business doesn't come with a surprise penalty attached.

## The honest summary

Form the LLC for the legal separation and the clean books. File exactly as before unless the profit numbers genuinely justify an election — and verify any threshold or fee on irs.gov and your state's tax site, because they move.
`,
  },
  {
    slug: "q3-estimated-taxes-september-15",
    category: "deadlines",
    status: "scheduled",
    readTime: 5,
    title: "September 15 Is a Tax Deadline: Q3 Estimated Payments, Explained",
    excerpt:
      "The third estimated payment is due September 15 — the quarter everyone forgets. Who owes it, the safe-harbor math, and how to catch up if you skipped one.",
    date: "2026-09-07",
    author: "Taxly Team",
    tags: ["quarterly-taxes", "deadlines"],
    content: `
April 15 gets all the attention. June 15 catches some people. September 15 is the quarterly deadline that summer swallows — and it arrives this week for anyone with income that doesn't have taxes withheld.

## Who actually owes a payment

If you're a freelancer, contractor, landlord, or investor and you expect to owe at least $1,000 for the year after withholding and credits, the IRS expects payments through the year — not one check in April. Employees with a side income can often skip quarterlies entirely by increasing job withholding instead (see our W-4 checkup guide); everyone else pays quarterly.

## The "quarters" aren't quarters

The IRS's payment periods are famously uneven. The September 15 payment covers June through August — three months — while the January payment covers four. Don't compute "a quarter of the year's tax"; compute what the period actually requires or use the safe harbor.

## The safe harbor, in one paragraph

Pay 100% of last year's total tax (110% if your adjusted gross income was over $150,000), spread across the four due dates, and you're penalty-proof no matter how this year turns out. It's the simplest defensible strategy when income is lumpy: last year's tax is a number you already know. Our free quarterly tax calculator does exactly this arithmetic and shows the due dates.

## Skipped Q1 or Q2? Pay now anyway

Underpayment penalties accrue per period, based on how long the shortfall sits unpaid. You can't retroactively fix a missed June payment, but every day earlier you pay stops more of the meter. Catching up in September costs less than catching up in January, which costs less than settling up in April.

## How to pay (free, five minutes)

IRS Direct Pay at irs.gov pulls from your bank account with no fee — pick "Estimated Tax" and the current tax year. Skip the card processors that charge a percentage. Your state may want its own estimated payment too; check your state's tax site.

## The honest summary

September 15 is the year's most-missed tax deadline because nothing reminds you. Put the January one in your calendar now — it's the other one summer amnesia claims.
`,
  },
  {
    slug: "cant-pay-your-taxes",
    category: "basics",
    status: "scheduled",
    readTime: 6,
    title: "Can't Pay Your Taxes? File Anyway — Then Pick a Plan",
    excerpt:
      "The failure-to-file penalty is ten times the failure-to-pay penalty. Why filing without paying is always the right move, and how IRS payment plans really work.",
    date: "2026-09-14",
    author: "Taxly Team",
    tags: ["penalties", "basics"],
    content: `
Owing the IRS money you don't have feels like a reason not to file. It's the opposite. The tax system punishes not-filing about ten times harder than not-paying, and it offers payment plans to almost everyone who asks. Here's the playbook, in order.

## Step 1: File the return (or the extension) no matter what

The failure-to-file penalty runs 5% of the unpaid tax per month, up to 25%. The failure-to-pay penalty runs 0.5% per month. Filing on time with zero payment attached instantly avoids the big one. There is no version of this where waiting to file helps you.

**Filing without paying cuts your penalty exposure by roughly 90%.**

Our free penalty estimator shows what your specific balance and delay actually cost, month by month.

## Step 2: Pay whatever you can with the return

Penalties and interest accrue on the unpaid balance, so every dollar you send now shrinks the meter. There's no minimum — partial payment is always accepted and always helps.

## Step 3: Pick the payment plan that fits

- **Short-term plan (up to 180 days):** no setup fee, apply online at irs.gov in minutes. Right for "I'll have it by year-end" situations.
- **Long-term installment agreement:** monthly payments over several years. There's a setup fee (lower if you apply online and pay by direct debit — verify current amounts on irs.gov), and direct debit also halves the ongoing failure-to-pay rate to 0.25% per month while the agreement is active.

Approval for individuals under the online thresholds is close to automatic — no negotiation, no phone call, no proof of hardship.

## The "pennies on the dollar" ads — read this before calling one

An Offer in Compromise is real: the IRS sometimes settles for less than the full balance. But it's designed for genuine can-never-pay situations, judged on your assets and income, and most people who owe a manageable balance simply don't qualify. The firms advertising settlements charge thousands to file paperwork you can file yourself — and the IRS has a free pre-qualifier tool on irs.gov that tells you in ten minutes whether an offer is even plausible. Check it before paying anyone.

## The honest summary

File on time, pay what you can, set up the plan online, and let direct debit shrink the penalty rate. The IRS is genuinely boring to deal with when you follow this order — the horror stories almost all start with an unfiled return.
`,
  },
  {
    slug: "side-hustle-hobby-or-business",
    category: "gig",
    status: "scheduled",
    readTime: 5,
    title: "Side Hustle Taxes: When the IRS Says Your Hobby Is a Business",
    excerpt:
      "Hobby income is taxable but hobby losses aren't deductible. Where the IRS draws the line, why the label decides your deductions, and what a 1099-K changes.",
    date: "2026-09-21",
    author: "Taxly Team",
    tags: ["freelance", "1099"],
    content: `
You sell prints on Etsy, flip furniture, or coach on weekends. Is that a business or a hobby? The answer changes your tax return more than most people expect — and it isn't decided by what you call it.

## The part that surprises people: income is taxable either way

Hobby income is fully taxable. There's no "it's just a hobby" exemption, no minimum before it counts, and a 1099-K from a payment app doesn't create the obligation — it just tells the IRS what already existed.

## The label decides your deductions

**A business reports income minus expenses. A hobby reports income, period.**

Since the 2018 tax law, hobby expenses are simply not deductible. Sell $4,000 of prints as a business with $2,500 of costs, and you're taxed on $1,500 profit (minus self-employment tax on it). Same numbers as a hobby, and you're taxed on the full $4,000 with nothing to subtract. The business label — with its Schedule C and self-employment tax — is usually still the better deal when you have real costs.

## Where the IRS draws the line

The test is profit motive: are you genuinely trying to make money? The IRS weighs how businesslike your records are, the time and effort you put in, your expertise, your history of profit, and whether you depend on the income. There's also a practical presumption: profit in three of the last five years generally makes you a business.

- Businesslike: separate account, tracked expenses, prices set to earn, marketing effort
- Hobby-like: cash mixed with personal spending, losses every year, no attempt to improve

## The loss question is where audits live

Claiming business losses year after year against wage income — for an activity with an enjoyment component (photography, horses, crafts, racing) — is the classic hobby-loss audit trigger. If you're profitable, or occasionally profitable, the business label is safe. If you're engineering perpetual losses, expect to defend the profit motive with records.

## If it's a business, act like one

Schedule C, self-employment tax above the small-earnings threshold, and quarterly estimated payments once you expect to owe $1,000+. Our free quarterly tax calculator turns a lumpy side income into four safe-harbor payments with due dates.

## The honest summary

Report the income either way — that part isn't optional. Then claim the business label if the facts support it: it's what unlocks your deductions, and with honest records it's nothing to fear.
`,
  },
  {
    slug: "october-15-extension-deadline",
    category: "deadlines",
    status: "scheduled",
    readTime: 5,
    title: "October 15: The Last Exit for Extended Returns",
    excerpt:
      "If you filed an extension in April, the real deadline is October 15 — and it doesn't extend. What missing it costs, and how to finish a stuck return fast.",
    date: "2026-09-28",
    author: "Taxly Team",
    tags: ["extension", "deadlines"],
    content: `
Roughly one in ten filers takes the automatic extension every spring. If you're one of them, the six months are nearly up: extended returns are due October 15, and unlike April, there is no second extension. Here's what the deadline actually means and how to land it.

## What October 15 is — and isn't

The extension moved your filing deadline, not your payment deadline. Whatever you owed was due back on April 15, and the failure-to-pay meter (0.5% per month, plus interest) has been running on any unpaid balance since then. October 15 is about the return itself.

**Miss October 15 with a balance due, and the failure-to-file penalty — 5% per month — starts stacking on top.**

That's the expensive cliff. Our free penalty estimator shows what your specific balance and delay costs.

## If you're owed a refund, breathe

Both penalties are percentages of unpaid tax. If your withholding covered you and the IRS owes you money, missing October 15 costs you nothing in penalties — you're just delaying your own refund (and the clock to claim it runs out after three years). File soon, but don't panic.

## Stuck because a document is missing?

The most common reason returns sit unfinished is a missing W-2 or 1099. You don't have to wait on the issuer: the IRS already has copies. Create an account at irs.gov and pull your Wage and Income Transcript — it lists what every employer and platform reported for you, free. File from that.

## Two more things worth knowing

- If you're in a federally declared disaster area, your deadline may already be later — check the IRS disaster-relief page for your county rather than assuming
- E-file stays open past October 15, but the IRS shuts annual e-file maintenance later in the season — verify current dates on irs.gov if you're cutting it close to year-end

## The honest summary

October 15 is a hard deadline with a soft landing for refund-getters and an expensive cliff for owers. Know which one you are — that single fact decides whether this week is urgent.
`,
  },
  {
    slug: "hsa-triple-tax-advantage",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "The HSA Is the Best Tax Break Most People Ignore",
    excerpt:
      "Deductible going in, tax-free growing, tax-free coming out for medical costs. Who actually qualifies for an HSA, the honest catches, and the deadline quirk.",
    date: "2026-10-05",
    author: "Taxly Team",
    tags: ["deductions", "basics"],
    content: `
No other account in the tax code does all three: contributions are deductible, growth is untaxed, and withdrawals are tax-free when spent on qualified medical costs. The HSA is the only triple. It's also widely misunderstood, so here's the honest version — including who shouldn't chase it.

## The triple, spelled out

- **Going in:** contributions reduce your taxable income — and you don't need to itemize to get the deduction
- **Growing:** interest and investment gains inside the account aren't taxed
- **Coming out:** withdrawals for qualified medical expenses are tax-free, at any age, with no expiration on when you reimburse yourself

Contributions through payroll do even better: they usually skip Social Security and Medicare tax too, which even 401(k) contributions don't.

## The catch that decides everything

You can only contribute while covered by a qualifying high-deductible health plan (HDHP). That's the real gate — and it means the HSA question is really a health-insurance question.

**Don't pick a worse health plan to get a tax break.**

If you have regular prescriptions, ongoing care, or a family that hits the doctor often, a low-deductible plan can beat the HDHP-plus-HSA combo even after the tax savings. The HSA math shines for people who are mostly healthy or who can cash-flow the deductible. Run your actual expected care costs through both plans during open enrollment — that comparison, not the tax break, should decide.

## The numbers move — verify before you contribute

Contribution limits change every year (there's a limit for self-only coverage, a higher one for family coverage, and a catch-up amount at 55+). The HDHP definition — minimum deductibles, out-of-pocket caps — moves annually too. Check the current figures on irs.gov before setting your payroll deferral.

## The deadline quirk worth knowing

Like an IRA, you can contribute for a tax year until the April filing deadline of the next year. Under-contributed for last year and owe in April? A prior-year HSA contribution is one of the few levers that still works after December 31 — our free refund estimator shows what the deduction does to your number.

## Two fine-print items

- Keep receipts for medical costs you pay out of pocket — you can reimburse yourself from the HSA years later, tax-free, as long as the expense came after the account opened
- A couple of states (California and New Jersey) don't follow the federal treatment and tax HSA earnings at the state level

## The honest summary

If an HDHP already fits how you use healthcare, the HSA is the strongest tax-advantaged dollar available to you. If it doesn't fit, skip it without guilt — a tax break should never cost more in deductibles than it saves in tax.
`,
  },
  {
    slug: "year-end-tax-moves",
    category: "basics",
    status: "scheduled",
    readTime: 6,
    title: "Year-End Tax Moves That Actually Matter (and the Ones That Don't)",
    excerpt:
      "Most December tax tips quietly assume you itemize. The moves that work for W-2 filers, the deadlines that really are December 31, and what can wait for April.",
    date: "2026-10-12",
    author: "Taxly Team",
    tags: ["basics", "deductions"],
    content: `
Every December, the internet fills with year-end tax checklists — and most items on them only help the minority of filers who itemize deductions. Here's the honest split: what actually moves the number for a standard-deduction filer, what's itemizer-only, and which deadlines are real.

## The deadline split that organizes everything

**December 31 deadlines:** workplace retirement contributions (401(k), 403(b)) via payroll, FSA spending (mostly), charitable gifts, and realizing investment gains or losses.

**April 15 deadlines:** IRA contributions and HSA contributions for the prior year.

That second list is the pressure release: if you find money in February, you can still cut last April's bill with a prior-year IRA or HSA contribution. Don't let a December panic push you into decisions the calendar doesn't require.

## Moves that work even with the standard deduction

- **Raise your 401(k) deferral for the last paychecks.** Payroll contributions reduce taxable income with no itemizing needed — and the December 31 cutoff is real
- **Fix your withholding.** Tax withheld from a paycheck is treated as if paid evenly through the year, so a bigger December withholding can erase an underpayment penalty that quarterly payments made now can't. This is the one genuinely underrated year-end move
- **Spend the FSA.** Flexible spending accounts are use-it-or-lose-it; check whether your plan has a grace period or a small carryover, and book the dentist accordingly
- **Harvest investment losses.** Realized losses offset realized gains, plus a limited amount of ordinary income — mind the wash-sale rule (don't rebuy the same security within 30 days)

## Moves that only matter if you itemize

Charitable donations, bunching two years of gifts into one, and prepaying deductible expenses all assume your itemized total beats the standard deduction. Most filers' doesn't. Estimate your itemized total honestly first — if it's not close, these tips cost you effort (or actual money) for zero tax change. Donate because you want to support something, not for a deduction you won't receive.

## Check before you optimize

Run your rough numbers first — our free refund estimator takes five minutes and tells you whether you're heading for a bill or a refund. Optimizing blind is how people prepay expenses they didn't need to. And verify any limit or threshold on irs.gov; the annual figures move every year.

## The honest summary

For most W-2 filers, year-end tax planning is three moves: top up the 401(k), fix the withholding, spend the FSA. Everything else is either itemizer-only or can wait for April. Simple beats clever here.
`,
  },
  {
    slug: "como-declarar-impuestos-primera-vez",
    category: "basics",
    status: "scheduled",
    readTime: 6,
    title: "How to File US Taxes for the First Time — a Spanish-First Guide",
    excerpt:
      "Your first US tax return, written Spanish-first and translated here: the documents you need, SSN vs ITIN, the genuinely free options, and the costliest mistakes.",
    date: "2026-10-19",
    author: "Taxly Team",
    tags: ["first-time", "basics"],
    content: `
Filing US taxes for the first time intimidates everyone — and if your first language is Spanish, half the guides out there aren't talking to you. This one is: we wrote it in Spanish first and translated it here, not the other way around.

## First things first: do you have to file?

If you worked in the US and earned above the filing threshold (it changes yearly — verify on irs.gov), yes. And even below the threshold, filing often pays: if your employer withheld taxes, the refund only arrives if you file. Many newcomers leave money on the table simply by not knowing this.

## SSN or ITIN — your identification number

- **SSN (Social Security number):** if you have work authorization, this is your number.
- **ITIN:** if you don't qualify for an SSN, the IRS issues an individual taxpayer identification number for filing. You apply with Form W-7, and filing with an ITIN doesn't affect your immigration case — the IRS is legally restricted in how it shares that information.

## The documents you need

- A **W-2** from every employer (they arrive by January 31)
- Any **1099s** if you did independent or app-based work
- Your SSN or ITIN, plus your spouse's and dependents' if applicable
- A photo ID and, for direct deposit, your bank account number

## The genuinely free options

We say this as a company that sells tax filing: look at the free options first. **IRS Direct File** (the government's own tool, available in Spanish) if your situation is simple and your state participates. **VITA**, where IRS-certified volunteers — many Spanish-speaking — prepare your return free, in person. And when Taxly launches, simple W-2 returns will be free, in Spanish, federal plus one state.

## The mistakes that cost the most

- Not filing because "I didn't earn much" — and losing the refund of your withholding
- Paying a preparer who won't sign the return (the "ghost preparer" is the classic scam — a legitimate paid preparer always signs)
- Missing credits like the EITC or the Child Tax Credit because nobody told you they exist
- Waiting until April and rushing everything

## The honest summary

Your first return is simpler than it looks: gather the documents, use a free option if you qualify, and claim your credits. Our free refund estimator gives you a read on the outcome in five minutes, in Spanish, no signup.
`,
  },
  {
    slug: "irs-online-account-setup",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "Set Up Your IRS Online Account Before You Need It",
    excerpt:
      "Your IRS online account shows what the government already knows about you: transcripts, balances, letters, payment plans. Set it up on a calm day, not in a crisis.",
    date: "2026-10-26",
    author: "Taxly Team",
    tags: ["basics", "getting-started"],
    content: `
There's a simple rule with the IRS: the worst time to create your online account is the moment you urgently need it. Identity verification can have friction, and doing it calmly in October always beats doing it in an April panic.

## What the account shows you

- **Wage and income transcripts:** what every employer and platform reported about you. Missing a W-2 or 1099? It's here, free
- **Your balance:** what you owe, year by year, with penalties and interest current
- **Payment history:** every estimated payment you made (no more April guessing about what you paid in June)
- **Digital copies of many IRS letters** — before the paper arrives or after it's lost
- **Payment plans:** applying online is the fast lane, and it requires the account

## How to set it up

At irs.gov, through an identity-verification provider: you'll need a photo ID and a phone in your name, sometimes a short video call. It's 15–30 minutes, once.

## Why October is the right month

No deadline breathing on you, systems without the season's load, and plenty of time to sort out any verification hiccup. Also: if an IRS letter reached you this year, the account is the fastest way to see what it really means — our free penalty estimator tells you what a delay costs, but your account tells you the exact official balance.

## The honest summary

It's free, takes half an hour, and turns three or four classic tax crises ("I don't have my W-2", "how much do I owe?", "did my payment arrive?") into a two-minute lookup. Do it this week and forget about it.
`,
  },
  {
    slug: "when-can-you-file-2027",
    category: "deadlines",
    status: "scheduled",
    readTime: 5,
    title: "When Can You Actually File in 2027? Opening Day, Explained",
    excerpt:
      "The IRS opens the season in late January, but your documents rule: W-2s arrive by the 31st. What filing early actually buys you, and when waiting is smarter.",
    date: "2027-01-04",
    author: "Taxly Team",
    tags: ["deadlines", "basics"],
    content: `
New year, and the season's first question: when can I file? The short answer: the IRS typically opens e-file acceptance in late January (the exact date is announced each year — verify on irs.gov). The useful answer is about your documents, not the IRS.

## The real January calendar

- **Late January:** the IRS starts accepting e-filed returns
- **January 31:** the deadline for employers to send W-2s and most 1099s
- **Mid-February:** by law, refunds claiming the EITC or Additional Child Tax Credit can't go out before mid-February, no matter how early you file

## Why filing early wins

The number-one reason isn't the refund — it's **security**. Filing early locks your Social Security number against scammers who file fake returns to steal refunds. The first return to arrive wins; make it yours. And yes, the refund comes sooner too: the IRS typically pays within 21 days of accepting an e-filed return.

## When waiting is smarter

Filing before you have ALL your documents is the classic own goal. If you're waiting on a 1099 from an investment account (they often arrive in February) or a platform's tax summary, two weeks of patience saves you an amended return. The rule: file as early as your documents allow — and not a day earlier.

## Get ready this week

While the paperwork trickles in: pull last year's return, confirm your bank details for direct deposit, and run your preliminary numbers — our free refund estimator tells you in five minutes whether a refund or a bill is coming, no waiting on the IRS.

## The honest summary

The IRS opens in late January, your W-2s arrive by the 31st, and scammers wait for no one. File early — but complete.
`,
  },
  {
    slug: "q4-estimated-taxes-january-15",
    category: "deadlines",
    status: "scheduled",
    readTime: 4,
    title: "January 15: the Estimated-Tax Deadline the Holidays Erase",
    excerpt:
      "The fourth estimated payment is due January 15 — weeks before anyone thinks about taxes. Who owes it, the January 31 exception, and how to pay in five minutes.",
    date: "2027-01-11",
    author: "Taxly Team",
    tags: ["quarterly-taxes", "deadlines"],
    content: `
If you make quarterly estimated payments, this is the reminder the holidays swallow every year: the fourth payment — covering September through December — is due **January 15**. Weeks before tax season exists in anyone's head.

## Who owes this payment

The usual crowd: freelancers, contractors, landlords, and investors expecting to owe $1,000 or more for the year. If you followed the safe harbor (100% of last year's tax, 110% if your adjusted gross income was over $150,000), this is the last of the four equal installments. Our free quarterly tax calculator shows the amount and the date.

## The curious January 31 exception

Little-known rule: if you file your complete return AND pay the full balance by January 31, you can skip the January 15 payment without penalty. In practice it's hard — W-2s and 1099s are barely arriving — but for someone with everything ready early, it exists.

## Did December run better than planned?

The fourth period is your last chance to adjust. If year-end brought more income than expected (holiday sales, a big project, a distribution), raise this final payment to stay near the safe harbor. If it ran worse, you can pay less — the safe harbor computes per period.

## How to pay

IRS Direct Pay at irs.gov, from your bank account, no fee, five minutes. Choose "Estimated Tax" and — careful — tax year **2026**, not 2027: this payment belongs to the year that just ended. It's the classic January mistake.

## The honest summary

It's the worst-timed quarterly of the year and the one that generates the most penalties out of pure forgetfulness. Five minutes today, and your April return arrives without accumulated surprises.
`,
  },
  {
    slug: "your-w2-arrived-now-what",
    category: "basics",
    status: "scheduled",
    readTime: 5,
    title: "Your W-2 Arrived — Here's Exactly What to Do With It",
    excerpt:
      "The envelope (or PDF) is here. What each box that matters actually means, the three errors to check before you file, and how to know when you have everything.",
    date: "2027-01-18",
    author: "Taxly Team",
    tags: ["w-2", "basics"],
    content: `
Every January, millions of W-2s arrive and land in a "later" drawer. This is the nudge for now: five minutes of checking and you'll know whether you're ready to file.

## The boxes that matter

- **Box 1 — taxable wages:** your total pay minus pre-tax contributions (401(k), health insurance). That's why it's normally smaller than your salary
- **Box 2 — federal tax withheld:** what you already paid during the year. This number against your actual tax decides refund or bill
- **Boxes 15–17 — state:** state wages and withholding, if your state has an income tax

## The three errors to check today

- **Your Social Security number.** One wrong digit jams everything — get it corrected before you file
- **Your name and address.** Last year's name changes and moves are the classic source of mismatches
- **A missing W-2?** You should get one from EVERY employer this year — including that three-week job in March. The total gets filed together

If something's wrong, your employer issues a **W-2c** (corrected). Ask now: every week of waiting is a week less of season.

## When do you have everything?

A W-2 from each employer, 1099s from every bank, broker, or platform (many arrive in February), and your dependents' documents. The fastest way to verify what was reported about you: your IRS online account, with the free wage and income transcript.

## The honest summary

A correct, complete W-2 is 80% of a simple return. Check it today, run your numbers through our free refund estimator, and file when the last document lands — early, but complete.
`,
  },
];
