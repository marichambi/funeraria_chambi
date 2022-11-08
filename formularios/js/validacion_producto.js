"use strict"
function validar(){

var nombre = document.formu.nombre.value;

/*Cuando se quiere validar como dato correcto(letras con espacios en blaco) y que sea dato obligatoria*/

if ((!v1.test(nombre)) || (nombre == "")){
alert("El nombre es incorrecto o el campo esta vacio");
document.formu.nombre.focus();
return;
	}
	document.formu.submit();

}
