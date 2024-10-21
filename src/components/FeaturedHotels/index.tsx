import { FeaturedHotel } from "@/lib/types/featured-hotel";
import FeaturedHotelsSlider from "./FeaturedHotelsSlider";
import HotelTypeSelector from "./HotelTypeSelector";

interface FeaturedHotelsProps {
  featuredHotels: FeaturedHotel[];
}

const FeaturedHotels = ({ featuredHotels }: FeaturedHotelsProps) => {
  return (
    <HotelTypeSelector>
      <FeaturedHotelsSlider featuredHotels={featuredHotels} />
    </HotelTypeSelector>
  );
};

export default FeaturedHotels;
