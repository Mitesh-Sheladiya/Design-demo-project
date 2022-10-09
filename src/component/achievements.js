import React from "react";
import "../style/component/achievements.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";

import securelogic from "../assets/securelogic.png";
import mumbai from "../assets/mumbai.png";
import Gold from "../assets/gold.png";

const Achievements = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="achievement-wrapper">
      <div>
        <h2>Our achievements</h2>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          <div className="achieve-card">
            <img src={mumbai} role="presentation" alt="sbi" />
            <h3>Mumbai Fintech Hub</h3>
            <p>Grant Certificate Awarded INR 10,00,000 by the State</p>
          </div>
          <div className="achieve-card">
            <img src={securelogic} role="presentation" alt="sbi" />
            <h3>Mumbai Fintech Hub</h3>
            <p>Grant Certificate Awarded INR 10,00,000 by the State</p>
          </div>
          <div className="achieve-card">
            <img
              src={Gold}
              role="presentation"
              alt="sbi"
              style={{ height: "50px", width: "70px" }}
            />
            <h3>Mumbai Fintech Hub</h3>
            <p>Grant Certificate Awarded INR 10,00,000 by the State</p>
          </div>
          <div className="achieve-card">
            <img src={securelogic} role="presentation" alt="sbi" />
            <h3>Mumbai Fintech Hub</h3>
            <p>Grant Certificate Awarded INR 10,00,000 by the State</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Achievements;
