import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorEmail() {
  return (
    <div class="box" style={{marginTop: "25px"}}>
        <div class="container">
          <h1>Error</h1>
          <p>Url inválida</p>
          <hr className="formHr"/>
      
          <p>La url que acabás de abrir es inválida
            Esto puede haber sucedido porque ya validaste antes tu correo, o porque la url es incorrecta.
          </p>

          <hr className="formHr"/>
      
          <button type="submit"  id="submit" className="registerbtn formButton">Ingresar</button>
          
        </div>
      
        <div class="container signin">
          <p> ¿Todavía no tienes una cuenta? <Link to="/signup" className="registerLink">Registrarse</Link></p>
        </div>
  </div>
  )
}
