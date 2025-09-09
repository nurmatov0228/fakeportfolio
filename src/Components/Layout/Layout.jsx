import React from "react";
import "./layout.scss";
import Router from "../../Router/Router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="router">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
