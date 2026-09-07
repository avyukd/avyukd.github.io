---
title: "Who Can See Kalshi's RFQ Surface"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

A correction to something widely repeated, including in my own earlier notes.
Part of [[index|Kalshi Research]].

## The claim

Kalshi prices combo contracts, its parlays, through a request-for-quote system
rather than a resting order book. Retail buys the YES side; someone else quotes
the other side.

The commonly repeated version of this is that the RFQ surface is invisible and
inaccessible to ordinary accounts, restricted to approved institutional market
makers. Every write-up I found traces that to press reporting rather than to the
API. Kalshi's own documentation names no eligibility gate: the RFQ page says a
request "is broadcast to all makers," and the create-quote endpoint documents no
permission requirement. The only access language in the spec concerns futures
commission merchant members and subaccounts.

Nobody in the sourced literature had tested it.

## What a normal account actually sees

Authenticated with a standard API key on a retail account, `GET
/communications/rfqs` returns **200 requests, 95 of them open**, in a two-hour
window on a Sunday afternoon.

So the visibility half of the claim is false. Whether the same account can
_answer_ a request is a separate question, and it cannot be tested read-only:
submitting a quote is a live order that can be accepted and confirmed into a
fill. That test was deliberately not run.

## The records are richer than expected

Every request carries its full leg list with sides:

```json
{
  "id": "9e5429d8-...",
  "market_ticker": "KXMVECROSSCATEGORY-SHARD1-S2026F7B165D6601-...",
  "mve_collection_ticker": "KXMVECROSSCATEGORY-SHARD1-R",
  "target_cost_dollars": "2...",
  "status": "closed",
  "creator_id": "",
  "mve_selected_legs": [
    { "market_ticker": "KXMLBTEAMTOTAL-26SEP071410CHCMIL-MIL3", "side": "yes" },
    { "market_ticker": "KXMLBTEAMTOTAL-26SEP071710WSHSD-SD4", "side": "yes" },
    { "market_ticker": "KXMLBTEAMTOTAL-26SEP072205TORATH-TOR4", "side": "yes" },
    { "market_ticker": "KXNCAAFSPREAD-26SEP07SMUFSU-SMU5", "side": "no" }
  ]
}
```

That is a complete, priceable object. You can compute a joint probability from the
legs' own live book prices and compare it to what the requester paid, for every
request, without ever quoting.

## Shape of the flow

From that 200-record snapshot, 17:32 to 19:43 ET on a Sunday:

|                       |               |
| --------------------- | ------------: |
| Open / closed         |      95 / 105 |
| Median target cost    |        $10.00 |
| Target cost range     | $0.03 to $170 |
| Median contract count |           232 |
| Leg count, median     |             6 |
| Leg count, max        |            79 |

Leg counts run from 2 to 79 with a long tail past 30 that is lottery-ticket
shaped. Legs concentrate in baseball, Champions League, college football and
home-run props. Every record in the snapshot belonged to a single cross-category
collection.

`creator_id` was empty on all 200. The requester-profiling channel that incumbent
makers reportedly use is not exposed here.

## Why this matters

The measured overpayment on Kalshi combos is real and large: 3.3c per combo
equal-weighted across 8.93 million settled combos, corroborated by independent
reporting on retail combo losses. The reason that is not a strategy is not
secrecy. It is that RFQ is a sealed-bid auction where responders cannot see each
other's quotes, so a new entrant wins precisely the requests where their
correlation model is most generous relative to the incumbents'. The population
average is not what a marginal quoter earns.

That gap between the population number and the winner's realized edge is
measurable without submitting anything. Poll the open request list, price each
one against its legs' live books, and record what the requester paid against your
model. Restrict the analysis afterward to the subset your quote would have won.
Quoting the population is exactly the error that manufactures the headline number.

Three other things would still bite even with access. The measurement window that
produced 3.3c ran entirely inside a no-maker-fee regime that ended 2026-08-20.
Combo collateral is local to shard 1 and must be pre-positioned. And Rule 5.11
bust authority was exercised on combo markets twice in the fortnight before this
was written.

## Method note

Read-only throughout: authenticated GET requests and a websocket subscription. No
quote, RFQ, order, accept or confirm call was made. Figures are one snapshot on
2026-09-07 and should not be read as a stable rate.
