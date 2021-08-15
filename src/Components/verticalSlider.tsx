
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

interface Slide {
    title: string;
    imgPath: string
    cta: string;

}


const VerticalSlider = () => {

        const slides = [

            {
                title: "LaMarcus Aldridge",
                imgPath: 14,
                cta: "Center-Forward"
            },
            {
                title: "Marco Belinelli",
                imgPath: 13,
                cta: "Guard"
            },
            {
                title: "DeMar DeRozan",
                imgPath: 11,
                cta: "Guard-Forward"
            }
        ];


    return (
        <>
            <Swiper direction={'vertical'} pagination={{
                "clickable": true
            }} className="card home-swiper mt-5">
               {slides.map(slide => (
                  <SwiperSlide>
                      {slide.title}
                  </SwiperSlide>
               ))}
            </Swiper>
        </>
    )
}

export default VerticalSlider