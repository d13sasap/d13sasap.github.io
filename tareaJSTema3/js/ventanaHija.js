window.onload = function(){
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
}