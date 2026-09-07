---
title: "Kalshi RFQ Shadow Record"
type: topic
tags:
  - kalshi
  - prediction-markets
  - trading
---

*Auto-generated 2026-09-07 20:25 UTC. Read-only observation; nothing here was traded.*

## What this is

Every combo request-for-quote Kalshi broadcast while the recorder was running,
priced against its legs' live order books at the moment the request appeared,
then followed to see whether it executed and at what price.

Kalshi sends quote events only to the two parties involved, so the number of
responders per request is not observable to anyone else. Execution is inferred
from the combo market's volume delta between request and close, which is direct
evidence rather than a status flag.

## Totals

| | |
| --- | ---: |
| Requests recorded | 200 |
| Closed | 96 |
| Resolved (open and close snapshots) | 0 |
| Executed | 0 |
| First request | 2026-09-07T18:32:26 |
| Latest request | 2026-09-07T20:16:55 |

## Requests by leg count

<svg viewBox="0 0 680 230" role="img" aria-label="requests by leg count" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">46</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">34</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">23</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="59.1" y="14.0" width="23.9" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="71.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="93.2" y="97.1" width="23.9" height="98.9" fill="var(--secondary)" rx="2"/>
<text x="105.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="127.3" y="89.2" width="23.9" height="106.8" fill="var(--secondary)" rx="2"/>
<text x="139.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="161.5" y="124.8" width="23.9" height="71.2" fill="var(--secondary)" rx="2"/>
<text x="173.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="195.6" y="124.8" width="23.9" height="71.2" fill="var(--secondary)" rx="2"/>
<text x="207.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="229.7" y="176.2" width="23.9" height="19.8" fill="var(--secondary)" rx="2"/>
<text x="241.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="263.8" y="152.5" width="23.9" height="43.5" fill="var(--secondary)" rx="2"/>
<text x="275.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="297.9" y="148.5" width="23.9" height="47.5" fill="var(--secondary)" rx="2"/>
<text x="309.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="332.0" y="144.6" width="23.9" height="51.4" fill="var(--secondary)" rx="2"/>
<text x="343.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="366.1" y="172.3" width="23.9" height="23.7" fill="var(--secondary)" rx="2"/>
<text x="378.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="400.2" y="188.1" width="23.9" height="7.9" fill="var(--secondary)" rx="2"/>
<text x="412.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="434.3" y="192.0" width="23.9" height="4.0" fill="var(--secondary)" rx="2"/>
<text x="446.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">13</text>
<rect x="468.5" y="188.1" width="23.9" height="7.9" fill="var(--secondary)" rx="2"/>
<text x="480.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<rect x="502.6" y="188.1" width="23.9" height="7.9" fill="var(--secondary)" rx="2"/>
<text x="514.5" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">15</text>
<rect x="536.7" y="192.0" width="23.9" height="4.0" fill="var(--secondary)" rx="2"/>
<text x="548.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">16</text>
<rect x="570.8" y="192.0" width="23.9" height="4.0" fill="var(--secondary)" rx="2"/>
<text x="582.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">17</text>
<rect x="604.9" y="188.1" width="23.9" height="7.9" fill="var(--secondary)" rx="2"/>
<text x="616.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">18</text>
<rect x="639.0" y="192.0" width="23.9" height="4.0" fill="var(--secondary)" rx="2"/>
<text x="650.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">20</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

Long parlays are rare but they are where the published overpayment concentrates.

## Requests by category

<svg viewBox="0 0 680 230" role="img" aria-label="requests by category" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">98</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">74</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">49</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">24</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0</text>
<rect x="67.2" y="14.0" width="61.4" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="97.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mlb</text>
<rect x="154.9" y="97.6" width="61.4" height="98.4" fill="var(--secondary)" rx="2"/>
<text x="185.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">mixed</text>
<rect x="242.6" y="171.9" width="61.4" height="24.1" fill="var(--secondary)" rx="2"/>
<text x="273.3" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">soccer</text>
<rect x="330.3" y="173.7" width="61.4" height="22.3" fill="var(--secondary)" rx="2"/>
<text x="361.0" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">tennis</text>
<rect x="418.0" y="175.6" width="61.4" height="20.4" fill="var(--secondary)" rx="2"/>
<text x="448.7" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">ncaaf</text>
<rect x="505.7" y="177.4" width="61.4" height="18.6" fill="var(--secondary)" rx="2"/>
<text x="536.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">other</text>
<rect x="593.4" y="190.4" width="61.4" height="5.6" fill="var(--secondary)" rx="2"/>
<text x="624.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">nfl</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

## Independence fair value by leg count

What the basket is worth if the legs were independent, priced off each leg's
live mid at request time. The decay with leg count is mechanical; the interest
is in how far executed prices sit from it.

<svg viewBox="0 0 680 230" role="img" aria-label="median fair value by leg count" style="width:100%;height:auto;max-width:680px">
<line x1="54" y1="14.0" x2="668" y2="14.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="17.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.34</text>
<line x1="54" y1="59.5" x2="668" y2="59.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="63.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.26</text>
<line x1="54" y1="105.0" x2="668" y2="105.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="108.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.17</text>
<line x1="54" y1="150.5" x2="668" y2="150.5" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="154.0" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.09</text>
<line x1="54" y1="196.0" x2="668" y2="196.0" stroke="var(--lightgray)" stroke-width="1"/>
<text x="47" y="199.5" text-anchor="end" font-size="9" font-family="monospace" fill="var(--gray)">0.00</text>
<rect x="61.7" y="14.0" width="35.8" height="182.0" fill="var(--secondary)" rx="2"/>
<text x="79.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">2</text>
<rect x="112.8" y="90.3" width="35.8" height="105.7" fill="var(--secondary)" rx="2"/>
<text x="130.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">3</text>
<rect x="164.0" y="106.6" width="35.8" height="89.4" fill="var(--secondary)" rx="2"/>
<text x="181.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">4</text>
<rect x="215.2" y="112.9" width="35.8" height="83.1" fill="var(--secondary)" rx="2"/>
<text x="233.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">5</text>
<rect x="266.3" y="161.5" width="35.8" height="34.5" fill="var(--secondary)" rx="2"/>
<text x="284.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">6</text>
<rect x="317.5" y="191.4" width="35.8" height="4.6" fill="var(--secondary)" rx="2"/>
<text x="335.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">7</text>
<rect x="368.7" y="177.8" width="35.8" height="18.2" fill="var(--secondary)" rx="2"/>
<text x="386.6" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">8</text>
<rect x="419.8" y="179.9" width="35.8" height="16.1" fill="var(--secondary)" rx="2"/>
<text x="437.8" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">9</text>
<rect x="471.0" y="193.7" width="35.8" height="2.3" fill="var(--secondary)" rx="2"/>
<text x="488.9" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">10</text>
<rect x="522.2" y="193.9" width="35.8" height="2.1" fill="var(--secondary)" rx="2"/>
<text x="540.1" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">11</text>
<rect x="573.3" y="192.5" width="35.8" height="3.5" fill="var(--secondary)" rx="2"/>
<text x="591.2" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">12</text>
<rect x="624.5" y="194.6" width="35.8" height="1.4" fill="var(--secondary)" rx="2"/>
<text x="642.4" y="209" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--gray)">14</text>
<line x1="54" y1="196" x2="668" y2="196" stroke="var(--gray)" stroke-width="1"/>
</svg>

## Edge to the responder, per executed request

Executed price minus independence fair value. Above the dashed line the
requester overpaid and the responder captured it.

<p><em>No matched fills yet.</em></p>

*No executed requests with a matched fair value yet. This chart fills in as
the recorder observes requests through their full open-to-close lifecycle.*

## Size

| | n | median | max |
| --- | ---: | ---: | ---: |
| Dollar target | 118 | $10.00 | $1,129.89 |
| Contract count | 82 | 229 | 15,271 |

## Correlation structure

Requests with two or more legs on the same event: **11** of 200.

This matters because the independence baseline above is wrong for those, and
wrong in a knowable direction. Correlated legs make the true joint probability
higher than the product, so an independence model understates fair value and
would read a fair price as an overpayment.

## Caveats

- Fair value is an independence baseline. No correlation adjustment yet, so
  same-event baskets are systematically mispriced by this model.
- Execution price is the combo market's last print. On a market with almost no
  volume that print may not correspond to this request.
- Requests are discovered by polling, so short-lived ones are under-sampled.
- Nothing here was quoted, requested or traded. Read-only throughout.

Raw data is exported to CSV and Parquet alongside the recorder for deeper analysis.
