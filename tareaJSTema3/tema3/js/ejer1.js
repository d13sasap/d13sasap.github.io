/**
1. Abra una nueva ventana.
Hacer una función y dentro de esa función:
Escribir en la nueva ventana <h1>Ventana Nueva</h1>
URL Completa: XXXXX
Protocolo utilizado: XXXXX
Nombre en código del navegador: XXXXX
Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
Java SI disponible en esta ventana, o bien.
Java NO disponible en esta ventana.
Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
*/
function ejercicio1(){
    var ventana = window.open("","_blank",
        "width="+(screen.availWidth-20)+", height="+(screen.availHeight-60)+"");
    var javaenabled = "";
    if(navigator.javaEnabled())
        javaenabled="SÍ";
    else
        javaenabled="NO";
    ventana.document.write(" \
    <html> \
        <head> \
            <meta charset='utf-8'/> \
            <title>Juan Antonio Romero Molero</title> \
            <script type='text/javascript' src='js/ejer2.js'></script> \
        </head> \
        <body> \
           <h1>Ventana nueva</h1> \
           <ul> \
                <li><strong>URL Completa:</strong> "+window.location.href+"</li> \
                <li><strong>Protocolo utilizado:</strong> "+window.location.protocol+"</li> \
                <li><strong>Nombre en código del navegador:</strong> "+navigator.userAgent+"</li> \
                <li><strong>Java</strong> "+javaenabled+" disponible en esta ventana.</li> \
           </ul> \
        </body> \
    </html>");
    ventana.document.close();
    ventana.window.open("http://www.iesgrancapitan.org/portal/","_blank","width=800, height=600");
}

window.onload = function(){
    ejercicio1();
}