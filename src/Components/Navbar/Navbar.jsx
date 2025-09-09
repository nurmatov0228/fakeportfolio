import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/solihpartfolio.png";
import dev from "../../img/dev.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // document.body.style.overflow = !isOpen ? "hidden" : "auto"; // scroll chiqmasin
  };

  return (
    <div className="container">
      <nav className="navbar">
        <NavLink to={"/"} className={"navbar__image"}>
          <img src={logo} alt="logo" className="navbar__logo" />
          <img src={dev} alt="dev" className="navbar__dev" />
        </NavLink>

        {/* Links */}
        <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          <li>
            <NavLink to={"/"} className={"navbar__link"} onClick={toggleMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/partfolio"}
              className={"navbar__link"}
              onClick={toggleMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/post"}
              className={"navbar__link"}
              onClick={toggleMenu}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className={"navbar__link"} onClick={toggleMenu}>
              Examples of works
            </NavLink>
          </li>
          <button className="tgbtn navbar__btn">Telegram</button>
        </ul>

        {/* Burger Button */}
        <div
          className={`navbar__burger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
