/// <reference path="ISubscriber.ts" />
/// <reference path="IStudent.ts" />

module tsbr{
    export class Student implements IStudent, ISubscriber{
    
        constructor(public name: string, public email: string, public isSubscriber: boolean, public age?: number){}
    
        register(): void{
            console.log('Aluno cadastrado com sucesso');
        }
    }
}