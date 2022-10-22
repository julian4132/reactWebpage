<?php
header('Access-Control-Allow-Origin: https://www.agssoft.ar/NUEVE');
header('Access-Control-Allow-Credentials: true');
include "variables.inc";

// Create connection
$conn = new mysqli($host, $user, $pass, $base);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
