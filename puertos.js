var aciertos = localStorage.getItem('aciertos');
var fallos = localStorage.getItem('fallos');
var total = localStorage.getItem('total');

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function iniciar(){
var inirespuesta = document.getElementById("respuesta");
inirespuesta.className += " d-none";

var iniresultado = document.getElementById("resultado");
iniresultado.className += " d-none";
}

function cargaPuerto() {

document.getElementById("resultado").classList.remove("alert-danger");
document.getElementById("resultado").classList.remove("alert-success");
document.getElementById("resultado").classList.remove("alert-primary");
document.getElementById("resultado").classList.remove("d-block");

document.getElementById("respuesta").focus();

var cargarespuesta = document.getElementById("respuesta");
cargarespuesta .className += " d-block";

var aleatorio = getRandomArbitrary(1, 166)
var datospuerto = Col0[aleatorio];
var res = datospuerto.split(";");

document.getElementById("puerto").value = res[0];
document.getElementById("protocolo").innerText = res[1]; 
document.getElementById("nombre").innerText = res[2]; 
document.getElementById("descripcion").innerText = res[3]; 
document.getElementById("respuesta").value= "";
document.getElementById("resultado").innerText= "";

var d = document.getElementById("iniciar");
d.className += " d-none";

var correcta = res[0];
var input = document.getElementById("respuesta"),
    intervalo;

input.addEventListener("keyup", function(){
    clearInterval(intervalo);
    intervalo = setInterval(function(){
var cargaresultado = document.getElementById("resultado");
cargaresultado.className += " d-block";


        if(input.value==correcta){
 
document.getElementById("resultado").className +=" alert-success"; 
document.getElementById("resultado").classList.remove("alert-danger");

document.getElementById("resultado").innerHTML="Respuesta correcta. El servicio <strong>"+res[2]+"</strong><em> "+res[3]+"</em> utiliza el puerto <strong>"+res[0]+"</strong>.  Pulsa para continuar...";

aciertos++;
total++;

} 

else{
document.getElementById("resultado").className +=" alert-danger";
document.getElementById("resultado").classList.remove("alert-success");
  
document.getElementById("resultado").innerHTML="La respuesta "+input.value+" es incorrecta. El servicio <strong>"+res[2]+"</strong><em> "+res[3]+"</em> utiliza el puerto <strong>"+res[0]+"</strong>. Pulsa para continuar...";

fallos++;
total++;

}
  localStorage.setItem('aciertos', aciertos);
  localStorage.setItem('fallos', fallos);
  localStorage.setItem('total', total);

        clearInterval(intervalo);
    }, 750);

if (isNaN(aciertos )) aciertos  = 0;
if (isNaN(fallos)) fallos = 0;
if (isNaN(total)) total= 0;

document.getElementById("num_aciertos").innerHTML="Llevas "+aciertos+" aciertos";
document.getElementById("num_fallos").innerHTML="Llevas "+fallos+" fallos";
document.getElementById("num_total").innerHTML="Llevas "+total+" en total";
}, false);


}	