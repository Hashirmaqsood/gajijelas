"use client";

import Link from "next/link";
import { GUIDES } from "@/lib/content/guides";
import { Card } from "@/components/ui/Field";
import { useLanguage } from "@/lib/i18n/context";

const SORTED_GUIDES = [...GUIDES].sort(
  (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
);

export default function GuidesListContent() {
  const { t, lang } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("guidesPage.title")}</h1>
      <p className="mt-2 text-base text-muted">{t("guidesPage.subtitle")}</p>

      <div className="mt-8 space-y-4">
        {SORTED_GUIDES.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="block">
            <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-lifted)]">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {new Date(g.publishedDate).toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}
                {lang === "ms" && <span className="ml-2 text-muted/70">{t("guidesPage.englishOnlyNote")}</span>}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-foreground">{g.title}</h2>
              <p className="mt-1.5 text-sm text-muted">{g.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
