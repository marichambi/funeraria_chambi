"use strict"
function validar(){
var nombre = document.formu.nombre.value;
var descripcion = document.formu.descripcion.value;
var salario = document.formu.salario.value;


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
/*Cuando se quiere validar como dato correcto(numeros enteros positivos) y que sea dato obligatoria*/
if ((!v2.test(salario)) || (salario == "")){
alert("El salario es incorrecto o el campo esta vacio");
document.formu.salario.focus();
return;
	}
	document.formu.submit();

}
