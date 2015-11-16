window.onload = function(){
	document.write("<p>Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la fecha es correcta."+
		" Si lo fuera, ha de mostrar el día después.</p>");
	document.write("dia<input type='textArea' id='dia'>"+
		"mes<input type='textArea' id='mes'>"+
		"año<input type='textArea' id='anio'>"+
		"<input type='button' id='validar' value='Validar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("validar").addEventListener("click",validar);
	document.close();

}

function validar(){
	
}
