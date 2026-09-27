import type { Lang } from "./context";

export function monthOptions(lang: Lang): { value: string; label: string }[] {
  const formatter = new Intl.DateTimeFormat(lang === "ms" ? "ms-MY" : "en-MY", { month: "long" });
  return Array.from({ length: 12 }, (_, i) => {
    const value = String(i + 1).padStart(2, "0");
    return { value, label: formatter.format(new Date(2026, i, 1)) };
  });
}
