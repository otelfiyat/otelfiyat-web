import FeaturedHotelsSlider from "./FeaturedHotelsSlider";
import HotelTypeSelector from "./HotelTypeSelector";
import { FeaturedHotel } from "@/lib/types/featured-hotel";

interface FeaturedHotelsProps {
  featuredHotels: FeaturedHotel[];
}

const FeaturedHotels = ({ featuredHotels }: FeaturedHotelsProps) => {
  return (
    <section className="container flex flex-col gap-2 select-none">
      <HotelTypeSelector />
      <FeaturedHotelsSlider featuredHotels={featuredHotels} />
    </section>
  );
};

export default FeaturedHotels;
