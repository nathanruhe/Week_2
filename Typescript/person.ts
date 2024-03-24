export class Person {
    constructor(public name:string, public age:number, private address:string){};

    public printName():void{
        console.log(this.name);
    };

    public yearOfBirth(anyoActual:number):number{
        return anyoActual - this.age;
    };

    public setAddress(address:string):void{
        this.address = address; 
    };

    public getAddress():string{
        return this.address;
    };
};


