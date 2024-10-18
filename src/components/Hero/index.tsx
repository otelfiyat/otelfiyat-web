import Typography from "../UI/Typography";
import HeroTitle from "./HeroTitle";
import QuickSearchForm from "./QuickSearchForm";

const Hero = () => {
  return (
    <>
      <div className="border-2 border-brand-primary-200 rounded p-1 my-2 w-fit">
        <Typography
          variant="p"
          fs={{
            mobile: "caption",
            tablet: "caption",
            desktop: "caption",
          }}
          fw="medium"
          className="text-brand-primary-200"
        >
          İdeal Tur Turizm Tic. A. Ş. - İdeal Tur Seyahat Acentası Belge No:3304
        </Typography>
      </div>
      <section className="hero min-h-screen overflow-hidden sm:min-h-96 sm:h-fit sm:rounded-xl">
        <div className="hero-overlay bg-hero-bg-overlay"/>
        <div className="container flex flex-col gap-4 w-full h-full py-5 sm:flex-row md:px-12 lg:px-18">
          <HeroTitle />
          <QuickSearchForm />
        </div>
      </section>
    </>
  );
};

export default Hero;
