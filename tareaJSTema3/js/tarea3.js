window.onload = function(){
nuevaVentana();
document.write("<h1>Tarea del Tema 3</h1>");
document.close();
}

function nuevaVentana(){
	ventana = window.open("","_blank");
	ventana.document.write("<script type=\"text/javascript\" src=\"js/ventanaHija.js\"></script>"+
		"<h1>Ventana nueva</h1>URL del documento: "+document.URL+"</br>"
		+"Protocolo utilizado:"+document.location.protocol+
		"</br>Nombre en código del navegador: "+navigator.appCodeName);
	if(navigator.javaEnabled())
		ventana.document.write("</br>Java SI disponible en esta ventana");
	else
		ventana.document.write("</br>Java NO disponible en esta ventana");
	ventana.document.write("<p id=\"contenido\"><p>");
	ventan.document.close();


	//window.open("http://www.iesgrancapitan.org", "_blank", "width=600, height=800");
	
}
