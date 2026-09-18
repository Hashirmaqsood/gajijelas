import type { PcbRates } from "@/lib/rates/types";
import type {
  AdditionalReliefs,
  AgeGroup,
  MaritalStatus,
  Nationality,
  PcbDetail,
  ReliefLine,
} from "./types";
import { round2 } from "@/lib/format";

/**
 * Progressive tax on chargeable income using the resident bracket table.
 * Bands are applied as continuous marginal thresholds (each band's rate
 * applies only to the slice of income between the previous band's upper
 * bound and its own), which is the standard progressive-tax computation.
 */
export function taxOnChargeableIncome(brackets: PcbRates["brackets"], chargeableIncome: number): number {
  if (chargeableIncome <= 0) return 0;
  let tax = 0;
  let prevUpper = 0;
  for (const bracket of brackets) {
    const upper = bracket.to ?? Infinity;
    if (chargeableIncome <= prevUpper) break;
    const taxableInBand = Math.min(chargeableIncome, upper) - prevUpper;
    tax += (taxableInBand * bracket.ratePct) / 100;
    prevUpper = upper;
  }
  return round2(tax);
}

export interface PcbCalcInput {
  rates: PcbRates;
  annualGrossExcludingBonus: number;
  oneOffBonusAmount: number;
  annualEpfEmployee: number;
  annualSocsoEisEmployee: number;
  ageGroup: AgeGroup;
  nationality: Nationality;
  maritalStatus: MaritalStatus;
  spouseWorking: boolean;
  numChildren: number;
  additionalReliefs: AdditionalReliefs;
  socsoEisReliefCap: number;
  epfReliefCap: number;
}

export interface PcbCalcResult {
  detail: PcbDetail;
  /** PCB attributable to the recurring monthly base salary (i.e. annualTaxOnBaseOnly / 12). */
  monthlyPcbOnBase: number;
  /** Extra PCB withheld only in the month the one-off bonus is paid. */
  bonusPcbOneOff: number;
}

function buildReliefs(input: PcbCalcInput): { total: number; lines: ReliefLine[] } {
  const { rates, maritalStatus, spouseWorking, numChildren, additionalReliefs, annualEpfEmployee, annualSocsoEisEmployee } = input;
  const lines: ReliefLine[] = [];

  lines.push({ key: "relief.individual", amount: rates.reliefs.individual });

  if (maritalStatus === "married" && !spouseWorking) {
    lines.push({ key: "relief.spouse", amount: rates.reliefs.spouse });
  }

  if (numChildren > 0) {
    const amount = numChildren * rates.reliefs.childStandard;
    lines.push({ key: "relief.children", vars: { count: numChildren, each: rates.reliefs.childStandard.toLocaleString() }, amount });
  }

  const epfRelief = Math.min(annualEpfEmployee, input.epfReliefCap);
  if (epfRelief > 0) lines.push({ key: "relief.epf", amount: epfRelief });

  const lifeInsuranceRelief = Math.min(additionalReliefs.lifeInsuranceAnnual, rates.reliefs.lifeInsuranceCap);
  if (lifeInsuranceRelief > 0) lines.push({ key: "relief.lifeInsurance", amount: lifeInsuranceRelief });

  const socsoEisRelief = Math.min(annualSocsoEisEmployee, input.socsoEisReliefCap);
  if (socsoEisRelief > 0) lines.push({ key: "relief.socsoEis", amount: socsoEisRelief });

  const lifestyleRelief = Math.min(additionalReliefs.lifestyleAnnual, rates.reliefs.lifestyleCap);
  if (lifestyleRelief > 0) lines.push({ key: "relief.lifestyle", amount: lifestyleRelief });

  const medicalRelief = Math.min(additionalReliefs.medicalAnnual, rates.reliefs.medicalCap);
  if (medicalRelief > 0) lines.push({ key: "relief.medical", amount: medicalRelief });

  const parentMedicalRelief = Math.min(additionalReliefs.parentMedicalAnnual, rates.reliefs.parentMedicalCap);
  if (parentMedicalRelief > 0) lines.push({ key: "relief.parentMedical", amount: parentMedicalRelief });

  const sspnRelief = Math.min(additionalReliefs.sspnAnnual, rates.reliefs.sspnCap);
  if (sspnRelief > 0) lines.push({ key: "relief.sspn", amount: sspnRelief });

  if (additionalReliefs.disabledSelf) {
    lines.push({ key: "relief.disabledSelf", amount: rates.reliefs.disabledIndividual });
  }
  if (additionalReliefs.disabledSpouse && maritalStatus === "married") {
    lines.push({ key: "relief.disabledSpouse", amount: rates.reliefs.disabledSpouse });
  }

  const total = lines.reduce((sum, l) => sum + l.amount, 0);
  return { total, lines };
}

export function calculatePcb(input: PcbCalcInput): PcbCalcResult {
  const { rates, annualGrossExcludingBonus, oneOffBonusAmount, nationality } = input;

  if (nationality === "nonMalaysian") {
    const annualGrossIncome = annualGrossExcludingBonus + oneOffBonusAmount;
    const annualTax = round2((annualGrossIncome * rates.nonResidentFlatPct) / 100);
    const monthlyPcbOnBase = round2((annualGrossExcludingBonus / 12) * (rates.nonResidentFlatPct / 100));
    const bonusPcbOneOff = round2((oneOffBonusAmount * rates.nonResidentFlatPct) / 100);
    return {
      monthlyPcbOnBase,
      bonusPcbOneOff,
      detail: {
        annualGrossIncome,
        totalReliefs: 0,
        reliefsBreakdown: [],
        chargeableIncome: annualGrossIncome,
        taxBeforeRebate: annualTax,
        rebate: 0,
        annualTax,
        isNonResident: true,
      },
    };
  }

  const { total: totalReliefs, lines } = buildReliefs(input);
  const annualGrossIncome = annualGrossExcludingBonus + oneOffBonusAmount;
  const chargeableIncome = Math.max(0, round2(annualGrossIncome - totalReliefs));
  const taxBeforeRebate = taxOnChargeableIncome(rates.brackets, chargeableIncome);

  let rebate = 0;
  if (chargeableIncome <= rates.reliefs.rebateThreshold) {
    rebate = rates.reliefs.rebateAmount;
    if (input.maritalStatus === "married" && !input.spouseWorking) {
      rebate += rates.reliefs.rebateAmount;
    }
  }
  const annualTax = Math.max(0, round2(taxBeforeRebate - rebate));

  // Split the annual tax proportionally between the "base salary only" tax
  // and the incremental tax caused by the bonus, so the bonus's extra PCB is
  // withheld only in the month it's paid (this mirrors LHDN's additional
  // remuneration / bonus MTD method).
  const chargeableIncomeWithoutBonus = Math.max(0, round2(chargeableIncome - oneOffBonusAmount));
  const taxWithoutBonusBeforeRebate = taxOnChargeableIncome(rates.brackets, chargeableIncomeWithoutBonus);
  let rebateWithoutBonus = 0;
  if (chargeableIncomeWithoutBonus <= rates.reliefs.rebateThreshold) {
    rebateWithoutBonus = rates.reliefs.rebateAmount;
    if (input.maritalStatus === "married" && !input.spouseWorking) {
      rebateWithoutBonus += rates.reliefs.rebateAmount;
    }
  }
  const annualTaxWithoutBonus = Math.max(0, round2(taxWithoutBonusBeforeRebate - rebateWithoutBonus));
  const bonusPcbOneOff = Math.max(0, round2(annualTax - annualTaxWithoutBonus));
  const monthlyPcbOnBase = round2(annualTaxWithoutBonus / 12);

  return {
    monthlyPcbOnBase,
    bonusPcbOneOff,
    detail: {
      annualGrossIncome,
      totalReliefs,
      reliefsBreakdown: lines,
      chargeableIncome,
      taxBeforeRebate,
      rebate,
      annualTax,
      isNonResident: false,
    },
  };
}
