import React from "react";
import "./Home.css";
import Header from "../../header/Header";
import Videofile from "../../property/video/home-page.MP4";
import Footer from "../../footer/Footer";
import { NewArraivel } from "../newArrivel/NewArraivel";
export const Home = () => {
  return (
    <div className="home-main-body">
      <Header />
      <div className="home-video-page">
        <video autoPlay loop muted className="video-background">
          <source src={Videofile} type="video/mp4" />
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
