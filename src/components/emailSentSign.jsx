import React from 'react'

export default function emailSentSign() {
  return (
    <div class="box">
    <form action="/login">
        <div class="container">
          <h1>Usuario Registrado</h1>
          <hr className="formHr"/>
          <p>Tu usuario ya está registrado. Solo tenés que validarlo.</p>
          <p>Para ello, tenés que abrir el enlace adjunto en el correo que te enviamos.</p>
          <p>Una vez que lo hayas hecho, vas a poder iniciar sesión.</p>
          <hr className="formHr"/>
      
          <button type="submit" class="registerbtn formButton">Regresar a iniciar sesión</button>
        </div>  
    </form>
  </div>
  )
}
