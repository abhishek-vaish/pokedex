import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/loupe.png";
import "../styles/Header.css";

const Header = () => {
    return(
        <div className="nav">
            <div className="nav__menu">
                <div className="menu__logo">
                    <img src={logo} alt="pokemon logo"/>
                </div>
                <div className="menu__search">
                    <div className="search__box">
                        <input type="text" placeholder="Search..."></input>
                        <img src={search} alt="search"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;