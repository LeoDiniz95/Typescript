/// <reference path="Student.ts" />
/// <reference path="ISubscriber.ts" />
/// <reference path="IStudent.ts" />


module tsbr{
    function run(student: IStudent){
        console.log(student.name);
    }
    
    var student = new Student('Leo','leonardo.diniz1995@gmail.com', true, 23);
    run(student);
}

