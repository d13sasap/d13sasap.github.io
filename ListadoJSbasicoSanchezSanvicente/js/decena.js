window.onload = function(){
	document.write("<p>Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique: </br>a. Cuántas cifras tiene (7 cifras) </br>b. Lo muestre del revés 8</p>");
	document.write("<input type='textArea' id='numero'><input type='button' id='seguir' value='Seguir'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("seguir").addEventListener("click",seguir);
	document.close();

}
var numero;
function seguir(){
	numero = document.getElementById("numero").value;

	document.getElementById("txt").innerHTML += ("Número de cifras del número:  "+ contarDigitos(numero));
	alReves();
	
	}

	function contarDigitos(number){
		var n = number;
		n = n.split(".");
		return (n[0].length + n[1].length);
	}
	function alReves(){
		var n = numero;
		n = n.split(".");
		document.getElementById("txt").innerHTML += ("</br>Número del revés:  "+ n.reverse());
	}