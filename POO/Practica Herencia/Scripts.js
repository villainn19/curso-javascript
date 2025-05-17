class Animal{
    constructor(nombre,peso,edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años`
    }
}

 class Perro extends Animal{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`
    }
 }

  
 class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color = color;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.color}`
    }
 }


 let perro1 = new Perro('Clifford',12,3,'Doberman');
 let conejo1 = new Conejo('Bugs', 3,1,'Blanco');
 let animales = [perro1, conejo1];


 function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');

    for(let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
 }