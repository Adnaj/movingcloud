import React from "react";
import { Container,Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;

  return (
    <SwiperSlide>
      <div className="tour_inner_slide13">
        <Image src={require(`@/images/tour-dtl/${bg}`).default.src} alt={require(`@/images/tour-dtl/${bg}`).default.src} />
      </div>
   
    </SwiperSlide>
  );
};

export default SingleSlide; 
