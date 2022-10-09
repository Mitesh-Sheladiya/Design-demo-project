import React from "react";
import "../style/component/bank.scss";
import bank from "../assets/bank.jpg";

const Bank = () => {
  return (
    <>
      <div className="bank-wrapper">
        <div className="title-wrapper">
          <h3 className="bank">For Banks</h3>
          <h3 className="merchants">For Merchants</h3>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <p>
              On your path to business growth, unlock new opportunities for
              saving costs, generating new revenue streams and simplified
              management with our comprehensive payments ecosystem that enables
              acceptance across all modes with the benefit of real-time tracking
              anytime, anywhere.
            </p>
            <h3>Customizable solutions for your unique needs</h3>
            <p>
              Our modular interface provides enough flexibility for you to
              customize solutions as per your needs or choose only the most
              relevant modules for your business.
            </p>

            <button className="btn">Partner With Us</button>
          </div>
          <div className="img-wrapper">
            <div className="image">
              <img alt="bank" src={bank} className="bank-img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
