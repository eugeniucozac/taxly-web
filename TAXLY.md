# Taxly — Marketing Site: Remaining Work

*Updated: 16 July 2026*

Domain: `gettaxly.com` · Stack: Next.js 16 / Tailwind 4 / next-intl 4 (en + es) / Vercel
Target: **TY2026 returns, filed early 2027**

> This is the **deploy punch-list**. The full site blueprint (page inventory, i18n,
> tracking, consent/analytics, SEO) is the product-root **[WEBSITE.md](../WEBSITE.md)**.

---

## What's left

### 1. Vercel deploy

- Connect `eugeniucozac/taxly-web` repo to Vercel
- Set domain `gettaxly.com`
- Set env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL=https://gettaxly.com`
- Push to `main` → CI runs → Vercel builds

### 2. Fix appslab Taxly entry ✅ done

In the appslab repo (`src/features/products/data/products.ts`):

- ~~Change `markets: ["uk", "fr", "de"]` → `markets: ["us"]` (add `"us"` to the `Market` type)~~ — done (`markets: ["us"]`, `Market` type includes `"us"`, category `"Personal Tax"`)
- ~~Rewrite `products.taxly.*` i18n copy in EN/FR/DE locale files to say "United States"~~ — done (EN/FR/DE all say United States / États-Unis / Vereinigten Staaten)

---

## Critical-web pass (9 July 2026)

The site was brought to the portfolio critical-web bar: dark mode, glossary, /vs cluster,
three free tools with tested libs, a status-gated bilingual blog (the schedule and counts
of record live in [CONTENT-BACKLOG.md](CONTENT-BACKLOG.md)), full SEO layer, and a green
vitest suite (`npm test` is the count of record). A 16 July pass added the Form-404 brand
chrome, the `/turbotax-alternative` + `/free-tax-filing` landers, and content batches 2–3.
Remaining human-only work moved to [LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md).

---

## Open decisions

- [ ] Final tier prices sign-off (product/finance) — currently Free / Deluxe $39 / Premium $69 + $29/state (matches [PRICING_PLANS.md](../PRICING_PLANS.md))
- [ ] "Live"/expert-assisted tier — at TY2026 launch or later?

---

## Hard constraints

Before any of these appear on the live site, they must be factually true:

- **"IRS Authorized e-file Provider"** — requires actual IRS approval
- **"Maximum Refund / 100% Accuracy Guarantee"** — must be a real, honored, written policy
- **"Audit support/defense"** — only if the service genuinely exists
- **IRS Publication 1345** e-file consent — lives in the product app; referenced from Terms
