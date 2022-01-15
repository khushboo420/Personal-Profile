import React from "react";

import "./AboutMe.css";
import DP from "../Pictures/DP.png";

function AboutMe() {
  return (
    <>
      <div className="container3">
        <div className="box2">
          <img className="displayPicture" src={DP} alt="KhushbooSingh" />
          <p className="intro">
            <div className="main">
              I’m Khushboo, a Front-End Developer working remotely for Capgemini
              Technology Services, India.
            </div>
            <br></br>
            I’ve spent the past 2.8+ years working across different areas of
            digital design; front-end development, tool design, website UI/UX.
            <br></br>
            <br></br>
            These days my time is spent exploring, learning, prototyping, and
            coding.
            <br></br>
            <br></br>
            Out of the office you’ll find me with my sketch book & paints,
            reading books, and petting all the good dogs.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
