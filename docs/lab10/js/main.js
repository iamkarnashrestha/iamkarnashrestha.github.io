
import { Person } from "./model/person.js";
import {Employee} from "./model/employee.js";
const persons=[
    new Person("Ana Smith", new Date('Decembr 15,1998')),
    new Person("Bob Jone", new Date('November 16,1945')),
    new Person("Carlos Slim Helu", new Date('September 24,1976')),

];
console.log(`
Problem 1 Output
------------------------------------------`);
persons.forEach(p=>console.log(p.toString()));

const emoloyee=new Employee("Jim Hanson",new Date('December 12,1995'),245990.00 ,new Date("November 15,2020"));
console.log(`
Problem 2 Output
------------------------------------------`);
console.log(emoloyee.doJob("Programmer"));