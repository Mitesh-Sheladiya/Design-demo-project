import React from "react";
import "../style/component/banner.scss";
import mobile from "../assets/mobile.png";

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-inner">
          <div className="banner-left">
            <div className="title-wrapper">
              <h2>A one-stop</h2>
              <h1>merchant ecosystem</h1>
              <h2>for all your business needs</h2>
            </div>
            <div className="para-wrapper">
              <p>
                Powered by real-time analytics and easy access to financial
                services, our comprehensive digital payment's platform helps
                bridge the gap between banks and small businesses.
              </p>
            </div>
            <div className="para-wrapper">
              <button className="btn">Request A Demo</button>
            </div>
          </div>
          <div className="banner-right">
            <img alt="mobile" src={mobile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
