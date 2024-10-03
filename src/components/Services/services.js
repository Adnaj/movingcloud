import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const DestinationsOne = () => {
  const cards = [
    {
      title: "Domestic & International Tour Packages",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Visa Processing",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Medical Tourism",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Hotel Reservation",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Houseboat Booking",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Vehicles for Rent",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Air Ticketing",
      img: "car.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer. Nunc odio in et, lectus sit lorem id integer.",
    },
  ];

  return (
    <section className="destinations-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Our Services</span>
          <h2 className="section-title__title">Our Services</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p> */}
        </div>
        <Row className="masonary-layout justify-content-center">
          {cards.map((card, index) => (
            <Col md={12} lg={6} key={index} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <a
                    href={`https://wa.me/917736113916?text=I am interested in ${encodeURIComponent(
                      card.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Card.Title className="card-title-animated">{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <div className="btn-card-enquire">
                      <p>Enquire</p>
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
                    </div>
                  </a>

                  
                  {/* From Uiverse.io by satyamchaudharydev */}
                </Card.Body>
                <Image
                  src={require(`@/images/services/${card.img}`).default.src}
                  alt={card.title}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsOne;
