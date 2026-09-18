"use client";

import { Card } from "@/components/ui/Field";
import { useLanguage } from "@/lib/i18n/context";

export default function AboutContent() {
  const { t } = useLanguage();

  const sections = [
    { heading: t("aboutPage.missionHeading"), body: t("aboutPage.missionBody") },
    { heading: t("aboutPage.sourcingHeading"), body: t("aboutPage.sourcingBody") },
    { heading: t("aboutPage.methodologyHeading"), body: t("aboutPage.methodologyBody") },
    { heading: t("aboutPage.privacyHeading"), body: t("aboutPage.privacyBody") },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("aboutPage.title")}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">{t("aboutPage.intro")}</p>

      <div className="mt-8 space-y-4">
        {sections.map((s) => (
          <Card key={s.heading}>
            <h2 className="text-lg font-semibold text-foreground">{s.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">{s.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
