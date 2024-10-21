interface SpecialOfferProps {
  text: string;
  emphasis: string;
}

const SpecialOffer = ({ text, emphasis }: SpecialOfferProps) => {
  const textArray = text.split(emphasis);

  return (
    <div className="w-[150px] h-[150px] flex flex-col items-center justify-center rounded-full bg-special-offer select-none">
      <div className="flex flex-col items-center justify-center w-[130px] h-[130px] rounded-full bg-brand-white text-center p-3">
        <span className="font-medium text-brand-neutral-700 size-body2">
          {textArray[0]}
        </span>
        <span className="font-bold text-brand-primary-500 size-body2">
          {emphasis}
        </span>
        <span className="font-medium text-brand-neutral-700 size-body2">
          {textArray[1]}
        </span>
      </div>
    </div>
  );
};

export default SpecialOffer;
