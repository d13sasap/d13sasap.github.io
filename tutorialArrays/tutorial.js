window.onload = function(){

//ejercicio 1
var styles = ["Jazz","Blues"];//creamos array 
styles.push("Rock'n Roll");//insertamos al final 
styles[styles.length-2] = "Classic";//cambiamos el valor del penúltimo por classic
document.getElementById("txt").innerHTML += "styles.pop() = "+styles.pop();//quitamos el último elemento y lo mostramos
// ejercicio 2
var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
var rand = Math.round(Math.random()*arr.length);
document.getElementById("txt").innerHTML += "</br>Elemento aleatorio del array = "+arr[Math.round(Math.random()*(arr.length-1))];
// ejercicio 3 A
arr = [ "test", 2, 1.5, false ];
document.getElementById("txt").innerHTML += "</br>Return del método buscar = "+encontrar(arr,false);
// ejercicio 3 B
arr = ["a", 1, "b", 2];

var arr3 = filtroNumerico(arr);
document.getElementById("txt").innerHTML += "</br>Valores del array sólo numéricos en nuevo array: ";

for (var i = 0; i < arr3.length; i++) {
	document.getElementById("txt").innerHTML += arr3[i]+" , ";

};
//ejercicio 4

var obj = {className : "open menu"};
addClass(obj, 'new');// obj.className='open menu new'
addClass(obj, 'open');  // sin cambios
addClass(obj, 'me'); // obj.className='open menu new me'

document.getElementById("txt").innerHTML += " </br>obj.className = "+obj.className;

//ejercicio 5

//camelize("background-color") == 'backgroundColor'
//camelize("list-style-image") == 'listStyleImage'
var background = "background-color";
var listStyle = "list-style-image";
//var background = camelize(background);
document.getElementById("txt").innerHTML += " </br>camelize('background-color') = "+camelize(background);
document.getElementById("txt").innerHTML += " </br>camelize('list-style-image') = "+camelize(listStyle);

// ejercicio 6: QUé devolverá??
document.getElementById("txt").innerHTML += " </br>Qué devolverá? "+
"</br>arr = [\"a\", \"b\"]</br>arr.push( function() {"+
	"alert(this) }"
 
+")</br>arr[arr.length-1]()</br> Devolverá 'a','b','function'";

//ejercicio 7

var obj2 = {className: 'open menu'};
removeClass(obj2, "menu");
document.getElementById("txt").innerHTML += " </br>removeClass(obj2, \"menu\") = "+obj2.className;
var obj2 = {className: 'open menu'};
removeClass(obj2, "blabla");
document.getElementById("txt").innerHTML += " </br>removeClass(obj2, \"blabla\") = "+obj2.className;

//ejercicio 8 (DUDAS)

var arr = ["a", 1, "b", 2];
arr = filterNumericInPlace(arr);
document.getElementById("txt").innerHTML += " </br>filterNumericInPlace(arr) = "+arr;
//Ejercicio9
var john = { name: "John Smith", age: 23 };
var mary = { name: "Mary Key", age: 18 };
var bob = { name: "Bob-small", age: 6 };
 
var people = [ john, mary, bob ];
ageSort(people);
document.getElementById("txt").innerHTML += " </br>Mostrar Array personas";
for (var i = 0; i < people.length; i++) {
	document.getElementById("txt").innerHTML += " </br>Persona["+(i+1)+"] = "+people[i].name;
};

//EJERCICIO 10
//arr = ["a", -1, 2, "b"];


document.getElementById("txt").innerHTML += "</br><input type='button' value='Teoría' onClick='mostrarTeoria()'>";


 
//alert(arr)  // [1,2]
}//onLoad
// function filter(arr, function){

// 	//se lo que busca el ejercicio pero no se como tratarlo
// 	//no se como hacer una función genérica para cada caso.
// }

function mostrarTeoria(){
	document.getElementById("txt").innerHTML += "</br>Entrega los códigos y responde a las siguientes preguntas:"+
"</br>1. Declaración recomendada para la creación de arrays en JavaScript--> var array = []"+
"</br>2. pop() y push(),"+
"</br> Utilidad. Pop elimina el último elemento del array y push añade elementos al final del array."+
"</br> ¿Modifican el array original? Si."+
"</br>¿Devuelven algún valor? El elemento eliminado en pop,"+
"</br>shift() y unshift(), "+
"</br>1. Utilidad. Eliminan el primer elemento y añade en primera posición respectivamente"+
"</br>2. ¿Modifican el array original? SI."+
"</br>3. ¿Devuelven algún valor? Si, el elemento eliminado."+
"</br>4. De los cuatro métodos anteriores, indica los recomendados para la inserción/eliminación de un elemento y por qué. Pop y push se recomiendan ya que son más rápidos."+
"</br>5. join() y split(), ¿son métodos de String o de Array?Split de string y join de array."+
"</br>splice()"+
"</br>1. Utilidad. Elimina la cantidad de elementos que digamos a partir de una posición."+
"</br>2. Indica significado del primer argumento admitido: índice, cantidad o contenido INDICE"+
"</br>3. Indica significado del segundo argumento admitido: índice, cantidad o contenido CANTIDAD"+
"</br>4. Indica significado del resto de argumentos admitidos: índice, cantidad o contenido CONTENIDO"+
"</br>5. ¿Modifica el array original? Si"+
"</br> slice()"+
"</br>1. Utilidad. Selecciona elemento de un array."+
"</br>2. Indica significado del primer argumento admitido: índice, cantidad o contenido INDICE"+
"</br>3. Indica significado del segundo argumento admitido: índice, cantidad o contenido INDICE"+
"</br>4. Indica significado del resto de argumentos admitidos: índice, cantidad o contenido"+
"</br>5. ¿Modifica el array original? No."+
"</br> Un Array es un Object:"+
"</br>1. Indica resultado de typeof [] OBJECT"+
"</br>2. Método forEach() de un array. Indica utilidad y si funciona en todos los navegadores. Entrega un pequeño código que demuestre su uso";

}
function compararEdad(a, b) {
  if (a.age > b.age) 
  	return 1;
  else if (a.age < b.age) 
  	return -1;
  return 0;
}
 
function ageSort(people) {
  people.sort(compararEdad);
}

function tieneNoNumericos(arra){
	array1 = arra;
	for (var i = 0; i < array1.length; i++) {
		if(isNaN(array1[i]))
			return true;
			
	};
	return false;
}
function filterNumericInPlace(array){
temp = array;
	nuevo = [];
	for (var i = 0; i < temp.length; i++) {
		if(!isNaN(temp[i]))
			nuevo.push(temp[i]);

	};
	return nuevo;
}
function removeClass(obj,clss){
	var arrTmp = obj.className.split(" ");
	for (var i = 0; i < arrTmp.length; i++) {
		if(arrTmp[i]==clss)
			arrTmp.splice(1,i);
	};
	
	obj.className = arrTmp.join(" ");
}

function camelize(cadena){
	arrTmp = cadena.split("-");
	for (var i = 0; i < arrTmp.length; i++) {
		arrTmp[i] = camelizeCadena(arrTmp[i]);
	};
	arrTmp = arrTmp.join("");
	return arrTmp;
}
function camelizeCadena(cadena){
	tmp = cadena.split("");
	tmp[0] = tmp[0].toUpperCase();
	return tmp.join("");


}

function encontrar(array, aBuscar){
	temp = array;
	for (var i = 0; i < temp.length; i++) {
		if(temp[i]==aBuscar)
			return i;

	};
	return -1;

}

function filtroNumerico(array){
	temp = array;
	nuevo = [];
	for (var i = 0; i < temp.length; i++) {
		if(!isNaN(temp[i]))
			nuevo.push(temp[i]);

	};
	return nuevo;
}

function addClass(objeto, clase){
	var arraySplit = objeto.className.split(' ');
	for (var i = 0; i < arraySplit.length; i++) {
		if(arraySplit[i] == clase)
			return true;
	};
	arraySplit.push(clase);
	objeto.className = arraySplit.join(" ");

}