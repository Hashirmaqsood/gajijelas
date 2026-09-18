import { round2 } from "@/lib/format";

/**
 * Annual leave entitlement under the Employment Act 1955, s.60E, for
 * employees who have completed 12 months of service. Employees with less
 * than 12 months in their first year get a pro-rated entitlement.
 */
export function annualLeaveDaysByService(yearsOfService: number): number {
  if (yearsOfService < 2) return 8;
  if (yearsOfService < 5) return 12;
  return 16;
}

/**
 * Pro-rated entitlement for a partial year, per the Act's formula:
 * (days entitled ÷ 12) × completed months of service, rounded to the
 * nearest half day.
 */
export function proRatedLeave(fullYearEntitlement: number, completedMonths: number): number {
  const raw = (fullYearEntitlement / 12) * completedMonths;
  return round2(Math.round(raw * 2) / 2);
}
