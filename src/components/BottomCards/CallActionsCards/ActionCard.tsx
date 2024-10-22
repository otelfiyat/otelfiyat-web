import Image from "next/image";

interface ActionCardProps {
  title: string;
  button: string;
  icon: string;
}

const ActionCard = ({ title, button, icon }: ActionCardProps) => {
  return (
    <div className="flex flex-col gap-5 items-start justify-between bg-brand-white rounded-xl p-3">
      <div className="flex items-center gap-3">
        <Image
          src={`/assets/images/${icon}.svg`}
          width={64}
          height={64}
          alt={icon}
        />
        <h2 className="font-medium size-body2 lg:size-body1 xl:size-title2 text-brand-neutral-900">
          {title}
        </h2>
      </div>
      <button className="btn btn-secondary btn-outline size-btn min-w-48">
        {button}
      </button>
    </div>
  );
};

export default ActionCard;
