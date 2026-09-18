"use client";

import { useState } from "react";
import { Card, NumberField, PillGroup, SelectField, ToggleField } from "@/components/ui/Field";
import type { SalaryInput } from "@/lib/calc/types";
import { CURRENT_RATE_YEAR, PREVIOUS_RATE_YEAR, type RateYear } from "@/lib/rates";
import { useLanguage } from "@/lib/i18n/context";

export default function SalaryInputsForm({
  value,
  onChange,
  showRateYearToggle = true,
}: {
  value: SalaryInput;
  onChange: (next: SalaryInput) => void;
  showRateYearToggle?: boolean;
}) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const { t } = useLanguage();
  const set = <K extends keyof SalaryInput>(key: K, v: SalaryInput[K]) => onChange({ ...value, [key]: v });

  return (
    <Card>
      <h2 className="text-lg font-semibold text-foreground">{t("form.title")}</h2>
      <p className="mt-1 text-sm text-muted">{t("form.subtitle")}</p>

      <div className="mt-5 space-y-5">
        <NumberField
          label={t("form.grossSalary")}
          prefix={t("common.rm")}
          value={value.grossMonthly}
          onChange={(v) => set("grossMonthly", v)}
          step={100}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <NumberField
            label={t("form.bonusAllowance")}
            prefix={t("common.rm")}
            value={value.bonus.amount}
            onChange={(v) => set("bonus", { ...value.bonus, amount: v })}
            step={50}
          />
          <div className="flex items-end pb-0.5 sm:pb-1">
            <PillGroup
              label={t("form.frequency")}
              value={value.bonus.recurring ? "recurring" : "oneoff"}
              onChange={(v) => set("bonus", { ...value.bonus, recurring: v === "recurring" })}
              options={[
                { value: "oneoff", label: t("form.oneOff") },
                { value: "recurring", label: t("form.everyMonth") },
              ]}
            />
          </div>
        </div>

        <PillGroup
          label={t("form.maritalStatus")}
          value={value.maritalStatus}
          onChange={(v) => set("maritalStatus", v)}
          options={[
            { value: "single", label: t("form.single") },
            { value: "married", label: t("form.married") },
          ]}
        />

        {value.maritalStatus === "married" && (
          <ToggleField label={t("form.spouseWorking")} checked={value.spouseWorking} onChange={(v) => set("spouseWorking", v)} />
        )}

        <NumberField
          label={t("form.numChildren")}
          value={value.numChildren}
          onChange={(v) => set("numChildren", Math.max(0, Math.round(v)))}
          hint={t("form.childrenHint")}
        />

        <PillGroup
          label={t("form.ageGroup")}
          value={value.ageGroup}
          onChange={(v) => set("ageGroup", v)}
          options={[
            { value: "below60", label: t("form.below60") },
            { value: "60plus", label: t("form.above60") },
          ]}
        />

        <PillGroup
          label={t("form.nationality")}
          value={value.nationality}
          onChange={(v) => set("nationality", v)}
          options={[
            { value: "malaysian", label: t("form.malaysian") },
            { value: "nonMalaysian", label: t("form.nonMalaysian") },
          ]}
        />

        <SelectField
          label={t("form.employmentType")}
          value={value.employmentType}
          onChange={(v) => set("employmentType", v)}
          options={[
            { value: "permanent", label: t("form.permanent") },
            { value: "contract", label: t("form.contract") },
            { value: "intern", label: t("form.intern") },
            { value: "selfEmployed", label: t("form.selfEmployed") },
          ]}
        />

        {showRateYearToggle && (
          <PillGroup
            label={t("form.statutoryRates")}
            value={String(value.rateYear) as `${RateYear}`}
            onChange={(v) => set("rateYear", Number(v) as RateYear)}
            options={[
              { value: String(CURRENT_RATE_YEAR) as `${RateYear}`, label: t("form.currentRates", { year: CURRENT_RATE_YEAR }) },
              { value: String(PREVIOUS_RATE_YEAR) as `${RateYear}`, label: t("form.previousRates", { year: PREVIOUS_RATE_YEAR }) },
            ]}
          />
        )}

        <div className="border-t border-border pt-4">
          <button
            type="button"
            onClick={() => setAdvancedOpen((v) => !v)}
            className="flex w-full items-center justify-between text-sm font-semibold text-brand"
            aria-expanded={advancedOpen}
          >
            {t("form.additionalReliefs")}
            <span aria-hidden="true">{advancedOpen ? "−" : "+"}</span>
          </button>

          {advancedOpen && (
            <div className="mt-4 space-y-4">
              <NumberField
                label={t("form.lifeInsurance")}
                prefix={t("common.rm")}
                value={value.additionalReliefs.lifeInsuranceAnnual}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, lifeInsuranceAnnual: v })}
                step={100}
                hint={t("form.lifeInsuranceHint")}
              />
              <NumberField
                label={t("form.lifestyle")}
                prefix={t("common.rm")}
                value={value.additionalReliefs.lifestyleAnnual}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, lifestyleAnnual: v })}
                step={50}
                hint={t("form.lifestyleHint")}
              />
              <NumberField
                label={t("form.medical")}
                prefix={t("common.rm")}
                value={value.additionalReliefs.medicalAnnual}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, medicalAnnual: v })}
                step={100}
                hint={t("form.medicalHint")}
              />
              <NumberField
                label={t("form.parentMedical")}
                prefix={t("common.rm")}
                value={value.additionalReliefs.parentMedicalAnnual}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, parentMedicalAnnual: v })}
                step={100}
                hint={t("form.parentMedicalHint")}
              />
              <NumberField
                label={t("form.sspn")}
                prefix={t("common.rm")}
                value={value.additionalReliefs.sspnAnnual}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, sspnAnnual: v })}
                step={100}
                hint={t("form.sspnHint")}
              />
              <ToggleField
                label={t("form.disabledSelf")}
                checked={value.additionalReliefs.disabledSelf}
                onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, disabledSelf: v })}
              />
              {value.maritalStatus === "married" && (
                <ToggleField
                  label={t("form.disabledSpouse")}
                  checked={value.additionalReliefs.disabledSpouse}
                  onChange={(v) => set("additionalReliefs", { ...value.additionalReliefs, disabledSpouse: v })}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
