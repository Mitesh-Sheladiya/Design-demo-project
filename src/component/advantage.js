import React from "react";
import "../style/component/advantage.scss";
import Ellipse from "../assets/Ellipse.png";

const Advantage = () => {
  return (
    <>
      <div className="advantage-wrapper">
        <h2 className="title">The MantApss advantage</h2>
        <div className="card">
          <div className="card-item">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <h4 className="title">Cloud based toolkit</h4>
            <p>
              Cloud-based toolkit with secure integration for successful
              payments
            </p>
          </div>
          <div className="card-item">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <h4 className="title">Value added services</h4>
            <p>
              Wide-ranging value-added services for comprehensive business
              growth
            </p>
          </div>
          <div className="card-item">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <h4 className="title">Instant onboarding</h4>
            <p>
              Instant registering and onboarding for merchants through a robust
              digital interface
            </p>
          </div>
          <div className="card-item">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
            <h4 className="title">Payments re-imagined</h4>
            <p>
              Reimagining payments through omni-channels with real-time tracking
              features
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
