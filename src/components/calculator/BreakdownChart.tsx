"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatRM } from "@/lib/format";

const COLORS = ["#0d7d6f", "#b5760a", "#5b8a80", "#c8935a", "#8ea79d"];

export default function BreakdownChart({
  data,
  emptyLabel = "Enter a salary to see the breakdown.",
}: {
  data: { label: string; value: number }[];
  emptyLabel?: string;
}) {
  const filtered = data.filter((d) => d.value > 0);
  const total = filtered.reduce((s, d) => s + d.value, 0);
  const takeHomePct = filtered.length > 0 && total > 0 ? Math.round((filtered[0].value / total) * 100) : 0;

  if (total <= 0) {
    return <div className="flex h-56 items-center justify-center text-sm text-muted">{emptyLabel}</div>;
  }

  return (
    <div className="w-full">
      <div className="relative h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filtered}
              dataKey="value"
              nameKey="label"
              innerRadius="62%"
              outerRadius="92%"
              paddingAngle={2.5}
              cornerRadius={4}
              strokeWidth={0}
            >
              {filtered.map((entry, i) => (
                <Cell key={entry.label} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v, name) => [formatRM(Number(v)), String(name)]}
              contentStyle={{ borderRadius: 10, border: "1px solid var(--border)", fontSize: 13, boxShadow: "0 8px 24px -8px rgba(0,0,0,0.15)" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tabular-nums text-foreground">{takeHomePct}%</span>
          <span className="text-[11px] text-muted">take-home</span>
        </div>
      </div>
      <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
        {filtered.map((d, i) => (
          <li key={d.label} className="flex items-center gap-1.5 text-muted">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
            <span className="truncate">{d.label}</span>
            <span className="ml-auto tabular-nums font-medium text-foreground">{Math.round((d.value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
