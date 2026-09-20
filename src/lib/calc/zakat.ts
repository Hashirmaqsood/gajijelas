import { round2 } from "@/lib/format";

export interface ZakatInput {
  annualIncome: number;
  nisabThreshold: number;
}

export interface ZakatResult {
  isLiable: boolean;
  zakatDue: number;
}

/**
 * Zakat pendapatan (income zakat): 2.5% of total annual income, once that
 * income meets or exceeds the nisab threshold. Nisab is based on the value
 * of 85g of gold and varies by state authority and by the time of year, so
 * it's taken as a user-adjustable input rather than a single hardcoded
 * "official" figure.
 */
export function calculateZakat(input: ZakatInput): ZakatResult {
  const { annualIncome, nisabThreshold } = input;
  const isLiable = annualIncome >= nisabThreshold;
  return {
    isLiable,
    zakatDue: isLiable ? round2(annualIncome * 0.025) : 0,
  };
}
