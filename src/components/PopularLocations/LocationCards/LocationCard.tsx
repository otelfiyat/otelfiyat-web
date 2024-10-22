import Image from "next/image";

interface LocationCardProps {
  location: {
    location: string;
    image: string;
  };
  order: number;
}

const LocationCard = ({ location, order }: LocationCardProps) => {
  const additionalClasses =
    order === 1
      ? "sm:col-span-2 sm:row-span-3 sm:h-[470px] lg:h-[550px] lg:col-span-1 lg:row-span-2"
      : order === 4
      ? "sm:mb-[16px] sm:h-[146px] lg:h-[266px] lg:col-span-2"
      : "sm:mb-[16px] sm:h-[146px] lg:h-[266px]";

  return (
    <div
      className={`relative w-full h-[200px] rounded-xl shadow overflow-hidden ${additionalClasses}`}
    >
      <Image src={location.image} alt={location.location} fill />
      <span className="absolute top-2 left-2 bg-brand-white bg-opacity-80 rounded px-2 py-1 text-brand-primary-700 font-semibold size-caption">
        {location.location}
      </span>
    </div>
  );
};

export default LocationCard;
