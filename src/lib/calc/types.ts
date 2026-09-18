import type { RateYear } from "@/lib/rates";

export type AgeGroup = "below60" | "60plus";
export type Nationality = "malaysian" | "nonMalaysian";
export type MaritalStatus = "single" | "married";
export type EmploymentType = "permanent" | "contract" | "intern" | "selfEmployed";

export interface AdditionalReliefs {
  lifeInsuranceAnnual: number;
  lifestyleAnnual: number;
  medicalAnnual: number;
  parentMedicalAnnual: number;
  sspnAnnual: number;
  disabledSelf: boolean;
  disabledSpouse: boolean;
}

export const EMPTY_ADDITIONAL_RELIEFS: AdditionalReliefs = {
  lifeInsuranceAnnual: 0,
  lifestyleAnnual: 0,
  medicalAnnual: 0,
  parentMedicalAnnual: 0,
  sspnAnnual: 0,
  disabledSelf: false,
  disabledSpouse: false,
};

export interface BonusInput {
  amount: number;
  recurring: boolean;
}

export interface SalaryInput {
  grossMonthly: number;
  bonus: BonusInput;
  maritalStatus: MaritalStatus;
  spouseWorking: boolean;
  numChildren: number;
  ageGroup: AgeGroup;
  nationality: Nationality;
  employmentType: EmploymentType;
  rateYear: RateYear;
  additionalReliefs: AdditionalReliefs;
}

export const DEFAULT_SALARY_INPUT: SalaryInput = {
  grossMonthly: 5000,
  bonus: { amount: 0, recurring: false },
  maritalStatus: "single",
  spouseWorking: false,
  numChildren: 0,
  ageGroup: "below60",
  nationality: "malaysian",
  employmentType: "permanent",
  rateYear: 2026,
  additionalReliefs: EMPTY_ADDITIONAL_RELIEFS,
};

export interface ContributionPair {
  employee: number;
  employer: number;
}

export interface MonthBreakdown {
  gross: number;
  epf: ContributionPair;
  socso: ContributionPair;
  eis: ContributionPair;
  pcb: number;
  totalEmployeeDeductions: number;
  netPay: number;
  totalEmployerCost: number;
}

export interface ReliefLine {
  key: string;
  vars?: Record<string, string | number>;
  amount: number;
}

export interface ExplanationStep {
  key: string;
  vars?: Record<string, string | number>;
}

export interface PcbDetail {
  annualGrossIncome: number;
  totalReliefs: number;
  reliefsBreakdown: ReliefLine[];
  chargeableIncome: number;
  taxBeforeRebate: number;
  rebate: number;
  annualTax: number;
  isNonResident: boolean;
}

export interface SalaryCalculationResult {
  rateYear: number;
  isSelfEmployed: boolean;
  isIntern: boolean;
  regularMonth: MonthBreakdown;
  bonusMonth: MonthBreakdown | null;
  annual: MonthBreakdown;
  pcbDetail: PcbDetail;
  explanationSteps: ExplanationStep[];
}
