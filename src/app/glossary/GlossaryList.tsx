"use client";

import { Card } from "@/components/ui/Field";
import { getGlossary } from "@/lib/content/glossary";
import { useLanguage } from "@/lib/i18n/context";

export default function GlossaryList() {
  const { lang, t } = useLanguage();
  const glossary = getGlossary(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("glossaryPage.title")}</h1>
      <p className="mt-2 text-base text-muted">{t("glossaryPage.subtitle")}</p>

      <div className="mt-8 space-y-4">
        {glossary.map((g) => (
          <Card key={g.term}>
            <h2 className="font-semibold text-foreground">{g.term}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{g.definition}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
