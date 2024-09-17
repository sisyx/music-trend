import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './VerticalSwiper.module.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function VerticalSwiper({slides}) {
  return (
    <>
      <Swiper
        direction={'vertical'}
        loop="true"
        autoplay="true"
        // modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={12}
        mousewheel={true}
        className={"h-full w-full"}
        slidesPerGroup={1}
        centeredSlides={true}
        grabCursor={true}
      >
        {
            slides?.map(slide => 
                <SwiperSlide className={`backdrop-blur bg-transparent h-fit bg-white`}>
                    {slide}
                </SwiperSlide>
            )
        }
      </Swiper>
    </>
  );
}
