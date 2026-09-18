export function formatRM(amount: number, opts: { decimals?: number } = {}): string {
  const decimals = opts.decimals ?? 2;
  const rounded = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(rounded)
    .replace("MYR", "RM")
    .replace("RM ", "RM ");
}

export function formatNumber(amount: number, decimals = 0): string {
  return new Intl.NumberFormat("en-MY", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function round2(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
