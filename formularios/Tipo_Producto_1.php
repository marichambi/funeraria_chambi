<?php
$id = $_POST["id"];
$descripcion = $_POST["descripcion"];
$forma = $_POST["forma"];
$precio = $_POST["precio"];
$formulario = $_POST["formulario"];
echo "<b>Los valores de $formulario son :</b> <br>";

echo "Tipo_Producto: $id<br>";
echo "Descripcion: $descripcion<br>";
echo "Forma: $forma<br>";
echo "Precio: $precio";


?>
