window.onload = function(){
	String.prototype.truncar = function(longitud,aniadir) {
		if(aniadir == undefined){
			aniadir = "";
		}
  if(isNaN(longitud))
  	longitud=this.length;
  if(this.length > longitud) {
    return this.substring(0, longitud)+aniadir;
  }
  else {
    return this+aniadir;
  }

}//truncar
var cadena = "hola mundo";
cadena = cadena.truncar(3,"textoAniadido");
document.getElementById("texto").innerHTML += "var cadena = \"hola mundo\";</br>alert(cadena.truncar(3,\"textoAniadido\")); = "+cadena+"</br>";

}