function aleatorio() {

	document.images["imagen"].src = objetos[i];
	i++;
	if(i>2)
		i=0;
}

window.onload = function(){

	//Recibimos el elemento canvas
var elemento = document.getElementById('micanvas');
//Comprobación sobre si encontramos un elemento
//y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
if (elemento && elemento.getContext) {
//Accedo al contexto de '2d' de este canvas, necesario para dibujar
var ctx = elemento.getContext('2d');
if (ctx) {

	ctx.fillStyle = 'rgba(243 , 106 ,32, 1)';
	ctx.beginPath();
	ctx.moveTo(75,0);
	ctx.lineTo(105,75);
	ctx.lineTo(90,75);
	ctx.lineTo(90,150);
	ctx.lineTo(60,150);
	ctx.lineTo(60,75);
	ctx.lineTo(45,75);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}
}

	aleatorio();
	setInterval(aleatorio, 4500);

}
let i = 0;
let objetos = new Array();
objetos[0] = "img/ies.jpg";
objetos[1] = "img/escudo.jpg";
objetos[2] = "img/oferta.png";


