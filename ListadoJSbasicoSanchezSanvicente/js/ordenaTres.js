window.onload = function(){
	document.write("<p>Introduzca 3 números para ordenarlos</p>");
	document.write("<input type='textArea' id='num1'>");
	document.write("<input type='textArea' id='num2'>");
	document.write("<input type='textArea' id='num3'><input type='button' id='ordenar' value='ordenaTres'> ");
	
	document.write("<p id=\"txt\"></p>")
	document.getElementById("ordenar").addEventListener("click",ordenaTres);
	document.close();
}

function ordenaTres(){
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	num3 = document.getElementById("num3").value;
	if(isNaN(num1) || isNaN(num3) ||isNaN(num3)){
		document.getElementById("txt").innerHTML = "Se han introducido valores no numéricos";
	}
	else{
		var array = [num1, num2,num3];
	array.sort();
	document.getElementById("txt").innerHTML = (array[0]+"<"+array[1]+"<"+array[2]);
	}
	
}