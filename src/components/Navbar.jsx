import { Fragment, useState, useEffect } from "react";
import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import "../styles/navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState("false");

    useEffect(() => {
        document.title = isLoggedIn;
        $.ajax({
            type: "POST",
            url: "http://localhost:80/sitioReact/backend/accounts/isLoggedIn.php",
            //data: []
            success(data) {
                setIsLoggedIn(data);
                console.log(data);
            },
        });
      });

  return (
    <nav>
        <div style={{marginRight: "auto"}}>
            <img className="logo" src={logo} alt="Logo Mundial" />
            <img className="logo-text" src={logoText} alt="Texto Logo" />
        </div>
        <span className="hamburger" id="hamburger">
            <i className="material-symbols-outlined">menu</i>
        </span>
        <ul className="nav__links" id="nav__links">
            <li><a href={"#funciones"}>Funciones</a></li>
            <li><a href={"#quienes-somos"}>Quienes somos</a></li>
            <li><a href={"#contacto"}>Contacto</a></li>
            <li id="login-bt" style={{display: isLoggedIn==="false"? "initial" : "none"}}> <Link to="login"><button className="login-bt" >Ingresar</button></Link></li>
            <li id="my-acc" style={{display: isLoggedIn==="true"? "initial" : "none"}}><a href={"accounts/profile.php"}><button className="login-bt" >Mi Cuenta</button></a></li>
        </ul>
    </nav>  );
}
