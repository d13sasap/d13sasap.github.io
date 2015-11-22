window.onload = function(){

Array.prototype.aniadir = function(elemento,condicion) {

	if(condicion == false){
				for (var i = 0; i < this.length; i++) {
					if(this[i] === elemento)
						return;
				}
				this.push(elemento);
			}
			else
				this.push(elemento);



}

 
var array = [1, 2, 3];
array.aniadir(3);
document.getElementById("texto").innerHTML += "var array = [1, 2, 3]</br>array.aniadir(3) = "+array+"</br>";
array = [1, 2, 3];//reiniciamos
array.aniadir(3,false);
document.getElementById("texto").innerHTML += "var array = [1, 2, 3]</br>array.aniadir(3,false) = "+array+"</br>";
array = [1, 2, 3];//reiniciamos
array.aniadir(4,false);
document.getElementById("texto").innerHTML += "var array = [1, 2, 3]</br>array.aniadir(4,false) = "+array+"</br>";

}