import { React, useState, useEffect } from 'react'
import '../styles/loginForm.css'
import $ from 'jquery'
import { Link }  from 'react-router-dom'
import { json } from 'react-router-dom';

export default function ProfileData() {

    const exampleUserData = {
        'user_name': '',
    }
    const [userData, setUserData] = useState({'user_name': "asd"});
    
    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/sitioReact/backend/accounts/userData.php",
            xhrFields: {
                withCredentials: true
            },
            success(data) {
                setUserData(JSON.parse(data));
                /*setUserData(userData => ({
                    ...userData,
                    ...data
                }));*/
                console.log(userData.user_name);
            },
        });
      }, []);

  return (
    <div className="box">
        <form action="http://localhost:80/sitioreact/backend/accounts/logout.php" method="get">
            <div className="container">
            <h1>Mi usuario</h1>
            <p>Estos son tus datos personales</p>
            <hr className="formHr"/>            
            
            <label htmlFor="email"><b>Email</b></label>
            <p>{userData.user_name}</p>
            {userData.user_name==='admin@admin.com' || userData.user_name==='joaquinvergara070@gmail.com'?
                (<div>
                    <hr className="formHr"/>
                    <Link to='admin' className="registerLink">Panel de administrador</Link>
                </div>)
                : (<div></div>)
            }
            {/*<p><?php echo $_SESSION['user_name'];?></p>*/}
            {/*<?php
            if($_SESSION['user_name'] == 'admin@admin.com' || $_SESSION['user_name'] == 'joaquinvergara070@gmail.com') {
                echo "<hr>";
                echo "<a href='../admin/admin.php'>Panel de administrador</a>";
            }

        ?>*/}

            <hr className="formHr"/>
            <button type="submit" id="submit" className="registerbtn formButton">Cerrar sesión</button>

            <p style={{textAlign: 'center'}}>¿Querés cambiar estos datos? <Link to="/editProfile" className='registerLink'>Editar mi perfil</Link> .</p> 

            </div>
        </form>
    </div>
  )
}
