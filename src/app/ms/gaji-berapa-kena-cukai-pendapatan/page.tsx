import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { taxBySalaryRows } from "@/lib/content/taxBySalary";

const PATH = "/ms/gaji-berapa-kena-cukai-pendapatan";
const TITLE = "Gaji Berapa Kena Cukai Pendapatan? Jadual Mengikut Gaji";
const DESCRIPTION =
  "Gaji berapa perlu bayar cukai pendapatan di Malaysia? Lihat cukai tahunan bagi setiap gaji bulanan untuk pekerja bujang, dikira daripada kadar LHDN.";

const BODY = [
  "Cukai pendapatan di Malaysia tidak dikenakan ke atas gaji kasar anda. Ia dikenakan ke atas pendapatan bercukai, iaitu pendapatan setahun ditolak pelepasan cukai, dan kadarnya meningkat mengikut jalur dari 0% hingga 30%. Gaji yang lebih rendah boleh bermakna tiada cukai langsung.",
  "## Cukai mengikut gaji bulanan (pekerja bujang, TA 2025)",
  "Jadual menunjukkan cukai pendapatan tahunan bagi pekerja Malaysia bujang tanpa anak, dengan hanya pelepasan individu serta pelepasan KWSP dan SOCSO/EIS, selepas rebat RM400. Pekerja yang sudah berkahwin atau mempunyai anak membayar lebih rendah kerana mempunyai lebih banyak pelepasan.",
  "## Kenapa gaji lebih tinggi tidak bermakna semua pendapatan dicukai pada kadar tertinggi",
  "Setiap kadar hanya dikenakan ke atas bahagian pendapatan bercukai dalam jalur itu. Sebagai contoh, RM5,000 pertama dicukai 0% dan RM15,000 seterusnya 1%, jadi pendapatan tambahan hanya menaikkan cukai ke atas bahagian tambahan itu, bukan ke atas semuanya.",
  "## PCB tidak sama dengan cukai akhir anda",
  "PCB (potongan cukai bulanan) yang ditolak daripada gaji anda ialah ansuran. Cukai pendapatan akhir anda dikira apabila anda memfailkan borang, dan sebarang PCB yang dibayar melebihi jumlah itu akan dipulangkan.",
  "## Semak angka anda sendiri",
  "Masukkan pendapatan tahunan dan pelepasan anda dalam kalkulator cukai pendapatan untuk cukai tepat, atau gunakan kalkulator PCB untuk potongan bulanan.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Cukai pendapatan tahunan mengikut gaji bulanan",
  headers: ["Gaji bulanan", "Pendapatan bercukai", "Cukai tahunan", "Purata sebulan"],
  rows: taxBySalaryRows(),
};

const FAQ = [
  {
    q: "Gaji berapa mula kena bayar cukai pendapatan di Malaysia?",
    a: "Bergantung pada pelepasan anda. Dalam jadual di atas, pekerja bujang tanpa anak dengan pelepasan asas sahaja membayar cukai RM0 pada gaji RM3,000 sebulan dan mula membayar sedikit pada kira-kira RM3,500. Pekerja yang berkahwin atau mempunyai anak mula membayar pada gaji yang lebih tinggi.",
  },
  {
    q: "Adakah cukai pendapatan dikenakan ke atas gaji kasar?",
    a: "Tidak. Ia dikenakan ke atas pendapatan bercukai, iaitu pendapatan anda ditolak pelepasan cukai seperti pelepasan individu RM9,000 dan caruman KWSP anda.",
  },
  {
    q: "Adakah gaji lebih tinggi bermakna semua pendapatan dicukai pada kadar lebih tinggi?",
    a: "Tidak. Malaysia menggunakan jalur progresif, jadi setiap kadar hanya dikenakan ke atas bahagian pendapatan bercukai yang berada dalam jalur itu.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/income-tax-malaysia-what-salary-is-taxable",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/income-tax-malaysia-what-salary-is-taxable",
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
      breadcrumbName="Gaji Berapa Kena Cukai"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms/pelepasan-cukai-2026", label: "Pelepasan Cukai 2026: Senarai Penuh" },
      ]}
    />
  );
}
