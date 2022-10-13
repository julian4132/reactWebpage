<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
session_start();
if(isset($_SESSION['user_name'])) {
    echo "true";
} else echo "false";
?>
