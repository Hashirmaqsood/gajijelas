import type { EisRates } from "@/lib/rates/types";
import type { AgeGroup, ContributionPair, Nationality } from "./types";
import { round2 } from "@/lib/format";

/**
 * EIS / SIP contribution under Act 800. Only Malaysian citizens and
 * permanent residents aged 18–59 are covered; non-Malaysians and employees
 * aged 60+ are excluded entirely. Bonuses are excluded from EIS wages, same
 * as SOCSO.
 */
export function calculateEis(
  rates: EisRates,
  monthlyWage: number,
  ageGroup: AgeGroup,
  nationality: Nationality
): ContributionPair {
  if (monthlyWage <= 0) return { employee: 0, employer: 0 };
  if (ageGroup === "60plus" || nationality === "nonMalaysian") {
    return { employee: 0, employer: 0 };
  }
  const insuredWage = Math.min(monthlyWage, rates.wageCeiling);
  return {
    employee: round2((insuredWage * rates.standard.employeePct) / 100),
    employer: round2((insuredWage * rates.standard.employerPct) / 100),
  };
}
