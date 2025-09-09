import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/solihpartfolio.png";
import dev2 from "../../img/dev2.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container footer__content">
        <NavLink to={"/"} className={"navbar__image"}>
          <img src={logo} alt="" className="navbar__logo" />
          <img src={dev2} alt="" className="navbar__dev" />
        </NavLink>
        <ul className="footer__links">
          <h3 className="footer__title">Pages</h3>
          <a href="#resume" className="footer__text">
            Resume
          </a>
          <NavLink to={"/partfolio"} className="footer__text">
            Portfolio
          </NavLink>
          <NavLink to={"/post"} className="footer__text">
            Posts
          </NavLink>
          <NavLink to={"/"} className="footer__text">
            Other
          </NavLink>
        </ul>
        <ul className="footer__links">
          <h3 className="footer__title">Contact</h3>
          <a className="footer__text" href="tel:+998946757553">
            +998946757553
          </a>
          <a className="footer__text" href="https://t.me/Nrmtv288">
            Telegramm: @Nrmtv288
          </a>
          <a className="footer__text" href="https://github.com/nurmatov0228">
            Git:nurmatov0228{" "}
          </a>
          <a className="footer__text">
            <br />
          </a>
        </ul>
        <button className="footer__btn tgbtn">Telegramm</button>
      </footer>
    </div>
  );
};

export default Footer;
