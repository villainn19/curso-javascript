
let elementotextoAlarma = document.getElementById("textoalarma")
let elementoSonidoAlarma = document.getElementById("audioAlarma")

function comenzartiempo(){
    let elementoSegundos = document.getElementById("tiempoelegido").value;
    setTimeout(tiempocumplido, 1000*elementoSegundos);
}

function tiempocumplido(){
    elementotextoAlarma.textContent = "ENCENDIDO";
    elementotextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();
}