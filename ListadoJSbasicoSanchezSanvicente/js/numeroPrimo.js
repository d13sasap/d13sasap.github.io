window.onload = function(){
	document.write("<p>Introduzca un número y le indicaremos si es primo o no</p>");
	document.write("<input type='textArea' id='texto'><input type='button' id='comprobar' value='Comprobar'> ");
	document.write("<p id=\"txt\"></p>")
	document.getElementById("comprobar").addEventListener("click",esPrimo);
	document.close();
}



function esPrimo(){

	var numero = document.getElementById("texto").value;
	if(numero>1){
		var contador = 2;
	var primo=true;
	while ((primo) && (contador!=numero)){
		if (numero % contador == 0)
			primo = false;
    contador++;
  }
	}
	
 if(primo || numero == 1)
 	document.getElementById("txt").innerHTML= "<p>El número es primo</p>";
 else 
 	document.getElementById("txt").innerHTML= "<p>El número no es primo</p>";
 document.close();
}