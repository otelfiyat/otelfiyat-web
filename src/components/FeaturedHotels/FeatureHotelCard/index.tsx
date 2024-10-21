import { FeaturedHotel } from "@/lib/types/featured-hotel";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardPrice from "./CardPrice";

const FeaturedHotelCard = (hotel: FeaturedHotel) => {
  return (
    <article className="w-[330px] h-[400px] shadow rounded-lg bg-brand-white overflow-hidden">
      <CardImage {...hotel} />
      <div className="px-4 pt-2 pb-3 flex flex-col justify-between h-[200px]">
        <CardTitle {...hotel} />
        <CardPrice {...hotel} />
      </div>
    </article>
  );
};

export default FeaturedHotelCard;
