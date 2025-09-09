import React from "react";
import "./skills.scss";
import html from "../../img/html.png";
import science from "../../img/science.png";
import php from "../../img/php.png";
import javascript from "../../img/javascript.png";
import wordpress from "../../img/wordpress.png";
import figma from "../../img/figma.png";
import css from "../../img/css.png";
import bootstrap from "../../img/bootstrap.png";
import vscodeicon from "../../img/vscodeicon.png";

const Skills = () => {
  return (
    <div className="container">
      <div className="skills aboutme">
        <h1 className="aboutme__title">Skills</h1>
        <div className="skills__container conborder">
          <div className="skills__flex">
            <img src={html} alt="" className="skills__image" />
            <img src={science} alt="" className="skills__image" />
            <img src={php} alt="" className="skills__image" />
            <img src={javascript} alt="" className="skills__image" />
            <img src={wordpress} alt="" className="skills__image" />
            <img src={figma} alt="" className="skills__image" />
            <img src={css} alt="" className="skills__image" />
            <img src={bootstrap} alt="" className="skills__image" />
            <img src={vscodeicon} alt="" className="skills__image" />
          </div>
          <p className="skills__text">
            Technical skills
            <br />
            <br />
            <br />
            Web development: HTML, CSS, JavaScript (ES6+), Bootstrap Frameworks:
            React.js Design: Figma Optimization: responsive design,
            cross-browser layout, loading speed optimization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
