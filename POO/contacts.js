// reto 7
const {Person} = require("./person");

class Contacts {
    constructor() {
        this.arrayPerson = [];
    };

    printPersons() {
        for (let element of this.arrayPerson) {
            console.log(element);
        };
    };
};


// reto 8
module.exports = {Contacts};