"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

const BrandLogo = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const logo =
    isMobile || isTablet
      ? "/assets/images/logo-mobile.png"
      : "/assets/images/logo.png";

  return (
    <section>
      <Image src={logo} alt="otelfiyat.com" width={230} height={47} />
    </section>
  );
};

export default BrandLogo;
