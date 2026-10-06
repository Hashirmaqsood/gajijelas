import { calculateSalary, DEFAULT_SALARY_INPUT } from "@/lib/calc";
import type { StatutoryRates } from "@/lib/rates/types";

export interface SalaryExampleRow {
  gross: number;
  epf: number;
  socso: number;
  eis: number;
  pcb: number;
  net: number;
  employerCost: number;
}

const EXAMPLE_GROSS_SALARIES = [2000, 3000, 4000, 5000, 6000, 8000, 10000];

export function computeSalaryExamples(rates: StatutoryRates): SalaryExampleRow[] {
  return EXAMPLE_GROSS_SALARIES.map((gross) => {
    const month = calculateSalary({ ...DEFAULT_SALARY_INPUT, grossMonthly: gross }, rates).regularMonth;
    return {
      gross,
      epf: month.epf.employee,
      socso: month.socso.employee,
      eis: month.eis.employee,
      pcb: month.pcb,
      net: month.netPay,
      employerCost: month.totalEmployerCost,
    };
  });
}
