import React from "react";
import "../styles/home.scss";
import MyResume from "../Components/MyResume/MyResume";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import Personal from "../Components/Personal/Personal";

const Home = () => {
  return (
    <div className="home">
      <MyResume />
      <AboutMe />
      <Skills />
      <Personal />
    </div>
  );
};

export default Home;
