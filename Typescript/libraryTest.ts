import { Library } from "./library"
import { Book } from "./book"


let book1:Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2:Book = new Book("Programación back-end", 88, "617FFF-001", "Luis Cornejo", "Gold Edition");

let libreria1:Library = new Library([], "Barcelona", "Rodrigo Perez");
libreria1.books.push(book1, book2);


console.log(libreria1.books);

console.log(libreria1.getAdress());
libreria1.setAdress("Andorra");
console.log(libreria1.getAdress());

console.log(libreria1.getManager());
libreria1.setManager("Adrian Mendoza");
console.log(libreria1.getManager());

console.log("\n");

console.log(libreria1.toStringLibrary());

console.log(libreria1.getNumberOfBooks());

console.log(libreria1.findByAuthor("Luis Cornejo"));


