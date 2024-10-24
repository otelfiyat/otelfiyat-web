import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <section>
      <Link href="/">
        <Image
          src="/assets/images/logo-mobile.svg"
          alt="otelfiyat.com"
          width={230}
          height={47}
        />
      </Link>
    </section>
  );
};

export default BrandLogo;
