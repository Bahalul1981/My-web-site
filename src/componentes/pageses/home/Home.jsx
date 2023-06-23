import React from "react";
import "./Home.css";
import Header from "../../header/Header";

import { NewArraivel } from "../newArrivel/NewArraivel";
import Footer from "../../footer/Footer";
export const Home = () => {
  return (
    <div className="home-main-body">
      <Header />
      <div className="home-video-page">
        {/* <img
          className="home-page-background"
          src={process.env.PUBLIC_URL + "/property/image/women/hand.jpg"}
        /> */}
        <video autoPlay loop muted className="video-background">
          <source
            src={process.env.PUBLIC_URL + "property/image/women/home-page.MP4"}
            type="video/mp4"
          />
        </video>
        <div className="touch your dreem">
          <h1 className="touch-your-dreem-by-your-own-dreem">
            Touch your dreem by your own hand
          </h1>
          <button className="lets-start-in-landing-page">Let`s start</button>
        </div>
      </div>
      <NewArraivel />
      <Footer />
    </div>
  );
};
