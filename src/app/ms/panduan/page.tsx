import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Field";
import { MS_ARTICLES, MS_CALCULATORS } from "@/lib/content/msPages";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo/jsonLd";

const PATH = "/ms/panduan";
const TITLE = "Panduan Gaji, KWSP, PERKESO & Cukai Malaysia";
const DESCRIPTION =
  "Panduan percuma tentang gaji bersih, KWSP, PERKESO, EIS, PCB, cukai pendapatan dan hak pekerja di bawah Akta Kerja 1955.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides",
    },
  },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script {...jsonLdScriptProps(breadcrumbJsonLd([{ name: "Utama", path: "/ms" }, { name: "Panduan", path: PATH }]))} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{TITLE}</h1>
      <p className="mt-2 text-base text-muted">
        Penjelasan ringkas tentang topik gaji dan cukai yang paling kerap ditanya di Malaysia. Setiap angka dikira menggunakan kadar rasmi terkini.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-foreground">Panduan</h2>
      <div className="mt-4 space-y-4">
        {MS_ARTICLES.map((page) => (
          <Link key={page.href} href={page.href} className="block">
            <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-lifted)]">
              <h3 className="text-lg font-semibold text-foreground">{page.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{page.description}</p>
            </Card>
          </Link>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold text-foreground">Kalkulator percuma</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {MS_CALCULATORS.map((page) => (
          <li key={page.href}>
            <Link href={page.href} className="block">
              <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-lifted)]">
                <h3 className="text-base font-semibold text-foreground">{page.title}</h3>
                <p className="mt-1 text-sm text-muted">{page.description}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
