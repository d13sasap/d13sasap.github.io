window.onload = function(){
	document.write("<p>Introduzca números positivos , se calculará la media al introducir -1</p>");
	document.write("<input type='textArea' id='numero'><input type='button' id='aniadir' value='Añadir'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("aniadir").addEventListener("click",aniadir);
	document.close();

}

var suma = 0;
var contador =0;

function aniadir(){
	numero = parseInt(document.getElementById("numero").value);

	
	if(isNaN(numero)|| numero <-1){
		document.getElementById("txt").innerHTML = "Se han introducido valores no numéricos o permitidos(sólo positivos o -1 para calcular)";
	}
	else{
		if(document.getElementById("numero").value !=-1){
			suma += numero;
			contador++;
		}
		else
			document.getElementById("txt").innerHTML = ("La media es: "+suma/contador);

			
	}
	
	
	}

	
