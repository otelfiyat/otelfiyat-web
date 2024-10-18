import { HERO_TITLE } from "@/lib/utils/hero-title";

const HeroTitle = () => {
  return (
    <section className="flex flex-col gap-3 sm:justify-center lg:flex-1">
      <h1 className="fw-bold text-brand-white size-title1 sm:size-h5 lg:size-h1">
        <span className="block mb-0.5 font-bold">{HERO_TITLE.title.first}</span>
        <span className="block font-bold">{HERO_TITLE.title.second}</span>
      </h1>

      <h2 className=" text-brand-white text-start leading-relaxed size-body2 sm:size-body2 lg:size-body1">
        {HERO_TITLE.subtitle}
      </h2>
      <button className="btn size-btn w-48 ">Fırsatları İncele</button>
    </section>
  );
};

export default HeroTitle;
