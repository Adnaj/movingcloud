import mainSliderData from "@/data/mainSliderData";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; // Import SwiperSlide
import SingleSlide from "./SingleSlide";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, EffectFade]);

// Slider options
const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000, // Set to 3000ms for 3 seconds between slides
    disableOnInteraction: false,
  },
};

const MainSlider = () => {
  return (
    <section className="main-slider hm_slide">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        {mainSliderData.map((slide) => (
          <SwiperSlide key={slide.id}> {/* Use SwiperSlide for each slide */}
            <SingleSlide slide={slide} />
          </SwiperSlide>
        ))}
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
