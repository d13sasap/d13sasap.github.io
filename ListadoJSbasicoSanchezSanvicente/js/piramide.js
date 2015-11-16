window.onload = function(){
	document.writeln("<p>Se mostrará una pirámide numérica</p>");
	document.write("<input type='button' id='mostrar' value='Mostrar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("mostrar").addEventListener("click",mostrar);
	document.close();

}


function mostrar(){

	for (var i = 0; i < 11; i++) {
		var numero = i;
		if(i ==10)
			numero = 0;
		for (var j = 0; j < i; j++) {
		document.getElementById("txt").innerHTML += (numero);
		};
		document.getElementById("txt").innerHTML += "</br>";
	};
	var boton = document.getElementById("mostrar");
	boton.parentNode.removeChild(boton);

	}