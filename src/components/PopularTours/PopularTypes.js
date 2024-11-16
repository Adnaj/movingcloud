import aboutOne from "@/data/aboutOne";
const about1 = "/images/blog/news-one-img.jpg";
const Honeymoon = "/images/theametour/honeymoon.png";
const Pilgrimages = "/images/theametour/pilgrimages.webp";
const Ayurvedic = "/images/theametour/ayurvedic2.png";
const Adventure = "/images/theametour/adventure.png";
const Arrow = "/images/tour-dtl/arrowright.svg";
import React from "react";
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
} = aboutOne;
const themePackages = [
    {
      img:Honeymoon,
      headTitle: "Honeymoon",
      packageTitle: "Honeymoon Packages",
    },
    {
      img: Pilgrimages,
      headTitle: "Pilgrimages",
      packageTitle: "Pilgrimages Packages",
    },
    {
      img: Ayurvedic,
      headTitle: "Ayurvedic",
      packageTitle: "Ayurvedic Packages",
    },
    {
      img: Adventure,
      headTitle: "Adventure",
      packageTitle: "Adventure Packages",
    },
  ];

const AboutOne = () => {
  return (
    <section className="type">
      <Container>
        <div className="section-title section-title-type text-center">
          <span className="section-title__tagline">Destinations</span>
          <h2 className="section-title__title">Theme Packages</h2>
        </div>
        <Row>
        {themePackages.map((packageInfo, index) => (
            <div
              key={index}
              className="animated fadeInUp col-xl-3 col-lg-4"
            >
              <div className="theme-package12">
                <div className="news-one__img relative">
                  <Image src={packageInfo.img} alt="" />
                  <div className="theme_overlay12"></div>
                  <h3 className="type-head">{packageInfo.headTitle}</h3>
                </div>
                <div className="type-content">
                  <h3>{packageInfo.packageTitle}
                  <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none"><g id="XMLID_21_"><path id="XMLID_1807_" d="M72.0466 83.3317C89.4651 72.1458 94.5176 48.9574 83.3316 31.5389C72.1457 14.1205 48.9573 9.06803 31.5389 20.2539C14.1204 31.4398 9.06797 54.6283 20.2539 72.0467C31.4398 89.4651 54.6282 94.5176 72.0466 83.3317Z" stroke="#161616" strokeWidth="2.65205" strokeMiterlimit="10"></path><path id="XMLID_1806_" d="M39.3706 59.7703L64.2149 43.8156" stroke="#161616" strokeWidth="2.65205" strokeMiterlimit="10"></path><path id="XMLID_1804_" d="M60.5449 60.2184L64.215 43.815L47.779 40.3233" stroke="#161616" strokeWidth="2.65205" strokeMiterlimit="10"></path></g></svg>
                  </h3>
                </div>
              </div>
            </div>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
