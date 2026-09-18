"use client";

import { Card } from "@/components/ui/Field";
import { getFaq } from "@/lib/content/faq";
import { useLanguage } from "@/lib/i18n/context";

export default function FaqList() {
  const { lang, t } = useLanguage();
  const faq = getFaq(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t("faqPage.title")}</h1>
      <p className="mt-2 text-base text-muted">{t("faqPage.subtitle")}</p>

      <div className="mt-8 space-y-3">
        {faq.map((f) => (
          <Card key={f.question}>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground marker:content-none">
                {f.question}
                <span className="shrink-0 text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.answer}</p>
            </details>
          </Card>
        ))}
      </div>
    </div>
  );
}
