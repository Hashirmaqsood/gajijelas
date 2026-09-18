"use client";

import { Card } from "@/components/ui/Field";
import type { ExplanationStep } from "@/lib/calc/types";
import { useLanguage } from "@/lib/i18n/context";

export default function CalculationExplainer({ steps }: { steps: ExplanationStep[] }) {
  const { t } = useLanguage();
  return (
    <Card>
      <h2 className="text-lg font-semibold text-foreground">{t("explainer.title")}</h2>
      <p className="mt-1 text-sm text-muted">{t("explainer.subtitle")}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
              {i + 1}
            </span>
            <span className="leading-relaxed">{t(step.key, step.vars)}</span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
