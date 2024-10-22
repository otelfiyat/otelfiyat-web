import Image from "next/image";

interface FeatureCardProps {
  card: {
    title: string;
    subtitle: string;
    icon: string;
  };
}

const FeatureCard = ({ card }: FeatureCardProps) => {
  const { title, subtitle, icon } = card;
  return (
    <div className="border border-brand-primary-100 rounded-lg flex gap-3 items-center p-3">
      <div className="flex items-center justify-center h-10 w-10">
        <div className="relative h-7 w-7">
          <Image src={`/assets/icons/${icon}.svg`} alt={title} fill />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="size-body1 font-semibold text-brand-primary-500">
          {title}
        </h2>
        <p className="size-body2 text-brand-neutral-900">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
