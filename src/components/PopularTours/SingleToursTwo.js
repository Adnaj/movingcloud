import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb, days, location } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="featured_tour23 flip-card23"
      >
        <div className="flipcard-inner23">
          <div className="flipcard-front23">
            <Image
              src={require(`@/images/tour-dtl/featured/${image}`).default.src}
              alt=""
            />
            <div className="flipcard-overlay23"></div>
            <div className="card-tittle23">
              <span>Tour Itinerary</span>
              <h3> {title} </h3>
            </div>
          </div>
          <div className="flipcard-back23">
            <div className="route-wrap23">
              <h4>Tour Route</h4>
              <p>Kochi 1 night | Kumarakom 1 night | Houseboat 1 night</p>
            </div>
            <div className="route-bottom-wrap23">
              <div className="price_wrapper23"> 
                <div className="tour_days23">
                  <h3>2</h3>
                  <span>Days</span>
                </div>
                <div className="price_tag23">
                  <span>Starting from</span>
                  <h2><Image src={require(`@/images/tour-dtl/rupee-black-large.svg`).default.src} alt="" /> 7000</h2>
                  <span>/person</span>
                </div>
              </div>
              <div className="flipcard_btn_detail23">
                <Link href="/tour-detail">
                  <a>View Details</a>
                </Link>
              </div>

              <a
                href="https://wa.me/+91 9747434555"
                target="_blank"
                rel="noreferrer"
                className="flipcard_watsapp23"
              >
                <Image src={require(`@/images/tour-dtl/whatsapp-fill-black.svg`).default.src} alt="" />
                <p>Enquire on WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="popular-tours__img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
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
        </div> */}
      </div>
    </div>
  );
};

export default SingleTour;
