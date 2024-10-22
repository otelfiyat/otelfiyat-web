import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";

import { FeaturedHotel } from "@/lib/types/featured-hotel";

const CardTitle = ({ location, star, title, features }: FeaturedHotel) => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-5 h-5 text-brand-primary-500" />
          <span className="size-caption text-brand-neutral-800 font-medium pt-[1px]">
            {location}
          </span>
        </div>
        <div className="flex items-center gap-1 bg-brand-primary-50 rounded px-2 py-1">
          <StarIcon className="w-4 h-4 text-brand-primary-500" />
          <span className="size-caption text-brand-neutral-800 font-medium pt-[1px]">
            {star}
          </span>
        </div>
      </div>
      <h3 className="size-body2 text-brand-black font-semibold">{title}</h3>
      <div className="flex gap-2 items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center">
            <span className="size-caption text-brand-neutral-800">
              {feature}
            </span>
            {index !== features.length - 1 && (
              <div className="w-2 h-2 rounded-full bg-brand-primary-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTitle;
