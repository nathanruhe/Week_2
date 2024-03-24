import { Book } from "./book"


let book1:Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(book1);

console.log(book1.getTitle());
book1.setTitle("Typescript básico");
console.log(book1.getTitle());

console.log(book1.getNPages());
book1.setNPages("138");
console.log(book1.getNPages());

console.log(book1.getIsbn());
book1.setIsbn("465798-SF551");
console.log(book1.getIsbn());

console.log(book1.getAuthor());
book1.setAuthor("Carlos Martinez");
console.log(book1.getAuthor());

console.log(book1.getEditorial());
book1.setEditorial("Especial Editions");
console.log(book1.getEditorial());

console.log("\n");

console.log(book1.toStringBook());