"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import FeaturedHotelCard from "./FeatureHotelCard";
import { FeaturedHotel } from "@/lib/types/featured-hotel";

import "swiper/css";
import "swiper/css/autoplay";

interface FeaturedHotelsSliderProps {
  featuredHotels: FeaturedHotel[];
  showMore: boolean;
}

const FeaturedHotelsSlider = ({
  featuredHotels,
  showMore,
}: FeaturedHotelsSliderProps) => {
  const visibleHotels = showMore ? featuredHotels : featuredHotels.slice(0, 4);

  return (
    <>
      <section className="my-4 2xl:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.3}
          spaceBetween={40}
          loop={true}
          breakpoints={{
            400: {
              slidesPerView: 1.35,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            475: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3.7,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {featuredHotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <FeaturedHotelCard {...hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="hidden 2xl:grid 2xl:grid-cols-4 2xl:gap-y-4">
        {visibleHotels.map((hotel, index) => (
          <FeaturedHotelCard key={index} {...hotel} />
        ))}
      </section>
    </>
  );
};

export default FeaturedHotelsSlider;
