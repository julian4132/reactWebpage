import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginForm.css'

export default function LoginForm() {
  return (
  <div className="box">
    <form>
        <div className="container">
          <h1>Ingresar</h1>
          <p>Introduce los datos para acceder a tu cuenta</p>
          <hr className="formHr"/>
      
          <label for="email"><b>Email</b></label>
          <input type="text" class="formInput" placeholder="" name="email" id="email" required/>
      
          <label for="psw"><b>Contraseña</b></label>
          <input type="password" class="formInput" placeholder="" name="psw" id="psw" required/>
          <hr/>
      
          <button type="submit"  id="submit" className="registerbtn formButton"><span id="submit-text">Ingresar</span></button>
          
        </div>
      
        <div className="container signin">
          <p> ¿Todavía no tienes una cuenta? <Link to="../signup" class="registerLink">Registrarse</Link></p>
        </div>
      </form>
    <script src="login.js"></script>
  </div>
  )
}
