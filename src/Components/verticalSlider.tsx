import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const slides = [
  {
    title: "Looking for a Gamers Team?",
    imgPath:
      "https://images.unsplash.com/photo-1628911772801-99aa42a1d2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    cta: "Join now!",
  },
  {
    title: "Top 5 books 2021",
    imgPath:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    cta: "Discover",
  },
  {
    title: "EDM Live dates 2021/2022",
    imgPath:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    cta: "See more",
  },
];

const VerticalSlider: React.FC = () => {
  return (
    <>
      <Swiper
        className="card home-swiper mt-5"
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${slide.imgPath})`,
            }}
            className="d-flex flex-column align-items-start justify-content-end"
          >
            <div className="slide-footer d-flex flex-column p-3">
              <p>{slide.title}</p>
              <button className="btn primary-gradient">{slide.cta}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VerticalSlider;
