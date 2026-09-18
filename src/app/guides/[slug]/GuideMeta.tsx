"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function GuideMeta() {
  const { t, lang } = useLanguage();
  return (
    <div className="flex items-center justify-between gap-3">
      <Link href="/guides" className="text-sm text-brand hover:underline">
        ← {t("guidesPage.backToGuides")}
      </Link>
      {lang === "ms" && (
        <span className="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent">{t("guidesPage.englishOnlyNote")}</span>
      )}
    </div>
  );
}
