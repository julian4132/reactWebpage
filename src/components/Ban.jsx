import React from 'react'
import '../styles/admin.css'
import $ from 'jquery';

export default function Ban(props) {
    //console.log(props);
    const user = props.userData;

    function handleSubmit(e){
            //te deja en la misma pantalla
        e.preventDefault();
        let razon = $('#razon').val();
        $.ajax({
            url: "https://www.agssoft.ar/NUEVE/backend/admin/doBan.php",
            method: "post",
            data: {
                'email': user.correo,
                'razon': razon
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                console.log(data);
                let json = JSON.parse(data);
                if(json['success'] == true) {
                    alert(json['msg'])
                    window.location.replace('/admin');
    
                }
    
            },
            error: function(data) {
                console.log("err");
                console.log(data);
            }
        });
    }


  return (
    <div className="adminBox">
    <form>
        <div className="adminContainer">
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
                    <button id="submit" type="submit" style={{width: "70%"}}  onClick={handleSubmit} className="adminButton">Enviar</button>
                </div>

        </div>
      </form>
  </div>
  )
}
