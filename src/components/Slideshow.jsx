import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import { useState, useEffect } from "react";
import "../styles/slideshow.css";
import React from "react";

export default function Slideshow(props) {

    const [fade, setFade] = useState(0);
    const [index, setIndex] = useState(0);
    useEffect(() => {
      console.log(fade);
      if(fade===1){
      const timer = setTimeout(
        () => (setIndex((index===props.list.length-1)? 0 : index+1), setFade(2)),
        100
      );
      return () => clearTimeout(timer);
    }
      else if(fade===2){
        const timer = setTimeout(
          () => (setFade(0)),
          100
        );
        return () => clearTimeout(timer);
      }
    else{
      const timer = setTimeout(
        () => (setFade(1)),
        4750
      );
      return () => clearTimeout(timer);
    }
    });

    return (
        <div className={fade===0? "fadeIn img" : "fadeOut img"}>
          <img src={props.list[index]} style={{"width": "100%"}}/>
        </div>
    );
}