import type { SocsoRates } from "@/lib/rates/types";
import type { AgeGroup, ContributionPair, Nationality } from "./types";
import { round2 } from "@/lib/format";

/**
 * SOCSO (PERKESO) contribution under Act 4 (Employment Injury + Invalidity
 * Pension Scheme). Bonuses, gratuities and retirement benefits are excluded
 * from "wages" under the Act, so only the recurring monthly wage is passed
 * in here — never include a one-off bonus.
 */
export function calculateSocso(
  rates: SocsoRates,
  monthlyWage: number,
  ageGroup: AgeGroup,
  nationality: Nationality
): ContributionPair {
  if (monthlyWage <= 0) return { employee: 0, employer: 0 };
  const insuredWage = Math.min(monthlyWage, rates.wageCeiling);

  const rateSet =
    nationality === "nonMalaysian"
      ? rates.foreignWorker
      : ageGroup === "60plus"
        ? rates.category2
        : rates.category1;

  return {
    employee: round2((insuredWage * rateSet.employeePct) / 100),
    employer: round2((insuredWage * rateSet.employerPct) / 100),
  };
}
