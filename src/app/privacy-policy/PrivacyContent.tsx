"use client";

import { getPrivacySections } from "@/lib/content/privacy";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/context";

export default function PrivacyContent() {
  const { lang, t } = useLanguage();
  const sections = getPrivacySections(lang, SITE.name);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("privacyPage.title")}</h1>
      <p className="mt-2 text-sm text-muted">{t("privacyPage.lastUpdated")}</p>

      <div className="prose-content mt-8 space-y-6 text-[15px] leading-relaxed text-foreground/90">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-lg font-semibold text-foreground">{s.heading}</h2>
            <p className="mt-2">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
