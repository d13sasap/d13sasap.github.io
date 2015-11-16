window.onload = function(){
	document.write("Implementa PorLineasDos que visualice los números del 0 al 100 separados"+ 
		"por comas. Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.");
	document.write("</br><input type='button' id='mostrar' value='Mostrar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("mostrar").addEventListener("click",mostrar);
	document.close();

}


function mostrar(){

	for (var i = 0; i < 100; i++) {
		document.getElementById("txt").innerHTML += i+",";
		if((i+1)%7==0||esNumeroAcabadoEnSiete(i+1))
			document.getElementById("txt").innerHTML += "</br>";
	};
	var boton = document.getElementById("mostrar");
	boton.parentNode.removeChild(boton);

	}

	function esNumeroAcabadoEnSiete(numero){
		var n = numero;
		n = n.toString();
		if(n.charAt(n.length-1)==7)
			return true;
		else
			return false



	}