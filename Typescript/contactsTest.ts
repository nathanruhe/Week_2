import { Contacts } from "./contacts";
import { Person } from "./person";


let persona1:Person = new Person ("Juan", 34, "calle milanesa 12");
let persona2:Person = new Person ("Ariel", 21, "avenida meridiana 57");

let contacto1:Contacts = new Contacts();
contacto1.people.push(persona1,persona2);

console.log(contacto1.people);
console.log(contacto1.printCalendar());

