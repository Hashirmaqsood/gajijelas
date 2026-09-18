"use client";

import { useMemo, useState } from "react";
import SalaryInputsForm from "./SalaryInputsForm";
import ResultsPanel from "./ResultsPanel";
import WhatIfSlider from "./WhatIfSlider";
import CalculationExplainer from "./CalculationExplainer";
import { calculateSalary } from "@/lib/calc/salary";
import { DEFAULT_SALARY_INPUT, type SalaryInput } from "@/lib/calc/types";
import { getRates } from "@/lib/rates";

export default function SalaryCalculatorApp() {
  const [input, setInput] = useState<SalaryInput>(DEFAULT_SALARY_INPUT);
  const rates = useMemo(() => getRates(input.rateYear), [input.rateYear]);
  const result = useMemo(() => calculateSalary(input, rates), [input, rates]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
      <div className="lg:sticky lg:top-20">
        <SalaryInputsForm value={input} onChange={setInput} />
      </div>
      <div className="space-y-6">
        <ResultsPanel result={result} />
        {!result.isSelfEmployed && <WhatIfSlider input={input} rates={rates} onChange={(g) => setInput({ ...input, grossMonthly: g })} />}
        <CalculationExplainer steps={result.explanationSteps} />
      </div>
    </div>
  );
}
