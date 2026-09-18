import type { StatutoryRates } from "@/lib/rates/types";
import { calculateEpf } from "./epf";
import { calculateSocso } from "./socso";
import { calculateEis } from "./eis";
import { calculatePcb } from "./pcb";
import type { ContributionPair, ExplanationStep, MonthBreakdown, SalaryCalculationResult, SalaryInput } from "./types";
import { formatRM, round2 } from "@/lib/format";

function addPair(a: ContributionPair, b: ContributionPair): ContributionPair {
  return { employee: round2(a.employee + b.employee), employer: round2(a.employer + b.employer) };
}

function buildMonth(
  gross: number,
  epf: ContributionPair,
  socso: ContributionPair,
  eis: ContributionPair,
  pcb: number
): MonthBreakdown {
  const totalEmployeeDeductions = round2(epf.employee + socso.employee + eis.employee + pcb);
  const netPay = round2(gross - totalEmployeeDeductions);
  const totalEmployerCost = round2(gross + epf.employer + socso.employer + eis.employer);
  return { gross, epf, socso, eis, pcb, totalEmployeeDeductions, netPay, totalEmployerCost };
}

const zeroPair: ContributionPair = { employee: 0, employer: 0 };

export function calculateSalary(input: SalaryInput, rates: StatutoryRates): SalaryCalculationResult {
  const { grossMonthly, bonus, ageGroup, nationality, employmentType, maritalStatus, spouseWorking, numChildren, additionalReliefs } = input;

  if (employmentType === "selfEmployed") {
    const oneOffBonusSelfEmployed = bonus.recurring ? 0 : round2(bonus.amount || 0);
    const gross = round2(grossMonthly + (bonus.recurring ? bonus.amount : 0));
    const regularMonth = buildMonth(gross, zeroPair, zeroPair, zeroPair, 0);
    const bonusMonth = oneOffBonusSelfEmployed > 0 ? buildMonth(round2(gross + oneOffBonusSelfEmployed), zeroPair, zeroPair, zeroPair, 0) : null;
    const annualGross = round2(gross * 12 + oneOffBonusSelfEmployed);
    const annual = buildMonth(annualGross, zeroPair, zeroPair, zeroPair, 0);
    return {
      rateYear: rates.year,
      isSelfEmployed: true,
      isIntern: false,
      regularMonth,
      bonusMonth,
      annual,
      pcbDetail: {
        annualGrossIncome: annualGross,
        totalReliefs: 0,
        reliefsBreakdown: [],
        chargeableIncome: 0,
        taxBeforeRebate: 0,
        rebate: 0,
        annualTax: 0,
        isNonResident: false,
      },
      explanationSteps: [
        { key: "explainer.selfEmployed1" },
        { key: "explainer.selfEmployed2" },
        { key: "explainer.selfEmployed3" },
      ],
    };
  }

  const isIntern = employmentType === "intern";
  const recurringWage = round2(grossMonthly + (bonus.recurring ? bonus.amount : 0));
  const oneOffBonus = bonus.recurring ? 0 : round2(bonus.amount || 0);

  const epfBase = isIntern ? zeroPair : calculateEpf(rates.epf, recurringWage, ageGroup, nationality);
  const socsoBase = isIntern ? zeroPair : calculateSocso(rates.socso, recurringWage, ageGroup, nationality);
  const eisBase = isIntern ? zeroPair : calculateEis(rates.eis, recurringWage, ageGroup, nationality);
  const epfOnBonus = isIntern || oneOffBonus <= 0 ? zeroPair : calculateEpf(rates.epf, oneOffBonus, ageGroup, nationality);

  const annualEpfEmployee = round2(epfBase.employee * 12 + epfOnBonus.employee);
  const annualEpfEmployer = round2(epfBase.employer * 12 + epfOnBonus.employer);
  const annualSocsoEmployee = round2(socsoBase.employee * 12);
  const annualSocsoEmployer = round2(socsoBase.employer * 12);
  const annualEisEmployee = round2(eisBase.employee * 12);
  const annualEisEmployer = round2(eisBase.employer * 12);

  const pcbResult = calculatePcb({
    rates: rates.pcb,
    annualGrossExcludingBonus: round2(recurringWage * 12),
    oneOffBonusAmount: oneOffBonus,
    annualEpfEmployee,
    annualSocsoEisEmployee: round2(annualSocsoEmployee + annualEisEmployee),
    ageGroup,
    nationality,
    maritalStatus,
    spouseWorking,
    numChildren,
    additionalReliefs,
    socsoEisReliefCap: rates.socso.reliefCapCombinedWithEis,
    epfReliefCap: rates.epf.reliefCapEpfOnly,
  });

  const regularMonth = buildMonth(recurringWage, epfBase, socsoBase, eisBase, pcbResult.monthlyPcbOnBase);

  const bonusMonth =
    oneOffBonus > 0
      ? buildMonth(
          round2(recurringWage + oneOffBonus),
          addPair(epfBase, epfOnBonus),
          socsoBase,
          eisBase,
          round2(pcbResult.monthlyPcbOnBase + pcbResult.bonusPcbOneOff)
        )
      : null;

  const annualGross = round2(recurringWage * 12 + oneOffBonus);
  const annualEpf: ContributionPair = { employee: annualEpfEmployee, employer: annualEpfEmployer };
  const annualSocso: ContributionPair = { employee: annualSocsoEmployee, employer: annualSocsoEmployer };
  const annualEis: ContributionPair = { employee: annualEisEmployee, employer: annualEisEmployer };
  const annual = buildMonth(annualGross, annualEpf, annualSocso, annualEis, pcbResult.detail.annualTax);

  const explanationSteps = buildExplanationSteps(input, rates, {
    recurringWage,
    oneOffBonus,
    epfBase,
    socsoBase,
    eisBase,
    pcbResult,
    isIntern,
  });

  return {
    rateYear: rates.year,
    isSelfEmployed: false,
    isIntern,
    regularMonth,
    bonusMonth,
    annual,
    pcbDetail: pcbResult.detail,
    explanationSteps,
  };
}

function buildExplanationSteps(
  input: SalaryInput,
  rates: StatutoryRates,
  ctx: {
    recurringWage: number;
    oneOffBonus: number;
    epfBase: ContributionPair;
    socsoBase: ContributionPair;
    eisBase: ContributionPair;
    pcbResult: ReturnType<typeof calculatePcb>;
    isIntern: boolean;
  }
): ExplanationStep[] {
  const steps: ExplanationStep[] = [];
  steps.push({ key: "explainer.start", vars: { wage: formatRM(ctx.recurringWage) } });

  if (input.bonus.recurring && input.bonus.amount > 0) {
    steps.push({ key: "explainer.recurringAllowanceIncluded", vars: { amount: formatRM(input.bonus.amount) } });
  }

  if (ctx.isIntern) {
    steps.push({ key: "explainer.internNoStatutory" });
  } else {
    steps.push({
      key: "explainer.epf",
      vars: { wage: formatRM(ctx.recurringWage), employee: formatRM(ctx.epfBase.employee), employer: formatRM(ctx.epfBase.employer) },
    });
    steps.push({
      key: "explainer.socso",
      vars: { ceiling: rates.socso.wageCeiling.toLocaleString(), employee: formatRM(ctx.socsoBase.employee), employer: formatRM(ctx.socsoBase.employer) },
    });
    steps.push({
      key: "explainer.eis",
      vars: { employee: formatRM(ctx.eisBase.employee), employer: formatRM(ctx.eisBase.employer) },
    });
  }

  if (ctx.pcbResult.detail.isNonResident) {
    steps.push({
      key: "explainer.pcbNonResident",
      vars: { rate: rates.pcb.nonResidentFlatPct, monthly: formatRM(ctx.pcbResult.monthlyPcbOnBase) },
    });
  } else {
    steps.push({
      key: "explainer.pcbResident",
      vars: { reliefs: formatRM(ctx.pcbResult.detail.totalReliefs), chargeable: formatRM(ctx.pcbResult.detail.chargeableIncome) },
    });
    if (ctx.pcbResult.detail.rebate > 0) {
      steps.push({
        key: "explainer.rebateApplied",
        vars: { threshold: rates.pcb.reliefs.rebateThreshold.toLocaleString(), rebate: formatRM(ctx.pcbResult.detail.rebate) },
      });
    }
    steps.push({
      key: "explainer.monthlyPcb",
      vars: { annualTax: formatRM(ctx.pcbResult.detail.annualTax), monthly: formatRM(ctx.pcbResult.monthlyPcbOnBase) },
    });
  }

  if (ctx.oneOffBonus > 0) {
    steps.push({
      key: "explainer.bonusNote",
      vars: { bonus: formatRM(ctx.oneOffBonus), extraPcb: formatRM(ctx.pcbResult.bonusPcbOneOff) },
    });
  }

  steps.push({ key: "explainer.takeHomeSummary" });

  return steps;
}
