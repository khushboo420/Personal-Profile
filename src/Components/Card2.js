import React from "react";

import "./Card2.css";
import Cover from "../Pictures/design2.png";
import AboutMeImg from "../Icons/aboutMe.png";
import Contact from "../Icons/contact.png";
import Education from "../Icons/education.png";
import ExperienceImg from "../Icons/experience.png";
import Hobby from "../Icons/hobby2.png";
import Skills from "../Icons/skillSet.png";

import AboutMe from "./AboutMe";
import Experience from "./Experience";

function Card() {
  return (
    <>
      <div className="page">
        <div className="name">
          <div className="multicolor-text">
            Hi!<br></br>
            I'm Khushboo Singh.
          </div>
          <br></br>
          <p className="info">
            A front-end developer and general doodler who is not ready to put
            the crayon down.
          </p>
          <div className="iconRow">
              <img className="icons" src={AboutMeImg} alt="Cover_Picture" onClick="<AboutMe></AboutMe>"/>
              <img className="icons" src={Hobby} alt="Cover_Picture" />
              <img className="icons" src={Education} alt="Cover_Picture" />
              <img className="icons" src={ExperienceImg} alt="Cover_Picture" />
              <img className="icons" src={Skills} alt="Cover_Picture" />
              <img className="icons" src={Contact} alt="Cover_Picture" />
          </div>
        </div>

        <div className="container">
          <img className="cover" src={Cover} alt="Cover_Picture" />
        </div>
        <AboutMe></AboutMe>
        <Experience></Experience>
      </div>
    </>
  );
}

export default Card;
