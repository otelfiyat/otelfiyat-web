import Typography from "@/components/UI/Typography";
import Image from "next/image";

const QuickSearchForm = () => {
  return (
    <section className="lg:flex-1">
      <div className="h-[365px] w-full max-w-[430px] sm:w-[335px] mx-auto p-4 bg-brand-neutral-50 rounded-xl">
        <div className="flex gap-2">
          <Image
            src="/assets/icons/building-primary.svg"
            width={18}
            height={18}
            alt="Quick Search"
          />
          <Typography
            variant="h2"
            fs={{ mobile: "body1", tablet: "title2", desktop: "title2" }}
            fw="semibold"
            className="text-brand-primary-500 text-start"
          >
            Hayalindeki Tatili Planla!
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default QuickSearchForm;
