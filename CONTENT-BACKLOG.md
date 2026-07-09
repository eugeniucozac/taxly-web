# taxly-web — Content Backlog

*Created: 9 July 2026*

> ⚠️ **Weekly rebuild required.** Post gating is build-time (`isLive()` in
> `src/features/blog/lib/blog.ts`). A scheduled post appears only when the
> site rebuilds on/after its date — set the weekly deploy cron (Mondays)
> or the calendar below silently stalls.

## Publish schedule

| Date | Slug | Category | Status |
|---|---|---|---|
| (past) | 8 original posts (deadlines, W-2 vs 1099, self-employment, deductions, checklist, extension, crypto, first-time) | mixed | published |
| 2026-07-13 | quarterly-taxes-first-year-freelancer | gig | scheduled |
| 2026-07-20 | missed-tax-deadline-what-now | deadlines | scheduled |
| 2026-07-27 | turbotax-alternatives-honest-guide | basics | scheduled |
| 2026-08-03 | irs-direct-file-who-qualifies | basics | scheduled |
| 2026-08-10 | 1099-k-what-it-means | gig | scheduled |
| 2026-08-17 | no-income-tax-states-federal-only | basics | scheduled |

Both locales ship together — ES posts are authored translations with
identical slugs/dates/status (pinned by tests).

## Pre-publish fact verification (per batch)

Before each scheduled post goes live, verify its claims (they were written
July 2026 and rules move):

- **07-13 quarterly:** 1040-ES due dates for current year; $150k AGI threshold unchanged.
- **07-20 missed-deadline:** penalty rates; minimum-penalty floor; payment-plan halving rule.
- **07-27 alternatives:** rival prices (TurboTax, FreeTaxUSA, Cash App Taxes status); FTC wording.
- **08-03 direct-file:** the state list and the program's continued existence — this one moves with politics.
- **08-10 1099-K:** current reporting threshold (statutory ping-pong).
- **08-17 no-tax-states:** WA capital-gains status; NH phase-out completion.

## Next-batch ideas (September onward — SEO targets)

1. "W-4 withholding checkup" (August–September is adjustment season) — links refund estimator.
2. "Tax checklist for new LLC owners / single-member LLCs" — beachhead adjacent.
3. "Estimated taxes Q3 deadline September 15" — timely, links quarterly tool.
4. "What happens if you can't pay your taxes" — payment plans, OIC honesty.
5. "Spanish-first: cómo declarar impuestos por primera vez en EE. UU." — native ES cluster lead.
6. "October 15 extension deadline: the last exit" — timed for early October.
7. Glossary deep-links: expand the 30 terms with per-term anchors in posts.

## Editorial rules

- Every post names when a rival/free option is the better answer (the brand).
- Dollar figures that change annually get "verify on irs.gov" phrasing, not
  hard numbers, unless the post is explicitly season-stamped.
- Interlink: every post links at least one tool or /vs page and one glossary
  anchor.
