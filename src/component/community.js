import React from "react";
import "../style/component/community.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import sbi from "../assets/sbi.png";
import securelogic from "../assets/securelogic.png";
import mumbai from "../assets/mumbai.png";

import Slider from "react-slick";

const Community = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <>
      <div className="community-wrapper">
        <div>
          <h2>Building a global community</h2>
        </div>

        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img src={sbi} role="presentation" alt="sbi" />
            </div>
            <div>
              <img src={securelogic} role="presentation" alt="sbi" />
            </div>
            <div>
              <img src={mumbai} role="presentation" alt="sbi" />
            </div>
            <div>
              <img src={securelogic} role="presentation" alt="sbi" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Community;
