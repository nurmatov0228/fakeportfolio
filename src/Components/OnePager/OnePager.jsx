import React from "react";
import "./onepager.scss";
import about from "../../img/aboutimage.png";

const OnePager = () => {
  return (
    <div className="container">
      <div className="onepager">
        <h1 className="onepager__title">One Pager Site</h1>
        <div className="onepager__container conborder">
          <div className="onepager__left">
            <h3 className="onepager__title">
              To create a one-page site I used
            </h3>
            <p className="onepager__text">
              Web development: HTML, CSS (SASS/SCSS), JavaScript (ES6+),
              Bootstrap <br /> Frameworks: React <br /> Design: Figma <br />{" "}
              CMS:Wordpress <br /> Host: @host
            </p>
            <p className="onepager__text">It took 1-2 days to develop</p>
            <button className="onepager__btn openbtn">Open and view</button>
          </div>
          <div className="onepager__right">
            <img src={about} alt="" className="onepager__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
