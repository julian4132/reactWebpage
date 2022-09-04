import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import { useState, useEffect } from "react";
import "../styles/slideshow.css";
import React from "react";

export default function Slideshow(props) {

    const [fade, setFade] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
      if(fade){
      const timer = setTimeout(
        () => (setIndex((index===props.list.length-1)? 0 : index+1), console.log("hola"), setFade(false)),
        250
      );
      return () => clearTimeout(timer);
    }
    else{
      const timer = setTimeout(
        () => (setFade(true)),
        4750
      );
      return () => clearTimeout(timer);
    }
    });

    return (
        <div className={fade? "fadeOut img" : "fadeIn img"}>
          <img src={props.list[index]} style={{"width": "100%"}}/>
        </div>
    );
}