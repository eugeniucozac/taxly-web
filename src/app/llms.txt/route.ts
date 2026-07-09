import { env } from "@/lib/env";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL;

export function GET() {
  const body = `# Taxly

> Guided, plain-English filing for US federal and state taxes — no surprise
> fees, available in English and Spanish. Currently pre-launch (waitlist open).

## Key pages

- Home: ${BASE_URL}/en
- How it works: ${BASE_URL}/en/how-it-works
- Features: ${BASE_URL}/en/features
- Pricing: ${BASE_URL}/en/pricing
- Guarantees: ${BASE_URL}/en/guarantees
- Security: ${BASE_URL}/en/security
- Refund estimator (free tool): ${BASE_URL}/en/refund-estimator
- Blog (tax guides & deadlines): ${BASE_URL}/en/blog
- Help: ${BASE_URL}/en/help
- Contact: ${BASE_URL}/en/contact

## Languages

- English: ${BASE_URL}/en
- Spanish (Español): ${BASE_URL}/es

## Free tools

- Refund estimator — an illustrative federal refund/owe estimate. Not tax
  advice; the production engine (pinned, reproducible) lives in the app.

## Status

Pre-launch. Join the waitlist from any page to be notified at launch.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
