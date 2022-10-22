import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/registerForm.css'
import $ from 'jquery'
import axios from 'axios'

export default function RegisterForm() {

    /*$( document ).ready(function() {

        $("#submit").click(function (e) {
            e.preventDefault();
            console.log("ready");
            let user = $('#email').val();
            let pass = $('#psw').val();
            let rpt = $('#psw-repeat').val();
    
            $.ajax({
                url: "http://localhost:80/sitioReact/backend/accounts/signup.php",
                type: "POST",
                data: {
                    'email': user,
                    'psw': pass,
                    'psw-repeat': rpt
                },
                success: function(data) {
                    // sin esta linea el js llora por formatos
                    let json = JSON.parse(data)
                    if(json['success'] == true) {
                        //aca hay que poner el codigo javascript para que se oculte
                        //el login y signup (ya inicio sesion), y armar tipo una barra con 
                        //mas opciones y para cerrar sesion.
                        window.location.replace("./emailSent.html");
                        $(document).ready(function() {
    //                        $('.login-bt').hide();
     //                       $('.my-acc').show();
    
                        });
                        //login successful
                    } else {
                        if(json['error'] == 'different passwords') {
                            alert('Las contraseñas no coinciden.');
                        }
                        if(json['error'] == 'mail already used') {
                            alert('El correo electronico ya está en uso.');
                        }
                        if(json['error'] == 'invalid mail') {
                            alert('Correo electronico invalido');
                        }
                        // login failed
                    }
                },
                error: function(data) {
                    console.log("error");
                    console.log(data);
                }
            });
    
        });
    });
    const baseURL = 'http://localhost:80/sitioReact/backend/accounts/signup.php'
    //const baseURL = 'http://localhost:80/sitioReact/backend/accounts/isLoggedIn.php'
*/

    function handleSubmit(e){
        e.preventDefault();
        console.log("ready");
        let user = $('#email').val();
        let pass = $('#psw').val();
        let rpt = $('#psw-repeat').val();
    
        $.ajax({
            url: "https://www.agssoft.ar/NUEVE/backend/accounts/signup.php",
            type: "POST",
            data: {
                'email': user,
                'psw': pass,
                'psw-repeat': rpt
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                // sin esta linea el js llora por formatos
                let json = JSON.parse(data)
                if(json['success'] == true) {
                    //aca hay que poner el codigo javascript para que se oculte
                    //el login y signup (ya inicio sesion), y armar tipo una barra con 
                    //mas opciones y para cerrar sesion.
                    window.location.replace("/emailSent");
                    /*$(document).ready(function() {
                        $('.login-bt').hide();
                        $('.my-acc').show();
    
                    });*/
                    //login successful
                } else {
                    if(json['error'] == 'different passwords') {
                        alert('Las contraseñas no coinciden.');
                    }
                    if(json['error'] == 'mail already used') {
                        alert('El correo electronico ya está en uso.');
                    }
                    if(json['error'] == 'invalid mail') {
                        alert('Correo electronico invalido');
                    }
                    // login failed
                }
            },
            error: function(data) {
                console.log("error");
                console.log(data);
            }
        });
    }

  return (
    <div className="box">
        <form>
            <div className="container">
            <h1>Registrarse</h1>
            <p>Completá este formulario para registrar una nueva cuenta</p>
            <hr className="formHr"/>

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" className="formInput" placeholder="" name="email" id="email" required/>
        
            <label htmlFor="psw"><b>Contraseña</b></label>
            <input type="password" className="formInput" placeholder="" name="psw" id="psw" required/>
        
            <label htmlFor="psw-repeat"><b>Repetir Contraseña</b></label>
            <input type="password" className="formInput" placeholder="" name="psw-repeat" id="psw-repeat" required/>
            <hr className="formHr"/>
        
            <p>Creando una cuenta estás aceptando nuestros <a href="#" className="registerLink">Términos y condiciones</a>.</p>
            <button type="submit" id="submit" className="registerbtn formButton" onClick={handleSubmit}>Registrarse</button>
            </div>
        
            <div className="container signin">
            <p>¿Ya tienes una cuenta? <Link to="/login" className="registerLink">Ingresar</Link></p>
            </div>
        </form>
        <script src="signup.js"></script>
    </div>
  )
}
