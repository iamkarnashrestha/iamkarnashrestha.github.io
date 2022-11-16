'use strict'
const count=function(){
    let counter=0;
    return{
        add:function(){
            counter++;
        },
        reset:function(){
            counter=0;
        },
        value:function(){
            return counter;
        }
    }
    
}();
console.log(`
Problem 6:
----------------------------------------------`);
count.add();
count.add();
console.log(`Value of count after calling add two times: ${count.value()}`);
count.reset();
console.log(`Value of count after calling reset: ${count.value()}`);


console.log(`
Problem 7
In the given code the variable counter is free variable. 
In context of function closure,free variable are those variables
which are declared/initialized in the scope of outer function, 
i.e. outside the inner functon and used inside the inner function.
`);



//Problem 8
const count2=function(){
    let counter=0;
    return{
        add:function(){
            counter++;
        },
        reset:function(){
            counter=0;
        },
        make_adder:function(val){
            return function add(){
                counter+=val;
            }
        },
        value:function(){
            return counter;
        }
    }
    
}();

console.log(`
Problem 8:
----------------------------------------------`);
count2.add();
count2.add();
console.log(`Value of count after calling add two times: ${count2.value()}`);
count2.reset();
console.log(`Value of count after calling reset: ${count2.value()}`);

const add5=count2.make_adder(5);
add5();
add5();
add5();
console.log(`Value of count after calling add5() three times: ${count2.value()}`);

//Problem 9
console.log(`
Problem 9:
----------------------------------------------
Immediately Invoked Function Expression (IIFE). Using IIFE module pattern is that simple modification 
to javascript that can remove all the names from the global namespace. IIFE are functions that are
 immediately invoked and the variables and methods inside IIFE are segregated from global namespace.
`);


// Problem 10
const Employee=(function(){
    let name="";
    let age=0.0;
    let salary=0.0;
    
    function getAge(){
        return age;
    }
    function getName(){
        return name;
    }
    function getSalary(){
        return salary;
    }
    return{

        //created extra function printInformation for viewing information after setting it
        printInformation:function(){
            console.log(`Name:${getName()} Age:${getAge()} Salary:${getSalary()}`);
        },
        setAge:function(newAge){
            age=newAge;
        },
        setSalary: function(newSalary){
            salary=newSalary;
        },
        setName:function(newName){
            name=newName;
        },
        increaseSalary:function(percentage) {
            let currentSalary=getSalary();
            salary=parseInt(currentSalary)+(currentSalary*percentage/100);
        },
        incrementAge:function(){
            age=parseInt(getAge())+1;
        }
    }
})();
console.log(`

Problem 10
-----------------------------------
Employee Information:
---------------------------------
Before Setting Employee Information:`);
Employee.printInformation();

//Setting Information
Employee.setName("Karna");
Employee.setSalary("1000000");
Employee.setAge('27');
console.log(`
After Setting Employee Information:
-----------------------------------------------
`);
Employee.printInformation();

//updating information
Employee.increaseSalary(10);
Employee.incrementAge();
console.log(`
After Updating Employee Information:
-----------------------------------------------
`);
Employee.printInformation();


//Problem 11
Employee.address=undefined;
Employee.setAddress=function(newAddress){
    Employee.address=newAddress;
}
Employee.getAddress=function(newAddress){
    return Employee.address
}
console.log(`

Problem 11 | Extending Module
-------------------------------
Employee with address`)
Employee.printInformationWithAddress=function(){
    Employee.printInformation();
    console.log(`Address: ${Employee.getAddress()}`);
}
//SettingAddress
Employee.setAddress("1000 N 4Th street");
Employee.printInformationWithAddress();

