window.onload = function(){
document.write("<h1>Apertura de múltiples ventanas(5)</h1>");
document.write("<input type='button' id='boton' value='Abre múltiples ventanas'>");
document.getElementById("boton").addEventListener("click", abrir);
document.close();
}


function abrir(){
	


		// for (var i = 0; i < 5; i++) {
		
		// 	var ventana = window.open("","resizable=no", "_blank","width=200, height=200");
		// 	ventana.document.writeln("Ventana "+(i+1));
		// 	ventana.document.writeln("<input type=\"button\" id=\"cerrar\" onClick=\"window.close()\" value=\"Cerrar ventana\"\">");
		// 	ventana.close;
		// 		}//for
	
	for (var i = 0; i <5; i++) {
		var ventana= window.open("","_blank","width=200, height=200, top="+(i*15)+", left="+(i*15)+"");
		ventana.document.open();
		ventana.document.writeln("Ventana "+(i+1));
		ventana.document.writeln("<input type=\"button\" id=\"cerrar\" onClick=\"window.close()\" value=\"Cerrar ventana\"\">");
		ventana.document.close();
	}	
		
}