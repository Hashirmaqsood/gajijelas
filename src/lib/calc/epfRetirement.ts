import type { EpfRates } from "@/lib/rates/types";
import { calculateEpf } from "./epf";
import { round2 } from "@/lib/format";

export interface EpfRetirementInput {
  currentAge: number;
  retirementAge: number;
  currentBalance: number;
  currentMonthlySalary: number;
  annualSalaryIncrementPct: number;
  annualDividendRatePct: number;
}

export interface EpfRetirementYearRow {
  age: number;
  contributions: number;
  dividends: number;
  balance: number;
}

export interface EpfRetirementResult {
  projectedBalance: number;
  totalContributions: number;
  totalDividends: number;
  yearlyBreakdown: EpfRetirementYearRow[];
}

/**
 * Simplified month-by-month EPF growth projection: each month adds that
 * month's employee+employer contribution (using the exact-percentage method,
 * switching to the 60+ band once projected age crosses 60), then applies
 * 1/12 of the annual dividend rate to the running balance. Real EPF dividends
 * are declared annually against average monthly balances and can vary
 * year to year, so treat this as a directional estimate, not a guarantee.
 */
export function calculateEpfRetirement(input: EpfRetirementInput, rates: EpfRates): EpfRetirementResult {
  const { currentAge, retirementAge, currentBalance, currentMonthlySalary, annualSalaryIncrementPct, annualDividendRatePct } = input;

  const totalMonths = Math.max(0, Math.round((retirementAge - currentAge) * 12));
  const monthlyDividendRate = annualDividendRatePct / 100 / 12;

  let balance = currentBalance;
  let salary = currentMonthlySalary;
  let totalContributions = 0;
  let totalDividends = 0;
  let yearContributions = 0;
  let yearDividends = 0;
  const yearlyBreakdown: EpfRetirementYearRow[] = [];

  for (let month = 0; month < totalMonths; month++) {
    const ageNow = currentAge + month / 12;
    const ageGroup = ageNow >= 60 ? "60plus" : "below60";
    const contribution = calculateEpf(rates, salary, ageGroup, "malaysian");
    const monthlyContribution = contribution.employee + contribution.employer;

    balance += monthlyContribution;
    totalContributions += monthlyContribution;
    yearContributions += monthlyContribution;

    const dividend = balance * monthlyDividendRate;
    balance += dividend;
    totalDividends += dividend;
    yearDividends += dividend;

    const monthInYear = (month + 1) % 12;
    if (monthInYear === 0) {
      const completedYears = (month + 1) / 12;
      yearlyBreakdown.push({
        age: currentAge + completedYears,
        contributions: round2(yearContributions),
        dividends: round2(yearDividends),
        balance: round2(balance),
      });
      yearContributions = 0;
      yearDividends = 0;
      salary *= 1 + annualSalaryIncrementPct / 100;
    }
  }

  if (totalMonths % 12 !== 0 && totalMonths > 0) {
    yearlyBreakdown.push({
      age: retirementAge,
      contributions: round2(yearContributions),
      dividends: round2(yearDividends),
      balance: round2(balance),
    });
  }

  return {
    projectedBalance: round2(balance),
    totalContributions: round2(totalContributions),
    totalDividends: round2(totalDividends),
    yearlyBreakdown,
  };
}
