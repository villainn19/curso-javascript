// let valor;

// do {
//     valor= parseInt(prompt('Ingrese valor 1 para salir...'));
//     document.write('Ingresó valor: ', valor);
//     document.write('<br>');
// } while (valor != 1 );
// document.write('fin de bucle');

let usuario, clave, control;

control = 0;
usuario = prompt('INGRESE USUARIO...');
clave = prompt('INGRESE SU CONTRASEÑA...');

do {
    if(clave != 'MIacceso33%'){
        clave = prompt('CONTRASEÑA INCORRECTA\n'+
                    'INTENTE DE NUEVO...');
                    control = 0;
    }else{
        control = 1;
    }
} while (control != 1);
document.write('Acceso permitido');