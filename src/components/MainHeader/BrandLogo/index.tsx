"use client";

import Image from "next/image";

import { useMediaQuery } from "usehooks-ts";

const BrandLogo = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const logo = isTablet
    ? "/assets/images/logo-mobile.png"
    : "/assets/images/logo.png";

  return (
    <section>
      <Image src={logo} alt="otelfiyat.com" width={230} height={47} />
    </section>
  );
};

export default BrandLogo;
