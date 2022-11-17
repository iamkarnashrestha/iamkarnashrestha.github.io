/*@author: Karna
*Date:Nov 17 2022
*/
"use strict";
export class Person{
    constructor(name,dob){
        this.name=name;
        this.dateOfBirth=dob;
    }
    
    getName(){return this.name;}
    getDateofBirth(){return this.getDateofBirth;}

    setName(val){
        this.name=val;
    }
    setDateOfBirth(dob){
        this.dateOfBirth=dob;
    }
   
    toString(){
        const dob = this.dateOfBirth;
        return `{Name:${this.getName()}, DateofBirth: ${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}}`;
    }
    
}