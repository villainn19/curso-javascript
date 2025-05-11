// let palabra = 'Javascript'

// for(let f in palabra){
//     document.write(palabra[f]);
// }

let palabra = 'murcielago'
vocal = 0;
for(let f in palabra){
    if(palabra[f]=='a' || palabra[f]=='e' || palabra[f]=='i'
    || palabra[f]=='o' || palabra[f]=='u'){
        vocal++;
    }
}
document.write('cantidad de vocales: ', vocal);