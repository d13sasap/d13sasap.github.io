window.onload = function(){
	document.write("<p>Se mostrará la multiplicación de los 20 primeros impares</p>");
	document.write("<input type='button' id='mult' value='Multiplicar'> ");
	
	document.write("<p id=\"txt\"></p>");
	document.getElementById("mult").addEventListener("click",multiplicar);
	document.close();

}

function multiplicar(){
	var contador = 0;
	var i = 1;
	var producto = 1;
	do{
		if(i%2!=0){
			producto *= i;
			contador++;
			document.getElementById("txt").innerHTML += i+"</br>";
			
		}
		i++;

	}while(contador<20);
	document.getElementById("txt").innerHTML += "Producto ="+ producto;
}