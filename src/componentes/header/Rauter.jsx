import React from "react";
// import logo from "./logo.png";
import "./Header.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pageses/home/Home";
import Man from "../pageses/man/Man";
import Woman from "../pageses/woman/Woman";
import Kids from "../pageses/kids/Kids";
import Gift from "../pageses/gift-pack/Gift";
import Login from "../pageses/login/Login";
function Rauter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/gift-pack" element={<Gift />} />
          <Route path="/login-reg" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Rauter;
