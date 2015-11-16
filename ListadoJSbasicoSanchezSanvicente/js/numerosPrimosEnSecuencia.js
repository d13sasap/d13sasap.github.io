window.onload = function(){
	document.write("<p>Introduzca un número mayor que uno e indicaremos cuantos números primos existen entre el número y 1</p>")
	document.write("<input type='textArea' id='texto'><input type='button' id='comprobar' value='Comprobar'> ");
	document.write("<p id=\"txt\"></p>")
	document.getElementById("comprobar").addEventListener("click",mostrarNumeroPrimos);
	document.close();
}

function mostrarNumeroPrimos(){
	var numero = document.getElementById("texto").value;
	var cont = 0;
	if(numero>1){
		for (var i = 0; i < numero; i++) {
			if(esPrimo(i))
				cont++;
		}
		document.write("En el intervalo hay "+cont+" números primos");
	}
	else
		document.body.innerHTML = "El número debe ser mayor de 1";

}//mostrarNumeroPrimos
function esPrimo(entero){

	var numero = entero;
	if(numero>1){
		var contador = 2;
	var primo=true;
	while ((primo) && (contador!=numero)){
		if (numero % contador == 0)
			primo = false;
    contador++;
  }
	}
	return primo;
 }