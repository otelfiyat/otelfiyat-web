import HeroTitle from "./HeroTitle";
import QuickSearchForm from "./QuickSearchForm";

const Hero = () => {
  return (
    <>
      <div className="border-2 border-brand-primary-200 rounded p-1 my-2 w-fit">
        <p className="text-brand-primary-200 size-caption font-medium">
          İdeal Tur Turizm Tic. A. Ş. - İdeal Tur Seyahat Acentası Belge No:3304
        </p>
      </div>
      <section className="hero overflow-hidden sm:min-h-96 sm:h-fit sm:rounded-xl">
        <div className="hero-overlay bg-hero-bg-overlay" />
        <div className="container flex flex-col gap-12 w-full h-full py-5 sm:flex-row md:px-12 lg:px-18 bg-hero-bg bg-cover bg-center bg-no-repeat">
          <HeroTitle />
          <QuickSearchForm />
        </div>
      </section>
    </>
  );
};

export default Hero;
