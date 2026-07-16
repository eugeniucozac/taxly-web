export interface CompareRow {
  feature: string;
  taxly: string;
  rival: string;
  winner: "taxly" | "rival" | "tie";
}

export interface Comparison {
  /** Route segment. Must be identical across locales. */
  slug: string;
  rival: string;
  /** SERP title / description (used directly as page metadata). */
  title: string;
  description: string;
  /** The honest verdict banner shown before anything else. */
  verdictTitle: string;
  verdict: string;
  rows: CompareRow[];
  /** Rows the rival genuinely wins — stated plainly. */
  theyWin: string[];
  /** "Stay with them if…" — we mean it. */
  stayWith: string[];
  /** "Taxly fits if…" */
  taxlyFits: string[];
  faqs: { q: string; a: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: "turbotax",
    rival: "TurboTax",
    title: "Taxly vs TurboTax: an honest comparison",
    description:
      "TurboTax is the most polished tax software in America. Here is what it genuinely does better, what it costs at checkout, and when flat-priced Taxly is the better fit.",
    verdictTitle: "The honest verdict",
    verdict:
      "TurboTax is the most complete, most polished tax software in America — and you pay for that at checkout, often more than the price you saw at the start. If you want maximum breadth and the biggest brand, it is genuinely good software. Taxly's case is narrower and simpler: the price you see when you start is the price you pay when you file.",
    rows: [
      {
        feature: "Advertised price vs checkout price",
        taxly: "Identical — price-lock guarantee",
        rival: "Frequently differs; upgrades prompted mid-flow",
        winner: "taxly",
      },
      {
        feature: "Self-employed / 1099 federal price",
        taxly: "$69 flat",
        rival: "Typically $100+ before state (verify current pricing)",
        winner: "taxly",
      },
      {
        feature: "State return price",
        taxly: "First state included, then $29 flat",
        rival: "Often $40–$60+ per state",
        winner: "taxly",
      },
      {
        feature: "Breadth of tax situations covered",
        taxly: "Focused: W-2, 1099/gig, common credits, launch states",
        rival: "Nearly everything, including rare cases",
        winner: "rival",
      },
      {
        feature: "Live CPA/EA review on demand",
        taxly: "Planned as a later add-on, not at launch",
        rival: "Mature, nationwide expert network",
        winner: "rival",
      },
      {
        feature: "Document import integrations",
        taxly: "Core imports at launch",
        rival: "Imports from almost every employer and broker",
        winner: "rival",
      },
      {
        feature: "Upsell prompts during filing",
        taxly: "None — tiers disclosed up front",
        rival: "Persistent; the #1 user complaint",
        winner: "taxly",
      },
      {
        feature: "Plain-English guidance",
        taxly: "Built as the core product",
        rival: "Good, but optimized to sell upgrades",
        winner: "taxly",
      },
      {
        feature: "Track record",
        taxly: "New for TY2026 — no history yet",
        rival: "Decades, tens of millions of returns each year",
        winner: "rival",
      },
    ],
    theyWin: [
      "Breadth: TurboTax handles almost any tax situation, including rare ones Taxly won't cover at launch.",
      "Live expert help: its CPA/EA network is mature and genuinely useful for complex returns.",
      "Imports: it connects to more employers, banks, and brokers than anyone.",
      "Track record: decades of filings versus our first season.",
    ],
    stayWith: [
      "Your return has rare or complex situations (K-1s, multi-state business, foreign income).",
      "You want a live CPA to review your return before filing this year.",
      "You've used it for years, your data imports cleanly, and the checkout price doesn't bother you.",
    ],
    taxlyFits: [
      "You're a gig worker or freelancer being pushed to TurboTax's most expensive tier.",
      "You've been burned by a checkout price that didn't match the advertised one.",
      "Your situation is common — W-2, 1099, kids, standard credits — and you'd rather pay a known flat price.",
    ],
    faqs: [
      {
        q: "Is TurboTax bad software?",
        a: "No — it's the most polished tax software available, and for complex returns its breadth is a real advantage. The complaint that made the FTC act in 2024 wasn't quality; it was deceptive 'free' advertising and checkout upsells. If those don't bother you, it works well.",
      },
      {
        q: "Why is TurboTax more expensive for freelancers?",
        a: "Self-employment income requires its highest consumer tier, and state returns are priced separately on top. A gig worker with one state can reasonably reach $150+ at checkout. Taxly's equivalent is $69 all-in — the first state return is included — disclosed before you start. Verify TurboTax's current prices on their site — they change mid-season.",
      },
      {
        q: "Can I switch to Taxly if I used TurboTax last year?",
        a: "Yes — that's a launch feature: import last year's return so you don't re-type everything. Taxly opens for TY2026 returns in January 2027; joining the waitlist reserves your spot.",
      },
      {
        q: "Does Taxly really not upsell at all?",
        a: "If your situation turns out to need a higher tier mid-filing (say a 1099 shows up), Taxly tells you at that exact answer, shows the exact new total, and lets you undo it with one tap. What it never does is quote one price and charge another at checkout — that's the price-lock guarantee.",
      },
    ],
  },
  {
    slug: "freetaxusa",
    rival: "FreeTaxUSA",
    title: "Taxly vs FreeTaxUSA: an honest comparison",
    description:
      "FreeTaxUSA is the honest budget option: $0 federal, about $15 per state. Here is when it's genuinely the better choice — and what Taxly's higher price actually buys.",
    verdictTitle: "The honest verdict",
    verdict:
      "FreeTaxUSA is cheaper than Taxly — $0 federal and about $15 per state, with years of solid track record and no upsell ambush. If you know your tax situation and are comfortable with a form-like interface, use it; it is the honest budget choice. Taxly's higher price buys one thing: plain-English guidance built for people who don't know the forms — especially first-time 1099 filers.",
    rows: [
      {
        feature: "Federal price (self-employed)",
        taxly: "$69",
        rival: "$0",
        winner: "rival",
      },
      {
        feature: "State return price",
        taxly: "First state included, then $29",
        rival: "~$15 each (verify current pricing)",
        winner: "taxly",
      },
      {
        feature: "Honest, upsell-free pricing",
        taxly: "Yes — price-lock guarantee",
        rival: "Yes — genuinely",
        winner: "tie",
      },
      {
        feature: "Interface style",
        taxly: "Guided interview, plain English, mobile-first",
        rival: "Form-like; assumes you know what goes where",
        winner: "taxly",
      },
      {
        feature: "Guidance for first-time 1099 filers",
        taxly: "The core product: deductions surfaced, SE tax explained",
        rival: "Minimal — you need to know what to claim",
        winner: "taxly",
      },
      {
        feature: "Spanish-language filing",
        taxly: "Site in Spanish now; product Spanish planned post-launch",
        rival: "English only",
        winner: "taxly",
      },
      {
        feature: "Track record",
        taxly: "New for TY2026",
        rival: "Millions of returns over many years",
        winner: "rival",
      },
    ],
    theyWin: [
      "Price: $0 federal is unbeatable, and ~$15 state undercuts everyone.",
      "Track record: it has quietly filed millions of returns for years.",
      "Honesty: no upsell ambush — it deserves the same credit we ask for.",
    ],
    stayWith: [
      "You've filed before and know your situation — you just need the forms done cheaply.",
      "A form-like interface doesn't slow you down.",
      "Every dollar matters more than guidance: it's the cheapest credible way to file a 1099 return.",
    ],
    taxlyFits: [
      "It's your first year with 1099 income and you don't know what you can deduct.",
      "You want the software to interview you in plain English instead of presenting IRS forms.",
      "You or your family file more comfortably in Spanish.",
    ],
    faqs: [
      {
        q: "Is FreeTaxUSA legit?",
        a: "Yes. It's an IRS-authorized e-file provider that has filed millions of returns, and its pricing is genuinely honest — $0 federal, about $15 per state, no ambush. We consider it the credible budget choice in this market.",
      },
      {
        q: "If FreeTaxUSA is honest and cheaper, why would anyone pay Taxly?",
        a: "Guidance. FreeTaxUSA assumes you broadly know what goes where on a return; that's how it stays cheap. Taxly is built for the person who doesn't — a first-year freelancer who has never heard of self-employment tax or quarterly estimates. If that guidance isn't worth ~$70 to you, FreeTaxUSA is the right call, and we mean that.",
      },
      {
        q: "Do both have accuracy guarantees?",
        a: "FreeTaxUSA offers an accuracy guarantee, and Taxly will launch with a written, funded accuracy guarantee. Read the actual terms of any guarantee before relying on it — scope differs between products.",
      },
      {
        q: "Which is better for a simple W-2 return?",
        a: "Honestly, neither is the obvious first stop: check IRS Direct File first — it's free and official if your state and situation are covered. After that, both FreeTaxUSA ($0 federal) and Taxly's free tier handle simple W-2 returns at no federal cost.",
      },
    ],
  },
  {
    slug: "irs-direct-file",
    rival: "IRS Direct File",
    title: "Taxly vs IRS Direct File: an honest comparison",
    description:
      "IRS Direct File is free and official. If you qualify, use it — genuinely. Here is exactly who qualifies, and where it runs out.",
    verdictTitle: "The honest verdict",
    verdict:
      "If IRS Direct File covers your state and your tax situation, use it. It's free, it's official, and no commercial product — including Taxly — beats free-and-official for a simple W-2 return. Taxly exists for where Direct File runs out: self-employment and gig income, states it doesn't cover, and filers who want more guidance than a government form flow provides.",
    rows: [
      {
        feature: "Price",
        taxly: "Free tier (simple returns); paid tiers $39–$69",
        rival: "Free, always",
        winner: "rival",
      },
      {
        feature: "Who runs it",
        taxly: "A private company",
        rival: "The IRS itself",
        winner: "rival",
      },
      {
        feature: "Self-employment / 1099 income",
        taxly: "Fully supported — it's the core audience",
        rival: "Not supported",
        winner: "taxly",
      },
      {
        feature: "State coverage",
        taxly: "Launch states incl. no-income-tax states + planned CA/NY",
        rival: "Participating states only (check the current list on irs.gov)",
        winner: "tie",
      },
      {
        feature: "Itemized deductions",
        taxly: "Supported on Deluxe",
        rival: "Standard deduction only",
        winner: "taxly",
      },
      {
        feature: "Guidance style",
        taxly: "Guided plain-English interview",
        rival: "Competent but minimal; no deduction-hunting",
        winner: "taxly",
      },
      {
        feature: "Program stability",
        taxly: "Commercial product with a roadmap",
        rival: "Scope and future have shifted with politics — verify each season",
        winner: "taxly",
      },
    ],
    theyWin: [
      "Price: free, with no tiers and no fine print.",
      "Authority: it's the IRS — your data goes nowhere else.",
      "For simple, covered returns it is simply the correct choice.",
    ],
    stayWith: [
      "All your income is W-2 and you take the standard deduction.",
      "Your state participates (check the current list on irs.gov — it changes).",
      "You don't need deduction-hunting or guided help.",
    ],
    taxlyFits: [
      "You have any 1099, gig, or self-employment income — Direct File doesn't support it.",
      "Your state isn't covered, or you want federal + state handled in one flow.",
      "You want software that actively looks for deductions and credits you'd miss.",
    ],
    faqs: [
      {
        q: "Is IRS Direct File really free?",
        a: "Yes — completely. It's run by the IRS itself for federal returns, with participating states handling the state side through their own linked tools. There is no paid tier and no upsell.",
      },
      {
        q: "Why would a tax company tell me to use a free government tool?",
        a: "Because for simple covered returns it's the honest answer, and honesty is the entire reason Taxly exists. Sending someone to a paid product they don't need is exactly the behavior this industry got in trouble for. When your situation outgrows Direct File — a 1099 arrives, you move states — we'd like to be the product you remember.",
      },
      {
        q: "Does Direct File handle gig or freelance income?",
        a: "No. Self-employment income (Schedule C) is outside its scope, which is the single most common reason filers outgrow it. That's precisely the return Taxly is built around.",
      },
      {
        q: "Will Direct File exist next season?",
        a: "Its scope and funding have shifted with politics since it launched, so verify its current status and state list on irs.gov each season rather than assuming. That uncertainty is real, but while it's available and you qualify, it remains the right choice for simple returns.",
      },
    ],
  },
];
