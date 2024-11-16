import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
const TourImages = "/images/tourcategories/keralapkg.jpg";

const DestinationsOne = () => {
  const cards = [
    {
      title: "North Indian Packages",
      img: "northpkg.jpg",
      description: "Relax by the sea with our exclusive beach packages.",
    },
    {
      title: "South Indian Packages",
      img: "southpkg.jpg",
      description: "Escape to the mountains for a refreshing break.",
    },
    {
      title: "International Packages",
      img: "internationalpkg.jpg",
      description: "Explore bustling cities with our curated tours.",
    },
    {
      title: "Kerala Packages",
      img: "keralapkg.jpg",
      description: "Experience the thrill of adventure in exotic locations.",
    },
  ];

  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Holiday Packages</span>
          <h2 className="section-title__title">Popular Categories</h2>
        </div>
        <Row className="masonary-layout">
          {cards.map((card, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="category-card">
                <div className="card-img-container12">
                  <Image
                    src={
                      `/images/tourcategories/${card.img}`
                    }
                    alt={card.title}
                  />
                  <div className="img12-overlay"></div>
                </div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  {/* From Uiverse.io by satyamchaudharydev */}
                  <Link href="/">
                    <a className="btn-card">
                      <p>Explore</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
