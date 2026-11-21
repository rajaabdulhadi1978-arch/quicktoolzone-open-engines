/* Official 2026 US IRS & SSA Reference Constants (MIT License)
 * Maintained by QuickToolZone (https://quicktoolzone.com/)
 * Sources: IRS Notice 2025-67, IRS Rev. Proc. 2025-19, IRS Rev. Proc. 2025-32, SSA 2026, CMS 2026.
 */
'use strict';

module.exports = Object.freeze({
  YEAR: 2026,
  SSA_WAGE_BASE: 184500,
  SOLO_401K: Object.freeze({
    electiveDeferralLimit: 24500,
    dcLimit: 72000,
    catchUp50Plus: 8000,
    superCatchUp6063: 11250,
    compensationCap401a17: 360000,
    mandatoryRothCatchUpFicaThreshold: 150000
  }),
  HSA: Object.freeze({
    selfOnlyLimit: 4400,
    familyLimit: 8750,
    catchUp55Plus: 1000,
    minHdhpDeductibleSelf: 1700,
    minHdhpDeductibleFamily: 3400,
    maxHdhpOopSelf: 8500,
    maxHdhpOopFamily: 17000
  }),
  HEALTH_FSA: Object.freeze({
    annualLimit: 3400,
    maxCarryover: 680
  }),
  MEDICARE_IRMAA_FIRST_CLIFF: Object.freeze({
    single: 109000,
    mfj: 218000
  })
});
