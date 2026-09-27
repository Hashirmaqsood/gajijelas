import { round2 } from "@/lib/format";

export type IncrementMode = "percent" | "amount";

export interface SalaryIncrementInput {
  currentSalary: number;
  mode: IncrementMode;
  incrementPercent: number;
  incrementAmount: number;
  projectionYears: number;
}

export interface SalaryIncrementYear {
  year: number;
  salary: number;
}

export interface SalaryIncrementResult {
  newSalary: number;
  increaseAmount: number;
  increasePercent: number;
  annualIncreaseAmount: number;
  projection: SalaryIncrementYear[];
}

export function calculateSalaryIncrement(input: SalaryIncrementInput): SalaryIncrementResult {
  const { currentSalary, mode, incrementPercent, incrementAmount, projectionYears } = input;
  if (currentSalary <= 0) {
    return { newSalary: 0, increaseAmount: 0, increasePercent: 0, annualIncreaseAmount: 0, projection: [] };
  }

  const stepSalary = (salary: number): number =>
    mode === "percent" ? salary * (1 + incrementPercent / 100) : salary + incrementAmount;

  const newSalary = round2(stepSalary(currentSalary));
  const increaseAmount = round2(newSalary - currentSalary);
  const increasePercent = round2((increaseAmount / currentSalary) * 100);
  const annualIncreaseAmount = round2(increaseAmount * 12);

  const years = Math.max(0, Math.round(projectionYears));
  const projection: SalaryIncrementYear[] = [];
  let running = currentSalary;
  for (let year = 1; year <= years; year++) {
    running = stepSalary(running);
    projection.push({ year, salary: round2(running) });
  }

  return { newSalary, increaseAmount, increasePercent, annualIncreaseAmount, projection };
}
