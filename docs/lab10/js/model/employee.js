"use strict";

import { Person } from "./person.js";

export class Employee extends Person{
    constructor(name,dateOfBirth,salary,hireDate){
        super(name,dateOfBirth);
        this.salary=salary;
        this.hireDate=hireDate;
    }
    doJob(jobTitle){
        return `${this.getName()} is a ${jobTitle} who earns $${this.salary.toFixed(2)}`;
    }
}