import type { Metadata } from "next";
import MsArticlePage from "@/components/content/MsArticlePage";
import type { GuideTable } from "@/lib/content/guides";

const PATH = "/ms/semak-penyata-kwsp";
const TITLE = "Semak Penyata & Baki KWSP: Cara i-Akaun, Kiosk, IC";
const DESCRIPTION =
  "Cara rasmi semak baki dan penyata KWSP: aplikasi i-Akaun, laman web i-Akaun, kiosk KWSP dan kaunter. Boleh semak guna IC sahaja? Ini jawapannya.";

const BODY = [
  "Anda boleh menyemak baki dan penyata KWSP melalui i-Akaun, iaitu akaun dalam talian KWSP, atau secara terus di KWSP. Anda akan melihat baki bagi ketiga-tiga akaun anda: Akaun Persaraan, Akaun Sejahtera dan Akaun Fleksibel.",
  "## Cara semak baki KWSP",
  "Jadual di bawah menyenaraikan pilihan rasmi dan apa yang anda perlukan bagi setiap satu.",
  "## Boleh semak KWSP guna IC sahaja?",
  "Tidak di laman web biasa. Baki anda ialah maklumat peribadi, jadi saluran dalam talian rasmi memerlukan log masuk i-Akaun, manakala saluran di kaunter atau kiosk menggunakan MyKad anda. Berhati-hati dengan laman web pihak ketiga yang meminta nombor IC atau maklumat peribadi untuk \"semak KWSP\".",
  "## Daftar i-Akaun kali pertama",
  "Warganegara Malaysia dan penduduk tetap boleh mendaftar melalui aplikasi i-Akaun KWSP. Anda mengimbas MyKad, mengambil swafoto untuk mengesahkan identiti (e-KYC), kemudian mencipta ID pengguna dan kata laluan.",
  "## Muat turun penyata",
  "Di laman web i-Akaun, buka ringkasan akaun anda, pilih tahun yang dikehendaki dan muat turun penyata. Simpan penyata anda kerana ia berguna semasa memohon pinjaman atau merancang persaraan.",
  "## Rancang dengan baki anda",
  "Selepas mengetahui baki anda, gunakan kalkulator persaraan EPF untuk melihat unjuran pertumbuhannya bersama dividen sehingga bersara.",
];

const TABLE: GuideTable = {
  afterIndex: 2,
  caption: "Cara rasmi semak baki KWSP",
  headers: ["Cara", "Apa yang diperlukan", "Catatan"],
  rows: [
    ["Aplikasi i-Akaun", "Telefon pintar dan MyKad (pendaftaran kali pertama)", "Baki ketiga-tiga akaun"],
    ["Laman web i-Akaun", "ID pengguna dan kata laluan i-Akaun", "Muat turun penyata mengikut tahun"],
    ["Kiosk layan diri KWSP", "MyKad anda", "Di cawangan KWSP"],
    ["Kaunter KWSP", "Dokumen pengenalan anda", "Minta kakitangan untuk penyata"],
  ],
};

const FAQ = [
  {
    q: "Bagaimana cara semak baki KWSP?",
    a: "Log masuk i-Akaun melalui aplikasi atau laman web KWSP, atau gunakan kiosk layan diri KWSP dengan MyKad. Anda akan melihat baki Akaun Persaraan, Akaun Sejahtera dan Akaun Fleksibel.",
  },
  {
    q: "Boleh semak baki KWSP guna IC sahaja?",
    a: "Bukan melalui saluran dalam talian rasmi. Anda memerlukan log masuk i-Akaun, atau boleh menggunakan kiosk KWSP dengan MyKad. Elakkan laman web pihak ketiga yang meminta nombor IC.",
  },
  {
    q: "Bagaimana cara dapatkan penyata KWSP?",
    a: "Log masuk ke laman web i-Akaun, pilih tahun dan muat turun penyata, atau mintanya di kiosk atau kaunter KWSP.",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      "en-MY": "https://gajijelas.com/guides/how-to-check-epf-balance-statement",
      "ms-MY": `https://gajijelas.com${PATH}`,
      "x-default": "https://gajijelas.com/guides/how-to-check-epf-balance-statement",
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
      breadcrumbName="Semak Penyata KWSP"
      body={BODY}
      table={TABLE}
      faq={FAQ}
      related={[
        { href: "/ms/epf-retirement-calculator", label: "Kalkulator Persaraan & Dividen EPF" },
        { href: "/ms/epf-calculator", label: "Kalkulator KWSP (EPF)" },
        { href: "/ms/epf-account-split-calculator", label: "Pecahan Akaun EPF" },
      ]}
    />
  );
}
