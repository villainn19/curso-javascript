
let numeros = [15,80,650,50,-10];
document.write('Elementos: ',numeros)
document.write('<br>');
document.write('primer elemento: ',numeros[0]);
document.write('<br>');
numeros[0] = 14;
document.write('Elementos: ',numeros);
document.write('<br>');

//saber ultimo elemento
document.write('Ultimo Elemento: ', numeros[numeros.length-1]);
document.write('<br>');

//unir tipos de arrays
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanumerico: ', letras.concat(numeros2));
document.write('<br>');

//borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar elemento al final
numeros.push(500);
document.write(numeros);
document.write('<br>');

//eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//insertar elemento al inicio
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');

//eliminar elementos
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');

//como copiar un array
let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(1,4);
document.write('Array copia: ', copia);
document.write('<br>');

//organizar arrays en modo alfabetico
let objetos = ['carro','botella','planeta','zorro'];
document.write(objetos.sort());
document.write('<br>');

//organizar arrays en modo reversa
document.write(objetos.reverse());
