import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginForm.css'
import $ from 'jquery'

export default function LoginForm() {
    
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
      
          <button type="submit"  id="submit" className="registerbtn formButton"><span id="submit-text">Ingresar</span></button>
          
        </div>
      
        <div className="container signin">
          <p> ¿Todavía no tienes una cuenta? <Link to="../signup" className="registerLink">Registrarse</Link></p>
        </div>
      </form>
    <script src="login.js"></script>
  </div>
  )
}
