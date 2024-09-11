import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, companies, explore, social, year, author, about } =
  footerData;

const SiteFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={5} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/">
                      <a>
                        <Image src={logo.src} alt="" />
                      </a>
                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                  
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__company clearfix">
                  <h3 className="footer-widget__title">Company</h3>
                  <ul className="footer-widget__company-list list-unstyled">
                    {companies.map(({ id, link, title }) => (
                      <li key={id}>
                        {link.includes("/") ? (
                          <Link href={link}>{title}</Link>
                        ) : (
                          <a target="_blank" rel="noreferrer" href={link}>
                            {title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__explore">
                  <h3 className="footer-widget__title">Destinations</h3>
                  <ul className="list-unstyled footer-widget__explore-list">
                    {explore.map(({ id, title, link }) => (
                      <li key={id}>
                        <a href={link}>{title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={3} lg={6} md={6} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__explore">
                  <h3 className="footer-widget__title">Contact</h3>
                  <ul className="footer-widget__about-contact list-unstyled">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id}>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                        <div className="text">
                          {subHref ? (
                            <a href={`${subHref}:${content}`}>{content}</a>
                          ) : (
                            <p>{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <div className="site-footer__bottom-right">
            <p>
              @ {year} {author}.All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
