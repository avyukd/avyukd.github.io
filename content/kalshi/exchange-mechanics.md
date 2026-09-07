---
title: "Kalshi Exchange Mechanics"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

High confidence. Sourced from Kalshi's fee filing, rulebook v1.29, API
documentation and live series metadata as of 2026-09-07. These are the
constraints an edge has to clear before it is an edge. Part of [[index|Kalshi Research]].

## Fees

Taker fee per fill, rounded up to the cent:

```
fee = ceil(0.07 x contracts x P x (1 - P))
```

No settlement fee. Index series use a 0.035 multiplier instead of 0.07.

The curve is the whole story. It peaks at the midpoint and collapses at the extremes:

| YES price | Taker fee per contract | As share of stake |
| --------: | ---------------------: | ----------------: |
|        5c |                  0.33c |             6.65% |
|       25c |                  1.31c |             5.25% |
|       50c |                  1.75c |             3.50% |
|       75c |                  1.31c |             1.75% |
|       95c |                  0.33c |             0.35% |

A round trip at the midpoint costs about 3.5c against a 1c tick. That single fact
rules out most naive strategies: anything crossing the spread twice needs to be
right by more than three ticks just to break even.

Because the fee is charged on notional but scales with `P(1-P)`, the cheap side
subsidizes the expensive side. A taker buying a 5c longshot pays 6.65% of stake;
the maker facing them pays either nothing or a quarter as much.

## Maker fees depend on the series, not the exchange

The detail most external write-ups miss. Every series carries a `fee_type`:

| `fee_type`                        | Series count | Maker pays                                 |
| --------------------------------- | -----------: | ------------------------------------------ |
| `quadratic`                       |       13,644 | nothing                                    |
| `quadratic_with_maker_fees`       |          159 | `0.0175 x P x (1 - P)`, a quarter of taker |
| `quadratic_with_combo_maker_fees` |       combos | half of taker                              |

Makers pay nothing on roughly 98.6% of series, including daily temperature
ladders, rain, 15-minute and daily crypto, mention markets and most politics. The
159 fee-charging series are the ones carrying the volume: 107 sports series plus
the headline macro ladders (CPI, Fed, U-3, GDP).

The set is not static. `GET /series/fee_changes` exists because batches migrate
between fee types, most recently 2026-09-03.

Resolving a fee type is a two-hop lookup. The markets payload carries no series
ticker at all, only an event ticker:

```
GET /markets/{ticker}          -> event_ticker
GET /events/{event_ticker}     -> series_ticker
GET /series/{series_ticker}    -> fee_type, fee_multiplier
```

Read both fields. `fee_multiplier` is where the 0.07 against 0.035 index
distinction lives.

## The measured consequence

Independent analysis of 72.1 million Kalshi fills finds makers earn about +1.12%
of notional and takers lose about the same. Contracts under 10c lose more than
60% of stake to the taker side. Every category anchored to an external price
prices efficiently net of taker fees.

The conclusion is narrow and important: **a retail edge has to be maker-side.**
Not because making is clever, but because fee incidence hands the maker the
taker's cost.

Two caveats on that number, both from the source papers. Makers _lost_ about 2.0%
in 2021 to 2023; the gap flipped only after professional liquidity providers
arrived in late 2024. And the maker premium may simply be fair compensation for a
33% return standard deviation.

## Position and rate limits

- **Position accountability** is $25,000 per strike per member on most current
  contract certifications. Designated market makers get ten times that. Kalshi can
  demand information, freeze increases and liquidate under Rule 5.18, and
  aggregates accounts under common control under Rule 5.19(f).
- **API rate limits** are token buckets. Basic is 200 read and 100 write tokens
  per second with most requests costing 10, so roughly 20 reads and 10 order
  actions per second. Advanced at 300/300 is a permanent self-upgrade once at
  least one of the last hundred orders came through the API. Higher tiers are
  earned daily on trailing-30-day share of exchange volume.

## Sharding

The exchange is sharded and **balances are local to each shard**:

| Shard | Contents                                         |
| ----: | ------------------------------------------------ |
|     0 | default                                          |
|     1 | combos (`KXMVE*`)                                |
|     2 | crypto and commodities, the 15-minute series     |
|     3 | tennis and baseball, basketball added 2026-09-10 |

Collateral has to be pre-positioned per shard, and write buckets are per shard
too. When crypto moved to shard 2 in August 2026, bots that had not noticed
silently stopped filling for hours. A shard reassignment is a silent outage, not
an error.

## Order mechanics

YES and NO are one security with two views of the same book. Buying NO is selling
YES. You cannot hold both sides of one market, and buying the opposite side
closes your position. Single-market `YES + NO < $1` arbitrage is structurally
impossible, whatever the screenshots claim.

Available controls: `good_till_canceled` with optional expiration,
`immediate_or_cancel`, `fill_or_kill`, `post_only`, `reduce_only`,
`self_trade_prevention`, `cancel_order_on_pause`, fractional contracts to 0.01,
and subaccounts 0 through 63.

Ticks are 1c, 0.5c or 0.2c at the center, and $0.0001 below 1c and above 99c on
multivariate markets. **A fixed 1c price grid is wrong for a meaningful slice of
the exchange.**

Order groups accept a delta limit that auto-cancels remaining resting orders if
position moves by that limit inside a rolling 15-second window. That is an
exchange-side kill switch, and it keeps working when your process does not.

There is no native stop-loss.

## Lifecycle traps

- After `close_time`, **every** order operation is rejected with
  `MARKET_INACTIVE`, including cancels. Orders resting into close cannot be
  pulled; they settle.
- During an exchange pause nothing can be cancelled unless the order was
  submitted with `cancel_order_on_pause` set.
- Scheduled maintenance runs Thursdays 03:00 to 05:00 ET.
- The live API data window is about three months. Older data needs the
  `/historical` endpoints.
- `GET /markets` is roughly 99% combo shards. Use
  `/events?with_nested_markets=true` or `mve_filter=exclude`.

## Discretionary settlement

Rule 5.11 lets Kalshi cancel fills outside fair value plus or minus 20c within 15
minutes of the trade. It was exercised on 2026-08-28 and 2026-09-06. Rule 7.1
allows a 24-hour outcome review and Rule 7.2 allows source-agency substitution.
Rule 6.3(e), added 2026-04-28, settles at last traded price if the subject dies or
violence interrupts the event. Rule 6.3(c) reserves sole discretion to interpret.

The practical implication for any position ledger: **a fill is not final for 15
minutes, and an outcome is not final for 24 hours.** Documented discretionary
outcomes include an Oscars viewership market, a YES settlement on the syllable
"de" in "John Deere", a last-price settlement on Khamenei, and an all-NO board at
a Sanders event. Indeterminate outcomes can split 10/90.

## Settlement sources decide thin edges

- 15-minute and hourly crypto settle on the **60-second average of the CF
  Benchmarks BRTI**, available over a 5Hz websocket. Not the chart.
- Daily temperature settles on the **NWS Daily Climate Report** for one named
  ASOS station in Local Standard Time, relayed by The Weather Company since
  2026-08-14, at 0.1C precision with 6-hour maximum groups. Hourly weather settles
  on METAR instead.
- Macro ladders settle on the exact BLS or BEA series and rounding named in the
  contract rules.
- Shutdown and policy markets read a fixed morning snapshot, 10:00 to 11:00 ET.
- Mention markets settle on official transcripts, with root-word and closed-press
  rules.

## Incentive programs

All revocable, all under CFTC scrutiny since the 2026-08-12 advisory, and all
closed to market-maker-agreement holders, Kalshi affiliates and FCM or IB
customers.

- **Liquidity Incentive Program.** Pays $1 to $1,000 per market per day from
  random once-per-second snapshots. A snapshot counts only when **both sides**
  rest at least the Target Size, which runs 100 to 20,000 contracts and 300 to
  1,000 on live markets. Score is `size x 0.5^(ticks from reference)`.
- **Volume Incentive Program.** Caps at $0.005 per contract on fills between 3c
  and 97c, through 2027-09-01.
- **Liquidity Provider Program.** Auctions designated slots up to $50,000 per
  series per week, to members holding a market-maker agreement.
- **Market Maker Program.** Requires two-sided quotes 98% of every hour across
  covered products, in exchange for reduced fees, rebates, revenue share,
  disconnect-cancel and ten times position limits.

Two numbers here were measured directly against `GET /incentive_programs` and both
correct figures that circulate publicly. The live pool is **$68,180 a day** across
about a thousand programs, not the $171,775 often quoted. And the program
**sunsets 2027-01-01**.

The scoring formula is a direct instruction about how to quote. `0.5^ticks` means
a quote two ticks off reference scores a quarter of one at reference, and the
Target Size gate is binary: quoting 99 contracts against a Target Size of 100
scores zero, not a small number.

## Liquidity reality

Sports are about 80% of contract volume, and parlays are more than 80% of
incremental football volume. Median resting depth at the touch is roughly $4 of
notional. **84.8% of markets have zero volume over 24 hours.** The top 200 markets
carry 62.7% of volume. A few thousand dollars moves a niche binary 10 to 15c.
Liquidity is worst between 01:00 and 07:00 ET.

Counterparties on the deep books are professional: Susquehanna arrived as the
first institutional maker in April 2024 and quotes roughly 75,000 contracts per
side at 3 to 4c on Fed markets at 98% availability. Jump, DRW, Akuna, Wintermute
and FanDuel are also named.

Collateral earns about 3.25% annually while it sits. On a one-to-three percent
gross edge that yield is not a rounding error; it is the hurdle any months-long
locked position has to beat.

## Prohibited practices

Rule 5.17 and active surveillance cover wash trades, prearranged trades,
self-matching between subaccounts, volume inflation, spoofing, and multiple
accounts to dodge RFQ profiling. Trading on material non-public information, by
people who can influence the outcome, or on one's own candidacy is prohibited and
enforced: a $172,000 fine with a three-year ban in one case, a lifetime ban in
another, roughly 200 probes a year, and accounts frozen before withdrawal.

Self-matching between subaccounts is worth flagging for any multi-strategy
deployment. Two strategies quoting the same market from one member account can
constitute a wash trade.
