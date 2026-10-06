import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";

const PATH = "/ms/no-cukai-pendapatan-tin";
const TITLE = "No. Cukai Pendapatan (TIN): Cara Semak & Dapatkan";
const DESCRIPTION =
  "Apa itu no. cukai pendapatan (TIN) di Malaysia? Format IG, cara semak di MyTax dan cara mohon melalui e-Daftar jika anda belum ada.";

const BODY = [
  "Nombor cukai pendapatan anda dipanggil Nombor Pengenalan Cukai, atau TIN. LHDN menggunakannya untuk mengenal pasti anda sebagai pembayar cukai, dan anda memerlukannya untuk memfailkan borang cukai pendapatan.",
  "## Bagaimana rupa TIN",
  "Bagi individu, TIN bermula dengan awalan IG, diikuti nombor, sehingga 14 aksara kesemuanya. Awalan IG menggantikan awalan lama OG dan SG, manakala nombornya kekal sama.",
  "## Adakah saya mempunyai TIN secara automatik?",
  "LHDN mendaftarkan TIN secara automatik bagi warganegara dan penduduk tetap Malaysia berumur 18 tahun ke atas, menggunakan data daripada Jabatan Pendaftaran Negara. Orang lain, contohnya yang tiada rekod MyKad, mungkin perlu memohon.",
  "## Cara semak TIN anda",
  "Log masuk ke MyTax di mytax.hasil.gov.my dan gunakan carian TIN. Anda juga boleh melihatnya pada muka hadapan borang cukai pendapatan anda, atau menghubungi Pusat Panggilan HASiL di 03-8911 1000 atau mengunjungi pejabat LHDN.",
  "## Cara mohon TIN",
  "Sejak 1 Januari 2024, individu yang memerlukan TIN memohon secara dalam talian melalui e-Daftar di portal MyTax.",
  "## Kenapa ia penting untuk gaji anda",
  "Majikan menggunakan TIN anda apabila melaporkan PCB (potongan cukai bulanan) kepada LHDN. Untuk melihat berapa cukai yang dihasilkan oleh gaji anda, gunakan kalkulator cukai pendapatan.",
];

const FAQ = [
  {
    q: "Apakah no. cukai pendapatan di Malaysia?",
    a: "Ia ialah Nombor Pengenalan Cukai (TIN). Bagi individu, ia bermula dengan IG diikuti nombor, sehingga 14 aksara kesemuanya.",
  },
  {
    q: "Bagaimana cara semak TIN saya?",
    a: "Log masuk ke MyTax di mytax.hasil.gov.my dan gunakan carian TIN. Anda juga boleh melihatnya pada muka hadapan borang cukai pendapatan atau menghubungi Pusat Panggilan HASiL di 03-8911 1000.",
  },
  {
    q: "Bagaimana cara mohon TIN?",
    a: "Sejak 1 Januari 2024, individu yang memerlukan TIN memohon secara dalam talian melalui e-Daftar di portal MyTax.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/income-tax-number-tin-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/income-tax-number-tin-malaysia",
    },
  },
};

export default function Page() {
  return (
    <MsArticlePage
      path={PATH}
      title={TITLE}
      description={DESCRIPTION}
      publishedDate="2026-10-06"
      dateLabel="6 Oktober 2026"
      breadcrumbName="No. Cukai Pendapatan"
      body={BODY}
      faq={FAQ}
      related={[
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms/pelepasan-cukai-2026", label: "Pelepasan Cukai 2026: Senarai Penuh" },
      ]}
    />
  );
}
