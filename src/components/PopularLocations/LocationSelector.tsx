"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { POPULAR_LOCATIONS } from "@/lib/utils/popular-locations";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    POPULAR_LOCATIONS[0].value
  );

  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={3.2}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 11,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 12,
            spaceBetween: 10,
          },
        }}
      >
        {POPULAR_LOCATIONS.map((location, index) => (
          <SwiperSlide key={index}>
            <button
              key={location.value}
              className={`w-24 btn btn-primary size-btn ${
                selectedLocation === location.value
                  ? "btn-primary-active"
                  : "btn-outline"
              }`}
              onClick={() => setSelectedLocation(location.value)}
            >
              {location.label}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LocationSelector;
