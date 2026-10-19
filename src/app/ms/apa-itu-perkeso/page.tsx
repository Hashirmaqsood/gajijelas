import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";
import { socsoEisRows } from "@/lib/content/rateTables";

const PATH = "/ms/apa-itu-perkeso";
const TITLE = "Apa Itu PERKESO? Maksud, Beza dengan SOCSO & EIS";
const DESCRIPTION =
  "PERKESO dan SOCSO ialah organisasi yang sama. Ketahui maksud PERKESO, apa itu EIS, skim yang ditadbir dan caruman pekerja serta majikan.";

const BODY = [
  "Ya, PERKESO dan SOCSO ialah organisasi yang sama. PERKESO bermaksud Pertubuhan Keselamatan Sosial, iaitu nama dalam bahasa Melayu, manakala SOCSO bermaksud Social Security Organisation, iaitu nama dalam bahasa Inggeris. Slip gaji, majikan dan borang kerajaan menggunakan kedua-dua nama ini silih berganti.",
  "## Apa yang ditadbir oleh PERKESO",
  "PERKESO menjalankan perlindungan keselamatan sosial untuk pekerja di bawah tiga undang-undang, seperti dalam jadual di bawah.",
  "## Apa itu EIS?",
  "EIS, atau Sistem Insurans Pekerjaan (SIP), ialah skim yang menyokong pekerja yang kehilangan pekerjaan. Ia dibiayai oleh caruman berasingan daripada pekerja dan majikan. EIS tidak sama dengan caruman SOCSO, tetapi kedua-duanya tertera pada slip gaji anda.",
  "## Berapa caruman pekerja dan majikan?",
  "Caruman SOCSO dan EIS dikira ke atas gaji bulanan sehingga siling RM6,000. Bagi pekerja bawah 60 tahun bergaji RM5,000 sebulan, pekerja membayar RM25.00 SOCSO dan RM10.00 EIS, manakala majikan membayar RM87.50 SOCSO dan RM10.00 EIS. Gaji melebihi RM6,000 tidak menaikkan caruman.",
  "## PERKESO dan KWSP: apa bezanya?",
  "Ramai keliru kerana kedua-duanya tertera pada slip gaji. KWSP (EPF) ialah dana simpanan persaraan: wang itu milik anda dan terkumpul dalam akaun anda sendiri. PERKESO (SOCSO) ialah insurans: caruman dikumpulkan bersama dan faedah dibayar hanya apabila sesuatu kejadian yang dilindungi berlaku, seperti kemalangan di tempat kerja, keilatan atau kehilangan pekerjaan. Potongan SOCSO tidak membina baki yang boleh anda keluarkan.",
  "## Siapa yang mesti mencarum?",
  "SOCSO wajib bagi pekerja yang layak, dan majikan mendaftarkan pekerja serta membayar caruman kepada PERKESO. Bagi warganegara dan pemastautin tetap Malaysia bawah 60 tahun, pekerja dan majikan kedua-duanya mencarum untuk SOCSO dan EIS. Pekerja berumur 60 tahun ke atas dilindungi oleh bahagian bencana kerja sahaja, dibayar oleh majikan pada 1.25%, tanpa EIS. Pekerja asing dilindungi di bawah skim bencana kerja dengan caruman dibayar majikan sebanyak 1.25%, dan mereka berada di luar EIS.",
  "## Contoh caruman mengikut gaji",
  "Jadual menggunakan kadar semasa dan siling gaji RM6,000 bagi pekerja bawah 60 tahun. Jadual rasmi PERKESO mengumpulkan gaji dalam jalur, jadi slip gaji anda boleh berbeza beberapa sen.",
  "## Apa yang dibayar oleh skim ini",
  "Skim Bencana Kerja menyediakan rawatan perubatan dan pampasan selepas kemalangan di tempat kerja. Skim Keilatan menyokong pekerja yang tidak lagi boleh bekerja kerana keilatan, dan turut menyokong tanggungan selepas kematian. EIS memberi sokongan apabila kehilangan pekerjaan, dan panduan cara tuntut EIS kami menerangkan langkahnya. Jumlah faedah dan syarat tepat ditetapkan oleh PERKESO, jadi semak perkeso.gov.my sebelum bergantung pada sesuatu angka.",
  "## LINDUNG 24 Jam: skim terbaharu",
  "Mulai 1 Jun 2026, LINDUNG 24 Jam meluaskan perlindungan kepada kemalangan di luar kerja. Ia dibayar oleh pekerja pada kadar berfasa yang bermula pada 0.75%, dan ia sukarela bagi warganegara serta pemastautin tetap tetapi wajib bagi pekerja asing. Panduan LINDUNG 24 Jam kami menerangkan siapa yang dilindungi dan bagaimana kadar itu berfasa.",
  "## Kekeliruan yang kerap berlaku",
  "Tiga kekeliruan sering timbul. PERKESO dan SOCSO ialah organisasi yang sama, bukan dua. SOCSO bukan simpanan persaraan, itu fungsi KWSP. Dan EIS tidak dibayar jika anda berhenti sendiri atau dibuang kerja kerana salah laku, hanya bagi kehilangan pekerjaan yang bukan pilihan atau kesalahan anda. Bagi SOCSO, majikan membayar bahagian lebih besar daripada pekerja, iaitu 1.75% berbanding 0.5%.",
  "## Kira caruman PERKESO anda sendiri",
  "Gunakan kalkulator PERKESO (SOCSO) untuk melihat jumlah caruman tepat bagi gaji anda, termasuk jadual caruman mengikut gaji.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Apa yang ditadbir oleh PERKESO (SOCSO)",
  headers: ["Skim", "Undang-undang", "Perlindungan"],
  rows: [
    ["Skim Bencana Kerja", "Akta Keselamatan Sosial Pekerja 1969 (Akta 4)", "Kemalangan di tempat kerja"],
    ["Skim Keilatan", "Akta Keselamatan Sosial Pekerja 1969 (Akta 4)", "Keilatan atau kematian yang tidak berkaitan kerja"],
    ["Skim Keselamatan Sosial Pekerjaan Sendiri", "Akta Keselamatan Sosial Pekerjaan Sendiri 2017 (Akta 789)", "Pekerja sendiri"],
    ["Sistem Insurans Pekerjaan (EIS)", "Akta Sistem Insurans Pekerjaan 2017 (Akta 800)", "Sokongan selepas kehilangan pekerjaan"],
  ],
};

const COMPARE: GuideTable = {
  afterIndex: 8,
  caption: "KWSP (EPF) berbanding PERKESO (SOCSO)",
  headers: ["Perkara", "KWSP (EPF)", "PERKESO (SOCSO)"],
  rows: [
    ["Tujuan", "Simpanan persaraan", "Perlindungan insurans sosial"],
    ["Wang milik siapa", "Milik anda, dalam akaun anda sendiri", "Dikumpulkan bersama, dibayar sebagai faedah apabila kejadian yang dilindungi berlaku"],
    ["Bila anda menerimanya", "Semasa bersara atau pengeluaran awal yang diluluskan", "Apabila kejadian yang dilindungi berlaku, seperti kemalangan, keilatan atau kehilangan pekerjaan"],
    ["Kadar pekerja (bawah 60)", "11%", "0.5% SOCSO ditambah 0.2% EIS"],
    ["Kadar majikan", "13% (RM5,000 atau kurang) atau 12%", "1.75% SOCSO ditambah 0.2% EIS"],
  ],
};

const CONTRIB: GuideTable = {
  afterIndex: 12,
  caption: "Caruman SOCSO dan EIS mengikut gaji bulanan (pekerja bawah 60 tahun)",
  headers: ["Gaji bulanan", "SOCSO pekerja", "EIS pekerja", "SOCSO majikan", "EIS majikan"],
  rows: socsoEisRows(),
};

const FAQ = [
  {
    q: "Berapa potongan SOCSO daripada gaji RM3,000?",
    a: "Bagi pekerja bawah 60 tahun, SOCSO ialah 0.5%, iaitu RM15.00, dan EIS ialah 0.2%, iaitu RM6.00, jadi RM21.00 semuanya. Majikan membayar RM52.50 SOCSO dan RM6.00 EIS tambahan.",
  },
  {
    q: "Adakah SOCSO wajib di Malaysia?",
    a: "Ya bagi pekerja yang layak. Majikan mendaftarkan pekerja dan membayar caruman kepada PERKESO. Pekerja berumur 60 tahun ke atas dan pekerja asing mempunyai aturan berbeza seperti diterangkan di atas.",
  },
  {
    q: "Adakah PERKESO sama dengan KWSP?",
    a: "Tidak. KWSP (EPF) ialah dana simpanan persaraan yang membina baki dalam akaun anda sendiri. PERKESO (SOCSO) ialah insurans sosial yang membayar faedah apabila kejadian yang dilindungi seperti kemalangan kerja, keilatan atau kehilangan pekerjaan berlaku.",
  },
  {
    q: "Adakah PERKESO dan SOCSO sama?",
    a: "Ya. PERKESO ialah nama Melayu (Pertubuhan Keselamatan Sosial) dan SOCSO ialah nama Inggeris (Social Security Organisation) bagi organisasi yang sama.",
  },
  {
    q: "Apakah maksud PERKESO?",
    a: "PERKESO bermaksud Pertubuhan Keselamatan Sosial, iaitu Social Security Organisation dalam bahasa Inggeris.",
  },
  {
    q: "Adakah EIS sebahagian daripada PERKESO?",
    a: "Ya. Sistem Insurans Pekerjaan (EIS atau SIP) ditadbir oleh PERKESO di bawah Akta Sistem Insurans Pekerjaan 2017 dan melindungi pekerja yang kehilangan pekerjaan.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/what-is-perkeso-socso-same",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/what-is-perkeso-socso-same",
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
      breadcrumbName="Apa Itu PERKESO"
      body={BODY}
      table={TABLE}
      extraTables={[COMPARE, CONTRIB]}
      updatedDate="2026-10-19"
      updatedLabel="19 Oktober 2026"
      faq={FAQ}
      related={[
        { href: "/ms/eis-perkeso-cara-tuntut", label: "EIS PERKESO: Cara Tuntut Faedah" },
        { href: "/ms/socso-calculator", label: "Kalkulator PERKESO (SOCSO) & EIS" },
        { href: "/ms/epf-calculator", label: "Kalkulator KWSP (EPF)" },
        { href: "/ms", label: "Kalkulator Gaji Malaysia" },
      ]}
    />
  );
}
