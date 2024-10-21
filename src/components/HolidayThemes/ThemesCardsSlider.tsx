"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import ThemeCard from "./ThemeCard";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useRef } from "react";

interface ThemesCardsSliderProps {
  themes: {
    title: string;
    image: string;
  }[];
}

const ThemesCardsSlider = ({ themes }: ThemesCardsSliderProps) => {
  const swiperRef = useRef<SwiperType>();

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
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
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
      <div className="flex justify-center items-center gap-8 mt-4 sm:justify-start">
        <div className="hidden sm:flex sm:items-center sm:gap-2">
          <button
            className="btn btn-sm btn-circle btn-outline text-brand-white font-bold border-2"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeftIcon className="w-4 h-4 font-bold" />
          </button>
          <button
            className="btn btn-sm btn-circle btn-outline text-brand-white font-bold border-2"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRightIcon className="w-4 h-4 font-bold" />
          </button>
        </div>
        <button className="btn btn-ghost text-brand-white size-title2">
          Tümünü Gör
        </button>
      </div>
    </section>
  );
};

export default ThemesCardsSlider;
