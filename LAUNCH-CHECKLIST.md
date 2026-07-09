# taxly-web — Launch Checklist (human-only work)

*Created: 9 July 2026 · The code work is done (143 tests, all routes static);
everything below needs a human decision, an account, or a fact check.*

## 1. Fact verification (every number the site asserts)

Verify each against the primary source **before indexing**, and re-verify each
January (rivals reprice mid-season):

| Fact | Where it appears | Source |
|---|---|---|
| Failure-to-file 5%/mo cap 25%; failure-to-pay 0.5%/mo cap 25% | penalty tool, glossary, 2 posts, llms.txt | irs.gov/payments/penalties |
| 60-day minimum FTF penalty floor ($510 used) | penalty tool lib (`MIN_PENALTY_60_DAYS`) | IRS inflation adjustment (annual) |
| IRS underpayment interest ~7%/yr | penalty tool lib (`INTEREST_RATE_PCT`) | IRS quarterly rate announcement |
| Safe harbor 100%/110% over $150k AGI | quarterly tool, glossary, post | Form 1040-ES instructions |
| SE tax 15.3% on 92.35% | quarterly tool, glossary, 2 posts | Schedule SE instructions |
| FreeTaxUSA $0 federal / ~$15 state | /vs/freetaxusa, pricing honest maths, posts | freetaxusa.com |
| TurboTax pricing ranges ("$100+", "$40–60 state") | /vs/turbotax | turbotax.intuit.com |
| Direct File state list + program status | /vs/irs-direct-file, 2 posts | irs.gov/directfile |
| 1099-K reporting threshold (deliberately unstated — "check irs.gov") | 1099-K post | irs.gov |
| WA capital-gains tax / NH interest-dividends phase-out | no-tax-states post | state DOR sites |
| No-income-tax state list (9 states) | post, coverage claims | state DOR sites |
| FTC ruling vs Intuit (2024) — "deceptive advertising" wording | /vs/turbotax FAQ, posts | ftc.gov press release |
| EITC ~1/5 unclaimed | glossary | irs.gov EITC awareness |
| 2026 filing-season calendar dates (deadlines post) | deadlines post | IRS annual announcement |

## 2. Claim gating (honesty is the brand)

- [ ] **Never** claim "IRS-authorized e-file provider" until the transmitter
      path is signed and authorization is real (llms.txt already carries the
      explicit disclaimer — keep it in sync).
- [ ] Accuracy/max-refund guarantee wording stays OFF the site until it is a
      written, funded, counsel-reviewed policy (guarantees page copy check).
- [ ] Pre-launch notes on /vs pages stay until the product is live, then flip
      to launch pricing verified.
- [ ] Legal draft banners come off only after counsel review (all 4 pages).

## 3. Accounts, domain, deploy

- [ ] gettaxly.com DNS → Vercel; production env vars (`NEXT_PUBLIC_SITE_URL`,
      `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_GA_ID`,
      `NEXT_PUBLIC_CLARITY_ID`).
- [ ] Resend domain verification (SPF/DKIM) for waitlist + contact mail.
- [ ] **Weekly rebuild cron** (Vercel deploy hook) — scheduled posts only go
      live on rebuild; without this the content calendar silently stalls.
- [ ] Search Console: verify property, submit sitemap, then a **weekly query
      review loop** (what's ranking → next posts target it).
- [ ] robots: confirm preview deployments return disallow (env-gated).

## 4. Counsel review

- [ ] Privacy Policy (GLBA/CCPA posture for the waitlist phase).
- [ ] Terms of Service.
- [ ] Cookie Policy + Sub-processors list accuracy.
- [ ] Guarantee wording (pre-launch: absent; at launch: funded policy).

## 5. Distribution plays (launch week)

- [ ] Post the penalty estimator + quarterly calculator to relevant
      communities the honest way (see marketing/FORUM-ANSWERS.md house rules).
- [ ] Seed the TurboTax-alternatives and Direct File guides where those
      questions recur (full answer first, affiliation disclosed).
- [ ] ES-language communities: the Spanish site is a genuine differentiator —
      lead with it.

## 6. Explicitly not doing

- Paid ads (LTV ~$73 cannot pay back ads against Intuit's budget — UNIT-ECONOMICS.md).
- More site polish before the September transmitter checkpoint.
- Waiting for perfect: index once §1 facts are verified, iterate weekly.
