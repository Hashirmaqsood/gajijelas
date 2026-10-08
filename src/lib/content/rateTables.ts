import { calculateSalary, DEFAULT_SALARY_INPUT } from "@/lib/calc";
import { calculateEpf } from "@/lib/calc/epf";
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

/** Contribution figures for a single Malaysian employee earning the minimum wage, from the real engine. */
export function minimumWageFigures() {
  const rates = getRates(CURRENT_RATE_YEAR);
  const gross = rates.minimumWage.monthly;
  const { regularMonth } = calculateSalary({ ...DEFAULT_SALARY_INPUT, rateYear: CURRENT_RATE_YEAR, grossMonthly: gross }, rates);
  return {
    gross,
    hourly: rates.minimumWage.hourly,
    daily: Math.round((gross / 26) * 100) / 100,
    epfEmployee: regularMonth.epf.employee,
    epfEmployer: regularMonth.epf.employer,
    socsoEmployee: regularMonth.socso.employee,
    socsoEmployer: regularMonth.socso.employer,
    eisEmployee: regularMonth.eis.employee,
    eisEmployer: regularMonth.eis.employer,
    pcb: regularMonth.pcb,
    net: regularMonth.netPay,
    employerCost: regularMonth.totalEmployerCost,
  };
}

/** Pay-slip style breakdown at the minimum wage. Labels are passed in so the same numbers serve EN and MS pages. */
export function minimumWageRows(labels: {
  gross: string;
  epf: string;
  socso: string;
  eis: string;
  pcb: string;
  net: string;
  employerCost: string;
}): string[][] {
  const f = minimumWageFigures();
  return [
    [labels.gross, formatRM(f.gross)],
    [labels.epf, `− ${formatRM(f.epfEmployee)}`],
    [labels.socso, `− ${formatRM(f.socsoEmployee)}`],
    [labels.eis, `− ${formatRM(f.eisEmployee)}`],
    [labels.pcb, formatRM(f.pcb)],
    [labels.net, formatRM(f.net)],
    [labels.employerCost, formatRM(f.employerCost)],
  ];
}

/** EPF contributions by monthly wage for a Malaysian employee below 60. Wages are multiples of RM100, where the exact percentage equals KWSP's banded Third Schedule amount. */
export function epfContributionRows(): string[][] {
  const rates = getRates(CURRENT_RATE_YEAR);
  return [1000, 1500, 1700, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 6000, 7000, 8000, 10000].map((wage) => {
    const { employee, employer } = calculateEpf(rates.epf, wage, "below60", "malaysian");
    return [formatRM(wage, { decimals: 0 }), formatRM(employee, { decimals: 0 }), formatRM(employer, { decimals: 0 }), formatRM(employee + employer, { decimals: 0 })];
  });
}

/** Salary deducted for unpaid leave using the common monthly salary / 26 working-day method. */
export function unpaidLeaveRows(): string[][] {
  return [1700, 2000, 3000, 4000, 5000].map((monthly) => {
    const day = monthly / 26;
    return [formatRM(monthly, { decimals: 0 }), formatRM(day), formatRM(day * 3), formatRM(day * 5)];
  });
}
