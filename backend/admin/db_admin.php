<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
session_start();
include_once "../accounts/connect.php";
//$_SESSION['user_name'] == 'admin@admin.com'
if ($_SESSION['user_name'] == 'admin@admin.com' || $_SESSION['user_name'] == 'joaquinvergara070@gmail.com') {
    $sql = $conn->query("SELECT * FROM usuarios");
    $users_count = $sql->num_rows;
    while($row = $sql->fetch_array(MYSQLI_ASSOC)) {
        // el mail esta ahi para poder banear a ese usuario en particular
        // no se me ocurrio otra forma para poder hacer esto con js 
        // es un panel de administrador, la seguridad no es esencial
        $str_banned = "<td className='adminTd'><a href='./ban.php?email=".$row['correo']."' className='adminLink'>Desbanear</a></td>";
        $str_unbanned = "<td className='adminTd'><a href='./ban.php?email=".$row['correo']."' className='adminLink'>Banear</a></td>";
        echo "<tr className='adminTr'>";
        echo "<td className='adminTd'>".$row['correo']."</td>";
        echo "<td className='adminTd'>".$row['cuando']."</td>";
        echo "<td className='adminTd'>".$row['logins']."</td>";
        echo "<td className='adminTd'>".$row['lastlogin']."</td>";
        if($row['baneado']) echo $str_banned;
        else echo $str_unbanned;
        echo "</tr>";

    }

}


?>
