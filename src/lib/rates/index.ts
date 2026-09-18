import type { StatutoryRates } from "./types";
import rates2026 from "./2026";
import rates2025 from "./2025";

export type RateYear = 2025 | 2026;

export const RATES_BY_YEAR: Record<RateYear, StatutoryRates> = {
  2026: rates2026,
  2025: rates2025,
};

export const CURRENT_RATE_YEAR: RateYear = 2026;
export const PREVIOUS_RATE_YEAR: RateYear = 2025;

export function getRates(year: RateYear): StatutoryRates {
  return RATES_BY_YEAR[year];
}

export type { StatutoryRates } from "./types";
