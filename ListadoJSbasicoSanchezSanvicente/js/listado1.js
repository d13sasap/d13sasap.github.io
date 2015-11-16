window.onload = function(){

	for (var i = 0; i < 20; i++) {
		document.write("<input id=\"ej"+(i+1)+"\"type=\"button\" value=\"Ejercicio"+(i+1)+"\"></input>");
		if(i==9)
					document.write("</br></br>");


	}
	document.getElementById("ej1").addEventListener("click",adivina);//sin terminar
	document.getElementById("ej2").addEventListener("click",deSiesteEnSiete);
	document.getElementById("ej3").addEventListener("click",multiplosDeCinco);
	document.getElementById("ej4").addEventListener("click",numeroPrimo);
	document.getElementById("ej5").addEventListener("click",numerosPrimosEnSecuencia);
	document.getElementById("ej6").addEventListener("click",ordenaTres);
	document.getElementById("ej7").addEventListener("click",decena);
	document.getElementById("ej11").addEventListener("click",mediaPositivos);
	document.getElementById("ej12").addEventListener("click",cerosYunos);
	document.getElementById("ej13").addEventListener("click",productoPotencias);
	document.getElementById("ej14").addEventListener("click",calculaMedia);
	document.getElementById("ej15").addEventListener("click",muestraDelUnoAlN);
	document.getElementById("ej16").addEventListener("click",piramide);
	document.getElementById("ej17").addEventListener("click",piramideDos);
	document.getElementById("ej18").addEventListener("click",porLineas);
	document.getElementById("ej19").addEventListener("click",porLineasDos);
	document.getElementById("ej20").addEventListener("click",multiplicaImpares);
	


}
var nuevaVentana;
function adivina(){
	
	nuevaVentana = window.open("ejercicio1.html","_self","");
}

function deSiesteEnSiete(){
	nuevaVentana = window.open("deSiesteEnSiete.html","_self","");
}

function multiplosDeCinco(){
	nuevaVentana = window.open("multiplosDeCinco.html","_self","");
}
function numeroPrimo(){
	nuevaVentana = window.open("numeroPrimo.html","_self","");
}

function numerosPrimosEnSecuencia(){
	nuevaVentana = window.open("numerosPrimosEnSecuencia.html","_self","");
}
function ordenaTres(){
	nuevaVentana = window.open("ordenaTres.html","_self","");
}

function mediaPositivos(){
	nuevaVentana = window.open("mediaPositivos.html","_self","");
}

function cerosYunos(){
	nuevaVentana = window.open("cerosYunos.html","_self","");
}
function productoPotencias(){
	nuevaVentana = window.open("productoPotencias.html","_self","");
}
function muestraDelUnoAlN(){
	nuevaVentana = window.open("MuestraDelUnoAlN.html","_self","");
}
function piramide(){
	nuevaVentana = window.open("piramide.html","_self","");
}
function piramideDos(){
	nuevaVentana = window.open("piramideDos.html","_self","");
}
function porLineas(){
	nuevaVentana = window.open("porLineas.html","_self","");
}
function porLineasDos(){
	nuevaVentana = window.open("porLineasDos.html","_self","");
}
function decena(){
	nuevaVentana = window.open("decena.html","_self","");
}
function calculaMedia(){
	nuevaVentana = window.open("calculaMedia.html","_self","");
}
function multiplicaImpares(){
	nuevaVentana = window.open("multiplicaImpares.html","_self","");
}