import { React, useState, useEffect } from 'react'
import $ from 'jquery'
import '../styles/admin.css'
import { Link } from 'react-router-dom'

export default function AdminPanel() {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/sitioReact/backend/admin/db_admin.php",
            xhrFields: {
                withCredentials: true
            },
            success(data) {
                setTableData(JSON.parse(data));
            },
        });
      }, []);

    

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
                <tbody>
                {tableData.map((user, index) => {
                    return(
                        <tr className='adminTr' key={index}>
                            <td className='adminTd'>{user.correo}</td>
                            <td className='adminTd'>{user.cuando}</td>
                            <td className='adminTd'>{user.logins}</td>
                            <td className='adminTd'>{user.lastlogin}</td>
                            <td className='adminTd'><Link to={'/ban/'+user.correo} className='adminLink'>Banear</Link></td>
                        </tr>
                    )
                })}
                </tbody>

              </table>

        </div>
      

      </form>
  </div>

  )
}
