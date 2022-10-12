import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/registerForm.css'

export default function RegisterForm() {
  return (
    <div className="box">
        <form>
            <div className="container">
            <h1>Registrarse</h1>
            <p>Completá este formulario para registrar una nueva cuenta</p>
            <hr className="formHr"/>

            <label for="email"><b>Email</b></label>
            <input type="text" className="formInput" placeholder="" name="email" id="email" required/>
        
            <label for="psw"><b>Contraseña</b></label>
            <input type="password" className="formInput" placeholder="" name="psw" id="psw" required/>
        
            <label for="psw-repeat"><b>Repetir Contraseña</b></label>
            <input type="password" className="formInput" placeholder="" name="psw-repeat" id="psw-repeat" required/>
            <hr className="formHr"/>
        
            <p>Creando una cuenta estás aceptando nuestros <a href="#" class="registerLink">Términos y condiciones</a>.</p>
            <button type="submit" id="submit" className="registerbtn formButton">Registrarse</button>
            </div>
        
            <div className="container signin">
            <p>¿Ya tienes una cuenta? <Link to="../login" class="registerLink">Ingresar</Link></p>
            </div>
        </form>
        <script src="signup.js"></script>
    </div>
  )
}
