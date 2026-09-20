import { round2 } from "@/lib/format";

export interface MortgageInput {
  propertyPrice: number;
  downPaymentPct: number;
  annualInterestRatePct: number;
  tenureYears: number;
  monthlyTakeHomePay: number;
}

export interface MortgageResult {
  loanAmount: number;
  monthlyInstallment: number;
  totalPayment: number;
  totalInterest: number;
  dsrPct: number;
}

/** Standard amortising loan formula: M = P * r(1+r)^n / ((1+r)^n - 1) */
export function calculateMortgage(input: MortgageInput): MortgageResult {
  const { propertyPrice, downPaymentPct, annualInterestRatePct, tenureYears, monthlyTakeHomePay } = input;

  const loanAmount = propertyPrice * (1 - downPaymentPct / 100);
  const monthlyRate = annualInterestRatePct / 100 / 12;
  const numPayments = tenureYears * 12;

  let monthlyInstallment: number;
  if (monthlyRate === 0) {
    monthlyInstallment = numPayments > 0 ? loanAmount / numPayments : 0;
  } else {
    const factor = Math.pow(1 + monthlyRate, numPayments);
    monthlyInstallment = numPayments > 0 ? (loanAmount * monthlyRate * factor) / (factor - 1) : 0;
  }

  const totalPayment = monthlyInstallment * numPayments;
  const totalInterest = totalPayment - loanAmount;
  const dsrPct = monthlyTakeHomePay > 0 ? (monthlyInstallment / monthlyTakeHomePay) * 100 : 0;

  return {
    loanAmount: round2(loanAmount),
    monthlyInstallment: round2(monthlyInstallment),
    totalPayment: round2(totalPayment),
    totalInterest: round2(totalInterest),
    dsrPct: round2(dsrPct),
  };
}
