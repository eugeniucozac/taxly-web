# taxly-web

Marketing site for **Taxly** — honest, plain-English US tax filing (`gettaxly.com`).
Currently **pre-launch**: the site runs a waitlist while the filing app
([`../taxly-app`](../taxly-app)) is built. Product strategy lives in the docs one
level up (`../TAXLY.md`, `../GTM_TAXLY.md`, `../PRICING_PLANS.md`, …).

> ⚠️ This is **not** the Next.js you may know — this version has breaking changes.
> Read `AGENTS.md` and the guides in `node_modules/next/dist/docs/` before writing code.

## Stack

- **Next.js 16** App Router + TypeScript (strict). Every page lives under `src/app/[locale]/`.
- **next-intl 4** — bilingual **EN + ES** (Spanish for the US Hispanic market). UI strings in
  `src/i18n/messages/{en,es}.json` (kept at key parity by `parity.test.ts`); long-form in typed data.
- **Tailwind 4** — tokens in `globals.css` via `@theme` (no `tailwind.config.js`).
- **Resend** for the waitlist + contact forms (no DB, no auth, no PII stored).
- Consent-gated **GA4 + Microsoft Clarity + Vercel Analytics** (see `src/lib/consent.ts`).
- **Vercel** hosting. Locale routing is handled by `src/proxy.ts` (this version renamed
  `middleware` → `proxy`) with Accept-Language negotiation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en or /es)
```

## Scripts & verification

```bash
npm run dev      # dev server
npm run build    # compiles every route + validates content (the real gate)
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type-check
npm run test     # vitest (incl. i18n parity)
```

## Environment

Set these in Vercel (see `src/lib/env.ts` for the full list):

- `RESEND_API_KEY`, `CONTACT_EMAIL` — waitlist/contact email
- `NEXT_PUBLIC_SITE_URL=https://gettaxly.com`
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID` — optional analytics (consent-gated)

## Deploy

Connect the repo to Vercel, set the domain `gettaxly.com` and the env vars above,
push to `main`. Remaining launch tasks are tracked in [`TAXLY.md`](TAXLY.md).

## Hard constraints

Nothing goes live until it is factually true: **"IRS Authorized e-file Provider,"**
**max-refund / accuracy guarantees,** and **audit support** all require the real thing
to exist first. See [`TAXLY.md`](TAXLY.md).
