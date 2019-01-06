class Student{
    fullName: string;

    constructor(public firstName, public lastName){
        this.fullName = firstName+" "+lastName;
    }
}

interface IPerson{
    firstName: string;
    lastName: string;
}

function say(person: IPerson) {
    return person;
}

var user = new Student("Olá","Mundo");

console.log(say(user));

//Array
var cadeia: string[] = ["1","2","3"];

//Enum
enum Cor{ Vermelho = 1, Verde, Azul};
var c: Cor = Cor.Azul;
var nomeCor: string = Cor[2];//Pega o valor da posição 2
alert(nomeCor);