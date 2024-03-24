import { Person } from "./person";

let persona1:Person = new Person ("Juan", 34, "calle milanesa 12");


console.log(persona1.name);
console.log(persona1.age);

persona1.printName();

console.log(persona1.yearOfBirth(2024));

console.log(persona1.getAddress());
persona1.setAddress("avenida roma 88");
console.log(persona1.getAddress());