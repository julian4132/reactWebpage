import { Fragment, useState } from "react";
import logo from "../images/logo_title.png"
import logoText from "../images/logo_text.png"
import "../styles/navbar.css";

export default function Navbar() {

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
            <li id="login-bt"><a href={"accounts/login.html"}><button className="login-bt" >Ingresar</button></a></li>
            <li id="my-acc"><a href={"accounts/profile.php"}><button className="login-bt" >Mi Cuenta</button></a></li>
        </ul>
    </nav>  );
}
