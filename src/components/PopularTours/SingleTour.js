import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb, days, location } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={`/images/resources/${image}`}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{title}</Link>
          </h3>
          <div className="popular-tours__stars">
            <i className="icon-place"></i> {location}
          </div>

          {/* <p className="popular-tours__rate">
            <span>${rate}</span> / Per Person
          </p> */}
          {/* <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
                <Link href="/tour-details">{item}</Link>
              </li>
            ))}
          </ul> */}
          <div className="tour-fe-btn">
            <Link href="/">
              <a className="thm-btn-a">
                Enquire on <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
            </Link>

            <Link href="/tour-details">
              <a className="thm-btn-b">Explore</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
