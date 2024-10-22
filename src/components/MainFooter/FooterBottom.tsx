import Link from "next/link";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-brand-primary-500">
      <div className="container flex flex-col gap-6 py-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium size-body2 text-brand-primary-100">
            Copyright © {currentYear} otelfiyat.com
          </p>
          <p className="font-medium size-body2 text-brand-primary-100">
            İdeal Tur Seyahat Acentası Belge No:3304
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/kullanim-sozlesmesi"
            className="font-medium size-body2 text-brand-white border-r border-brand-white pr-2"
          >
            Kullanım Sözleşmesi
          </Link>
          <Link
            href="/gizlilik-politikasi"
            className="font-medium size-body2 text-brand-white"
          >
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
