import { React, useState, useEffect } from 'react'
import $ from 'jquery'
import '../styles/admin.css'
import { Link } from 'react-router-dom'

export default function AdminPanel() {

    const [tableData, setTableData] = useState("");

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/sitioReact/backend/admin/db_admin.php",
            xhrFields: {
                withCredentials: true
            },
            success(data) {
                //setIsLoggedIn(data);
                console.log(data);
                setTableData(data);
            },
        });
      });


  return (
    <div className="adminBox">
    <form>
        <div className="adminContainer">
            <h1>Administrador</h1>
            <p>Control de base de datos</p>
            <hr className="adminHr"/>
            <h2>Usuarios</h2>
            <table className="adminTable">
                <thead>
                    <tr className="adminTr">
                        <th className="adminTh">Email</th>
                        <th className="adminTh">Fecha de creación</th>
                        <th className="adminTh">Cantidad de ingresos</th>
                        <th className="adminTh">Última conexión</th>
                        <th className="adminTh">Acción</th>
                    </tr>
                </thead>
                <tbody /*dangerouslySetInnerHTML={{__html: tableData}}*/>
                <tr className='adminTr'><td className='adminTd'>juliaximo@gmail.com</td><td className='adminTd'>2022-08-13 17:46:59</td><td className='adminTd'>30</td><td className='adminTd'>2022-10-15 19:08:50</td><td className='adminTd'><a href='./ban.php?email=juliaximo@gmail.com' className='adminLink'>Banear</a></td></tr><tr className='adminTr'><td className='adminTd'>admin@admin.com</td><td className='adminTd'>2022-08-13 17:54:55</td><td className='adminTd'>15</td><td className='adminTd'>2022-10-19 15:03:34</td><td className='adminTd'><a href='./ban.php?email=admin@admin.com' className='adminLink'>Banear</a></td></tr>
                </tbody>

              </table>

        </div>
      

      </form>
  </div>

  )
}
