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
| 2026-08-24 | w4-withholding-checkup | basics | scheduled |
| 2026-08-31 | llc-first-year-taxes | gig | scheduled |
| 2026-09-07 | q3-estimated-taxes-september-15 | deadlines | scheduled |
| 2026-09-14 | cant-pay-your-taxes | basics | scheduled |
| 2026-09-21 | side-hustle-hobby-or-business | gig | scheduled |
| 2026-09-28 | october-15-extension-deadline | deadlines | scheduled |
| 2026-10-05 | hsa-triple-tax-advantage | basics | scheduled |
| 2026-10-12 | year-end-tax-moves | basics | scheduled |

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
- **08-24 W-4 checkup:** IRS Withholding Estimator still exists at irs.gov; W-4 Step 4(c) unchanged.
- **08-31 LLC first year:** CA $800 franchise tax current; S-corp break-even framing still fair; EIN still free.
- **09-07 Q3 estimateds:** Sept 15 due date; safe-harbor 100%/110% and $150k AGI threshold; Direct Pay still fee-free.
- **09-14 can't pay:** 5%/0.5%/0.25% penalty rates; 180-day short-term plan; online setup fees and thresholds (move often); OIC pre-qualifier URL.
- **09-21 hobby-or-business:** hobby-expense disallowance still in force (TCJA sunset watch); 3-of-5-years presumption.
- **09-28 Oct 15:** e-file shutdown window; disaster-relief postponements current; 3-year refund claim window.
- **10-05 HSA:** current-year contribution limits + HDHP definition (change annually); CA/NJ state treatment unchanged.
- **10-12 year-end:** wash-sale 30 days; capital-loss ordinary-income offset cap; withholding-treated-as-even rule.

## Next-batch ideas (batch 3 — season ramp, November onward)

1. "Spanish-first: cómo declarar impuestos por primera vez en EE. UU." — native ES cluster lead
   (needs a structure decision: es-first authoring inverts the current en→es flow; slugs still shared).
2. Glossary deep-links: expand the 30 terms with per-term anchors in posts.
3. January IRS opening-day post ("when can you actually file") — timed for early January.
4. "Your W-2 arrived — now what" — the season's highest-volume beginner query.
5. Estimated Q4 deadline January 15 — the other quarterly summer amnesia claims (per the Q3 post).

## Editorial rules

- Every post names when a rival/free option is the better answer (the brand).
- Dollar figures that change annually get "verify on irs.gov" phrasing, not
  hard numbers, unless the post is explicitly season-stamped.
- Interlink: every post links at least one tool or /vs page and one glossary
  anchor.
