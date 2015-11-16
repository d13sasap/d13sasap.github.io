window.onload = function(){
	document.write("<p>Introduzca 0´s y 1´s , se mostrará la cantidad de ceros al introducir 2</p>");
	document.write("<input type='textArea' id='numero'><input type='button' id='aniadir' value='Añadir'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("aniadir").addEventListener("click",aniadir);
	document.close();

}

var suma = 0;
var contador =0;

function aniadir(){
	numero = parseInt(document.getElementById("numero").value);

	
	if(isNaN(numero)){
		document.getElementById("txt").innerHTML = "Se han introducido valores no numéricos";
	}
	else{
		if(numero ==0){
			
			contador++;
		}
		else if(numero ==1){
			
			
		}
		else if(numero == 2){
			document.getElementById("txt").innerHTML = ("Cantidad de ceros introducida: "+contador);
			contador =0;
		}
			else{
			document.getElementById("txt").innerHTML = ("Debe introducir 0 y 1 solamente, o 2 para calcular.");
				
			}			
	}
	
	
	}
