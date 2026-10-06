import { calculateSalary, DEFAULT_SALARY_INPUT } from "@/lib/calc";
import { CURRENT_RATE_YEAR, getRates } from "@/lib/rates";
import { formatRM } from "@/lib/format";

const MONTHLY_SALARIES = [2000, 3000, 3500, 4000, 5000, 6000, 8000, 10000, 15000, 20000];

/** Annual income tax for a single Malaysian employee (no children, standard reliefs only), from the real engine. */
export function taxBySalaryRows(): string[][] {
  const rates = getRates(CURRENT_RATE_YEAR);
  return MONTHLY_SALARIES.map((monthly) => {
    const { pcbDetail } = calculateSalary({ ...DEFAULT_SALARY_INPUT, rateYear: CURRENT_RATE_YEAR, grossMonthly: monthly }, rates);
    return [
      formatRM(monthly, { decimals: 0 }),
      formatRM(pcbDetail.chargeableIncome, { decimals: 0 }),
      formatRM(pcbDetail.annualTax, { decimals: 0 }),
      formatRM(pcbDetail.annualTax / 12, { decimals: 0 }),
    ];
  });
}
