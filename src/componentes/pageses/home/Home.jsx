import React from "react";
import "./Home.css";
import Header from "../../header/Header";
import Videofile from "../../property/video/home-page.MP4";
function Home() {
  return (
    <div>
      <Header />
      <div>
        <video autoPlay loop muted className="video-background">
          <source src={Videofile} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Home;
