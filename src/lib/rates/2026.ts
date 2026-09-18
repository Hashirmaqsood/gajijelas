import type { StatutoryRates } from "./types";

/**
 * Statutory rates in force for salaries paid from October 2025 onward
 * (contribution month November 2025), which is what a "2026" payslip uses.
 *
 * Key differences from the 2025 set:
 *  - EPF is now mandatory for non-Malaysian employees at 2% + 2% (from Oct 2025).
 *  - SOCSO/EIS wage ceiling of RM6,000 (from Oct 2024) is in force for the full year.
 *
 * Income tax (PCB) brackets and relief amounts follow the Year of Assessment
 * 2024/2025 schedule, which LHDN has carried forward with no bracket changes
 * announced for YA2025 filings at the time these rates were last checked.
 * Always confirm against the official sources below before relying on this
 * for real payroll or tax filing.
 */
const rates2026: StatutoryRates = {
  year: 2026,
  lastUpdated: "2026-09-18",
  effectiveFrom: "2025-10-01",
  epf: {
    malaysianBelow60: {
      lte5000: { employeePct: 11, employerPct: 13 },
      gt5000: { employeePct: 11, employerPct: 12 },
    },
    malaysianAbove60: { employeePct: 0, employerPct: 4 },
    nonMalaysian: { employeePct: 2, employerPct: 2 },
    reliefCapCombinedWithLifeInsurance: 7000,
    reliefCapEpfOnly: 4000,
  },
  socso: {
    wageCeiling: 6000,
    category1: { employeePct: 0.5, employerPct: 1.75 },
    category2: { employeePct: 0, employerPct: 1.25 },
    foreignWorker: { employeePct: 0, employerPct: 1.25 },
    reliefCapCombinedWithEis: 350,
  },
  eis: {
    wageCeiling: 6000,
    standard: { employeePct: 0.2, employerPct: 0.2 },
    notApplicable: { employeePct: 0, employerPct: 0 },
  },
  pcb: {
    brackets: [
      { from: 0, to: 5000, ratePct: 0 },
      { from: 5001, to: 20000, ratePct: 1 },
      { from: 20001, to: 35000, ratePct: 3 },
      { from: 35001, to: 50000, ratePct: 6 },
      { from: 50001, to: 70000, ratePct: 11 },
      { from: 70001, to: 100000, ratePct: 19 },
      { from: 100001, to: 400000, ratePct: 25 },
      { from: 400001, to: 600000, ratePct: 26 },
      { from: 600001, to: 2000000, ratePct: 28 },
      { from: 2000001, to: null, ratePct: 30 },
    ],
    reliefs: {
      individual: 9000,
      spouse: 4000,
      childStandard: 2000,
      lifeInsuranceCap: 3000,
      lifestyleCap: 2500,
      medicalCap: 10000,
      parentMedicalCap: 8000,
      sspnCap: 8000,
      disabledIndividual: 6000,
      disabledSpouse: 6000,
      rebateThreshold: 35000,
      rebateAmount: 400,
    },
    nonResidentFlatPct: 30,
  },
  minimumWage: { monthly: 1700, hourly: 8.19 },
  sources: [
    { label: "KWSP – EPF Act 1991 Third Schedule", url: "https://www.kwsp.gov.my/en/epf-act-1991-third-schedule" },
    { label: "KWSP – Mandatory contribution for non-Malaysian employees (Oct 2025)", url: "https://www.kwsp.gov.my/en/w/news/epf-begins-mandatory-contributions-for-non-malaysian-citizen-employees-effective-october-2025" },
    { label: "PERKESO – Rate of Contribution", url: "https://www.perkeso.gov.my/en/rate-of-contribution.html" },
    { label: "LHDN – Individual income tax rate", url: "https://www.hasil.gov.my/en/individual/individual-life-cycle/how-to-declare-income/tax-rate/" },
    { label: "LHDN – PCB / MTD computerised calculation specification", url: "https://www.hasil.gov.my" },
  ],
};

export default rates2026;
