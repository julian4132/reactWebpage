<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
session_start();
include_once "../accounts/connect.php";
if($_SESSION['user_name'] != 'admin@admin.com' || !isset($_POST['email'])){
    die();
}

    
$mail = $_POST['email'];
$sql = $conn->query("SELECT * FROM usuarios WHERE correo='".$mail."'");
if($sql->num_rows > 0) {
    $row = $sql->fetch_array(MYSQLI_ASSOC);
}

$json['baneado'] = $row['baneado'];
$json['cuando'] = $row['cuando'];
$json['correo'] = $row['correo'];
$json['logins'] = $row['logins'];
$json['lastlogin'] = $row['lastlogin'];

echo json_encode($json);
