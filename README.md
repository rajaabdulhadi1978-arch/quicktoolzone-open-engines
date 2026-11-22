# QuickToolZone — Privacy-First Client-Side US Tax & Financial Engines

[![Live Tools](https://img.shields.io/badge/Live%20Website-quicktoolzone.com-0b7a5c?style=flat-square)](https://quicktoolzone.com/)
[![Privacy](https://img.shields.io/badge/Processing-100%25%20Browser--Local-0f766e?style=flat-square)](https://quicktoolzone.com/privacy-policy)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

**QuickToolZone** ([quicktoolzone.com](https://quicktoolzone.com/)) is an independent suite of zero-dependency, browser-local US financial, tax, and retirement tools. Every calculation, SVG chart, `.ics` reminder, and binary `%PDF-1.4` report runs strictly inside your browser memory—**zero server uploads, zero logins, zero paywalls**.

---

## Live Interactive Calculators & Embeddable Widgets

| Tool | Official 2026 Rules Modeled | Live Demo |
|---|---|---|
| **Blood Test & Lipid Panel Lab Range Decoder (US / SI)** | 13 visual clinical gauges (ACC/AHA Lipids, Non-HDL, TG/HDL, ADA HbA1c/eAG, TSH, Vitamin D, race-free CKD-EPI 2021 eGFR) — 100% zero-upload privacy | [Open Tool](https://quicktoolzone.com/blood-test-lab-range-analyzer) |
| **2026 US HSA vs. PPO Out-of-Pocket Health Cost** | IRS Rev. Proc. 2025-19/32 (`$4,400/$8,750` HSA, `$3,400` FSA), Section 125 `7.65%` FICA, CA/NJ state tax non-conformity & spend crossover curve | [Open Tool](https://quicktoolzone.com/hsa-vs-ppo-calculator) |
| **2026 Solo 401(k) vs. SEP-IRA Calculator** | IRS Notice 2025-67 (`$72k/$80k/$83,250`), 20% Sole Prop vs. 25% S-Corp W-2, 2026 Mandatory Roth Catch-Up (`§414(v)(7)`), Mega Backdoor & QBI | [Open Tool](https://quicktoolzone.com/solo-401k-vs-sep-ira-calculator) |
| **2026 Roth Conversion & Medicare IRMAA Cliff** | Official CMS Part B & D `$1` cliffs (`$109k/$218k`), 2-year lookback, OBBBA `$6k/$12k` senior deduction phase-out, Form 8606 Pro-Rata | [Open Tool](https://quicktoolzone.com/roth-conversion-irmaa-calculator) |
| **2026 Quarterly Estimated Tax (Form 1040-ES)** | 90%/100%/110% Safe Harbor, Form 2210 Schedule AI annualized income, IRC `§6621` penalties, California 30/40/0/30 split & `.ics` downloads | [Open Tool](https://quicktoolzone.com/quarterly-estimated-tax-calculator) |
| **1099 vs. W-2 True Hourly Rate & Benefits** | 92.35% Schedule SE tax, 20% Section 199A QBI, PTO, health insurance tax treatment & 5-tier counteroffer matrix | [Open Tool](https://quicktoolzone.com/1099-vs-w2-calculator) |
| **US S-Corp vs. LLC Tax Savings Calculator** | Form 1120-S vs. Schedule C, `$184,500` Social Security cap, dual-W-2 overpayment alerts, QBI & 10 state entity tax presets | [Open Tool](https://quicktoolzone.com/s-corp-vs-llc-tax-calculator) |
| **CD Early Withdrawal Penalty & Break-Even APY** | 18 verified US banks, APY vs. nominal rate separation, principal-dip alerts & IRS Form 1099-INT Box 2 tax deduction | [Open Tool](https://quicktoolzone.com/cd-early-withdrawal-penalty-calculator) |

---

## Open-Source Pure-JS Helper Included (`src/us-2026-irs-constants.js`)

This repository includes a verified, zero-dependency JavaScript reference module (`src/us-2026-irs-constants.js`) containing official 2026 IRS retirement, payroll, and HSA constants compiled from IRS Notice 2025-67, Rev. Proc. 2025-19, Rev. Proc. 2025-32, and SSA 2026 announcements.

```js
const IRS2026 = require('./src/us-2026-irs-constants.js');
console.log(IRS2026.SOLO_401K.dcLimit);          // 72000
console.log(IRS2026.SOLO_401K.superCatchUp6063); // 11250
console.log(IRS2026.HSA.familyLimit);            // 8750
```

## Architecture Highlights
- **Zero External Runtime Dependencies:** Pure vanilla ES5/ES6 UMD engines verified with automated Node unit tests and 3-device Playwright E2E suites.
- **Pure Client-Side `%PDF-1.4` Generator:** Generates downloadable executive PDF reports straight in browser memory without shipping user financial data to any backend.
- **Free Blog Embeds (`?embed=1`):** Every tool supports clean iframe embedding with responsive size presets.

## License
MIT License — Educational reference utilities; not tax, legal, or financial advice.
