import React from 'react'
import $ from 'jquery'

export default function editProfileForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ready");
    let user = $('#email').val();
    let old = $('#oldpsw').val();
    let pass = $('#psw').val();
    let rpt = $('#psw-repeat').val();
    console.log(user);
    console.log(old);
    console.log(pass);
    console.log(rpt);

    $.ajax({
        url: "https://www.agssoft.ar/NUEVE/backend/accounts/editProfile.php",
        method: "post",
        data: {
            'email': user,
            'oldpsw': old,
            'psw': pass,
            'psw-repeat': rpt
        },
        xhrFields: {
          withCredentials: true
        },
        success: function(data) {
            let json = JSON.parse(data)
            console.log(data);
            if(json['success'] == true) {
                //aca hay que poner el codigo javascript para que se oculte
                //el login y signup (ya inicio sesion), y armar tipo una barra con 
                //mas opciones y para cerrar sesion.
                window.location.replace("/emailSentEdit");
                //$('.login-bt').hide();
                //$('.my-acc').show();
                //login successful
            } else {
                if(json['error'] = 'incorrect password') {
                    alert('Contraseña incorrecta');
                }
                if(json['error'] = 'invalid mail') {
                    alert('Correo invalido');
                }
                if(json['error'] = 'invalid user') {
                    alert('El ususario no existe');
                }
                if(json['error'] = 'no password match') {
                    alert('Las contraseñas no coinciden');
                }
                if(json['error'] = 'mail already used') {
                    alert('El correo ya está en uso');
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
          <h1>Editar perfil</h1>
          <p>Introduce tus nuevos datos</p>
          <hr classname="formHr"/>
      
          <label htmlFor="email"><b>Nuevo Email</b></label>
          <input type="text" className="formInput" placeholder="" name="email" id="email" required/>
      
          <label htmlFor="psw"><b>Contraseña anterior</b></label>
          <input type="password" className="formInput" placeholder="" name="oldpsw" id="oldpsw" required/>
          
          <label htmlFor="psw"><b>Nueva contraseña</b></label>
          <input type="password" className="formInput" placeholder="" name="psw" id="psw" required/>

          <label htmlFor="psw"><b>Repetir nueva contraseña</b></label>
          <input type="password" className="formInput" placeholder="" name="psw-repeat" id="psw-repeat" required/>
          <hr className="formHr"/>
      
          <button type="submit" id="submit" className="registerbtn formButton" onClick={handleSubmit}>Aplicar cambios</button>
          
        </div>
      </form>
    <script src="editProfile.js"></script>
  </div>

  )
}
