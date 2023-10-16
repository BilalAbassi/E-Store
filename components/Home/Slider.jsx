"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./2.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
