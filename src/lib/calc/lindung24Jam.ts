import type { Lindung24JamRates } from "@/lib/rates/types";
import type { ContributionPair, Nationality } from "./types";
import { round2 } from "@/lib/format";

/**
 * LINDUNG 24 Jam (Skim Kemalangan Bukan Bencana Kerja) — PERKESO's Non-
 * Employment Injury Scheme, effective 1 June 2026. Employee-only
 * contribution; the employer always pays RM0. Voluntary opt-in for
 * Malaysian citizens and PRs, mandatory for foreign workers. Unlike SOCSO,
 * there's no age-60 cutoff — coverage continues as long as the employee
 * is still working and enrolled.
 */
export function calculateLindung24Jam(
  rates: Lindung24JamRates,
  monthlyWage: number,
  nationality: Nationality,
  optedIn: boolean
): ContributionPair {
  if (monthlyWage <= 0) return { employee: 0, employer: 0 };
  const participates = nationality === "nonMalaysian" || optedIn;
  if (!participates) return { employee: 0, employer: 0 };

  const insuredWage = Math.min(monthlyWage, rates.wageCeiling);
  return {
    employee: round2((insuredWage * rates.employeePct) / 100),
    employer: 0,
  };
}
