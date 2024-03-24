import { Person } from "./person";

export class Contacts {
    public people:Person[];
    constructor(){
        this.people = [];
    };

    public printCalendar():void{
        for (let elemento of this.people) {
            console.log(elemento);
        };
    };
};
