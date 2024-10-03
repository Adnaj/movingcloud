import aboutOne from "@/data/aboutOne";
import about1 from "@/images/blog/news-one-img.jpg";
import Honeymoon from "@/images/theametour/honeymoon.webp";
import Pilgrimages from "@/images/theametour/pilgrimages.webp";
import Ayurvedic from "@/images/theametour/ayurvedic.webp";
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

const AboutOne = () => {
    return (
        <section className="type">
            <Container>
                <div className="section-title section-title-type text-center">
                    <span className="section-title__tagline">Destinations</span>
                    <h2 className="section-title__title">Theme Packages</h2>
                </div>
                <Row>


                    <div className="animated fadeInUp col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Honeymoon.src} alt="" />
                            <h3 className="type-head">Honeymoon</h3>
                        </div>
                        <div className="type-content">
                            <p>Extraordinary travel experiences anywhere on earth with a positive impact.</p>
                            <Link href="/">Explore</Link>
                        </div>
                    </div>
                    <div className="animated fadeInUp  col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Pilgrimages.src} alt="" />
                            <h3 className="type-head">Pilgrimages</h3>

                        </div>
                        <div className="type-content">
                            <p>Extraordinary travel experiences anywhere on earth with a positive impact.</p>
                            <Link href="/">Explore</Link>
                        </div>
                    </div>
                    <div className="animated fadeInUp col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Ayurvedic.src} alt="" />
                            <h3 className="type-head">Ayurvadic</h3>
                        </div>
                        <div className="type-content">
                            <p>Extraordinary travel experiences anywhere on earth with a positive impact.</p>
                            <Link href="/">Explore</Link>
                        </div>
                    </div>

                </Row>
            </Container>
        </section>
    );
};

export default AboutOne;