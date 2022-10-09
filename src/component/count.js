import React from "react";
import "../style/component/count.scss";

const Count = () => {
  return (
    <>
      <div className="count-wrapper">
        <div className="count-inner">
          <div className="count-item">
            <h2>400,000 +</h2>
            <p>Merchants</p>
          </div>
          <div className="count-item">
            <h2>30 million +</h2>
            <p>Transactions Annually</p>
          </div>
          <div className="count-item">
            <h2>$1 billion+</h2>
            <p>GMV Annuals</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
