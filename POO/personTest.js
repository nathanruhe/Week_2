// reto 6
const prueba = require("./person");

let persona1 = new prueba.Person ("Carlos", "Lopez", "España", 1.73, 68, "azul", "castaño", true, false, 1993, ["bucear", "esquiar"]);

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.nacionalidad);
console.log(persona1.altura);
console.log(persona1.peso);
console.log(persona1.colorOjos);
console.log(persona1.colorPelo);
console.log(persona1.tatuajes);
console.log(persona1.piercings);
console.log(persona1.yearOfBirth);
console.log(persona1.hobbies);

console.log(persona1.calcularIMC());
console.log(persona1.edad(2024));
console.log(persona1.printAll());
console.log(persona1.printHobbies());