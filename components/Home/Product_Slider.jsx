"use client"
import React from 'react'
import Home_Card from './Home_Card'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const Product_Slider = ({name, second_name, color_s}) => {

  return (
    <div
 className={`bg-[${color_s}] xl:min-h-[500px] my-10`}>
    <div className='flex justify-center gap-2 py-6'>
    <h3 className='text-center text-[30px] text-[#344FA1] font-[#344FA1] font-[700]'>{name}</h3>
    <h3 className='text-center font-[#344FA1] font-[500] text-[30px] tracking-wider	'>{second_name}</h3>
    </div>
    <div>

{/* Slider  */}
<div >
<Swiper
loopPreventsSliding={true}
loop={true}
centeredSlides={true}
breakpoints={{
  375: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  425: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 1,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
}}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,
}}
modules={[Autoplay]}
className="mySwiper">

    <SwiperSlide>
        <div >
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div>
        <Home_Card  />

        </div>
    </SwiperSlide>
    
    
</Swiper>
</div>
    </div>

 </div>
  )
}

export default Product_Slider