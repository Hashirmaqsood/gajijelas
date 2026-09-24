import { LanguageProvider } from "@/lib/i18n/context";

export default function MsLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider initialLang="ms" respectStoredPreference={false}>
      {children}
    </LanguageProvider>
  );
}
