"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import ThemeCard from "./ThemeCard";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

interface ThemesCardsSliderProps {
  themes: {
    title: string;
    image: string;
  }[];
}

const ThemesCardsSlider = ({ themes }: ThemesCardsSliderProps) => {
  return (
    <section className="mt-4 sm:mt-0 sm:w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
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
            slidesPerView: 1,
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
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
        }}
      >
        {themes.map((theme, index) => (
          <SwiperSlide key={index}>
            <ThemeCard {...theme} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        <button className="btn btn-ghost text-brand-white size-title2">
          Tümünü Gör
        </button>
      </div>
    </section>
  );
};

export default ThemesCardsSlider;
