"use client";
import { useState } from "react";

import FeaturedHotelsSlider from "./FeaturedHotelsSlider";
import HotelTypeSelector from "./HotelTypeSelector";

import { FeaturedHotel } from "@/lib/types/featured-hotel";

interface FeaturedHotelsProps {
  featuredHotels: FeaturedHotel[];
}

const FeaturedHotels = ({ featuredHotels }: FeaturedHotelsProps) => {
  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <section className="container flex flex-col gap-2 select-none">
      <HotelTypeSelector showMore={showMore} toggle={toggle} />
      <FeaturedHotelsSlider
        showMore={showMore}
        featuredHotels={featuredHotels}
      />
    </section>
  );
};

export default FeaturedHotels;
