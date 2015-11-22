/**
Y ahora fuera del código de la función que siga haciendo lo siguiente:
Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
Que solicite: introduzca su nombre y apellidos.
Que solicite: introduzca DIA de nacimiento.
Que solicite: introduzca MES de nacimiento.
Que solicite: introduzca AÑO de nacimiento.
Una vez solicitados esos datos imprimirá en la ventana principal:
Buenos dias XXXXX
Tu nombre tiene XX caracteres, incluidos espacios.
La primera letra E de tu nombre está en la posición: X
La última letra E de tu nombre está en la posición: X
Tu nombre menos las 3 primeras letras es: XXXXXXXX
Tu nombre todo en mayúsculas es: XXXXXXXX
Tu edad es: XX años.
Naciste un feliz XXXXXX del año XXXX. No te acuerdas, pero era (LUNES/MARTES/MIÉRCOLES...) y [NO|SI] bisiesto
El coseno de 90 es: XXXXXXXXXX
El número mayor de (65, 22, 69, 99, 12) es: XX
Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
*/
function firstE(){
    var inds = [nombre.indexOf("e"), nombre.indexOf("E"), nombre.indexOf("é"), nombre.indexOf("É")];
    inds.sort(function(a,b){return a-b});
    for (var i = 0; i < inds.length; i++) {
        if(inds[i]!=-1)
            return inds[i];
    };
    return "no hay ninguna";
}

function lastE(){
    var inds = [nombre.lastIndexOf("e"), nombre.lastIndexOf("E"), nombre.lastIndexOf("é"), nombre.lastIndexOf("É")];
    inds.sort(function(a,b){return a-b});
    for (var i = inds.length-1; i >=0 ; i--) {
        if(inds[i]!=-1)
            return inds[i];
    };
    return "no hay ninguna";
}

function calculateAge(){
    var fecha2 = new Date();
    var edad = Math.floor((fecha2.getTime() - fecha.getTime()) / 31536000000);
    return edad;
}

function getDayWeek(){
    var dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    return dias[fecha.getDay()];
}

function isLeap(){
    var f = new Date(fecha.getFullYear(), 1, 29);
    if(f.getDate()==29)
        return "SÍ";
    return "NO";
}

function showResult(){
    var parent_body = window.opener.document.getElementsByTagName('body')[0];
    parent_body.innerHTML = "<h1>Tarea del tema 3</h1>";
    parent_body.innerHTML += "<ul>";
    parent_body.innerHTML += "<li>Buenos días "+nombre+"</li>";
    parent_body.innerHTML += "<li>Tu nombre tiene "+nombre.length+" caracteres</li>";
    parent_body.innerHTML += "<li>La primera letra E de tu nombre está en la posición: "+firstE()+"</li>";
    parent_body.innerHTML += "<li>La última letra E de tu nombre está en la posición: "+lastE()+"</li>";
    parent_body.innerHTML += "<li>Tu nombre menos las tres primeras letras es: "+nombre.substr(3)+"</li>";
    parent_body.innerHTML += "<li>Tu nombre todo en mayúsculas es: "+nombre.toUpperCase()+"</li>";
    parent_body.innerHTML += "<li>Tu edad es: "+calculateAge()+"</li>";
    parent_body.innerHTML += "<li>Naciste un feliz "+fecha.toLocaleDateString()+". No te acuerdas, pero era "+getDayWeek().toLowerCase()+" y "+isLeap()+" bisiesto</li>";
    parent_body.innerHTML += "<li>El coseno de 90: "+Math.cos(Math.PI/2)+"</li>";
    parent_body.innerHTML += "<li>El número mayor de (65, 22, 69, 99, 12) es: "+[65,22,69,99,12].sort(function(a, b){return b-a})[0]+"</li>";
    parent_body.innerHTML += "<li>Ejemplo de número al azar entre 1 y 10: "+Math.floor(Math.random()*10+1)+"</li>";
    parent_body.innerHTML += "</ul>";
}

function validateName(){
    nombre = document.getElementById("nombre").value;
    if(nombre.length>3)
        return true;
    return false;
}

function validateDate(){
    var input_date = document.getElementById("fecha");
    var array_date = input_date.value.split("-");
    if(array_date.length != 3)
        return false;
    array_date[1]-=1;
    fecha = new Date(array_date[2], array_date[1], array_date[0]);
    var fecha2 = new Date();
    if(fecha.getTime()>fecha2.getTime())
        return false;
    if(fecha.getDate()==array_date[0])
        if(fecha.getMonth()==array_date[1])
            if(fecha.getFullYear()==array_date[2])
                return true;
    return false;
}

function check(){var error = false;
    var span_nombre = document.getElementById("span_nombre");
    var span_date = document.getElementById("span_date");
    span_nombre.textContent="";
    span_date.textContent="";
    if(!validateName()){
        error = true;
        span_nombre.textContent="* El nombre debe tener al menos cuatro caracteres.";
    }
    if(!validateDate()){
        error = true;
        span_date.textContent="* La fecha no es válida.";
    }
    if(!error){
        showResult();
        span_date.textContent="Consulta el resultado en la otra ventana.";
    }
}

function inputNameForm(){
    body.innerHTML += "<p>Introduzca su nombre y apellidos: \
        <input type='text' id='nombre' name='nombre' placeholder='Nombre'/>\
        &nbsp;<span id='span_nombre' class='error'></span></p>";
    body.innerHTML += "<p>Introduzca su fecha de nacimiento (dd-mm-aaaa): \
    <input type='text' id='fecha' name='fecha' placeholder='dd-mm-aaaa'/> \
    &nbsp;<span id='span_date' class='error'></span></p>";
    body.innerHTML += "<input type='button' id='enviar' value='ENVIAR'/>";
    var btn_enviar = document.getElementById("enviar");
    btn_enviar.addEventListener("click", check);
    document.addEventListener("keydown",function(){
        var evento = event || document.event;
        var key = evento.keyCode || evento.charCode;
        if(key == 13)
            check();
    });
}

function ejercicio2(){
    body = document.getElementsByTagName('body')[0];
    body.innerHTML += "<h1>Tarea del tema 3</h1>";
    inputNameForm();
}

window.onload = function(){
    ejercicio2();
}