import React from "react";

import "./Card.css";
import Cover from "../Pictures/HD.png";

function Card() {
  return (
    <>
      <div className="page background">
            <div className="name">
                <div className="multicolor-text">
                    Hi!<br></br> 
                    I'm Khushboo Singh. 
                </div>
                <br></br>
                <p className="info">A front-end developer and general doodler who is not ready to put the crayon down.</p>
            </div>
        
        <div className="container">
            <img className="cover" src={Cover} alt="Cover_Picture" />
        </div>
      </div>
    </>
  );
}

export default Card;
