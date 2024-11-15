import popularToursFeatured from "@/data/popularTousFeatured";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTourTwo from "./SingleToursTwo";


const PopularToursTwo = ({ toursPage = false }) => {
  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {popularToursFeatured.map((tour) => (
            <Col
              key={tour.id}
              xl={3}
              lg={4}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTourTwo key={tour.id} tour={tour} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
