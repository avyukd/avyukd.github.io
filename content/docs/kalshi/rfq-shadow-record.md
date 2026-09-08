---
title: "Kalshi RFQ Shadow Record"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

**Last updated 2026-09-08 08:37 UTC. This page rebuilds itself every hour.**

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
| Requests seen | 14,752 |
| Closed (no longer accepting bids) | 13,413 |
| Followed through their full lifecycle | 12,977 |
| Confirmed executed | 4,116 |
| Earliest request | 2026-09-07 17:41:26 |
| Most recent request | 2026-09-08 08:33:52 |
| Median edge to the seller | +0.36 cents per contract |
| Total edge on executed requests | $5,546.20 |

## How many bets are bundled together

Each bar is a count of requests. A bar at 3 means that many buyers asked for a
three-leg parlay.

<svg viewBox="0 0 680 230" role="img" aria-label="number of requests, by how many legs the parlay had" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2620</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1965</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1310</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">655</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="58.8" y="14.0" width="22.6" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="70.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="91.2" y="51.9" width="22.6" height="144.1" fill="var(--secondary)" rx="2"/>
<text x="102.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="123.5" y="75.6" width="22.6" height="120.4" fill="var(--secondary)" rx="2"/>
<text x="134.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="155.8" y="97.2" width="22.6" height="98.8" fill="var(--secondary)" rx="2"/>
<text x="167.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="188.1" y="110.0" width="22.6" height="86.0" fill="var(--secondary)" rx="2"/>
<text x="199.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="220.4" y="135.4" width="22.6" height="60.6" fill="var(--secondary)" rx="2"/>
<text x="231.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="252.7" y="139.9" width="22.6" height="56.1" fill="var(--secondary)" rx="2"/>
<text x="264.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="285.1" y="151.5" width="22.6" height="44.5" fill="var(--secondary)" rx="2"/>
<text x="296.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="317.4" y="154.5" width="22.6" height="41.5" fill="var(--secondary)" rx="2"/>
<text x="328.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="349.7" y="166.3" width="22.6" height="29.7" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="382.0" y="174.3" width="22.6" height="21.7" fill="var(--secondary)" rx="2"/>
<text x="393.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="414.3" y="178.6" width="22.6" height="17.4" fill="var(--secondary)" rx="2"/>
<text x="425.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="446.6" y="177.8" width="22.6" height="18.2" fill="var(--secondary)" rx="2"/>
<text x="457.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<rect x="479.0" y="182.0" width="22.6" height="14.0" fill="var(--secondary)" rx="2"/>
<text x="490.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">15</text>
<rect x="511.3" y="183.6" width="22.6" height="12.4" fill="var(--secondary)" rx="2"/>
<text x="522.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">16</text>
<rect x="543.6" y="186.4" width="22.6" height="9.6" fill="var(--secondary)" rx="2"/>
<text x="554.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">17</text>
<rect x="575.9" y="188.4" width="22.6" height="7.6" fill="var(--secondary)" rx="2"/>
<text x="587.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">18</text>
<rect x="608.2" y="188.2" width="22.6" height="7.8" fill="var(--secondary)" rx="2"/>
<text x="619.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">19</text>
<rect x="640.5" y="190.8" width="22.6" height="5.2" fill="var(--secondary)" rx="2"/>
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
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">4441</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">3331</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2220</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1110</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="65.5" y="14.0" width="53.7" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="92.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mixed</text>
<rect x="142.3" y="44.0" width="53.7" height="152.0" fill="var(--secondary)" rx="2"/>
<text x="169.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mlb</text>
<rect x="219.0" y="101.7" width="53.7" height="94.3" fill="var(--secondary)" rx="2"/>
<text x="245.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">soccer</text>
<rect x="295.8" y="141.0" width="53.7" height="55.0" fill="var(--secondary)" rx="2"/>
<text x="322.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">other</text>
<rect x="372.5" y="146.2" width="53.7" height="49.8" fill="var(--secondary)" rx="2"/>
<text x="399.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">tennis</text>
<rect x="449.3" y="158.7" width="53.7" height="37.3" fill="var(--secondary)" rx="2"/>
<text x="476.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">nfl</text>
<rect x="526.0" y="164.8" width="53.7" height="31.2" fill="var(--secondary)" rx="2"/>
<text x="552.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ncaaf</text>
<rect x="602.8" y="193.0" width="53.7" height="3.0" fill="var(--secondary)" rx="2"/>
<text x="629.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ufc</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

## How the odds get long as legs are added

Median independence fair value, in dollars per contract, grouped by leg count.
A value of 0.10 means the bundle is worth about 10 cents to win $1.

<svg viewBox="0 0 680 230" role="img" aria-label="median fair value in dollars per contract, by leg count" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.33</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.25</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.17</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.08</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.00</text>
<rect x="61.1" y="14.0" width="33.1" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="77.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="108.3" y="81.2" width="33.1" height="114.8" fill="var(--secondary)" rx="2"/>
<text x="124.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="155.5" y="122.9" width="33.1" height="73.1" fill="var(--secondary)" rx="2"/>
<text x="172.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="202.8" y="153.7" width="33.1" height="42.3" fill="var(--secondary)" rx="2"/>
<text x="219.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="250.0" y="166.5" width="33.1" height="29.5" fill="var(--secondary)" rx="2"/>
<text x="266.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="297.2" y="173.6" width="33.1" height="22.4" fill="var(--secondary)" rx="2"/>
<text x="313.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="344.5" y="183.6" width="33.1" height="12.4" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="391.7" y="184.5" width="33.1" height="11.5" fill="var(--secondary)" rx="2"/>
<text x="408.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="438.9" y="188.4" width="33.1" height="7.6" fill="var(--secondary)" rx="2"/>
<text x="455.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="486.2" y="191.9" width="33.1" height="4.1" fill="var(--secondary)" rx="2"/>
<text x="502.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="533.4" y="191.9" width="33.1" height="4.1" fill="var(--secondary)" rx="2"/>
<text x="549.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="580.6" y="193.0" width="33.1" height="3.0" fill="var(--secondary)" rx="2"/>
<text x="597.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="627.9" y="193.5" width="33.1" height="2.5" fill="var(--secondary)" rx="2"/>
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
<text x="55" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.948</text>
<line x1="62" y1="71.5" x2="666" y2="71.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="75.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.574</text>
<line x1="62" y1="129.0" x2="666" y2="129.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="132.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">+0.200</text>
<line x1="62" y1="186.5" x2="666" y2="186.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="190.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">-0.175</text>
<line x1="62" y1="244.0" x2="666" y2="244.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="55" y="247.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">-0.549</text>
<line x1="62" y1="159.6" x2="666" y2="159.6" stroke="var(--gray)" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="129.1" cy="153.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="83.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="156.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="171.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="167.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="162.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="157.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="144.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="228.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="330.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="162.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="145.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="523.4" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="172.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="136.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="162.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="221.4" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="147.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="59.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="169.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="65.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="93.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="156.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="161.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="254.9" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="155.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="172.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="167.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="154.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="133.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="174.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="166.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="130.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="126.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="178.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="169.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="130.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="109.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="145.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="154.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="347.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="161.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="152.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="128.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="196.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="173.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="151.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="221.4" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="144.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="186.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="170.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="156.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="238.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="121.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="152.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="157.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="160.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="168.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="164.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="184.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="156.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="666.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="154.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="111.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="174.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="165.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="116.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="184.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="372.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="70.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="124.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="161.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="77.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="152.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="99.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="191.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="144.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="254.9" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="136.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="164.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="121.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="151.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="364.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="171.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="168.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="129.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="154.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="142.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="192.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="157.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="138.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="156.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="154.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="280.1" cy="146.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="127.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="173.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="271.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="151.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="288.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="162.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="165.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="118.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="165.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="173.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="182.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="187.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="147.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="168.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="122.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="164.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="165.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="179.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="124.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="48.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="189.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="129.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="173.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="372.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="172.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="172.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="177.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="62.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="171.1" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="288.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="147.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="196.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="104.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="99.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="136.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="110.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="98.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="124.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="263.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="198.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="138.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="198.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="246.6" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="221.4" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="116.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="185.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="196.2" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="153.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="113.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="183.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="168.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="330.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="152.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="62.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="135.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="143.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="166.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="169.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="156.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="117.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="176.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="66.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="355.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="146.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="48.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="93.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="105.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="160.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="146.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="75.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="372.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="143.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="136.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="164.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="222.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="170.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="179.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="213.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="213.0" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="183.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="137.5" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="322.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="244.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="204.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="98.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="238.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="238.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="121.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="103.9" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="271.7" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="162.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="14.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="87.2" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="167.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="145.9" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="112.3" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="184.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="95.6" cy="156.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="156.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="193.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="70.4" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="78.8" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="187.8" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="120.7" cy="153.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
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
| Payout if it wins | 5364 | $203 | $90,909 |
| Amount staked | 9388 | $10.00 | $4,500.00 |

These are small. A median payout in the hundreds of dollars is recreational
betting, not institutional flow.

## Bundles whose legs are related

**1,059** of 14,752 requests have two or more legs on the same game.

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
