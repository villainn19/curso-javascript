let elementotextoAlarma = document.getElementById("textoalarma");

function comenzarReloj(){
    setInterval(tictac, 1000)
}

function tictac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = String(tiempoActual.getSeconds()).padStart(2, "0");
    let textoHora = hora + ":" + minutos + ":" + segundos
    elementotextoAlarma.textContent = textoHora;
}