import type { PcbRates } from "@/lib/rates/types";
import { taxOnChargeableIncome } from "./pcb";
import { round2 } from "@/lib/format";

export interface TaxBandRow {
  from: number;
  to: number | null;
  ratePct: number;
  incomeInBand: number;
  tax: number;
}

/** Income and tax falling in each bracket for a given chargeable income (same banding as taxOnChargeableIncome). */
export function taxBandBreakdown(brackets: PcbRates["brackets"], chargeableIncome: number): TaxBandRow[] {
  const rows: TaxBandRow[] = [];
  let prevUpper = 0;
  for (const bracket of brackets) {
    const upper = bracket.to ?? Infinity;
    if (chargeableIncome <= prevUpper) break;
    const incomeInBand = Math.min(chargeableIncome, upper) - prevUpper;
    rows.push({
      from: bracket.from,
      to: bracket.to,
      ratePct: bracket.ratePct,
      incomeInBand: round2(incomeInBand),
      tax: round2((incomeInBand * bracket.ratePct) / 100),
    });
    prevUpper = upper;
  }
  return rows;
}

export interface RateTableRow {
  from: number;
  to: number | null;
  ratePct: number;
  cumulativeTaxAtTop: number | null;
}

/** Published-style rate table: each bracket with the total tax payable at the top of that bracket. */
export function rateTable(brackets: PcbRates["brackets"]): RateTableRow[] {
  return brackets.map((b) => ({
    from: b.from,
    to: b.to,
    ratePct: b.ratePct,
    cumulativeTaxAtTop: b.to === null ? null : taxOnChargeableIncome(brackets, b.to),
  }));
}
