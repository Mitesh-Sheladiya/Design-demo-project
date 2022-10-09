import React from "react";
import Slider from "react-slick";
import Blog_2 from "../assets/blog-2.png";
import Blog_3 from "../assets/blog-3.png";
import Blog_1 from "../assets/blog-1.png";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import "../style/component/blog.scss";

const Blog = () => {
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
      <div className="blog-wrapper">
        <div>
          <h2>Most popular blogs</h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            <div className="achieve-card">
              <img src={Blog_1} role="presentation" alt="sbi" />

              <div className="content">
                <p className="min">6 min read</p>
                <h4>How to standout in digital payments business space</h4>
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
              <img src={Blog_2} role="presentation" alt="sbi" />
              <div className="content">
                <p className="min">6 min read</p>
                <h4>How to fix recurring payments under new RBI guidelines</h4>
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
              <img src={Blog_3} role="presentation" alt="sbi" />
              <div className="content">
                <p className="min">6 min read</p>
                <h4>
                  The tango between banks and fintechs: Rivals turn partners
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
              <img src={Blog_2} role="presentation" alt="sbi" />
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

export default Blog;
