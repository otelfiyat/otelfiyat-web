import { FeaturedHotel } from "@/lib/types/featured-hotel";
import FeaturedHotelsSlider from "./FeaturedHotelsSlider";
import HotelTypeSelector from "./HotelTypeSelector";

interface FeaturedHotelsProps {
  featuredHotels: FeaturedHotel[];
}

const FeaturedHotels = ({ featuredHotels }: FeaturedHotelsProps) => {
  return (
    <section className="flex flex-col gap-2 min-h-screen">
      <HotelTypeSelector />
      <FeaturedHotelsSlider featuredHotels={featuredHotels} />
    </section>
  );
};

export default FeaturedHotels;
