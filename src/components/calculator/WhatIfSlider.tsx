"use client";

import { useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/Field";
import { calculateSalary } from "@/lib/calc/salary";
import type { SalaryInput } from "@/lib/calc/types";
import type { StatutoryRates } from "@/lib/rates/types";
import { formatRM } from "@/lib/format";
import { useLanguage } from "@/lib/i18n/context";

export default function WhatIfSlider({
  input,
  rates,
  onChange,
}: {
  input: SalaryInput;
  rates: StatutoryRates;
  onChange: (gross: number) => void;
}) {
  const { t } = useLanguage();
  const min = 1500;
  const max = Math.max(20000, Math.round((input.grossMonthly * 2) / 500) * 500);

  const curve = useMemo(() => {
    const points: { gross: number; net: number }[] = [];
    const steps = 24;
    for (let i = 0; i <= steps; i++) {
      const gross = Math.round((min + ((max - min) * i) / steps) / 50) * 50;
      const result = calculateSalary({ ...input, grossMonthly: gross }, rates);
      points.push({ gross, net: result.regularMonth.netPay });
    }
    return points;
  }, [input, rates, max]);

  return (
    <Card>
      <h2 className="text-lg font-semibold text-foreground">{t("whatif.title")}</h2>
      <p className="mt-1 text-sm text-muted">{t("whatif.subtitle")}</p>

      <div className="mt-4 h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={curve} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="netGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d7d6f" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#0d7d6f" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="gross" tickFormatter={(v) => `${Math.round(v / 1000)}k`} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis hide domain={["dataMin", "dataMax"]} />
            <Tooltip
              formatter={(v) => formatRM(Number(v))}
              labelFormatter={(v) => `Gross: ${formatRM(Number(v))}`}
              contentStyle={{ borderRadius: 8, border: "1px solid var(--border)", fontSize: 12 }}
            />
            <Area type="monotone" dataKey="net" stroke="#0d7d6f" strokeWidth={2} fill="url(#netGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2">
        <input
          type="range"
          aria-label="Gross monthly salary"
          min={min}
          max={max}
          step={50}
          value={Math.min(Math.max(input.grossMonthly, min), max)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[#0d7d6f]"
        />
        <div className="mt-1 flex justify-between text-xs text-muted tabular-nums">
          <span>{formatRM(min, { decimals: 0 })}</span>
          <span className="font-semibold text-brand-dark">{formatRM(input.grossMonthly, { decimals: 0 })} {t("whatif.grossLabel")}</span>
          <span>{formatRM(max, { decimals: 0 })}</span>
        </div>
      </div>
    </Card>
  );
}
