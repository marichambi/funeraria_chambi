<?php
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$c_i = $_POST["c_i"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$formulario = $_POST["formulario"];
echo "<b>Los valores de $formulario son :</b> <br>";

echo "Nombre: $nombre<br>";
echo "Apellido: $apellido<br>";
echo "C_i: $c_i<br>";
echo "Direccion: $direccion<br>";
echo "Telefono: $telefono";


?>
