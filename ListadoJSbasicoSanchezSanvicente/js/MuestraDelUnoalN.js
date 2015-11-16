window.onload = function(){
	document.write("<p>Un número, se mostrará la secuencia.</p>");
	document.write("<input type='textArea' id='numero'>"
		+"<input type='button' id='secuencia' value='Mostrar Secuencia'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("secuencia").addEventListener("click",secuencia);
	document.close();

}

function secuencia(){
	numero = parseInt(document.getElementById("numero").value);
	if(!isNaN(numero)){
		document.getElementById("txt").innerHTML = "";//por si tenemos un error escrito anteriormente, lo borramos
		if(numero >0){
		for (var i = 0; i < numero+1; i++) {
		document.getElementById("txt").innerHTML += i+"  ";
		};

	}
	else{
		document.getElementById("txt").innerHTML = "El número debe ser positivo";
	}
	}
	else
		document.getElementById("txt").innerHTML = "Introduzca un número correcto.";
	
	
		
	
}
