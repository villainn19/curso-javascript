/*declaracion de clase */
class Papel {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

/*expresion de clase */
/*anonima */
let Papel_A = class {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    } 
}

/*nombrada */
let Papel_B = class PapelX {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    } 
}

let papelz = new Papel(5,9);