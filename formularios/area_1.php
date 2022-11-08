<?php
$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$salario = $_POST["salario"];
$formulario = $_POST["formulario"];

echo "<b>Los valores de $formulario son :</b> <br>";

echo "Nombre: $nombre<br>";
echo "Descripcion: $descripcion<br>";
echo "Salario: $salario";


?>