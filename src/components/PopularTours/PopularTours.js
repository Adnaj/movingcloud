import popularToursThree from "@/data/popularToursThree";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTourThree from "./SingleTourThree";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const { tagline, title, popularTours } = popularToursThree;

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true, 
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};

const PopularTours = () => {
  return (
    <div className="popular-tours">
      <div className="popular-tours__container container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Featured tours</span>
          <h2 className="section-title__title">Most Popular Tours</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {popularTours.map((tour,index) => (
                  <SingleTourThree key={index} tour={tour} userSelect />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ); 
};

export default PopularTours;
