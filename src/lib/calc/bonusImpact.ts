import type { StatutoryRates } from "@/lib/rates/types";
import { calculateSalary } from "./salary";
import type { AgeGroup, MaritalStatus, Nationality } from "./types";
import { round2 } from "@/lib/format";

export interface BonusImpactInput {
  monthlySalary: number;
  bonusAmount: number;
  maritalStatus: MaritalStatus;
  numChildren: number;
  ageGroup: AgeGroup;
  nationality: Nationality;
}

export interface BonusImpactResult {
  extraEpfEmployee: number;
  extraPcb: number;
  netBonus: number;
  totalDeductedFromBonus: number;
}

/**
 * Isolates the effect of a one-off bonus by running the full salary engine
 * with and without it (via the engine's own bonus-month vs regular-month
 * breakdown) and taking the difference — reuses the already-verified PCB
 * annualisation and EPF logic rather than reimplementing it.
 */
export function calculateBonusImpact(input: BonusImpactInput, rates: StatutoryRates): BonusImpactResult {
  const result = calculateSalary(
    {
      grossMonthly: input.monthlySalary,
      bonus: { amount: input.bonusAmount, recurring: false },
      maritalStatus: input.maritalStatus,
      spouseWorking: false,
      numChildren: input.numChildren,
      ageGroup: input.ageGroup,
      nationality: input.nationality,
      employmentType: "permanent",
      rateYear: rates.year as 2025 | 2026,
      additionalReliefs: {
        lifeInsuranceAnnual: 0,
        lifestyleAnnual: 0,
        medicalAnnual: 0,
        parentMedicalAnnual: 0,
        sspnAnnual: 0,
        disabledSelf: false,
        disabledSpouse: false,
      },
    },
    rates
  );

  if (!result.bonusMonth) {
    return { extraEpfEmployee: 0, extraPcb: 0, netBonus: input.bonusAmount, totalDeductedFromBonus: 0 };
  }

  const extraEpfEmployee = round2(result.bonusMonth.epf.employee - result.regularMonth.epf.employee);
  const extraPcb = round2(result.bonusMonth.pcb - result.regularMonth.pcb);
  const totalDeductedFromBonus = round2(extraEpfEmployee + extraPcb);
  const netBonus = round2(input.bonusAmount - totalDeductedFromBonus);

  return { extraEpfEmployee, extraPcb, netBonus, totalDeductedFromBonus };
}
