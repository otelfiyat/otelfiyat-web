"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import FeaturedHotelCard from "./FeatureHotelCard";
import { FeaturedHotel } from "@/lib/types/featured-hotel";

import "swiper/css";
import "swiper/css/autoplay";

interface FeaturedHotelsSliderProps {
  featuredHotels: FeaturedHotel[];
}

const FeaturedHotelsSlider = ({
  featuredHotels,
}: FeaturedHotelsSliderProps) => {
  return (
    <section className="my-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1.2}
        spaceBetween={40}
        loop={true}
      >
        {featuredHotels.map((hotel, index) => (
          <SwiperSlide key={index}>
            <FeaturedHotelCard {...hotel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedHotelsSlider;
