import { round2 } from "@/lib/format";

export interface EpfAccountSplitResult {
  totalContribution: number;
  akaunPersaraan: number;
  akaunSejahtera: number;
  akaunFleksibel: number;
}

/**
 * EPF Account Restructuring 2024: every mandatory contribution (employee +
 * employer combined) splits 75% / 15% / 10% into Akaun Persaraan, Akaun
 * Sejahtera and Akaun Fleksibel respectively, effective 11 May 2024.
 */
export function calculateEpfAccountSplit(totalMonthlyContribution: number): EpfAccountSplitResult {
  return {
    totalContribution: round2(totalMonthlyContribution),
    akaunPersaraan: round2(totalMonthlyContribution * 0.75),
    akaunSejahtera: round2(totalMonthlyContribution * 0.15),
    akaunFleksibel: round2(totalMonthlyContribution * 0.1),
  };
}
