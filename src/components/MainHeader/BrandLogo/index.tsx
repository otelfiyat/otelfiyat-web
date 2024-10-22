"use client";

import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";

const BrandLogo = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const logo = isTablet
    ? "/assets/images/logo-mobile.svg"
    : "/assets/images/logo-desktop.svg";

  return (
    <section>
      <Link href="/">
        <Image src={logo} alt="otelfiyat.com" width={230} height={47} />
      </Link>
    </section>
  );
};

export default BrandLogo;
