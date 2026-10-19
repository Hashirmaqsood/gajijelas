import { calculateSalary, DEFAULT_SALARY_INPUT } from "@/lib/calc";
import { calculateEpf } from "@/lib/calc/epf";
import { taxOnChargeableIncome } from "@/lib/calc/pcb";
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

/**
 * Illustration of the Budget 2027 tax announcement (9 Oct 2026): individual relief RM9,000 -> RM12,000 and
 * a one-point cut in the RM70,001-RM100,000 (19% -> 18%) and RM100,001-RM150,000 (25% -> 24%) bands.
 * Reported figures only; the Year of Assessment was not stated, so this is not wired into the calculators.
 */
export function budget2027TaxSavingRows(): string[][] {
  const current = getRates(CURRENT_RATE_YEAR).pcb.brackets;
  const proposed = [
    { from: 0, to: 5000, ratePct: 0 },
    { from: 5001, to: 20000, ratePct: 1 },
    { from: 20001, to: 35000, ratePct: 3 },
    { from: 35001, to: 50000, ratePct: 6 },
    { from: 50001, to: 70000, ratePct: 11 },
    { from: 70001, to: 100000, ratePct: 18 },
    { from: 100001, to: 150000, ratePct: 24 },
    { from: 150001, to: 400000, ratePct: 25 },
    { from: 400001, to: 600000, ratePct: 26 },
    { from: 600001, to: 2000000, ratePct: 28 },
    { from: 2000001, to: null, ratePct: 30 },
  ];
  return [40000, 60000, 80000, 120000, 200000].map((chargeable) => {
    const taxNow = taxOnChargeableIncome(current, chargeable);
    const taxNew = taxOnChargeableIncome(proposed, chargeable - 3000);
    return [
      formatRM(chargeable, { decimals: 0 }),
      formatRM(taxNow, { decimals: 0 }),
      formatRM(taxNew, { decimals: 0 }),
      formatRM(taxNow - taxNew, { decimals: 0 }),
    ];
  });
}

/** Illustrative yearly EPF dividend (balance x rate) for a balance held the whole year. Not a forecast. */
export function dividendWhatIfRows(): string[][] {
  const rates = [5.5, 6.0, 6.15, 6.5];
  return [20000, 50000, 100000, 250000, 500000].map((balance) => [
    formatRM(balance, { decimals: 0 }),
    ...rates.map((r) => formatRM((balance * r) / 100, { decimals: 0 })),
  ]);
}

/** RM50,000 left untouched with the dividend re-invested each year, no new contributions. */
export function dividendGrowthFigures() {
  const grow = (rate: number, years: number) => 50000 * Math.pow(1 + rate / 100, years);
  return { grow };
}

export function dividendGrowthRows(): string[][] {
  const { grow } = dividendGrowthFigures();
  return [10, 20, 30].map((years) => [
    `${years} years`,
    formatRM(grow(5.0, years), { decimals: 0 }),
    formatRM(grow(5.5, years), { decimals: 0 }),
    formatRM(grow(6.15, years), { decimals: 0 }),
  ]);
}

/** Tax saved by claiming an extra RM2,500 of relief, by chargeable income (resident, current brackets, above the RM35,000 rebate zone). */
export function reliefSavingRows(): string[][] {
  const brackets = getRates(CURRENT_RATE_YEAR).pcb.brackets;
  return [40000, 55000, 75000, 120000, 250000].map((chargeable) => {
    const saved = taxOnChargeableIncome(brackets, chargeable) - taxOnChargeableIncome(brackets, chargeable - 2500);
    const top = brackets.find((b) => chargeable >= b.from && (b.to === null || chargeable <= b.to));
    return [
      formatRM(chargeable, { decimals: 0 }),
      `${top?.ratePct ?? 0}%`,
      formatRM(saved, { decimals: 0 }),
      formatRM(taxOnChargeableIncome(brackets, chargeable), { decimals: 0 }),
    ];
  });
}
