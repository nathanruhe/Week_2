import { Book } from "./book"

export class Library {
    constructor(public books:Book[], private address:string, private manager:string){};

    public getAdress():string{
        return this.address;
    };

    public getManager():string{
        return this.manager;
    };

    public setAdress(address):void{
        this.address = address;
    };

    public setManager(manager):void{
        this.manager = manager;
    };

    public toStringLibrary():string{
        let libros = "";
        for (let i = 0; i < this.books.length; i++) {
            libros += `Book${i + 1}:\n`
            libros += this.books[i].toStringBook() + "\n"
        };
        return libros
    };
    
    public getNumberOfBooks():number{
        let total: number = 0;
        for (let i = 0; i < this.books.length; i++){
            total = i + 1
        }
        return total
    };

    public findByAuthor(author:string):Book[]{
        let busca = this.books.filter(atributo => atributo.getAuthor() == author)
        return busca
    };
};