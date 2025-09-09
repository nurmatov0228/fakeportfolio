import React from "react";
import "../styles/partfolio.scss";
import MyPartfolio from "../Components/MyPartfolio/MyPartfolio";
import OnePager from "../Components/OnePager/OnePager";
import Landing from "../Components/OnePager/Landing";

const Partfolio = () => {
  return (
    <div className="partfolio">
      <MyPartfolio />
      <OnePager />
      <Landing />
      <OnePager />
    </div>
  );
};

export default Partfolio;
