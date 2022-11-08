"use strict"
function validar(){
var id = document.formu.id.value;
var descripcion = document.formu.descripcion.value;
var forma = document.formu.forma.value;
var precio = document.formu.precio.value;

/*Cuando se quiere validar como dato correcto(letras con espacios en blaco) y que sea dato obligatoria*/
if (id == ""){
alert("El id es incorrecta o el campo esta vacio");
document.formu.id.focus();
return;
}

/*Cuando se quiere validar como dato obligatoria*/
if (descripcion == ""){
alert("La descripcion es incorrecta o el campo esta vacio");
document.formu.descripcion.focus();
return;
}
if (forma == ""){
alert("La forma es incorrecta o el campo esta vacio");
document.formu.forma.focus();
return;
}
/*Cuando se quiere validar como dato correcto(letras con espacios en blaco) y que sea dato obligatoria*/
if ((!v22.test(precio)) || (precio == "")){
alert("El precio es incorrecto o el campo esta vacio");
document.formu.precio.focus();
return;
	}
	document.formu.submit();

}
