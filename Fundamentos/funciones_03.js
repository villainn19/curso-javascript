let resultado;

function suma(a, b){
    resultado = a + b;
    return resultado;
}

document.write(suma(40,60));
document.write('<br>');

function saludar(){
    return 'Hola a todos!';
}

var mensaje = saludar();
document.write(mensaje);
document.write('<br>');

function Vercolor(valor){
    valor = parseInt(prompt('Ingrese valor 1 / 3...'));
    switch(valor){
        case 1:
            return 'rojo';
        case 2:
            return 'verde';
        case 3:
            return 'amarillo';    
        default:
            return 'valor incorrecto';    
    }
}
alert(Vercolor());
