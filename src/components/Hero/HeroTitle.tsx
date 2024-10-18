"use client";

import { HERO_TITLE } from "@/lib/utils/hero-title";
import Typography from "../UI/Typography";

const HeroTitle = () => {
  return (
    <section className="flex flex-col gap-3 sm:justify-center lg:flex-1">
      <h1 className="fw-bold text-brand-white text-xl sm:text-3xl lg:text-7xl">
        <span className="block mb-0.5 font-bold">{HERO_TITLE.title.first}</span>
        <span className="block font-bold">{HERO_TITLE.title.second}</span>
      </h1>
      <Typography
        variant="h2"
        fs={{ mobile: "body2", tablet: "body2", desktop: "body1" }}
        className="text-brand-white text-start leading-relaxed"
      >
        {HERO_TITLE.subtitle}
      </Typography>
      <button className="btn w-48 max-h-10 min-h-10 mt-2">
        <Typography
          variant="span"
          fw="semibold"
          fs={{ mobile: "body1", tablet: "body1", desktop: "body1" }}
          className="text-brand-primary-600"
        >
          Fırsatları İncele
        </Typography>
      </button>
    </section>
  );
};

export default HeroTitle;
