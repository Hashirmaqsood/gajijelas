"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import en, { type Dictionary } from "./en";
import ms from "./ms";
import { getAlternatePath } from "./routes";

export type Lang = "en" | "ms";

const DICTIONARIES: Record<Lang, Dictionary> = { en, ms };
const STORAGE_KEY = "gajijelas-lang";

type Vars = Record<string, string | number>;

function getByPath(dict: Dictionary, path: string): string {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = dict;
  for (const part of parts) {
    node = node?.[part];
  }
  return typeof node === "string" ? node : path;
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

// Standalone translator usable outside the React context (e.g. by Header/Footer,
// which render above any per-route locale override and must derive their own
// language from the URL rather than from ambient context).
export function translate(lang: Lang, path: string, vars?: Vars): string {
  return interpolate(getByPath(DICTIONARIES[lang], path), vars);
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string, vars?: Vars) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang = "en",
  respectStoredPreference = true,
}: {
  children: ReactNode;
  /** Server-known starting language — e.g. "ms" for pages under /ms. */
  initialLang?: Lang;
  /**
   * Whether a previously-stored preference (from the instant EN/BM toggle on
   * non-localized pages) is allowed to override initialLang on mount. Pages
   * with a real per-language URL (under /ms) must stay authoritative to that
   * URL, so they pass false here — otherwise a stale "en" preference could
   * flip a /ms page's content back to English after hydration.
   */
  respectStoredPreference?: boolean;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const pathname = usePathname();
  // A page with a real per-language URL (either side of the pair) must stay
  // authoritative to that URL — otherwise a stale toggle preference from an
  // earlier visit to a non-localized page could silently show Malay content
  // under an English URL (or vice versa), which defeats the point of giving
  // each language its own indexable URL.
  const onLocalizedPage = getAlternatePath(pathname) !== null;

  useEffect(() => {
    if (onLocalizedPage) {
      // Force the URL's language even if a client-side navigation carried
      // over an in-memory "lang" from an instant toggle on a non-localized
      // page earlier in the session — the URL is authoritative here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(initialLang);
      return;
    }
    if (!respectStoredPreference) return;
    // Sync from localStorage (server has no localStorage, so the initial
    // render must default to initialLang and reconcile client-side; this
    // also re-applies the stored preference when navigating back to a
    // non-localized page after visiting a localized one).
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "en" || stored === "ms") setLangState(stored);
    } catch {
      // localStorage unavailable (private mode, etc.) — default to initialLang.
    }
  }, [pathname, onLocalizedPage, respectStoredPreference, initialLang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures — the toggle still works for this session.
    }
  };

  const value = useMemo<LanguageContextValue>(() => {
    const dict = DICTIONARIES[lang];
    return {
      lang,
      setLang,
      t: (path: string, vars?: Vars) => interpolate(getByPath(dict, path), vars),
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
