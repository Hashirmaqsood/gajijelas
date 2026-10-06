import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/akta-kerja-1955-hak-pekerja";
const TITLE = "Akta Kerja 1955: Ringkasan Hak Pekerja Terkini";
const DESCRIPTION =
  "Ringkasan Akta Kerja 1955 selepas pindaan 2022: waktu bekerja, kerja lebih masa, cuti, notis, cuti bersalin dan cuti paterniti.";

const BODY = [
  "Akta Kerja 1955 menetapkan syarat pekerjaan minimum di Malaysia. Sejak 1 Januari 2023, ia terpakai kepada semua pekerja tanpa mengira gaji, walaupun sesetengah peruntukan seperti kerja lebih masa dan faedah penamatan hanya terpakai kepada pekerja bergaji RM4,000 sebulan atau kurang (dan pekerja manual).",
  "## Hak pekerja utama sepintas lalu",
  "Jadual meringkaskan syarat minimum utama. Kontrak anda boleh memberi lebih daripada Akta, tetapi tidak boleh kurang.",
  "## Apa yang diubah oleh pindaan 2022",
  "Akta Kerja (Pindaan) 2022, berkuat kuasa 1 Januari 2023, mengurangkan waktu bekerja biasa seminggu kepada 45 jam, melanjutkan cuti bersalin kepada 98 hari, memperkenalkan 7 hari cuti paterniti dan memberi pekerja hak untuk memohon kerja fleksibel.",
  "## Semak hak anda sendiri",
  "Gunakan kalkulator OT, cuti tahunan dan gaji pro-rata untuk menukar syarat minimum ini kepada angka anda sendiri.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Akta Kerja 1955: syarat minimum utama",
  headers: ["Perkara", "Peruntukan"],
  rows: [
    ["Siapa dilindungi", "Semua pekerja sejak 1 Januari 2023; peruntukan kerja lebih masa dan faedah penamatan hanya bagi gaji RM4,000 sebulan atau kurang"],
    ["Waktu bekerja", "Sehingga 8 jam sehari dan 45 jam seminggu"],
    ["Kerja lebih masa", "1.5 kali kadar sejam pada hari biasa; kadar lebih tinggi pada hari rehat dan cuti umum"],
    ["Cuti tahunan", "8 hari (bawah 2 tahun), 12 hari (2 hingga bawah 5 tahun), 16 hari (5 tahun atau lebih)"],
    ["Cuti sakit", "14, 18 atau 22 hari mengikut tempoh khidmat, dan sehingga 60 hari jika dimasukkan ke hospital"],
    ["Cuti umum bergaji", "11 hari setahun, termasuk 5 yang tetap: Hari Kebangsaan, Hari Pekerja, Hari Malaysia, Hari Keputeraan Agong dan Hari Keputeraan Sultan atau Yang di-Pertua Negeri"],
    ["Cuti bersalin", "98 hari berturut-turut"],
    ["Cuti paterniti", "7 hari berturut-turut bagi pekerja lelaki berkahwin dengan sekurang-kurangnya 12 bulan perkhidmatan"],
    ["Notis penamatan", "4, 6 atau 8 minggu jika kontrak tidak menyatakannya"],
    ["Kerja fleksibel", "Hak untuk memohon; majikan mesti memberi alasan dalam 60 hari jika menolak"],
  ],
};

const FAQ = [
  {
    q: "Adakah Akta Kerja 1955 terpakai kepada semua orang di Malaysia?",
    a: "Sejak 1 Januari 2023 ia terpakai kepada semua pekerja tanpa mengira gaji, tetapi peruntukan kerja lebih masa dan faedah penamatan hanya terpakai kepada pekerja bergaji RM4,000 sebulan atau kurang dan pekerja manual.",
  },
  {
    q: "Berapa jam seminggu saya boleh diminta bekerja?",
    a: "Waktu bekerja biasa seminggu ialah maksimum 45 jam, dan tidak lebih 8 jam sehari.",
  },
  {
    q: "Berapa hari cuti bersalin di Malaysia?",
    a: "98 hari berturut-turut di bawah Akta Kerja, selepas pindaan 2022 yang berkuat kuasa pada 1 Januari 2023.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/employment-act-1955-employee-rights-summary",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/employment-act-1955-employee-rights-summary",
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
      breadcrumbName="Akta Kerja 1955"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/overtime-calculator", label: "Kalkulator OT & Kiraan Kerja Lebih Masa" },
        { href: "/ms/annual-leave-calculator", label: "Kalkulator Cuti Tahunan" },
        { href: "/ms/notis-berhenti-kerja", label: "Notis Berhenti Kerja" },
      ]}
    />
  );
}
