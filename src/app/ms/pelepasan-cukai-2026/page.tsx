import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { reliefSavingRows } from "@/lib/content/rateTables";

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
  "## Bajet 2027: pelepasan individu RM12,000",
  "Bajet 2027, dibentangkan pada 9 Oktober 2026, mengumumkan bahawa pelepasan individu asas akan naik daripada RM9,000 kepada RM12,000, bersama pelepasan yang lebih luas untuk penjagaan lepas bersalin, penjagaan ibu bapa dan yuran tuisyen anak. Laporan tidak menyatakan Tahun Taksiran yang terpakai, jadi jumlah dalam jadual kekal untuk TA 2025 sehingga disahkan.",
  "## Pelepasan cukai berbanding rebat cukai",
  "Pelepasan menurunkan pendapatan bercukai anda sebelum cukai dikira. Rebat pula menurunkan cukai itu sendiri: jika pendapatan bercukai anda RM35,000 atau kurang, anda mendapat rebat cukai RM400 yang ditolak selepas cukai anda dikira.",
  "## Lihat kesan pelepasan anda pada cukai",
  "Masukkan pendapatan dan pelepasan anda dalam kalkulator cukai pendapatan kami untuk melihat pendapatan bercukai, cukai bagi setiap jalur dan cukai kena dibayar. Ia menggunakan pelepasan individu, KWSP, SOCSO/EIS, pasangan, anak, gaya hidup, perubatan, perubatan ibu bapa dan SSPN secara automatik. Beberapa pelepasan seperti yuran pendidikan, yuran penjagaan anak, PRS, pengecasan EV dan peralatan penyusuan belum ada dalam kalkulator, jadi cukai sebenar anda mungkin lebih rendah daripada anggaran.",
  "## Semak senarai rasmi sebelum memfailkan",
  "Halaman ini ialah ringkasan. Jumlah dan syarat pelepasan boleh berubah setiap kali Bajet, jadi sahkan dengan jadual pelepasan rasmi LHDN di hasil.gov.my sebelum anda memfailkan.",
  "## Berapa cukai yang sebenarnya dijimatkan oleh pelepasan?",
  "Pelepasan tidak mengurangkan cukai anda sebanyak jumlahnya. Ia mengurangkan pendapatan bercukai, jadi cukai yang dijimatkan sama dengan pelepasan didarab kadar cukai yang anda bayar pada bahagian teratas pendapatan. Jadual menunjukkan berapa yang dijimatkan oleh tambahan pelepasan RM2,500 (contohnya had gaya hidup) pada paras pendapatan berbeza, menggunakan kadar cukai pemastautin semasa. Pada kadar 6% ia menjimatkan RM150, manakala pada 25% ia menjimatkan RM625.",
  "## Cara menuntut pelepasan dalam e-Filing (Borang BE)",
  "Jika satu-satunya pendapatan anda ialah daripada pekerjaan, anda memfailkan Borang BE. Jika anda juga ada pendapatan perniagaan, gunakan Borang B. Bagi TA 2025, iaitu pendapatan yang diperoleh pada 2025, langkahnya ialah:",
  "1. Log masuk MyTax di mytax.hasil.gov.my menggunakan nombor IC dan kata laluan. Pengguna kali pertama perlu mendaftar dahulu.",
  "2. Pilih e-Filing, kemudian borang e-BE bagi Tahun Taksiran yang betul.",
  "3. Semak butiran peribadi dan akaun bank anda. Akaun bank yang salah melambatkan bayaran balik cukai.",
  "4. Masukkan pendapatan anda daripada Borang EA yang diberikan majikan, termasuk jumlah PCB yang dipotong.",
  "5. Tuntut pelepasan anda, hanya setakat jumlah yang anda benar-benar bayar dan dengan resit disimpan.",
  "6. Semak semuanya, hantar, dan simpan slip pengesahan. Jika anda perlu membayar cukai, bayar menggunakan nombor bil melalui ByrHASiL atau bank yang diluluskan.",
  "## Apa yang perlu disediakan sebelum memfailkan",
  "Anda memerlukan Borang EA (majikan mesti mengeluarkannya sebelum akhir Februari), jumlah PCB setahun, dan resit bagi setiap pelepasan yang dituntut. Simpan rekod anda kerana LHDN boleh memintanya kemudian, dan jangkaan umum ialah menyimpannya selama tujuh tahun.",
  "## Tarikh akhir",
  "Bagi TA 2025, tarikh akhir bagi pekerja yang memfailkan Borang BE ialah 15 Mei 2026, selepas LHDN mengalihkannya daripada 30 April. Tarikh akhir bagi TA 2026, yang difailkan pada 2027, belum diumumkan, jadi semak dengan LHDN sebelum memfailkan. Lewat memfailkan boleh menyebabkan penalti di bawah Akta Cukai Pendapatan 1967.",
];

const SAVING: GuideTable = {
  afterIndex: 14,
  caption: "Cukai dijimatkan oleh tambahan pelepasan RM2,500 mengikut pendapatan bercukai (kadar pemastautin)",
  headers: ["Pendapatan bercukai", "Kadar cukai anda", "Cukai dijimatkan oleh pelepasan RM2,500", "Cukai sebelum pelepasan"],
  rows: reliefSavingRows(),
};

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
    q: "Bagaimana cara menuntut pelepasan cukai di Malaysia?",
    a: "Log masuk MyTax, pilih e-Filing dan borang e-BE bagi Tahun Taksiran yang betul, masukkan pendapatan daripada Borang EA, kemudian tuntut setiap pelepasan sehingga had masing-masing dengan resit disimpan. Semak dan hantar, dan simpan slip pengesahan.",
  },
  {
    q: "Berapa cukai yang dijimatkan oleh pelepasan RM2,500?",
    a: "Bergantung pada kadar cukai anda. Pada kadar 6% ia menjimatkan RM150, pada 11% RM275 dan pada 25% RM625, kerana pelepasan mengurangkan pendapatan bercukai dan bukan cukai secara terus.",
  },
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
      extraTables={[SAVING]}
      updatedDate="2026-10-19"
      updatedLabel="19 Oktober 2026"
      faq={FAQ}
      related={[
        { href: "/ms/income-tax-calculator", label: "Kalkulator Cukai Pendapatan" },
        { href: "/ms/pcb-calculator", label: "Kalkulator PCB (MTD)" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}
