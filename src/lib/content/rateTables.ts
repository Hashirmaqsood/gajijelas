import { calculateSalary, DEFAULT_SALARY_INPUT } from "@/lib/calc";
import { calculateHourlyRate } from "@/lib/calc/hourlyRate";
import { calculateMortgage } from "@/lib/calc/mortgage";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";

/** Monthly PCB for a single Malaysian employee (no children, standard reliefs), from the real engine. */
export function pcbBySalaryRows(): string[][] {
  const rates = getRates(CURRENT_RATE_YEAR);
  return [2000, 3000, 3500, 4000, 5000, 6000, 8000, 10000].map((monthly) => {
    const { regularMonth } = calculateSalary({ ...DEFAULT_SALARY_INPUT, rateYear: CURRENT_RATE_YEAR, grossMonthly: monthly }, rates);
    return [formatRM(monthly, { decimals: 0 }), formatRM(regularMonth.pcb)];
  });
}

/** Daily and hourly rate using the Employment Act 26-day month and an 8-hour day. */
export function dailyHourlyRows(): string[][] {
  return [2000, 2600, 3000, 4000, 5000].map((monthlySalary) => {
    const r = calculateHourlyRate({ monthlySalary, workingDaysPerMonth: 26, hoursPerDay: 8 });
    return [formatRM(monthlySalary, { decimals: 0 }), formatRM(r.dailyRate), formatRM(r.hourlyRate)];
  });
}

/** Installment and the take-home pay that keeps it within 30% / 40% (10% down, 4% p.a., 30 years). */
export function houseSalaryRows(): string[][] {
  return [300000, 400000, 500000, 600000, 800000, 1000000].map((propertyPrice) => {
    const { loanAmount, monthlyInstallment } = calculateMortgage({
      propertyPrice,
      downPaymentPct: 10,
      annualInterestRatePct: 4,
      tenureYears: 30,
      monthlyTakeHomePay: 0,
    });
    return [
      formatRM(propertyPrice, { decimals: 0 }),
      formatRM(loanAmount, { decimals: 0 }),
      formatRM(monthlyInstallment, { decimals: 0 }),
      formatRM(Math.ceil(monthlyInstallment / 0.4 / 50) * 50, { decimals: 0 }),
      formatRM(Math.ceil(monthlyInstallment / 0.3 / 50) * 50, { decimals: 0 }),
    ];
  });
}
