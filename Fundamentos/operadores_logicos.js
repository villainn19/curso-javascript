
let dia, mes, anio;

dia = prompt('INGRESE DIA....');
mes = prompt('INGRESE MES....');
anio = prompt('INGRESE AÑO....');

if(mes == 1 || mes == 2 || mes == 3){
   document.write('Pertenece al primer trimestre');
}
else{
    document.write('No pertenece al primer trimestre');
}
