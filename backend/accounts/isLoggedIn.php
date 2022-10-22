<?php
header('Access-Control-Allow-Origin: https://www.agssoft.ar/NUEVE');
header('Access-Control-Allow-Credentials: true');
session_start();
if(isset($_SESSION['user_name'])) {
    echo "true";
} else echo "false";
?>
