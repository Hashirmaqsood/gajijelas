// Shared types describing one year's worth of Malaysian statutory payroll rates.
// A new year is added by creating a new file in this folder that satisfies
// `StatutoryRates` and registering it in `index.ts`. Nothing else in the app
// should hardcode a rate — always read from these tables.

export type WageBand = "lte5000" | "gt5000";

export interface EpfRateSet {
  employeePct: number;
  employerPct: number;
}

/** EPF (KWSP) contribution percentages, keyed by contributor category. */
export interface EpfRates {
  /** Malaysian citizens & permanent residents, below age 60. */
  malaysianBelow60: Record<WageBand, EpfRateSet>;
  /** Malaysian citizens & permanent residents, age 60 and above. */
  malaysianAbove60: EpfRateSet;
  /** Non-Malaysian employees (mandatory since Oct 2025), any age. */
  nonMalaysian: EpfRateSet;
  /** Statutory relief cap combined with life insurance, per year of assessment. */
  reliefCapCombinedWithLifeInsurance: number;
  /** Portion of the combined cap reserved for EPF itself in typical PCB tools. */
  reliefCapEpfOnly: number;
}

export interface SocsoEisRateSet {
  employeePct: number;
  employerPct: number;
}

/** SOCSO (PERKESO) Employment Injury + Invalidity Pension Scheme (Act 4). */
export interface SocsoRates {
  wageCeiling: number;
  /** Category 1: Malaysian/PR employees below 60. */
  category1: SocsoEisRateSet;
  /** Category 2: Malaysian/PR employees 60 and above (Employment Injury only). */
  category2: SocsoEisRateSet;
  /** Non-Malaysian employees: employer-only Employment Injury Scheme. */
  foreignWorker: SocsoEisRateSet;
  reliefCapCombinedWithEis: number;
}

/** Employment Insurance System / Sistem Insurans Pekerjaan (Act 800). */
export interface EisRates {
  wageCeiling: number;
  standard: SocsoEisRateSet;
  /** EIS does not cover employees 60+ or non-Malaysians. */
  notApplicable: SocsoEisRateSet;
}

export interface TaxBracket {
  /** Inclusive lower bound of chargeable income for this band. */
  from: number;
  /** Inclusive upper bound, or null for the top, unbounded band. */
  to: number | null;
  ratePct: number;
}

export interface TaxReliefs {
  individual: number;
  spouse: number;
  childStandard: number;
  lifeInsuranceCap: number;
  lifestyleCap: number;
  medicalCap: number;
  parentMedicalCap: number;
  sspnCap: number;
  disabledIndividual: number;
  disabledSpouse: number;
  /** Chargeable income at/below this qualifies for the tax rebate. */
  rebateThreshold: number;
  rebateAmount: number;
}

export interface PcbRates {
  brackets: TaxBracket[];
  reliefs: TaxReliefs;
  /** Flat rate applied to non-residents (no reliefs, no rebate). */
  nonResidentFlatPct: number;
}

export interface MinimumWage {
  monthly: number;
  hourly: number;
}

export interface StatutoryRates {
  year: number;
  /** ISO date this rate set was last checked/updated by us. */
  lastUpdated: string;
  effectiveFrom: string;
  epf: EpfRates;
  socso: SocsoRates;
  eis: EisRates;
  pcb: PcbRates;
  minimumWage: MinimumWage;
  sources: { label: string; url: string }[];
}
