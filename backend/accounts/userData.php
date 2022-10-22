<?php
header('Access-Control-Allow-Origin: https://www.agssoft.ar/NUEVE');
header('Access-Control-Allow-Credentials: true');
session_start();
echo json_encode($_SESSION);