import * as React from "react";
import "../style/component/header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <span className="title">mintOak</span>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="">About Us</a>
          <a href="">Products</a>
          <a href="">Partner With Us</a>
          <a href="">Resources</a>
          <a href="">Careers</a>
          <a href="">Support</a>
        </div>
      </div>
    </>
  );
};

export default Header;
