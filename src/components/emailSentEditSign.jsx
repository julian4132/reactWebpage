import React from 'react'

export default function emailSentEditSign() {

  return (
    <div className="box">
    <form action="https://agssoft.ar/NUEVE/profile">
        <div className="container">
          <h1>Registro Completado</h1>
          <hr className="formHr"/>
          <p>Los cambios ya se realizaron. Solo tenés que validarlos.</p>
          <p>Para ello, tenés que abrir el enlace adjunto en el correo que te enviamos.</p>
          <p>Una vez que lo hayas hecho, vas a poder ver los cambios en tu perfil.</p>
          <hr className="formHr"/>
      
          <button type="submit" className="registerbtn formButton">Regresar a mi perfil</button>
          
        </div>
      
    </form>
  </div>
  )
}
