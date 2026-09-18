# GajiJelas

A free, privacy-first Malaysian take-home salary calculator (EPF, SOCSO, EIS, PCB/MTD), plus standalone EPF, SOCSO/EIS, PCB, hourly rate, overtime and annual leave calculators. Built with Next.js (App Router), TypeScript, Tailwind CSS and Recharts. All calculations run client-side — nothing is sent to a server.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build + typecheck
npm run lint    # ESLint
```

## Updating statutory rates each year

All EPF, SOCSO, EIS and PCB rates live in [`src/lib/rates/`](src/lib/rates/), one file per year (`2025.ts`, `2026.ts`), conforming to the shared shape in [`types.ts`](src/lib/rates/types.ts). To add a new year:

1. Copy the most recent year's file (e.g. `2026.ts` → `2027.ts`), update the values and `sources`.
2. Register it in [`src/lib/rates/index.ts`](src/lib/rates/index.ts) (`RATES_BY_YEAR`, and bump `CURRENT_RATE_YEAR`/`PREVIOUS_RATE_YEAR`).
3. Update the `RateYear` union type in the same file.

Nothing else in the app should hardcode a rate — the calculation engine in [`src/lib/calc/`](src/lib/calc/) always reads from these tables.

## Project structure

- `src/lib/rates/` — statutory rate tables (the only place rates are hardcoded)
- `src/lib/calc/` — pure calculation functions (EPF, SOCSO, EIS, PCB, salary orchestration, overtime, leave, hourly rate)
- `src/components/calculator/` — the interactive calculator UI
- `src/components/ui/` — shared form primitives
- `src/app/` — pages (home calculator + 6 standalone tools + compare/glossary/FAQ/guides/privacy policy)
- `src/lib/content/` — glossary, FAQ and guide copy

All figures are estimates for planning purposes and are not a substitute for official payroll, tax or financial advice.
