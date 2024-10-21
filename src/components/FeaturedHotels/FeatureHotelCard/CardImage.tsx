import Image from "next/image";
import { FeaturedHotel } from "@/lib/types/featured-hotel";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { HeartIcon as Unliked } from "@heroicons/react/24/outline";
import { HeartIcon as Liked } from "@heroicons/react/24/solid";

const CardImage = ({ image, title, tag, like }: FeaturedHotel) => {
  return (
    <div className="relative w-full h-1/2 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={330}
        height={200}
        className="object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-brand-white bg-opacity-80 flex items-center gap-1">
        <SparklesIcon className="w-4 h-4 text-brand-primary-700" />
        <span className="size-caption text-brand-primary-700 font-semibold">
          {tag}
        </span>
      </div>
      <div className="absolute top-2 right-2 w-7 h-7 rounded-md bg-brand-white bg-opacity-80 flex items-center justify-center gap-1">
        {like ? (
          <Liked className="w-4 h-4 text-brand-primary-700" />
        ) : (
          <Unliked className="w-4 h-4 text-brand-primary-700" />
        )}
      </div>
    </div>
  );
};

export default CardImage;
