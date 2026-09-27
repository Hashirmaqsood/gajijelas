import { round2 } from "@/lib/format";

export interface ProratedSalaryInput {
  monthlySalary: number;
  daysInMonth: number;
  daysWorked: number;
}

export interface ProratedSalaryResult {
  /** Employment Act 1955 s18A/s60I(2): salary / actual calendar days in the period x days worked. */
  statutoryAmount: number;
  /** Common employer shortcut divisors, shown for comparison only. */
  flat26Amount: number;
  flat30Amount: number;
}

export function calculateProratedSalary(input: ProratedSalaryInput): ProratedSalaryResult {
  const { monthlySalary, daysInMonth, daysWorked } = input;
  if (monthlySalary <= 0 || daysInMonth <= 0 || daysWorked < 0) {
    return { statutoryAmount: 0, flat26Amount: 0, flat30Amount: 0 };
  }
  const cappedDaysWorked = Math.min(daysWorked, daysInMonth);
  return {
    statutoryAmount: round2((monthlySalary / daysInMonth) * cappedDaysWorked),
    flat26Amount: round2((monthlySalary / 26) * cappedDaysWorked),
    flat30Amount: round2((monthlySalary / 30) * cappedDaysWorked),
  };
}

export function daysInGivenMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
