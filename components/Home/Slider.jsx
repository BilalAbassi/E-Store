"use client"
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../public/1.jpg";
import image2 from "../../public/2.jpeg";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Slider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    // Enable autoplay
    swiper.autoplay.start();
  }, []);
  return (
    <>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        Autoplay={{ Delay: 1500 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="max-w-[4000px]"
      >
        <SwiperSlide>
          <div>
            <Image
              src={image1}
              className="w-[426px] h-[190px] md:w-[768px] md:h-[240px] lg:w-[1024px]
               lg:h-[320px] xl:w-[1440px] xl:h-[450px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={image2}
              className="w-[426px] h-[190px] md:w-[768px] md:h-[240px] lg:w-[1024px] lg:h-[320px] xl:w-[1440px] xl:h-[450px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={image1}
              className="w-[426px] h-[190px] md:w-[768px] md:h-[240px] lg:w-[1024px] lg:h-[320px] xl:w-[1440px] xl:h-[450px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={image2}
              className="w-[426px] h-[190px] md:w-[768px] md:h-[240px] lg:w-[1024px] lg:h-[320px] xl:w-[1440px] xl:h-[450px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
