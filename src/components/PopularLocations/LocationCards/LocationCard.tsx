import Image from "next/image";

interface LocationCardProps {
  location: {
    location: string;
    image: string;
  };
  order: number;
}

const LocationCard = ({ location, order }: LocationCardProps) => {
  const additionalClasses = order === 1 ? "sm:row-span-3 sm:h-[600px]" : "";

  return (
    <div
      className={`relative w-full h-[200px]  rounded-xl overflow-hidden ${additionalClasses}`}
    >
      <Image
        src={location.image}
        alt={location.location}
        fill
        objectFit="cover"
      />
      <span className="absolute top-2 left-2 bg-brand-white bg-opacity-80 rounded px-2 py-1 text-brand-primary-700 font-semibold size-caption">
        {location.location}
      </span>
    </div>
  );
};

export default LocationCard;
