import { round2 } from "@/lib/format";

/**
 * Ordinary Rate of Pay (ORP) conversions, following the Employment Act 1955
 * convention of a 26-day working month for deriving a daily rate from a
 * monthly salary.
 */
export interface HourlyRateInput {
  monthlySalary: number;
  workingDaysPerMonth: number;
  hoursPerDay: number;
}

export interface HourlyRateResult {
  dailyRate: number;
  hourlyRate: number;
  weeklyEquivalent: number;
  annualEquivalent: number;
}

export function calculateHourlyRate(input: HourlyRateInput): HourlyRateResult {
  const { monthlySalary, workingDaysPerMonth, hoursPerDay } = input;
  const dailyRate = workingDaysPerMonth > 0 ? round2(monthlySalary / workingDaysPerMonth) : 0;
  const hourlyRate = hoursPerDay > 0 ? round2(dailyRate / hoursPerDay) : 0;
  return {
    dailyRate,
    hourlyRate,
    weeklyEquivalent: round2(hourlyRate * hoursPerDay * (workingDaysPerMonth / 4.33)),
    annualEquivalent: round2(monthlySalary * 12),
  };
}
