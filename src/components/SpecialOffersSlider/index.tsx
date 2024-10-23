"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import SpecialOffer from "./SpecialOffer";

import "swiper/css";
import "swiper/css/autoplay";

type SpecialOffer = {
  text: string;
  emphasis: string;
};
interface SpecialOffersSliderProps {
  specialOffers: SpecialOffer[];
}

const SpecialOffersSlider = ({ specialOffers }: SpecialOffersSliderProps) => {
  return (
    <section className="container my-10 select-none z-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2.5}
        spaceBetween={40}
        breakpoints={{
          480: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },

          1024: {
            slidesPerView: 4.5,
            spaceBetween: 0,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1536: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        loop={true}
      >
        {specialOffers.map((item, index) => (
          <SwiperSlide key={index}>
            <SpecialOffer text={item.text} emphasis={item.emphasis} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SpecialOffersSlider;
