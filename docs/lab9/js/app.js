/*
*@author: Karna
*Date: Nov 16 2022
*/
'use strict'

//Problem 1
const person = {
    name: "",
    dateOfBirth: "",

    getName: function () {
        return this.name;
    },
    setName: function (value) {
        this.name = value;
    }
}

const John = Object.create(person);
John.setName("John");
John.dateOfBirth = new Date('December 10, 1998');
const dob = John.dateOfBirth;
console.log(`
Problem1: Output
--------------------------------------------------------
The person's name is: ${John.getName()}
${John.getName()} was born on ${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}`);


//Problem 2
const Employee = Object.create(person);
Employee.Salary = 0.0;
Employee.hireDate = new Date();
Employee.dojob = function (jobTitle) {
    console.log(`${this.getName()} is a ${jobTitle} who earns $${this.Salary}`);
}

let Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.Salary = 249995.50;
console.log(`
Problem 2 Output
----------------------------------------------------------`);
Anna.dojob("Programmer");



//Problem 3
function Person() {
    this.name = "";
    this.dateOfBirth = "";
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
}

Person.prototype.toString = function () {
    const dob = this.dateOfBirth;
    return `{Name:${this.getName()}, DateofBirth: ${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}}`;
}
let Peter = new Person();
Peter.setName("Peter");
Peter.dateOfBirth = new Date('November 10, 1985')
console.log(`
Problem 3 Output
----------------------------------------------------------`);
console.log(Peter.toString());