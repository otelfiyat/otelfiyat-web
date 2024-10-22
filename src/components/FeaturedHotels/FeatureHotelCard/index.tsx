import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardPrice from "./CardPrice";
import { FeaturedHotel } from "@/lib/types/featured-hotel";

const FeaturedHotelCard = (hotel: FeaturedHotel) => {
  return (
    <article className="w-[300px] h-[400px] rounded-lg border border-brand-primary-50 bg-brand-white overflow-hidden">
      <CardImage {...hotel} />
      <div className="px-4 pt-2 pb-3 flex flex-col justify-between h-[200px]">
        <CardTitle {...hotel} />
        <CardPrice {...hotel} />
      </div>
    </article>
  );
};

export default FeaturedHotelCard;
