"use strict"
function validar(){
var nombre = document.formu.nombre.value;
var descripcion = document.formu.descripcion.value;
var date = document.formu.date.value;
var cantidad = document.formu.cantidad.value;
var precio = document.formu.precio.value;

/*console.log("Nombres:"+nombres);
console.log("Ap:"+ap);
console.log("Am:"+am);
console.log("Ci:"+ci);
console.log("Direccion:"+direccion);
console.log("Profesion:"+profesion);
console.log("Correo:"+correo);
}*/

/*Cuando se quiere validar como dato correcto(letras con espacios en blaco) y que sea dato obligatoria*/
if ((!v1.test(nombre)) || (nombre == "")){
alert("El nombre es incorrecto o el campo esta vacio");
document.formu.nombre.focus();
return;
}
if ((!v1.test(descripcion)) || (descripcion == "")){
alert("La descripcion es incorrecto o el campo esta vacio");
document.formu.descripcion.focus();
return;
}

if (date== ""){
alert("La fecha es incorrecto o el campo esta vacio");
document.formu.date.focus();
return;
}

/*Cuando se quiere validar como dato correcto(numeros enteros positivos) y que sea dato obligatoria*/
if ((!v2.test(cantidad)) || (cantidad== "")){
alert("La cantidad es incorrecto o el campo esta vacio");
document.formu.cantidad.focus();
return;
}
if ((!v2.test(precio)) || (precio == "")){
alert("El precio es incorrecto o el campo esta vacio");
document.formu.precio.focus();
return;
	}
	document.formu.submit();

}
