import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginForm.css'
import $ from 'jquery'

export default function LoginForm() {
    
    const [isLoggedIn, setIsLoggedIn] = useState("false");
    function handleSubmit(e) {
        e.preventDefault();
        console.log("jaja");
        let user = $('#email').val();
        let pass = $('#psw').val();

        //bloquea el botón cuando se hace click
        /*var button = document.getElementById("submit");
        button.classList.add("loading-button");
        button.setAttribute("disabled", "disabled");
        var buttonText = document.getElementById("submit-text");
        $(buttonText).css("visibility", "hidden");*/

        $.ajax({
            url: "http://localhost:80/sitioreact/backend/accounts/login.php",
            method: "POST",
            data: {
                'email': user,
                'psw': pass
            },
            xhrFields: {
              withCredentials: true
            },
            success: function(data) {
                let json = JSON.parse(data)
                if(json['success'] == true) {
                    // succesfuly logged in

                    //window.location.replace("../");
                } else {
                    if(json['error'] == "1") {
                        // incorrect password
                        console.log("1");
                        alert("La contraseña es incorrecta");

                    }
                    if(json['error'] == 2) {
                        console.log("2");
                        alert("El usuario es invalido.");
                        // invalid user
                    }
                    if(json['error'] == 3) {
                        console.log("3");
                        alert("El usuario esta baneado.");
                    }
                }
            },
            complete: function(){
                //desbloquea el botón cuando recibe respuesta
                /*button.classList.remove("loading-button");
                button.removeAttribute("disabled");
                $(buttonText).css("visibility", "visible");*/
            },
            error: function(data) {
                console.log(data);
            }
        });

        $.ajax({
          type: "POST",
          url: "http://localhost:80/sitioReact/backend/accounts/isLoggedIn.php",
          //data: []
          xhrFields: {
            withCredentials: true
          },
          success(data) {
              setIsLoggedIn(data);
              console.log(data);
          },
      });
      console.log(isLoggedIn);
      }

  return (
  <div className="box">
    <form>
        <div className="container">
          <h1>Ingresar</h1>
          <p>Introduce los datos para acceder a tu cuenta</p>
          <hr className="formHr"/>
      
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" className="formInput" placeholder="" name="email" id="email" required/>
      
          <label htmlFor="psw"><b>Contraseña</b></label>
          <input type="password" className="formInput" placeholder="" name="psw" id="psw" required/>
          <hr/>
      
          <button type="submit"  id="submit" className="registerbtn formButton" onClick={handleSubmit}><span id="submit-text">Ingresar</span></button>
          
        </div>
      
        <div className="container signin">
          <p> ¿Todavía no tienes una cuenta? <Link to="../signup" className="registerLink">Registrarse</Link></p>
        </div>
      </form>
    <script src="login.js"></script>
  </div>
  )
}
