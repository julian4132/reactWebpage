import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import React from "react";

export default function Slideshow(props) {

    const [index, setIndex] = useState(0);
    useEffect(() => {
      const timer = setTimeout(
        () => (setIndex(index==props.length-1? 0 : index+1)),
        5000
      );
      return () => clearTimeout(timer);
    });

    return <div>{props.list[index]}</div>;
}