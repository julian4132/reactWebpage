<?php

include_once "connect.php";
/*$some_name = session_name("some_name");
session_set_cookie_params(0, '/NUEVE');*/
//echo "Saludito";

//echo $_GET['user'];


if(isset($_GET['user']) && !empty($_GET['user']) AND isset($_GET['hash']) && !empty($_GET['hash'])){
    $user = mysqli_real_escape_string($conn, $_GET['user']);
    $hash = mysqli_real_escape_string($conn, $_GET['hash']);
                 
//usuario, Activo, hash
//  AND Activo='0'            

    $sql = $conn->query("SELECT nuevoCorreo, nuevopasshash, activo, verifhash FROM `usuarios` WHERE nuevoCorreo='".$user."' AND activo='1' AND verifhash='".$hash."' ") or die(mysqli_error());

    //echo "Todo bien bro2";

    if($row_cnt = $sql->num_rows > 0){
        
        $row= $sql->fetch_array(MYSQLI_ASSOC);
        $userPassword = $row['nuevopasshash'];
        // Cambiar
        $sql = $conn->query("UPDATE `usuarios` SET correo='".$user."' WHERE nuevoCorreo='".$user."' AND activo='1' AND verifhash='".$hash."' ") or die(mysqli_error());
        $sql = $conn->query("UPDATE `usuarios` SET passhash='".$userPassword."' WHERE nuevoCorreo='".$user."' AND activo='1' AND verifhash='".$hash."' ") or die(mysqli_error());
        //echo '<div class="statusmsg">Tus datos ya fueron cambiados</div>';
        
        
        $_SESSION['user_name'] = $user;
        //DESCOMENTAR

        header('Location: ../../profile');
        exit();
    }else{
        // Error
        //echo '<div class="statusmsg">La url es inválida</div>';
        header('Location: https://www.agssoft.ar/NUEVE/errorEmail2');
    }
                 
} else{
    // Invalid approach
    //echo '<div class="statusmsg">Error. Por favor, emplear el enlace que fue enviado por correo electrónico.</div>';
    header('Location: https://www.agssoft.ar/NUEVE/errorEmail2');
}



//$sql->free();


$conn->close();


?>