class Person{
    constructor(public document:string,){}
}

class Company{
    constructor(public companyName: string){}
}

interface ICompany extends Company{
    registrar():void;
}

class FoodCompany implements ICompany{
    constructor(public companyName: string){}
    registrar(): void{}
}

class Customer extends Person{
    static points: number = 0;
    private _name:  string;
    constructor(public name: string, public document: string) {
        super(document);
        this._name  =   name;
        Customer.points;
    }

    register(): void {
    }

}

var comp = new FoodCompany('Subway');
var c = new Customer('Leonardo','123456789');
c.register();