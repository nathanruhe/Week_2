export class Book {
    constructor(private title:string, private nPages:number, private isbn:string, private author:string, private editorial:string){};

    public getTitle():string{
        return this.title
    };

    public getNPages():number{
        return this.nPages;
    };

    public getIsbn():string{
        return this.isbn;
    };

    public getAuthor():string{
        return this.author;
    };

    public getEditorial():string{
        return this.editorial;
    };

    public setTitle(title):void{
        this.title = title;
    };

    public setNPages(nPages):void{
        this.nPages = nPages;
    };

    public setIsbn(isbn):void{
        this.isbn = isbn;
    };

    public setAuthor(author):void{
        this.author = author;
    };

    public setEditorial(editorial):void{
        this.editorial = editorial;
    };

    public toStringBook():string{
        let info:string = "";
        for (let element in this) {
            if (typeof this[element] !== "function") {
                info += `${element} - ${this[element]}\n`;
            };
        };
        return info;
    };

};