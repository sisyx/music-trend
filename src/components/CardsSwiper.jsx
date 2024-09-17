// import React from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import './styles.css';

// // import required modules
// import { EffectCards } from 'swiper/modules';

// function InstagramReport() {
//     return (
//         // outer container 
//         <div>
//             {/* container */}
//             <div>
//                 {/* header */}
//                 <div className="w-full py-5 text-white text-bold text-center bg-gradient-to-r from-primary-start to-primary-end">
//                     مخاطب گستر
//                 </div>

//                 {/* top side */}
//                 <div className="flex">
//                     <div className="border border-black flex-1">
//                         x
//                     </div> 
//                     <div className="p-5">
//                         {/* camp name */}
//                         <div className="flex gap-2 border p-2" dir="rtl">
//                             <span>اسم کمپین: </span>
//                             <span>
//                                 مخاطب گستر - خرداد 98
//                             </span>
//                         </div>

//                         {/* sums */}
//                         <div className='relative h-full flex items-center justify-center'>
//                         <Swiper
//                             effect={'cards'}
//                             grabCursor={true}
//                             modules={[EffectCards]}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide>Slide 1</SwiperSlide>
//                             <SwiperSlide>Slide 2</SwiperSlide>
//                             <SwiperSlide>Slide 3</SwiperSlide>
//                             <SwiperSlide>Slide 4</SwiperSlide>
//                             <SwiperSlide>Slide 5</SwiperSlide>
//                             <SwiperSlide>Slide 6</SwiperSlide>
//                             <SwiperSimport React from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import './styles.css';

// // import required modules
// import { EffectCards } from 'swiper/modules';

// function InstagramReport() {
//     return (
//         // outer container 
//         <div>
//             {/* container */}
//             <div>
//                 {/* header */}
//                 <div className="w-full py-5 text-white text-bold text-center bg-gradient-to-r from-primary-start to-primary-end">
//                     مخاطب گستر
//                 </div>

//                 {/* top side */}
//                 <div className="flex">
//                     <div className="border border-black flex-1">
//                         x
//                     </div> 
//                     <div className="p-5">
//                         {/* camp name */}
//                         <div className="flex gap-2 border p-2" dir="rtl">
//                             <span>اسم کمپین: </span>
//                             <span>
//                                 مخاطب گستر - خرداد 98
//                             </span>
//                         </div>

//                         {/* sums */}
//                         <div className='relative h-full flex items-center justify-center'>
//                         <Swiper
//                             effect={'cards'}
//                             grabCursor={true}
//                             modules={[EffectCards]}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide>Slide 1</SwiperSlide>
//                             <SwiperSlide>Slide 2</SwiperSlide>
//                             <SwiperSlide>Slide 3</SwiperSlide>
//                             <SwiperSlide>Slide 4</SwiperSlide>
//                             <SwiperSlide>Slide 5</SwiperSlide>
//                             <SwiperSlide>Slide 6</SwiperSlide>
//                             <SwiperSlide>Slide 7</SwiperSlide>
//                             <SwiperSlide>Slide 8</SwiperSlide>
//                             <SwiperSlide>Slide 9</SwiperSlide>
//                         </Swiper>
//                             <div>
//                                 دستاورد ها در یک نگاه
//                             </div>
//                         </div>
//                     </div>     
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default InstagramReport;lide>Slide 7</SwiperSlide>
//                             <SwiperSlide>Slide 8</SwiperSlide>
//                             <SwiperSlide>Slide 9</SwiperSlide>
//                         </Swiper>
//                             <div>
//                                 دستاورد ها در یک نگاه
//                             </div>
//                         </div>
//                     </div>     
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default InstagramReport;


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './CardsSwiper.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function CardsSwiper({ slides }) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        loop="true"
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            slides.map((slide, index) => 
                <SwiperSlide style={{background: slide.color}}>{slide.text}</SwiperSlide>
            )
        }
      </Swiper>
    </>
  );
}
