import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb, days, location, para } = tour;
  console.log("hello", typeof meta[0], typeof meta[1], typeof meta[2]);

  return (
    <div>
      <Link href="/tour-details">
        <a>
          <div
            style={{ userSelect: userSelect ? "unset" : "none" }}
            className="popular-tours__single tour_single_three"
          >
            <div className="popular-tours__img">
              <div className="relative">
                <Image
                  src={`/images/tour-dtl/${image}`}
                  alt=""
                />
                <div className="overlay23"></div>
              </div>
              {/* <div className="popular-tours__icon">
                <a>
                  <i className="fa fa-heart"></i>
                </a>
              </div> */}
            </div>
            <div className="popular-tours__content">
              <h3 className="popular-tours__title">
                <Link href="/tour-details">{title}</Link>
              </h3>
              {/* <div className="popular-tours__stars">
            <i className="icon-place"></i> {location}
          </div> */}

              <p className="popular-tours__rate">{para}</p>
              <div className="popular-tours__meta list-unstyled three_list">
                <div className="sec12_1">
                  <p>
                    <span className="icon-clock"> </span>
                    {meta[0]}
                  </p>
                  <p>
                    <i className="far fa-user-circle"></i> {meta[1]}
                  </p>
                </div>
                <hr />
                <div>
                  <Link href="/" passHref>
                    <div className="thm-btn-a">
                      Enquire on{" "}
                      <i className="fab fa-whatsapp" aria-hidden="true"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SingleTour;
