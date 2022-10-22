<?php 
session_start();
$_SESSION = array();
session_destroy();
header('location: https://www.agssoft.ar/NUEVE');
?>
