import Typography from "../UI/Typography";

interface SpecialOfferProps {
  text: string;
  emphasis: string;
}

const SpecialOffer = ({ text, emphasis }: SpecialOfferProps) => {
  const textArray = text.split(emphasis);

  return (
    <div className="w-[150px] h-[150px] flex flex-col items-center justify-center rounded-full bg-special-offer">
      <div className="flex flex-col items-center justify-center w-[130px] h-[130px] rounded-full bg-brand-white text-center p-3">
        <Typography
          variant="span"
          fs={{
            mobile: "caption",
            tablet: "caption",
            desktop: "caption",
          }}
          fw="medium"
          className="text-brand-neutral-700"
        >
          {textArray[0]}
        </Typography>
        <Typography
          variant="span"
          fs={{
            mobile: "body2",
            tablet: "body2",
            desktop: "body2",
          }}
          fw="bold"
          className="text-brand-primary-500"
        >
          {emphasis}
        </Typography>

        <Typography
          variant="span"
          fs={{
            mobile: "caption",
            tablet: "caption",
            desktop: "caption",
          }}
          fw="medium"
          className="text-brand-neutral-700"
        >
          {textArray[1]}
        </Typography>
      </div>
    </div>
  );
};

export default SpecialOffer;
