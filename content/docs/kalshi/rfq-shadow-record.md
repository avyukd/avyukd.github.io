---
title: "Kalshi RFQ Shadow Record"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

**Last updated 2026-09-08 03:32 UTC. This page rebuilds itself every hour.**

A recorder watches Kalshi's parlay request feed continuously and writes to a
local store. Once an hour that store is re-read, the charts below are redrawn,
and the page is republished. Nothing on this page was traded. The recorder can
only read: it has no ability to answer a request or submit one.

## What a parlay request is

On Kalshi you can buy a **combo**: a bundle of several bets that only pays if
every leg is right. Because each bundle is unique, there is no standing order
book for it. Instead the buyer broadcasts a **request for quote**, market makers
privately bid to take the other side, the buyer picks one, and it executes.

Every request is public. The bids are not. Kalshi sends quote messages only to
the two parties involved, so nobody outside can see how many makers responded
or what they offered. That limit shapes everything below.

## The vocabulary on this page

**Leg.** One bet inside the bundle. A four-leg request is four separate
outcomes that all have to land.

**Contracts.** Kalshi pays **$1 per contract** if the bundle wins and $0 if it
loses. So a request for 500 contracts is a request for a **$500 payout**, not a
$500 stake. The stake is whatever the buyer pays for those contracts, which is
always less than the payout.

**Dollar target.** Some buyers ask the other way round: not for a payout, but
to spend a fixed amount. A $10 target means they want $10 of exposure and the
exchange works out how many contracts that buys at the quoted price. Both forms
appear in the data, which is why the size table below has two rows.

**Independence fair value.** What the bundle is worth if you assume the legs
have nothing to do with each other. Take each leg's probability from its own
live market and multiply them together. Three coin-flip legs give 0.5 x 0.5 x
0.5 = 0.125, so a fair price is about 12.5 cents per contract. It is called
*independence* fair value because that assumption is the weak part, and the
caveats at the bottom explain when it goes wrong.

**Edge.** The price actually paid minus that fair value. If a bundle worth 12.5
cents executes at 15 cents, the edge is +2.5 cents and it belongs to whoever
sold it. Positive edge means the buyer overpaid. This is the number the whole
exercise exists to measure.

**Executed.** Whether a request turned into a real trade. Kalshi does not say
directly, so it is inferred: the combo market's traded volume is recorded when
the request appears and again after it closes, and an increase means it filled.

## Totals

| | |
| --- | ---: |
| Requests seen | 9,112 |
| Closed (no longer accepting bids) | 7,623 |
| Followed through their full lifecycle | 7,280 |
| Confirmed executed | 2,310 |
| Earliest request | 2026-09-07 17:41:26 |
| Most recent request | 2026-09-08 03:29:36 |
| Median edge to the seller | +0.38 cents per contract |
| Total edge on executed requests | $-18.32 |

## How many bets are bundled together

Each bar is a count of requests. A bar at 3 means that many buyers asked for a
three-leg parlay.

<svg viewBox="0 0 680 230" role="img" aria-label="number of requests, by how many legs the parlay had" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1682</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1262</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">841</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">420</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="58.8" y="14.0" width="22.6" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="70.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="91.2" y="46.5" width="22.6" height="149.5" fill="var(--secondary)" rx="2"/>
<text x="102.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="123.5" y="77.4" width="22.6" height="118.6" fill="var(--secondary)" rx="2"/>
<text x="134.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="155.8" y="95.2" width="22.6" height="100.8" fill="var(--secondary)" rx="2"/>
<text x="167.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="188.1" y="113.1" width="22.6" height="82.9" fill="var(--secondary)" rx="2"/>
<text x="199.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="220.4" y="137.1" width="22.6" height="58.9" fill="var(--secondary)" rx="2"/>
<text x="231.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="252.7" y="143.2" width="22.6" height="52.8" fill="var(--secondary)" rx="2"/>
<text x="264.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="285.1" y="151.6" width="22.6" height="44.4" fill="var(--secondary)" rx="2"/>
<text x="296.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="317.4" y="158.6" width="22.6" height="37.4" fill="var(--secondary)" rx="2"/>
<text x="328.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="349.7" y="169.5" width="22.6" height="26.5" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="382.0" y="178.0" width="22.6" height="18.0" fill="var(--secondary)" rx="2"/>
<text x="393.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="414.3" y="181.2" width="22.6" height="14.8" fill="var(--secondary)" rx="2"/>
<text x="425.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="446.6" y="181.6" width="22.6" height="14.4" fill="var(--secondary)" rx="2"/>
<text x="457.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<rect x="479.0" y="183.2" width="22.6" height="12.8" fill="var(--secondary)" rx="2"/>
<text x="490.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">15</text>
<rect x="511.3" y="184.6" width="22.6" height="11.4" fill="var(--secondary)" rx="2"/>
<text x="522.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">16</text>
<rect x="543.6" y="188.2" width="22.6" height="7.8" fill="var(--secondary)" rx="2"/>
<text x="554.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">17</text>
<rect x="575.9" y="189.9" width="22.6" height="6.1" fill="var(--secondary)" rx="2"/>
<text x="587.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">18</text>
<rect x="608.2" y="188.8" width="22.6" height="7.2" fill="var(--secondary)" rx="2"/>
<text x="619.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">19</text>
<rect x="640.5" y="192.3" width="22.6" height="3.7" fill="var(--secondary)" rx="2"/>
<text x="651.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">20</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

Short parlays dominate by count. The long ones are rare, but published research
says they are where buyers overpay most, so they matter more than their count
suggests.

## What sports they are betting on

Derived from the leg tickers. *Mixed* means the bundle spans more than one
sport, which is common: a baseball game stapled to a college football spread.

<svg viewBox="0 0 680 230" role="img" aria-label="number of requests by sport" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2966</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2224</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1483</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">742</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="65.5" y="14.0" width="53.7" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="92.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mixed</text>
<rect x="142.3" y="24.4" width="53.7" height="171.6" fill="var(--secondary)" rx="2"/>
<text x="169.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mlb</text>
<rect x="219.0" y="127.4" width="53.7" height="68.6" fill="var(--secondary)" rx="2"/>
<text x="245.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">soccer</text>
<rect x="295.8" y="153.4" width="53.7" height="42.6" fill="var(--secondary)" rx="2"/>
<text x="322.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">tennis</text>
<rect x="372.5" y="158.9" width="53.7" height="37.1" fill="var(--secondary)" rx="2"/>
<text x="399.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">other</text>
<rect x="449.3" y="167.8" width="53.7" height="28.2" fill="var(--secondary)" rx="2"/>
<text x="476.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ncaaf</text>
<rect x="526.0" y="168.8" width="53.7" height="27.2" fill="var(--secondary)" rx="2"/>
<text x="552.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">nfl</text>
<rect x="602.8" y="194.2" width="53.7" height="1.8" fill="var(--secondary)" rx="2"/>
<text x="629.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ufc</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

## How the odds get long as legs are added

Median independence fair value, in dollars per contract, grouped by leg count.
A value of 0.10 means the bundle is worth about 10 cents to win $1.

<svg viewBox="0 0 680 230" role="img" aria-label="median fair value in dollars per contract, by leg count" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.32</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.24</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.16</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.08</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.00</text>
<rect x="61.1" y="14.0" width="33.1" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="77.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="108.3" y="82.5" width="33.1" height="113.5" fill="var(--secondary)" rx="2"/>
<text x="124.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="155.5" y="122.2" width="33.1" height="73.8" fill="var(--secondary)" rx="2"/>
<text x="172.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="202.8" y="151.6" width="33.1" height="44.4" fill="var(--secondary)" rx="2"/>
<text x="219.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="250.0" y="162.8" width="33.1" height="33.2" fill="var(--secondary)" rx="2"/>
<text x="266.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="297.2" y="174.3" width="33.1" height="21.7" fill="var(--secondary)" rx="2"/>
<text x="313.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="344.5" y="184.1" width="33.1" height="11.9" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="391.7" y="181.7" width="33.1" height="14.3" fill="var(--secondary)" rx="2"/>
<text x="408.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="438.9" y="188.1" width="33.1" height="7.9" fill="var(--secondary)" rx="2"/>
<text x="455.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="486.2" y="191.8" width="33.1" height="4.2" fill="var(--secondary)" rx="2"/>
<text x="502.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="533.4" y="191.9" width="33.1" height="4.1" fill="var(--secondary)" rx="2"/>
<text x="549.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="580.6" y="193.8" width="33.1" height="2.2" fill="var(--secondary)" rx="2"/>
<text x="597.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="627.9" y="193.4" width="33.1" height="2.6" fill="var(--secondary)" rx="2"/>
<text x="644.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

This decay is arithmetic, not a finding. Multiplying more probabilities together
always gives a smaller number. It is here as the baseline the next chart
measures against.

## Did buyers overpay

One dot per executed request. Horizontal position is leg count; vertical is the
price paid minus the fair value above, in dollars per contract. Dots above the
dashed line mean the buyer paid more than the bundle was worth and the seller
collected the difference.

<svg viewBox="0 0 680 280" role="img" aria-label="edge per contract by leg count" style="width:100%;height:auto;max-width:680px">
<line x1="62" y1="14.0" x2="666" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.651</text>
<line x1="62" y1="71.5" x2="666" y2="71.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="75.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.377</text>
<line x1="62" y1="129.0" x2="666" y2="129.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="132.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.102</text>
<line x1="62" y1="186.5" x2="666" y2="186.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="190.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">-0.172</text>
<line x1="62" y1="244.0" x2="666" y2="244.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="247.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">-0.447</text>
<line x1="62" y1="150.4" x2="666" y2="150.4" stroke="var(--gray)" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="129.1" cy="141.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="147.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="46.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="146.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="145.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="147.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="147.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="166.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="151.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="144.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="138.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="154.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="147.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="148.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="129.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="244.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="143.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="330.4" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="145.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="148.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="154.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="131.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="523.4" cy="135.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="148.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="150.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="167.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="119.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="143.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="154.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="126.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="221.4" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="133.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="14.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="139.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="145.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="164.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="147.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="126.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="151.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="21.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="60.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="146.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="151.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="153.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="254.9" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="144.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="168.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="152.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="148.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="161.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="142.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="114.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="151.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="171.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="110.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="105.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="172.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="175.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="152.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="164.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="138.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="110.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="145.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="136.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="141.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="82.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="147.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="144.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="151.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="131.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="143.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="347.2" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="152.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="140.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="107.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="196.2" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="153.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="134.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="114.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="144.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="151.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="139.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="148.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="221.4" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="148.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="148.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="129.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="186.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="148.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="151.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="164.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="126.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="145.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="146.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="238.2" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="134.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="141.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="143.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="141.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="153.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="98.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="140.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="145.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="151.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="147.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="151.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="145.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="147.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="156.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="184.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="145.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="666.0" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="146.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="147.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="143.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="127.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="84.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="171.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="153.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="130.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="91.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="140.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="184.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="145.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="372.4" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="151.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="28.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="148.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="102.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="145.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="153.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="39.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="136.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="141.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="68.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="193.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="129.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="254.9" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="118.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="156.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="147.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="97.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="139.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="364.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="166.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="141.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="137.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="109.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="172.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="150.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="147.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="143.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="127.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="195.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="147.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="121.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="149.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="146.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="146.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="142.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="149.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="280.1" cy="132.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="144.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="172.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="149.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="130.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="107.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="271.7" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="150.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="145.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="145.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="130.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="147.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="152.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="146.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<line x1="62" y1="244" x2="666" y2="244" stroke="var(--gray)" stroke-width="1"/>
<text x="62.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<text x="213.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">20</text>
<text x="364.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">38</text>
<text x="515.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">56</text>
<text x="666.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">74</text>
<text x="364" y="276" text-anchor="middle" font-size="10" fill="var(--gray)">legs in the bundle</text>
</svg>

## How big the requests are

Two different things, which is why they are separate rows. **Payout if it wins**
is what the buyer collects when every leg lands. **Amount staked** is what they
pay to get it. A buyer asking for 500 contracts on a bundle worth 10 cents is
risking about $50 to win $500.

| | requests | median | largest |
| --- | ---: | ---: | ---: |
| Payout if it wins | 3643 | $201 | $66,714 |
| Amount staked | 5469 | $10.00 | $1,560.11 |

These are small. A median payout in the hundreds of dollars is recreational
betting, not institutional flow.

## Bundles whose legs are related

**825** of 9,112 requests have two or more legs on the same game.

This is the known weak point in the fair value above. Two bets on the same game
are not independent: if a team is winning, several legs move together. Real odds
of both landing are then *higher* than multiplying them, so the independence
model understates what the bundle is worth and can make a fair price look like
an overpayment. Correcting this is the next piece of work.

## What to be careful about

- **Fair value assumes independence.** Wrong for same-game bundles, in a known
  direction, as described above.
- **Executed price is the market's last trade.** On a bundle that barely trades,
  that trade may not be the one being measured. Low-volume rows need filtering
  before anyone draws conclusions.
- **Requests are found by polling.** Very short-lived ones are missed, which
  slightly biases the sample toward requests nobody rushed to fill.
- **Nothing here was traded.** Read-only observation throughout.

Raw data is exported to CSV and Parquet for deeper analysis than a page like
this can carry.
