import Image from "next/image";

const BadgesContainer = () => {
  return (
    <div className="container flex flex-wrap items-center justify-between gap-4 py-5 border-t border-brand-primary-50 md:items-start">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/payments.svg"
          alt="Visa"
          width={180}
          height={40}
        />
      </div>
      <div className="flex items-start gap-4">
        <a
          href="https://etbis.eticaret.gov.tr/sitedogrulama/4244776244552108"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/images/etbis.jpg"
            alt="Visa"
            width={60}
            height={60}
          />
        </a>
        <a
          href="https://www.tursab.org.tr/tr/ddsv"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/images/tursab.png"
            alt="Visa"
            width={130}
            height={60}
          />
        </a>
      </div>
    </div>
  );
};

export default BadgesContainer;
