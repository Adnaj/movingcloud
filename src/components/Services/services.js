import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const DestinationsOne = () => {
  const cards = [
    {
      title: "Domestic & International Tour Packages",
      icon: "domestic_icon.svg",
      img: "domestic.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    },
    {
      title: "Visa Processing",
      icon: "visa_icon.svg",
      img: "visa.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Medical Tourism",
      icon: "medical_icon.svg",
      img: "medical.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Hotel Reservation",
      icon: "hotel_icon.svg",
      img: "hotel.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et",
    },
    {
      title: "Houseboat Booking",
      icon: "houseboat_icon.svg",
      img: "houseboat.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et",
    },
    {
      title: "Vehicles for Rent",
      icon: "vehicle_icon.svg",
      img: "vehicle.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et",
    },
    {
      title: "Air Ticketing",
      icon: "airticket_icon.svg",
      img: "airticket.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et",
    },
    {
      title: "Cruise Booking",
      icon: "cruise_icon.svg",
      img: "cruise.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et",
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
            <Col md={4} lg={3} key={index} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <div className="service_img13">
                    <Image
                      src={require(`@/images/services/${card.img}`).default.src}
                      alt={card.title}
                    />
                    <div className="overlay_card13"></div>
                  </div>
                  <div className="service_details13">
                    <Image
                      src={
                        require(`@/images/services/${card.icon}`).default.src
                      }
                      alt={card.title}
                    />
                    {/* <Image
                      src={require(`@/images/services/line.png`).default.src}
                      alt={card.title}
                    /> */}
                    <Card.Title className="card-title-animated">
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <a
                      href={`https://wa.me/+919747434555?text=I am interested in ${encodeURIComponent(
                        card.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
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
                  </div>
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
