---
title: "Kalshi Market Families"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

Ten groupings that recur on a schedule, so a strategy can be built once and run
repeatedly. Series names and cadence are high confidence. Volume figures are a
snapshot from 2026-09-07 and move. Part of [[index|Kalshi Research]].

The grouping axis is **what the trading job actually is**, not what the market is
about. Trading the CPI ladder and the Fed ladder is the same job. Trading the CPI
ladder and quoting weather brackets is not.

## Scheduled macro releases

`KXCPI` `KXCPICORE` `KXPCECORE` `KXPAYROLLS` `KXU3` `KXJOBLESSCLAIMS`

Weekly for claims, monthly for CPI, PCE, jobs, retail and housing, quarterly for
GDP. Settlement lands half an hour to ninety minutes after release, on the exact
BLS, BEA, DOL or Census series named in the rules.

Headline CPI runs 0.8 to 1.6 million contracts a month; payrolls 360,000 to
615,000. Retail holds the book most of the month; makers and macro desks arrive in
the last two days, and about half the contracts in live CPI strikes come from
1,000-lot-plus orders.

Public nowcasts are good: Cleveland Fed, GDPNow, the New York Fed, Truflation,
state claims data, ADP and Homebase for payrolls. **Makers pay fees here.**

## Fed decisions and rate path

`KXFEDDECISION` `KXRATECUTCOUNT` `KXFEDHIKE` `KXFOMCDISSENTCOUNT`

Eight meetings a year, closing 13:59 ET on decision day. The deepest macro book on
the exchange: one July 2026 event settled 68.8 million contracts on 1c spreads.

The crowd already has the data. FedWatch, SOFR futures and Treasury options give
the full settlement distribution free, and Federal Reserve staff research treats
these prices as near-efficient. Any edge is speed, not modeling.

## Price binaries

`KXBTC15M` `KXBTCD` `KXETH15M` `KXGOLD15M` `KXSILVER15M`

Every 15 minutes around the clock for crypto. The largest non-sports volume on the
exchange: the 15-minute Bitcoin series runs a median 2.1 million contracts per
window, roughly 200 million a day.

Settles on the CF Benchmarks 60-second average, not the chart. A pure speed
contest against bots reading the same order books. The features worth studying are
structural rather than predictive: the tie-to-YES rule, the fee curve, and retail
demand clustering on round numbers. Sits on shard 2.

## Weather and hazards

`KXHIGHNY` `KXHIGHLAX` `KXHIGHCHI` `KXLOWTNYC` `KXRAIN`

The deepest recurring book outside sports and crypto. Los Angeles daily highs run
about 683,000 contracts a day, New York 214,000, Miami 151,000, Chicago 126,000.

Settlement is station-specific and unforgiving. Central Park for New York. Midway
for the Chicago daily, but O'Hare for Chicago rain. Hobby for the Houston daily.
Local Standard Time, 0.1C precision.

This is where free public models are most clearly better than the crowd's
narrative pricing: NWS MOS and NBM, HRRR, GFS and ECMWF ensembles, raw ASOS and
METAR feeds, NHC probabilities. **Makers pay no fee.**

One measured asymmetry: the official settling maximum exceeds the maximum of every
transmitted METAR observation by a median 0.90F, flipping the rounded whole-degree
value on 62 to 67% of days against 2F-wide bands.

## Sports

`KXNFLGAME` `KXNBAGAME` `KXMLBGAME` `KXNHLGAME` `KXNFLSPREAD`

Roughly 83 to 90% of exchange volume. NBA games alone have traded 11.7 billion
contracts lifetime.

Retail bettors with home-team and longshot bias, against designated makers earning
rebates. The plausible edge is breadth into neglected prop and period markets, not
beating a closing line. **107 series charge maker fees**, and tennis and baseball
sit on shard 3.

Worth knowing before assuming a vig advantage: across 103 live two-outcome events
the median mid overround is exactly 1.0000 and the ask overround 1.0100. The
makers already quote an arbitrage-free surface off the same sharp feeds.

## Elections and polling

`CONTROLH` `CONTROLS` `KXHOUSERACE` `KXGOVCA-26` `SENATETX`

Presidential nomination markets have traded 212 million contracts lifetime. House
control for 2026 carries 18 million in open interest.

No maker rebates. The counterparty is partisan retail and cross-exchange
arbitrageurs. A barbell with nothing in the middle: across 11,674 open election
markets the median quoted spread is 7c, median touch depth $5, 44% have never
traded, and 80% of volume sits in 104 markets.

## Institutional process events

`KXGOVTSHUTDOWN` `KXGOVSHUTLENGTH` `KXFEDCHAIRNOM` `KXSENATECONFIRM`

Shutdown length has 120 million contracts lifetime. Everything outside the
headline binaries is thin.

Settles on OPM notices, Senate roll calls, court opinions and the Federal
Register. Counterparties include genuine hedgers: federal contractors, crypto
firms, and in one documented case a goat-herding company hedging a wage rule. No
model beats the crowd; reading process faster and more literally does.

## Mention and transcript markets

`KXTRUMPSAY` `KXTRUMPMENTION` `KXFEDMENTION` `KXSECPRESSMENTION`

219 million contracts lifetime on the Trump mention series, with 28 million on a
single State of the Union. Thirty to fifty word contracts per event, settling
within hours.

Almost entirely retail entertainment flow. No maker program, no maker fee, and no
designated liquidity provider holding a market-maker agreement in the category.
Susquehanna has said on the record that it does not participate here, framing it
as a warning to retail rather than an edge left on the table.

The forecasting thesis does not survive measurement. Across 10,643 settled markets
the crowd's Brier score improves from 0.2155 at listing to 0.1428 an hour before
the event, and a naive word-history model scores worse than the listing mid.

Kalshi delisted all _sports_ mention markets on 2026-08-19, so category risk is
live.

## Index nowcasting

`KXAAAGASD` `KXAAAGASW` `KXNETFLIXRANKSHOW` `KXTOPSONG`

Gas is the deep one: a median 219,000 contracts a day and 674,000 a week, on 1c
spreads.

Settles on a published number read off a named page at a named time. The purest
form of the thesis that upstream data beats narrative: GasBuddy and RBOB futures
lead the AAA print mechanically, FlixPatrol leads Netflix Tudum, Spotify daily
charts lead Billboard.

## Awards and honors

`KXOSCARPIC` `KXOSCARACTO` `KXGRAMAOTY` `KXCRITICSPIC`

Best Picture has traded 37 million contracts lifetime. The 2027 event already
carries 4.9 million volume against 3.6 million open interest.

Fan and stan-community retail with favorite-artist bias. Precursor databases and
citation-laureate lists give a real but bounded edge, because no upstream feed
determines a vote. Capital turns once a year, which caps compounding.

One mechanical exception worth naming: some award winners are published on the
exact body Kalshi names as its source agency, with machine-readable markers, while
the markets stay active for days.
