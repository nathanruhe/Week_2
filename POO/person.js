// reto 1
class Person {
    constructor (nombre, apellido, nacionalidad, altura, peso, colorOjos, colorPelo, tatuajes, piercings, yearOfBirth, hobbies = [""]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.colorPelo = colorPelo;
        this.tatuajes = tatuajes;
        this.piercings = piercings;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    };

    // reto 2
    calcularIMC() {
        return this.peso / (this.altura ** 2);
    };

    // reto 3
    edad(anyoActual) {
        return anyoActual - this.yearOfBirth;
 
    };

    // reto 4
    printAll() {
        for (let element in this) {
            console.log(`${element} - ${this[element]}`);
        };
    };

    // reto 5
    printHobbies() {
        console.log(this.hobbies);
    };
};

// reto 6
module.exports = {Person};

