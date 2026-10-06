import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/pelepasan-cukai-2026";
const TITLE = "Pelepasan Cukai 2026 (TA 2025): Senarai Penuh & Jumlah";
const DESCRIPTION =
  "Senarai pelepasan cukai individu LHDN bagi TA 2025 (difailkan 2026) dengan jumlah: individu, KWSP, gaya hidup, perubatan, anak, ibu bapa dan lagi.";

const BODY = [
  "\"Pelepasan cukai 2026\" biasanya bermaksud pelepasan yang anda tuntut apabila memfailkan cukai pada 2026. Itu ialah Tahun Taksiran (TA) 2025, iaitu pendapatan yang anda peroleh pada 2025. Pelepasan mengurangkan pendapatan bercukai anda, jadi cukai dikira ke atas jumlah yang lebih kecil. Jadual di bawah menyenaraikan pelepasan peribadi utama LHDN bagi TA 2025 beserta had masing-masing.",
  "## Senarai pelepasan cukai individu (TA 2025)",
  "Setiap jumlah ialah had maksimum yang boleh dituntut. Bagi kebanyakan pelepasan, anda memerlukan resit dan hanya boleh menuntut jumlah yang sebenar dibayar, sehingga had tersebut. Sesetengah item mempunyai sub-had yang lebih kecil dalam had keseluruhan.",
  "## Apa yang berubah bagi TA 2025",
  "Berikutan Bajet 2025, pelepasan bagi individu kurang upaya dinaikkan daripada RM6,000 kepada RM7,000 dan pelepasan bagi pasangan kurang upaya dinaikkan daripada RM5,000 kepada RM6,000. Pelepasan bagi anak belum berkahwin yang kurang upaya dinaikkan daripada RM6,000 kepada RM8,000.",
  "## Pelepasan cukai berbanding rebat cukai",
  "Pelepasan menurunkan pendapatan bercukai anda sebelum cukai dikira. Rebat pula menurunkan cukai itu sendiri: jika pendapatan bercukai anda RM35,000 atau kurang, anda mendapat rebat cukai RM400 yang ditolak selepas cukai anda dikira.",
  "## Lihat kesan pelepasan anda pada cukai",
  "Masukkan pendapatan dan pelepasan anda dalam kalkulator cukai pendapatan kami untuk melihat pendapatan bercukai, cukai bagi setiap jalur dan cukai kena dibayar. Ia menggunakan pelepasan individu, KWSP, SOCSO/EIS, pasangan, anak, gaya hidup, perubatan, perubatan ibu bapa dan SSPN secara automatik. Beberapa pelepasan seperti yuran pendidikan, yuran penjagaan anak, PRS, pengecasan EV dan peralatan penyusuan belum ada dalam kalkulator, jadi cukai sebenar anda mungkin lebih rendah daripada anggaran.",
  "## Semak senarai rasmi sebelum memfailkan",
  "Halaman ini ialah ringkasan. Jumlah dan syarat pelepasan boleh berubah setiap kali Bajet, jadi sahkan dengan jadual pelepasan rasmi LHDN di hasil.gov.my sebelum anda memfailkan.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Pelepasan cukai individu, TA 2025",
  headers: ["Pelepasan", "Maksimum (RM)", "Catatan"],
  rows: [
    ["Individu", "9,000", "Automatik, tanpa resit"],
    ["Individu kurang upaya", "7,000", "Naik daripada 6,000; pengesahan JKM"],
    ["Suami/isteri atau nafkah", "4,000", "Pasangan tiada pendapatan"],
    ["Suami/isteri kurang upaya", "6,000", "Naik daripada 5,000"],
    ["Anak bawah 18 tahun", "2,000 setiap anak", "Belum berkahwin"],
    ["Anak 18+ dalam pendidikan sepenuh masa", "2,000 setiap anak", "A-level, sijil, matrikulasi"],
    ["Anak 18+ diploma ke atas", "8,000 setiap anak", "Pendidikan tinggi"],
    ["Anak kurang upaya", "8,000", "Naik daripada 6,000"],
    ["Caruman KWSP", "4,000", "Caruman anda sendiri"],
    ["Insurans nyawa atau takaful", "3,000", "Premium yang dibayar"],
    ["SOCSO dan EIS", "350", "Caruman anda sendiri"],
    ["Gaya hidup", "2,500", "Buku, peranti, internet, kursus kemahiran"],
    ["Peralatan sukan dan gim", "1,000", "Berasingan daripada gaya hidup"],
    ["Perbelanjaan perubatan", "10,000", "Penyakit serius, kesuburan, pergigian, vaksin, kesihatan mental; ada sub-had"],
    ["Penjagaan perubatan ibu bapa", "8,000", "Rawatan, keperluan khas atau penjaga"],
    ["Yuran pendidikan (sendiri)", "7,000", "Kursus peningkatan kemahiran sehingga 2,000"],
    ["Simpanan bersih SSPN", "8,000", "Simpanan bersih dalam tahun itu"],
    ["PRS", "3,000", "Skim Persaraan Swasta"],
    ["Yuran penjagaan anak atau tadika", "3,000", "Anak berumur 6 tahun ke bawah"],
    ["Peralatan penyusuan", "1,000", "Sekali setiap 2 tahun"],
    ["Kemudahan pengecasan EV", "2,500", "Dilanjutkan hingga TA 2027"],
  ],
};

const FAQ = [
  {
    q: "Berapakah pelepasan cukai individu di Malaysia?",
    a: "RM9,000 bagi TA 2025. Ia automatik, jadi anda tidak perlu resit untuk menuntutnya.",
  },
  {
    q: "Apakah beza pelepasan cukai dan rebat cukai?",
    a: "Pelepasan mengurangkan pendapatan bercukai anda sebelum cukai dikira. Rebat mengurangkan cukai itu sendiri. Jika pendapatan bercukai anda RM35,000 atau kurang, anda mendapat rebat RM400.",
  },
  {
    q: "Tahun manakah yang dimaksudkan dengan \"pelepasan cukai 2026\"?",
    a: "Tuntutan yang anda buat apabila memfailkan pada 2026 ialah bagi Tahun Taksiran 2025, iaitu pendapatan yang diperoleh pada 2025. Pelepasan bagi pendapatan 2026 dituntut apabila anda memfailkan pada 2027.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/tax-relief-2026-malaysia-ya-2025",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/tax-relief-2026-malaysia-ya-2025",
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
      breadcrumbName="Pelepasan Cukai 2026"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}
