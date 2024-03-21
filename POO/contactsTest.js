// reto 8
const {Contacts} = require("./contacts");
const {Person} = require("./person");


let persona1 = new Person ("Carlos", "Lopez", "España", 1.73, 68, "azul", "castaño", true, false, 1993, ["bucear", "esquiar"]);
let persona2 = new Person ("Mario", "Ruiz", "Francia", 1.65, 59, "marron", "moreno", false, true, 1990, ["bailar", "futbol"]);

let contacto1 = new Contacts ();
contacto1.arrayPerson.push(persona1,persona2);

console.log(contacto1.arrayPerson);
console.log(contacto1.printPersons());