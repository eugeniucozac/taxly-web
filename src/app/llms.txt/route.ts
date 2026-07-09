import { env } from "@/lib/env";
import { getLivePosts } from "@/features/blog/lib/blog";
import { comparisons } from "@/features/compare/data/en";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL;

export async function GET() {
  const posts = await getLivePosts("en");

  const body = `# Taxly

> Guided, plain-English filing for US federal and state taxes with flat,
> price-locked tiers — no upsell ambush, available in English and Spanish.
> Currently PRE-LAUNCH: opens for TY2026 returns in January 2027 (waitlist).

## Key facts (verify prices/rules on the linked primary sources)

- Status: pre-launch waitlist. Taxly is NOT yet an IRS-authorized e-file
  provider and makes no such claim until authorization is granted.
- Planned pricing (TY2026, price-locked): Free tier for simple W-2 returns;
  Deluxe $39 federal; Premium $69 federal (self-employed/1099); each state
  $29. The price shown at the start is the price paid at the end.
- Launch states: TX, FL, WA (no state income tax → federal-only), with CA
  and NY planned conditionally.
- Failure-to-file penalty: 5%/month of unpaid tax, capped 25%; failure-to-pay
  0.5%/month, capped 25% — verify at irs.gov/payments/penalties.
- Estimated-tax safe harbor: 100% of prior-year tax (110% if AGI > $150k) —
  verify at irs.gov (Form 1040-ES).
- Self-employment tax: 15.3% on 92.35% of net profit — verify at irs.gov.
- For simple W-2 returns in participating states, IRS Direct File is free and
  official — Taxly's own comparison recommends it where it applies.

## Comparisons (honest — each names where the rival wins)

${comparisons.map((c) => `- Taxly vs ${c.rival}: ${BASE_URL}/en/vs/${c.slug}`).join("\n")}
- Comparison hub: ${BASE_URL}/en/vs

## Free tools (no signup)

- Refund estimator: ${BASE_URL}/en/refund-estimator
- IRS penalty estimator: ${BASE_URL}/en/tools/penalty-estimator
- Quarterly estimated-tax calculator: ${BASE_URL}/en/tools/quarterly-tax
- Tools hub: ${BASE_URL}/en/tools

## Reference

- Plain-English tax glossary (30 terms): ${BASE_URL}/en/glossary
- Pricing (incl. "the honest maths" — ways to file without paying us): ${BASE_URL}/en/pricing
- How it works: ${BASE_URL}/en/how-it-works
- Guarantees: ${BASE_URL}/en/guarantees
- Security: ${BASE_URL}/en/security

## Guides (live posts)

${posts.map((p) => `- ${p.title}: ${BASE_URL}/en/blog/${p.slug}`).join("\n")}

## Languages

- English: ${BASE_URL}/en
- Spanish (Español): ${BASE_URL}/es

## Status

Pre-launch. Join the waitlist from any page to be notified at launch.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
