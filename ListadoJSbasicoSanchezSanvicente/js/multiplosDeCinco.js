window.onload = function(){
	for (var i = 0; i < 7; i++) {
		document.write("Número "+(i+1)+": <input id=\"numero"+(i+1)+"\"type=\"textArea\"></input></br>");
	}
	
	document.write("<input id=\"boton1\" type=\"button\" value=\"Comprobar\" onclick= \"comprobarNumeros()\"></input>");
	document.close();
	comprobarNumero();
}

function esMultiploDe5(numero){
	if(numero%5==0)
		return true;
	return false;
}
function comprobarNumeros(){
	
	var array;
	var multiplo;

	for (var i = 0; i < 7; i++) {
		//numero = document.getElementById("numero"+(i+0)).value.toString();
		//var texto = document.getElementById("numero").value.toString();
		//alert(document.getElementById("numero"+(i+0)).value.toString());
		//document.getElementById("numero"+(i+1)).value);
		multiplo = document.getElementById("numero"+(i+1)).value;
		if(esMultiploDe5(multiplo)){
			document.write("<p>Al menos hay un número múltiplo de 5</p>");
			document.close;
			return;
		}
		if(i==6)
			document.write("<p>No hay múltiplos de 5</p>");
		document.close();
		
	}
}