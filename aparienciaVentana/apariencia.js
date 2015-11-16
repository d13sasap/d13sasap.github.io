window.onload = function(){
document.write("<h1>Ejemplo de apariencia de una ventana</h1>");
document.write("<input type='button' id='boton' value='Abre una ventana'>");
document.getElementById("boton").addEventListener("click", abrir);
document.close();
}
var ventana;
function abrir(){
	ventana = window.open("","resizable=no", "_blank", "top=0, left=0, width=200, height=200");
	ventana.document.writeln("Se han utilizado las siguientes propiedades:");
	//ventana.document.writeln("<ul><li>height = "+ventana.screen.height+"</li><li>width = "+ventana.screen.height+"</li></ul>");
	ventana.document.writeln("<ul><li>height = 200</li><li>width = 200</li></ul>");
	
	//no me sale lo que busco
	ventana.close;
}