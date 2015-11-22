/*
Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura y 
que permita crear objetos de ese tipo. Se deben utilizar las funciones constructoras y la propiedad prototype.

Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos), donde cliente también es una pseudoclase 
que guarda los datos del cliente y elementos es un array simple que contiene las pseudoclases de todos los elementos que 
forman la factura.
*/

window.onload = function(){

// Definición de la clase Cliente
function Cliente(nombre, apellido1,dni) {
  this.nombre = nombre;
  this.apellido1 = apellido1;
  this.dni = dni;
}
 
// Definición de la clase Elemento
function Elemento(nombre, cantidad, precio) {
  this.nombre = nombre;
  this.cantidad = cantidad;
  this.precio = precio;
}
 
// Definición de la clase Factura
function Factura(cliente, elementos) {
  this.cliente = cliente;
  this.elementos = elementos;
  this.total = 0;
};
 
// La información de la empresa que emite la factura se
// añade al prototype porque se supone que no cambia
Factura.prototype.dependiente = {
  nombre:    "Pablo",
  apellidos: "Sánchez Sanvicente",
  dni:       "30980000"
};
 
// Métodos añadidos al prototype de la Factura
Factura.prototype.calculaTotal = function() {
  for(var i=0; i<this.elementos.length; i++) {
    this.total += this.elementos[i].cantidad * this.elementos[i].precio;
  }
  
}
 
Factura.prototype.mostrarFactura = function() {
  this.calculaTotal();
  document.getElementById("factura").innerHTML += "Cliente = " + this.cliente.nombre+" "+this.cliente.apellido1+"</br>";
  document.getElementById("factura").innerHTML += "Valor factura = " + this.total + " euros</br>";

}
 
 
// Creación de una factura
var elCliente = new Cliente("Coral", "Almansa", "30123456");
var losElementos = [new Elemento("Ron", "1", "10"),
                    new Elemento("Refresco", "2", "1.5"),
                    new Elemento("Cerveza", "12", "1")
                   ];
var laFactura = new Factura(elCliente, losElementos);
laFactura.mostrarFactura();

}//onload

