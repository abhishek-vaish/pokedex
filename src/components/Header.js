import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import "../styles/BodyCard.css";

const Header = (props) => {
  return (
    <div className={`nav ${props.color}`}>
      <div className="nav__menu">
        <div className="menu__logo">
          <img src={logo} alt="pokemon logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
