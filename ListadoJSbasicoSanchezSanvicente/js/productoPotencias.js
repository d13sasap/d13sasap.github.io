window.onload = function(){
	document.write("<p>Se mostrará el producto de potencias de 2, del 0 al 10</p>");
	document.write("<input type='button' id='mostrar' value='Mostrar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("mostrar").addEventListener("click",mostrar);
	document.close();

}

var suma = 0;
var contador =0;

function mostrar(){

	for (var i = 0; i < 11; i++) {
		document.getElementById("txt").innerHTML += i+"^2 = "+Math.pow(i,2)+"</br>";
	};
	var boton = document.getElementById("mostrar");
	boton.parentNode.removeChild(boton);

	}