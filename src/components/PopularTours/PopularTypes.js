import aboutOne from "@/data/aboutOne";
import about1 from "@/images/blog/news-one-img.jpg";
import Type1 from "@/images/resources/type1.webp";
import Type2 from "@/images/resources/type2.webp";
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
                    <span className="section-title__tagline">Popular types</span>
                    <h2 className="section-title__title">Featured Categories</h2>
                </div>
                <Row>


                    <div className="animated fadeInUp col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Type1.src} alt="" />
                            <h3 className="type-head">Honeymoon</h3>
                        </div>
                        <div className="type-content">
                            <p>Extraordinary travel experiences anywhere on earth with a positive impact.</p>
                            <Link href="/">Explore</Link>
                        </div>
                    </div>
                    <div className="animated fadeInUp margin-tp  col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Type2.src} alt="" />
                            <h3 className="type-head">Pilgrimages</h3>

                        </div>
                        <div className="type-content">
                            <p>Extraordinary travel experiences anywhere on earth with a positive impact.</p>
                            <Link href="/">Explore</Link>
                        </div>
                    </div>
                    <div className="animated fadeInUp col-xl-4 col-lg-4">
                        <div className="news-one__img relative">
                            <Image src={Type1.src} alt="" />
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