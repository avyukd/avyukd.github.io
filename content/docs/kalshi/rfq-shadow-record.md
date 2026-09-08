---
title: "Kalshi RFQ Shadow Record"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

**Last updated 2026-09-08 11:40 UTC. This page rebuilds itself every hour.**

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
| Requests seen | 18,032 |
| Closed (no longer accepting bids) | 17,017 |
| Followed through their full lifecycle | 16,653 |
| Confirmed executed | 4,788 |
| Earliest request | 2026-09-07 17:41:26 |
| Most recent request | 2026-09-08 11:38:15 |
| Median edge to the seller | +0.37 cents per contract |
| Total edge on executed requests | $5,085.58 |

## How many bets are bundled together

Each bar is a count of requests. A bar at 3 means that many buyers asked for a
three-leg parlay.

<svg viewBox="0 0 680 230" role="img" aria-label="number of requests, by how many legs the parlay had" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">3197</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2398</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1598</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">799</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="58.8" y="14.0" width="22.6" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="70.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="91.2" y="55.7" width="22.6" height="140.3" fill="var(--secondary)" rx="2"/>
<text x="102.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="123.5" y="79.9" width="22.6" height="116.1" fill="var(--secondary)" rx="2"/>
<text x="134.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="155.8" y="98.0" width="22.6" height="98.0" fill="var(--secondary)" rx="2"/>
<text x="167.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="188.1" y="112.4" width="22.6" height="83.6" fill="var(--secondary)" rx="2"/>
<text x="199.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="220.4" y="137.2" width="22.6" height="58.8" fill="var(--secondary)" rx="2"/>
<text x="231.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="252.7" y="139.8" width="22.6" height="56.2" fill="var(--secondary)" rx="2"/>
<text x="264.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="285.1" y="150.9" width="22.6" height="45.1" fill="var(--secondary)" rx="2"/>
<text x="296.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="317.4" y="153.5" width="22.6" height="42.5" fill="var(--secondary)" rx="2"/>
<text x="328.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="349.7" y="163.9" width="22.6" height="32.1" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="382.0" y="172.8" width="22.6" height="23.2" fill="var(--secondary)" rx="2"/>
<text x="393.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="414.3" y="177.7" width="22.6" height="18.3" fill="var(--secondary)" rx="2"/>
<text x="425.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="446.6" y="177.1" width="22.6" height="18.9" fill="var(--secondary)" rx="2"/>
<text x="457.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<rect x="479.0" y="180.7" width="22.6" height="15.3" fill="var(--secondary)" rx="2"/>
<text x="490.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">15</text>
<rect x="511.3" y="183.0" width="22.6" height="13.0" fill="var(--secondary)" rx="2"/>
<text x="522.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">16</text>
<rect x="543.6" y="185.9" width="22.6" height="10.1" fill="var(--secondary)" rx="2"/>
<text x="554.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">17</text>
<rect x="575.9" y="188.0" width="22.6" height="8.0" fill="var(--secondary)" rx="2"/>
<text x="587.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">18</text>
<rect x="608.2" y="188.2" width="22.6" height="7.8" fill="var(--secondary)" rx="2"/>
<text x="619.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">19</text>
<rect x="640.5" y="190.1" width="22.6" height="5.9" fill="var(--secondary)" rx="2"/>
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
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">5235</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">3926</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">2618</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">1309</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="65.5" y="14.0" width="53.7" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="92.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mixed</text>
<rect x="142.3" y="49.1" width="53.7" height="146.9" fill="var(--secondary)" rx="2"/>
<text x="169.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mlb</text>
<rect x="219.0" y="94.8" width="53.7" height="101.2" fill="var(--secondary)" rx="2"/>
<text x="245.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">soccer</text>
<rect x="295.8" y="129.9" width="53.7" height="66.1" fill="var(--secondary)" rx="2"/>
<text x="322.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">other</text>
<rect x="372.5" y="135.9" width="53.7" height="60.1" fill="var(--secondary)" rx="2"/>
<text x="399.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">tennis</text>
<rect x="449.3" y="157.7" width="53.7" height="38.3" fill="var(--secondary)" rx="2"/>
<text x="476.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">nfl</text>
<rect x="526.0" y="166.8" width="53.7" height="29.2" fill="var(--secondary)" rx="2"/>
<text x="552.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ncaaf</text>
<rect x="602.8" y="192.9" width="53.7" height="3.1" fill="var(--secondary)" rx="2"/>
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
<rect x="108.3" y="80.7" width="33.1" height="115.3" fill="var(--secondary)" rx="2"/>
<text x="124.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="155.5" y="121.0" width="33.1" height="75.0" fill="var(--secondary)" rx="2"/>
<text x="172.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="202.8" y="153.3" width="33.1" height="42.7" fill="var(--secondary)" rx="2"/>
<text x="219.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="250.0" y="164.5" width="33.1" height="31.5" fill="var(--secondary)" rx="2"/>
<text x="266.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="297.2" y="172.5" width="33.1" height="23.5" fill="var(--secondary)" rx="2"/>
<text x="313.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="344.5" y="183.2" width="33.1" height="12.8" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="391.7" y="184.0" width="33.1" height="12.0" fill="var(--secondary)" rx="2"/>
<text x="408.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="438.9" y="187.8" width="33.1" height="8.2" fill="var(--secondary)" rx="2"/>
<text x="455.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="486.2" y="191.5" width="33.1" height="4.5" fill="var(--secondary)" rx="2"/>
<text x="502.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="533.4" y="191.8" width="33.1" height="4.2" fill="var(--secondary)" rx="2"/>
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
<circle cx="111.3" cy="153.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="83.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="156.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="171.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="167.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="162.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="144.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="228.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="259.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="162.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="145.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="401.0" cy="148.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="172.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="136.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="162.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.1" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="147.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="59.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="169.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="65.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="93.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="156.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="161.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="203.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="155.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="172.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="167.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="154.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="133.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="174.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="166.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="130.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="126.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="178.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="169.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="150.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="130.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="149.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="109.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="145.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="154.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="271.6" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="161.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="152.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="128.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="160.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="173.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="151.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.1" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="144.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="186.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="170.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="156.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="191.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="148.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="121.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="152.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="166.8" cy="157.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="160.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="168.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="164.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="184.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="156.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="505.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="154.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="111.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="174.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="165.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="116.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="152.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="184.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="290.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="70.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="124.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="161.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="77.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="149.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="152.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="99.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="191.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="144.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="203.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="136.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="164.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="121.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="151.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="283.9" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="171.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="168.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="129.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="154.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="142.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="192.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="157.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="138.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="156.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="169.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="154.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="222.2" cy="146.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="175.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="127.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="173.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="216.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="145.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="151.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="228.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="162.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="165.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="118.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="165.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="173.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="182.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="187.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="147.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="168.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="122.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="162.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="160.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="164.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="165.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="179.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="124.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="48.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="189.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="129.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="173.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="290.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="172.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="172.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="177.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="166.8" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="62.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="228.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="147.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="160.6" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="104.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="165.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="99.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="136.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="164.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="110.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="98.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="124.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="209.9" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="198.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="138.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="198.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="197.6" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.1" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="116.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="185.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="160.6" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="153.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="113.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="160.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="183.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="168.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="259.2" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="152.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="62.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="135.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="143.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="166.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="169.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="156.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="154.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="142.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="117.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="176.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="66.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="166.8" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="277.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="156.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="146.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="166.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="48.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="93.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="105.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="160.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="162.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="146.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="75.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="290.0" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="143.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="136.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="164.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="222.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="170.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="151.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="155.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="179.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="154.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="172.9" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="172.9" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="183.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="157.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="253.1" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="244.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="150.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="155.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="166.8" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="98.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="191.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="191.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="121.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="216.1" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="14.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="167.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="160.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="157.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="184.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="156.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="156.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="193.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="153.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="148.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="209.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="154.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="173.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="157.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="179.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="140.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="131.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="171.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="154.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="157.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="155.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="164.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="148.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="151.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="150.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="197.6" cy="156.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="64.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="132.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="161.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="166.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="199.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="161.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="163.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="148.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="203.8" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="666.0" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="120.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="151.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="179.1" cy="158.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="149.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="186.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="157.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="157.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="158.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="164.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="125.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="92.8" cy="156.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="142.1" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="157.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="185.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="141.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="153.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="178.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="237.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="133.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="161.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="160.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="156.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="156.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="148.3" cy="154.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="159.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="149.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="123.6" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="115.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="159.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="128.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="159.0" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="162.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="111.3" cy="156.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="105.1" cy="132.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="154.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="153.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="136.0" cy="154.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="149.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="158.7" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="277.7" cy="159.6" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="86.7" cy="156.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="146.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="160.6" cy="161.1" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="99.0" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="146.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="62.0" cy="150.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="117.5" cy="159.5" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="197.6" cy="158.9" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="129.8" cy="167.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="80.5" cy="165.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="74.3" cy="150.8" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="154.4" cy="159.3" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="314.7" cy="158.2" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<circle cx="68.2" cy="158.4" r="4" fill="var(--secondary)" stroke="var(--secondary)" stroke-width="1.5" opacity="0.85"/>
<line x1="62" y1="244" x2="666" y2="244" stroke="var(--gray)" stroke-width="1"/>
<text x="62.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<text x="213.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">26</text>
<text x="364.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">51</text>
<text x="515.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">76</text>
<text x="666.0" y="258" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">100</text>
<text x="364" y="276" text-anchor="middle" font-size="10" fill="var(--gray)">legs in the bundle</text>
</svg>

## How big the requests are

Two different things, which is why they are separate rows. **Payout if it wins**
is what the buyer collects when every leg lands. **Amount staked** is what they
pay to get it. A buyer asking for 500 contracts on a bundle worth 10 cents is
risking about $50 to win $500.

| | requests | median | largest |
| --- | ---: | ---: | ---: |
| Payout if it wins | 6531 | $208 | $90,909 |
| Amount staked | 11501 | $10.00 | $4,500.00 |

These are small. A median payout in the hundreds of dollars is recreational
betting, not institutional flow.

## Bundles whose legs are related

**1,187** of 18,032 requests have two or more legs on the same game.

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
