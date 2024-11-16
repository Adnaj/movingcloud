import React from "react";
import { Container,Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;

  return (
    <SwiperSlide>
      <div className="tour_inner_slide13">
        <Image src={`/images/tour-dtl/${bg}`} alt={`/${bg}`} />
      </div>
   
    </SwiperSlide>
  );
};

export default SingleSlide; 
