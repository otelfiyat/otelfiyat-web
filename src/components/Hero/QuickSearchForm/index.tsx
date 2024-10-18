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
          <h2 className="text-brand-primary-500 text-start size-body1 sm:size-title2 font-semibold ">
            Hayalindeki Tatili Planla!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default QuickSearchForm;
