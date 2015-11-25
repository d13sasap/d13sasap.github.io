window.onload = function(){
	//Recibimos el elemento canvas
var elemento = document.getElementById('micanvas');
//Comprobación sobre si encontramos un elemento
//y podemos extraer su contexto con getContext(), que indica compatibilidad con canvas
if (elemento && elemento.getContext) {
//Accedo al contexto de '2d' de este canvas, necesario para dibujar
var ctx = elemento.getContext('2d');
if (ctx) {

	ctx.strokeStyle = '#000000';
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(0,100);
		ctx.lineTo(150,100);
		ctx.lineTo(150,0);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(150,0);
		ctx.lineTo(75,50);
		ctx.lineTo(0,0);
		ctx.closePath();
		ctx.stroke();
}
}
}