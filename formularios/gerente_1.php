<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$c_i = $_POST["c_i"];
$telefono = $_POST["telefono"];
$direccion = $_POST["direccion"];
$profesion = $_POST["profesion"];
$formulario = $_POST["formulario"];
echo "<b>Los valores de $formulario son :</b> <br>";

echo "Nombre: $nombre<br>";
echo "Apellido: $apellido<br>";
echo "C_i: $c_i<br>";
echo "Telefono: $telefono<br>";
echo "Direccion: $direccion<br>";
echo "Profesion: $profesion";

?>