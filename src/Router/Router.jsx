import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Partfolio from "../Pages/Partfolio";
import Post from "../Pages/Post";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partfolio" element={<Partfolio />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
