// let f = 1;

// while (f <= 10) {
//     document.write('vuelta no. ', f);
//     document.write('<br>');
//     f++;
// }
// document.write('FIN DEL BUCLE');

let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt('ingrese valor'));
    suma = suma + valor;
    f++;
}

document.write("la suma es: ", suma, '<br>');