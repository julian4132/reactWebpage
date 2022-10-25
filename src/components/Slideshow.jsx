import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import { useState, useEffect } from "react";
import "../styles/slideshow.css";
import React from "react";
import { Fade }  from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';


export default function Slideshow(props) {
    
  
    const properties = {
      prevArrow: <React.Fragment/>,
      nextArrow: <React.Fragment/>,
      duration: 5000,
      pauseOnHover: false
    }

    return (
      <div className="slide-container">
      <Fade {...properties}>
        {props.list.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            {/*<div className="image-container">*/}
              <img src={fadeImage} style = {{width: "100%"}}/>
            {/*</div>*/}
            {/*<h2>{fadeImage.caption}</h2>*/}
          </div>
        ))}
      </Fade>
      {/*<div className={fade===0? "fadeIn img" : "fadeOut img"}>
          <img src={props.list[index]} style={{"width": "100%"}}/>
    </div>*/}
    </div>
    );
}