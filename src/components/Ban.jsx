import React from 'react'
import '../styles/admin.css'

export default function Ban(props) {
    //console.log(props);
    const user = props.userData;
  return (
    <div className="box">
    <form>
        <div className="container">
            <h1>{user.baneado=="0"? 'Banear Usuario' : 'Desbanear Usuario'}</h1>
            
            <p>Completa el formulario para realizar el bloqueo</p>
            <hr className="adminHr"/>

            <h2>Datos del usuario</h2>
            <div className="flex">
                <div>
                    <h4>Email</h4>
                    <p id="correo" name="correo">{user.correo}</p>
                    <h4>Fecha de creación</h4>
                    <p>{user.cuando}</p>

                </div>
                <div>
                    <h4>Cantidad de ingresos</h4>
                    <p>{user.logins}</p>
                    <h4>Última conexión</h4>
                    <p>{user.lastlogin}</p>
                </div>
            </div>
            <h2>Razón del bloqueo/desbloqueo</h2>
                <textarea id="razon" name="razon" className="adminTextarea"></textarea>
                
                <div className="flex">
                    <button id="submit" type="submit" style={{width: "70%"}} className="adminButton">Enviar</button>
                </div>

        </div>
      </form>
  </div>
  )
}
