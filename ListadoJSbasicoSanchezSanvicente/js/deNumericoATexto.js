window.onload = function(){
	document.write("<p>Introduzca número para pasarlo a texto</p>");
	document.write("Número<input type='textArea' id='num'><input type='button' id='pasar' value='Transformar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("pasar").addEventListener("click",pasar);
	document.close();

}

function pasar(){
	var n = document.getElementById("num").value;
	var unidades = " ";
	var decenas = " ";
	
		n = n.split("");
		if(n.length > 1){
			if(n[1]==1)
				unidades = "uno";
		}
		else{
			if(n[0]==0)
				unidades = "cero";
			if(n[0]==1)
				unidades = "uno";
			if(n[0]==2)
				unidades = "dos";
			if(n[0]==3)
				unidades = "tres";
			if(n[0]==4)
				unidades = "cuatro";
			if(n[0]==5)
				unidades = "cinco";
			if(n[0]==6)
				unidades = "seis";
			if(n[0]==7)
				unidades = "siete";
			if(n[0]==8)
				unidades = "ocho";
			if(n[0]==9)
				unidades = "nueve";
		}
		document.getElementById("txt").innerHTML = unidades;
}