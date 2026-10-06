import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { pcbBySalaryRows } from "@/lib/content/rateTables";

const PATH = "/ms/apa-itu-pcb";
const TITLE = "Apa Itu PCB? Maksud Potongan Cukai Bulanan & Cara Kira";
const DESCRIPTION =
  "PCB (Potongan Cukai Bulanan) ialah cukai pendapatan yang ditolak majikan daripada gaji. Ketahui maksud, cara ia berfungsi dan jumlah PCB mengikut gaji.";

const BODY = [
  "PCB bermaksud Potongan Cukai Bulanan, yang dalam bahasa Inggeris dikenali sebagai MTD (Monthly Tax Deduction). Ia ialah cukai pendapatan yang ditolak majikan daripada gaji anda setiap bulan dan dibayar kepada LHDN bagi pihak anda.",
  "## Bagaimana PCB berfungsi",
  "PCB bukan cukai tambahan. Ia ialah ansuran bagi cukai pendapatan tahunan anda, yang dipecahkan sepanjang tahun. Apabila anda memfailkan borang, cukai akhir anda dibandingkan dengan PCB yang telah dibayar: jika anda terlebih bayar, anda mendapat bayaran balik, dan jika kurang, anda membayar bakinya.",
  "## Apa yang mempengaruhi PCB anda",
  "PCB bergantung pada pendapatan, status perkahwinan, bilangan anak, caruman KWSP dan pelepasan yang anda tuntut. Bulan bonus biasanya mempunyai PCB yang lebih besar kerana pendapatan tambahan itu dicukai pada bulan tersebut.",
  "## PCB pada gaji yang berbeza",
  "Jadual menunjukkan PCB bulanan bagi pekerja Malaysia bujang tanpa anak dengan hanya pelepasan asas.",
  "## Kenapa PCB boleh jadi RM0",
  "Pada pendapatan yang lebih rendah, pelepasan dan rebat cukai RM400 menjadikan cukai anda sifar, jadi tiada PCB ditolak. Pekerja yang berkahwin atau mempunyai anak mula membayar PCB pada gaji yang lebih tinggi.",
  "## Kira PCB anda sendiri",
  "Gunakan kalkulator PCB untuk potongan bulanan tepat anda, atau kalkulator cukai pendapatan untuk cukai tahunan.",
];

const TABLE: GuideTable = {
  afterIndex: 5,
  caption: "PCB bulanan mengikut gaji (bujang, tiada anak)",
  headers: ["Gaji bulanan", "PCB sebulan"],
  rows: pcbBySalaryRows(),
};

const FAQ = [
  {
    q: "Apakah PCB di Malaysia?",
    a: "PCB (Potongan Cukai Bulanan), juga dipanggil MTD (Monthly Tax Deduction), ialah cukai pendapatan yang ditolak majikan daripada gaji bulanan anda dan dibayar kepada LHDN bagi pihak anda.",
  },
  {
    q: "Adakah PCB sama dengan cukai pendapatan?",
    a: "PCB ialah ansuran bagi cukai pendapatan tahunan anda. Cukai akhir dikira apabila anda memfailkan borang, dan sebarang PCB yang dibayar melebihi jumlah itu akan dipulangkan.",
  },
  {
    q: "Boleh dapat balik PCB yang ditolak?",
    a: "Jika PCB yang ditolak sepanjang tahun melebihi cukai akhir anda, bezanya dipulangkan selepas anda memfailkan borang cukai pendapatan.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/what-is-pcb-mtd-malaysia",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/what-is-pcb-mtd-malaysia",
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
      breadcrumbName="Apa Itu PCB"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/gaji-berapa-kena-cukai-pendapatan", label: "Gaji Berapa Kena Cukai?" },
      ]}
    />
  );
}
