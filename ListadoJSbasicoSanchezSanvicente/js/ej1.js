var numero;

setAleatorioDel0al100();






function setAleatorioDel0al100(){
	numero = Math.round(Math.random()*100);
}
var ventana;
var ventana2;


function comprobarNumero(){

	var texto = document.getElementById("numero").value.toString();
	if(texto==numero){
		document.getElementById("numero").className = "off";
		document.getElementById("boton1").className = "off";
		document.write("<input type='button' value='Jugar de nuevo' onclick='jugarDeNuevo()'>");
		
		//document.getElementById("parrafo").innerHTML="<input type='button' value='Jugar de nuevo' onclick='jugarDeNuevo'><input type='button' value='Salir' onclick='jugarDeNuevo'>";
		ventana = window.open("","_blank");


		ventana.document.write("<p>Has acertado el número, enhorabuena!!</p><input type='button' value='Cerrar' onclick='window.close()'>");
		ventana.document.close();
		
		setAleatorioDel0al100();

	}
	else if(texto<numero){
		document.getElementById("parrafo").innerHTML = "El número a adivinar es mayor";
	}
	else{
		document.getElementById("parrafo").innerHTML = "El número a adivinar es menor";
	}
	
}

function jugarDeNuevo(){
	//ventana2 = window.open("ejercicio1.html","_self");
	//alert("hola");
	// document.getElementById("numero").className = "on";
	// document.getElementById("boton1").className = "on";
	
	// setAleatorioDel0al100();
	location.reload();
}