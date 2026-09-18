"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/context";

function LangSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition ${lang === "en" ? "bg-brand text-white shadow-sm" : "text-muted hover:text-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ms")}
        aria-pressed={lang === "ms"}
        className={`rounded-full px-2.5 py-1 transition ${lang === "ms" ? "bg-brand text-white shadow-sm" : "text-muted hover:text-foreground"}`}
      >
        BM
      </button>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t("nav.salaryCalculator") },
    { href: "/compare", label: t("nav.compareOffers") },
    { href: "/guides", label: t("nav.guides") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/about", label: t("footer.about") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-foreground shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-sm shadow-brand/30">
            RM
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-brand-light hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
          <button
            type="button"
            aria-label={t("nav.menuToggle")}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 md:hidden">
          <div className="mb-2 sm:hidden">
            <LangSwitch />
          </div>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-brand-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
