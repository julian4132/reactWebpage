<?php
header('Access-Control-Allow-Origin: https://agssoft.ar');
header('Access-Control-Allow-Credentials: true');
session_start();
echo json_encode($_SESSION);