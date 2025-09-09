import React from "react";
import "./aboutme.scss";
import aboutme from "../../img/aboutimage.png";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="aboutme">
        <h1 className="aboutme__title">About Me</h1>
        <div className="aboutme__container conborder">     
          <p className="aboutme__text">
            I'm Nurmatov Bahodir Baxtiyor o'g'li
            <br />
            <br />
            <br />I am a Front-end developer and UX/UI designer with experience
            in creating adaptive web applications and interfaces. I specialize
            in user experience (UX) and visual interface (UI) design, as well as
            the implementation of modern development technologies.
          </p>
          <img src={aboutme} alt="" className="aboutme__image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
