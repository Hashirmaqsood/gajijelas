import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleTagManagerScript, GoogleTagManagerNoscript } from "@/components/layout/Analytics";
import { SITE } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <GoogleTagManagerScript />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManagerNoscript />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-2 focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <noscript>
          <div style={{ background: "#b3261e", color: "#fff", padding: "12px 16px", textAlign: "center", fontSize: 14 }}>
            This calculator needs JavaScript enabled to run — all calculations happen in your browser so your data
            never leaves your device. Please enable JavaScript to continue.
          </div>
        </noscript>
        <LanguageProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
