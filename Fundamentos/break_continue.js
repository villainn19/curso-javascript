// for(let f = 0; f < 10; f++){
//     document.write(f);
//     document.write('<br>');
//     if(f==3){
//         document.write('vuelta no. ', f);
//         document.write('<br>');
//         break;
//     }

// }

let palabra = 'Javascript'
let resultado = '';

for(let f in palabra){
    if(palabra[f]=='a'){
        continue;
    }else{
        resultado += palabra[f];
    }
}    
document.write(resultado);