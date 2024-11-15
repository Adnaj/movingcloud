import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTourTwo from "@/components/PopularTours/SingleToursTwo";
import popularTours from "@/data/popularTousFeatured";
import TourDetailsLeft from "./TourDetailsLeft";
import TourDetailsSidebar from "./TourDetailsSidebar";

const TourDetailsTwo = () => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <TourDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <TourDetailsSidebar />
          </Col>
        </Row>
        <div className="tour-details-two__related-tours">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <Row>
          {popularTours.slice(0, 4).map((tour) => (
            <Col xl={3} key={tour.id}>
              <SingleTourTwo tour={tour}  />
            </Col>
          ))}
        </Row>
      </div>
      </Container>
    </section>
  );
};

export default TourDetailsTwo;
