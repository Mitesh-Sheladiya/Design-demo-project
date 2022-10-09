import React from "react";
import Slider from "react-slick";
import Media_1 from "../assets/media-1.png";
import Media_2 from "../assets/media-2.png";
import Media_3 from "../assets/media-3.png";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import "../style/component/media.scss";

const Media = () => {
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
    <>
      <div className="media-wrapper">
        <div>
          <h2>In the media</h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            <div className="achieve-card">
              <img src={Media_1} role="presentation" alt="sbi" />

              <div className="content">
                <p className="min">6 min read</p>
                <h4>
                  Get your money in seconds — 24/7 — with instant transfer
                </h4>
                <p>
                  By Raman Kahnduja <br />
                  Sept 13, 2021
                </p>
              </div>
              <div className="arrow">
                <TrendingFlatIcon className="icon" />
              </div>
            </div>
            <div className="achieve-card">
              <img src={Media_2} role="presentation" alt="sbi" />
              <div className="content">
                <p className="min">6 min read</p>
                <h4>Pandemic drives over half of consumers to shop locally</h4>
                <p>
                  By Raman Kahnduja <br />
                  Sept 13, 2021
                </p>
              </div>
              <div className="arrow">
                <TrendingFlatIcon className="icon" />
              </div>
            </div>
            <div className="achieve-card">
              <img src={Media_3} role="presentation" alt="sbi" />
              <div className="content">
                <p className="min">6 min read</p>
                <h4>Small Business Filmmaker Competition in India</h4>
                <p>
                  By Raman Kahnduja <br />
                  Sept 13, 2021
                </p>
              </div>
              <div className="arrow">
                <TrendingFlatIcon className="icon" />
              </div>
            </div>
            <div className="achieve-card">
              <img src={Media_2} role="presentation" alt="sbi" />
              <div className="content">
                <p className="min">6 min read</p>
                <h4>
                  Get your money in seconds — 24/7 — with instant transfer
                </h4>
                <p>
                  By Raman Kahnduja <br />
                  Sept 13, 2021
                </p>
              </div>
              <div className="arrow">
                <TrendingFlatIcon className="icon" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Media;
