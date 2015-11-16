window.onload = function(){
	document.write("Se mostrará una pirámide numérica(II)");
	document.write("<input type='button' id='mostrar' value='Mostrar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("mostrar").addEventListener("click",mostrar);
	document.close();

}


function mostrar(){

	for (var i = 1; i < 11; i++) {
		var numero = i;
		for (var j = 1; j < i; j++) {
			if(j==9){

			}
		document.getElementById("txt").innerHTML += (j);


		};
		document.getElementById("txt").innerHTML += "</br>";

	};
	for (var i = 1; i < 10; i++) {
		document.getElementById("txt").innerHTML += (i);
	};
	document.getElementById("txt").innerHTML += ("0");
	var boton = document.getElementById("mostrar");
	boton.parentNode.removeChild(boton);

	}