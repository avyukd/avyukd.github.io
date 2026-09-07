---
title: "Kalshi Strategy Families"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

Eleven approaches people have described running on Kalshi. Each was put to two
reviewers instructed to refute it, one attacking the economics after fees and one
attacking the evidence and survivorship, both defaulting to refuted when
uncertain. Part of [[index|Kalshi Research]].

**All eleven were refuted.** That is the most useful output here, and it is not a
reason to stop; it is a calibration. The refutations are mostly of one shape: the
mechanism is real and measured on the full trade tape, but it accrues to the
subsidized professional at the front of the queue, and the retail version nets a
few thousand a month at best.

Self-reported profit and loss is unverifiable. Treat every dollar figure as a
claim unless attributed to a full-tape study.

## Measured on the full trade tape

### Maker-side longshot fade

Rest limit orders selling YES on cheap longshots or buying the 70c-to-99c
favorite. Never cross. Hold to settlement.

The strongest evidence in the survey: 72.1 million trades and $18.26 billion from
2021 to November 2025 show makers earning +1.12% excess return and takers losing
the same, with 5c contracts winning 4.18% of the time.

**Refuted, fails on fees.** The headline is gross of fees, dollar-weighted, and
belongs to professional liquidity providers. Makers _lost_ 2.0% in 2021 to 2023.
The +2.6% figure for makers above 50c comes from a sample deliberately cut off at
April 2025 because Kalshi began charging maker fees, so it measures a zero-fee
era, with a 33% return standard deviation. Ceiling around $50k to $150k of
collateral before you queue behind professional depth.

### Two-sided market making plus subsidies

Quote both sides around a model fair value and stack the incentive programs. The
only strategy where the exchange pays you to hold the position.

**Refuted as a path to meaningful money, not as a mechanism.** The subsidy pool
measures $68,180 a day exchange-wide, shared pro rata across markets that mostly
already carry target depth. Without a market-maker agreement the ceiling is $100k
to $300k of collateral and plausibly $3k to $30k a month. This is nonetheless the
only strategy that survived in any form.

### RFQ combo quoting

Answer parlay requests with product-of-legs pricing plus a markup growing with leg
count and correlation. Buyers overpay 3.3c per combo equal-weighted across 8.93
million settled combos, roughly $85 million a month.

**Refuted as untradeable rather than untrue.** The measurement window ran under a
no-maker-fee regime that ended 2026-08-20. The study's author never traded it. And
RFQ is a sealed-bid auction, so you win precisely the combos where your
correlation model is most generous relative to the incumbents. The population
average is not what a new entrant earns.

See [[rfq-access]] for a correction on who can actually see this surface.

## Partially documented

### Mention-market specialist

Price "will X say Y" strikes from historical transcripts, rest early orders in
thin books, read the strike text literally during the event.

**The forecasting thesis is dead.** Measured across 10,643 settled markets and
26,814 minute-level observations, the crowd is already better than a word-history
model. Even the one lane earlier skeptics conceded, buying YES in the 40c-to-59c
earnings band, measures -8.51c per contract.

One robust mispricing survives and points the other way: YES priced 0c to 39c
resolves far less often than priced, 4 to 23% realized against 9c to 32c paid,
across about 820 strikes. Captured by resting NO as a maker.

### Culture and niche-statistic modeling

Spreadsheets on public data for Spotify, Rotten Tomatoes, Billboard, Time Person
of the Year.

**Refuted.** Every live test with checkable numbers came in near zero: one trader
at +0.3c per fill, another with a paper-to-live gap of about -3c. Note that
Kalshi publishing its own winners' ledgers is marketing, and is the textbook shape
of survivorship bias.

### Contract fine print

Read all three rule layers. Trade where the crowd prices the headline while the
contract text implies something else.

**Refuted as a standalone business, survives as a loss filter.** Episodic by
construction, each case one contract with limited depth. Its one calendar-
recurring form is worth two to eight thousand a year and is already contested. It
costs nothing to adopt as a discipline.

### Political fundamentals

Out-research the poll-anchored consensus, trade implications rather than
headlines, park capital in low-90s contracts.

**Refuted on capacity and lockup.** Headline elections are the deepest non-sports
books, but niche races are thin, Kelly sizing does not scale into them, and
capital locks for months against a 3.25% yield that accrues anyway.

### Sports de-vig and in-play

**The pre-game premise is inverted.** Median mid overround is exactly 1.0000
across 103 live two-outcome events. All-in two-way cost is about 4.5%, roughly
DraftKings and more than double Pinnacle. The trap is reading "1.75% max fee" as a
percentage: 1.75 _cents_ at 50c is 3.5% of stake, and it sits on top of an existing
spread rather than instead of vig.

The in-play lane survives as a pure latency business with a binary precondition.

## Theory-led, weak live evidence

### Macro-release ladders

**Refuted by its own best evidence.** A Federal Reserve staff paper finds Kalshi's
headline inflation forecast error is about 7 basis points against Bloomberg
consensus at about 8, with densities close to uniform. The ladder already beats
consensus. You would trade a worse public forecast against a better market price
while paying maker fees.

### Weather station-level

**The observation-lock lane is closed.** The winning New York strike averages 98.4c
by 18:00 ET, with 90% of days above 97c, all before the six-hour maximum group
publishes. Every documented live attempt lost: one account 0 for 32, another 1 and
19 after a 76.5% paper run.

### Cross-venue arbitrage

**Killed by a fee change.** Polymarket now charges takers the same quadratic fee,
0.04 to 0.07 by category, with makers free. The thesis needed one free leg. A
two-leg taker basket costs about 2.5c to 2.75c per dollar near the middle,
exceeding the roughly 3c average gross gap in the deepest event ever listed. About
70% of near-identical-title pairs settle differently anyway.

## What survives

Nothing survived cleanly. What the refutations point at, consistently:

1. **The edge is maker-side or it does not exist.** Fee incidence decides this,
   not skill.
2. **Capacity, not edge, binds nearly everywhere.** The most attractive
   mispricings measured had a few hundred dollars of executable size behind five-
   and six-figure professional queues.
3. **The edge lives where professionals are absent, with a caveat.** A market
   maker declining to quote a category tells you the flow is recreational. It does
   not tell you the category is profitable.
4. **The most reliable income is a subsidy on a short clock.** $68,180 a day
   exchange-wide, shared pro rata, sunsetting 2027-01-01.

## Two corrections to the survey's own framing

Evidence-quality labels are close to inverted. The strategies marked "verified"
earn that from full-tape studies of the _market_, not from evidence that a retail
trader captured the return.

And the corpus is more confident about edge decay than its evidence supports. The
longshot-bias coefficient runs 0.041, 0.023, 0.036, 0.048, 0.021 across 2021 to
2025, which is noise around a persistent effect rather than a dying one.

## What nobody evaluated

A large share of the people catalogued as profitable monetize through Discord
access, subscriptions, backtesters, signal services and affiliate links rather
than trading. On the measured numbers that is the better business, and it is the
one strategy nobody assessed.
