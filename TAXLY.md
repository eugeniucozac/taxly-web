# Taxly — Marketing Site: Remaining Work

*Updated: 2026-06-13*

Domain: `gettaxly.com` · Stack: Next.js 16 / Tailwind 4 / next-intl 4 (en + es) / Vercel
Target: **TY2026 returns, filed early 2027**

---

## What's left

### 1. Vercel deploy

- Connect `eugeniucozac/taxly-web` repo to Vercel
- Set domain `gettaxly.com`
- Set env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL=https://gettaxly.com`
- Push to `main` → CI runs → Vercel builds

### 2. Fix appslab Taxly entry

In the appslab repo (`src/features/products/data/products.ts`):

- Change `markets: ["uk", "fr", "de"]` → `markets: ["us"]` (add `"us"` to the `Market` type)
- Rewrite `products.taxly.*` i18n copy in EN/FR/DE locale files to say "United States"

---

## Open decisions

- [ ] Final tier prices sign-off (product/finance) — currently Free / Deluxe $29 / Premium $59 + $14/state
- [ ] "Live"/expert-assisted tier — at TY2026 launch or later?
- [ ] Interactive refund-estimator — build pre-launch, or post-launch?

---

## Hard constraints

Before any of these appear on the live site, they must be factually true:

- **"IRS Authorized e-file Provider"** — requires actual IRS approval
- **"Maximum Refund / 100% Accuracy Guarantee"** — must be a real, honored, written policy
- **"Audit support/defense"** — only if the service genuinely exists
- **IRS Publication 1345** e-file consent — lives in the product app; referenced from Terms
