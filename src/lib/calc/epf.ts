import type { EpfRates } from "@/lib/rates/types";
import type { AgeGroup, ContributionPair, Nationality } from "./types";
import { round2 } from "@/lib/format";

/**
 * EPF (KWSP) contribution for one month's wage.
 *
 * This uses the exact percentage method. KWSP's official Third Schedule uses
 * a rounded, banded table for wages up to RM20,000/month (contributions land
 * on fixed amounts per RM20 wage band rather than the raw percentage), so a
 * real payslip may differ from this by a few Ringgit. Above RM20,000 the
 * exact percentage applies, matching this calculation exactly.
 */
export function calculateEpf(
  rates: EpfRates,
  wage: number,
  ageGroup: AgeGroup,
  nationality: Nationality
): ContributionPair {
  if (wage <= 0) return { employee: 0, employer: 0 };

  if (nationality === "nonMalaysian") {
    const { employeePct, employerPct } = rates.nonMalaysian;
    return {
      employee: round2((wage * employeePct) / 100),
      employer: round2((wage * employerPct) / 100),
    };
  }

  if (ageGroup === "60plus") {
    const { employeePct, employerPct } = rates.malaysianAbove60;
    return {
      employee: round2((wage * employeePct) / 100),
      employer: round2((wage * employerPct) / 100),
    };
  }

  const band = wage <= 5000 ? "lte5000" : "gt5000";
  const { employeePct, employerPct } = rates.malaysianBelow60[band];
  return {
    employee: round2((wage * employeePct) / 100),
    employer: round2((wage * employerPct) / 100),
  };
}
