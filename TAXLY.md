# Taxly — Marketing Site: Remaining Work

*Updated: 2026-06-13 · All scaffold, pages, blog, and ES locale are complete.*

Domain: `gettaxly.com` · Stack: Next.js 16 / Tailwind 4 / next-intl 4 (en + es) / Vercel

---

## What's left

### ~~1. JSON-LD structured data~~ ✅ Done

`src/components/seo/json-ld.tsx` — `JsonLd` component used by:
- Home → `SoftwareApplication` + 3 `Offer` nodes
- Pricing → `Product` + 3 `Offer` nodes
- Help → `FAQPage` with all 14 Q&As

### 2. OG images

Per-page OpenGraph images for social sharing. Copy the appslab `components/og/` pattern:
- `src/app/[locale]/opengraph-image.tsx` — home OG
- `src/app/[locale]/blog/[slug]/opengraph-image.tsx` — per-post OG (use post title)

### 3. sitemap.ts + robots.ts

- `src/app/sitemap.ts` — all static routes × 2 locales + all 8 blog slugs × 2 locales = 42 URLs
- `src/app/robots.ts` — allow all, point to sitemap

Copy appslab's files verbatim; swap `BASE_URL` from `env.ts` (already points to `gettaxly.com`).

### 4. i18n parity unit test

A single test file `src/i18n/messages/parity.test.ts` that:
1. Imports `en.json` and `es.json`
2. Recursively collects all leaf key paths from each
3. Asserts the sets are equal

This catches any key added to EN but missed in ES (the blog parity test only covers blog data, not the full message files).

### 5. Vercel deploy

- Add repo to Vercel, set domain `gettaxly.com`
- Set env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`
- Push to `main` → CI runs → Vercel builds

### 6. Fix appslab Taxly entry

In the appslab repo (`src/features/products/data/products.ts`):
- Change `markets: ["uk", "fr", "de"]` → `markets: ["us"]` (add `"us"` to the `Market` type)
- Rewrite `products.taxly.*` i18n copy in EN/FR/DE locale files to say "United States"

---

## Open decisions

- [ ] Final tier names & price points (product/finance input) — currently Free / Deluxe $29 / Premium $59 + $14/state
- [ ] "Live"/expert-assisted tier at launch, or later?
- [ ] Spanish at launch or fast-follow? *(ES locale is built; decision is whether to index it)*
- [ ] Which tax year does v1 target — TY2026 (filed early 2027)?
- [ ] Interactive refund-estimator on the marketing site — build, or post-launch?

---

## Hard constraints

Tax prep is regulated. Before any of these appear on the live site, they must be factually true:

- **"IRS Authorized e-file Provider"** — requires actual IRS approval
- **"Maximum Refund / 100% Accuracy Guarantee"** — must be a real, honored, written policy
- **"Audit support/defense"** — only if the service genuinely exists
- **IRS Publication 1345** e-file consent disclosures — live in the product app; referenced from Terms

---

## Positioning (reference)

| | |
|---|---|
| **One-liner** | File your US federal and state taxes in minutes — guided, plain-English, maximum refund. |
| **Market** | United States (federal + all 50 states). English first, Spanish fast-follow. |
| **Audience** | Individuals & households — W-2 employees, 1099 freelancers, investors, homeowners. |
| **Competitors** | TurboTax, H&R Block, FreeTaxUSA, TaxSlayer, Cash App Taxes. |
| **Wedge** | Honest flat pricing, plain-English flow, compliance-first engineering. |
