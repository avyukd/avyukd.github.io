---
title: "Kalshi Research"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

Notes on trading Kalshi, the CFTC-regulated event-contract exchange. Written up
from a multi-agent sweep of public sources in September 2026: Kalshi's own API,
documentation, rulebook and fee filings; academic work on prediction-market
pricing; and first-hand accounts from people who trade it.

Everything here is research, not advice. The best-evidenced number in the whole
survey is that takers lose about 1.12% of notional as a group.

## Pages

- [[exchange-mechanics]] — the fee formula, position and rate limits, sharding,
  settlement quirks, and the incentive programs. The constraints any edge has to
  clear before it is an edge.
- [[market-families]] — ten recurring market groupings a trader could specialize
  in, with real series tickers, cadence, settlement source and counterparty.
- [[strategy-families]] — eleven approaches people have actually run, each put to
  two reviewers instructed to refute it. All eleven were refuted, and the
  refutations are more useful than the claims.
- [[rfq-access]] — a correction. The widely repeated claim that Kalshi's
  request-for-quote surface is invisible to retail is false, and this is what a
  normal account actually sees.

## The short version

On Kalshi you get paid for providing liquidity and charged for consuming it, and
essentially nothing else survived testing. Fee incidence, not forecasting, sets
the sign of your return. The measured maker premium accrues to firms holding
rebate agreements who sit in front of the retail queue, and the books thin enough
to still carry an edge are too thin to hold size.

Capacity, not edge, is the binding constraint nearly everywhere. Median resting
depth at the touch is about four dollars of notional, and 84.8% of markets have
no volume in a day.

## Confidence

Not uniform, and the pages say so where it matters.

- **Exchange mechanics** are high confidence, from the published fee schedule,
  rulebook, API documentation and live series metadata.
- **Market shape** is high confidence for names and cadence, medium for volumes,
  which are a single snapshot and move.
- **Anything attached to a named trader** is low confidence. No dollar figure
  attributed to an individual in this research is auditable.

Numbers are as of 2026-09-07. Fee types, incentive programs, shard assignments
and category availability all change, and several changed during 2026 alone.
