class Persona {
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Ave. 742';
    telefono = 5553472
    email = 'comida@aol.com'

    trabajar(){
        return 'trabaja en la planta nuclear';
    }

    estudiar(){
        return 'estudia en escuela primaria de springfield'
    }
}

const homero = new Persona();
const bart = new Persona();
const lenny = new Persona();
document.write(homero.nombre + ' ' + homero.apellido);
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('<br>');
document.write('Bart ', bart.apellido);
document.write('<br>');
document.write(bart.estudiar());
document.write('<br>');
document.write('<br>');
document.write('Lenny ', lenny.trabajar());