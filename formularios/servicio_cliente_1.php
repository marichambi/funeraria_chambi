<?php
$nombre = $_POST["nombre"];
$descripcion = $_POST["descripcion"];
$date = $_POST["date"];
$cantidad = $_POST["cantidad"];
$precio = $_POST["precio"];
$formulario = $_POST["formulario"];
echo "<b>Los valores de $formulario son :</b> <br>";

echo "Nombre: $nombre<br>";
echo "Descripcion: $descripcion<br>";
echo "Date: $date<br>";
echo "cantidad: $cantidad<br>";
echo "Precio: $precio";


?>
