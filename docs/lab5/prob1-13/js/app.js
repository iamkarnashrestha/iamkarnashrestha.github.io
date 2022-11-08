'use strict'
//Problem 1
//Function definition
function max(x, y) {
    if (x > y)
        return x;
    else
        return y;
}

//Function call
console.log("The maximum between 5 and 6 is :"+max(5, 6));
console.log("---------------------------------------------------------");

//Problem 2
function maxOfThree(x, y, z) {
    if (x > y && x > z)
        return x;
    else if (y > x && y > y)
        return y;
    else
        return z;
}
console.log("The maximum between 5 and 6 is :"+maxOfThree(5, 6, 7));
console.log("---------------------------------------------------------");


//Problem3
function isVowel(c) {
    let s = c.toLowerCase();
    if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') {
        return true;
    }
    else
        return false;
}
console.log("The given letter 'A' is vowel:"+isVowel("A"));
console.log("---------------------------------------------------------");



// Problem4
let sumResult = 0, mulResult = 1;
function sum(a) {
    for (let i = 0; i < a.length; i++) {
        sumResult += sumResult + a[i];
    }
    return sumResult;
}
function multiply(a) {
    for (let i = 0; i < a.length; i++) {
        mulResult += mulResult * a[i];
    }
    return mulResult;
}

console.log("The sum of elements of array: "+sum([1, 2, 3, 4]));
console.log("The multiplication of elements of array:"+ multiply([1, 2, 3, 4])); 

console.log("---------------------------------------------------------");


//Problem 5
function reverse(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}
console.log("The reversed word of the word 'String' is: "+reverse("String"))
console.log("---------------------------------------------------------");

//Problem 6
function findLongestWord(w) {
    let longest = w[0];
    for (let i = 1; i < w.length; i++) {
        if (w[i].length > longest.length) {
            longest = w[i];
        }
    }
    return longest;
}

console.log("The longest word from array ['hood', root', 'cup', 'football'] is:"+ findLongestWord(["hood", "root", "cup", "football"]));
console.log("---------------------------------------------------------");

//Problem 7

function filterLongWords(w, i) {
    let filteredWords = [];
    for (let j = 0, k = 0; j < w.length; j++) {
        if (w[j].length > i) {
            filteredWords[k] = w[j];
            k++;
        }
    }
    return filteredWords;
}
console.log("The filtered longest word from array ['hood', root', 'cup', 'football'] is: "+filterLongWords(["hood", "root", "cup", "football"], 3));
console.log("---------------------------------------------------------");


//Problem 8
function computeSumOfSquares(n) {
    return n.map(x=>x*x).reduce((x,y)=>x+y,0);
}
console.log("The sum of squares of given elements in array is:"+computeSumOfSquares([1, 2, 3]));
console.log("---------------------------------------------------------");

//Problem 9
function printOddNUmbersOnly(n) {
    console.log("The oddnumbers in the array: ["+n+"] is:"+ n.filter(x => x%2 != 0) );
}
printOddNUmbersOnly([1, 2, 3, 4, 5, 6]);
console.log("---------------------------------------------------------");


//Problem 10

function computeSumOfSquaresOfEvensOnly(n) {
    return n.filter(x => x%2 == 0).map(x=>x*x).reduce((x,y)=>x+y,0)
    return sumOfSquaresOfEvens;
}
//imperative approach
// function computeSumOfSquaresOfEvensOnly(n) {
//     let sumOfSquaresOfEvens = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] % 2 == 0) {
//             sumOfSquaresOfEvens += (n[i] * n[i]);
//         }
//     }
//     return sumOfSquaresOfEvens;
// }

console.log("The sum of square of even elements from array [1, 2, 3, 4, 5, 6] is:"+ computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5, 6]));
console.log("---------------------------------------------------------");

//Problem 11
const array1 = [1, 2, 3, 4];
//the syntax here looks like lamda expression in Java
console.log("The sum of elements of array [1, 2, 3, 4] is:"+ array1.reduce((x, y) => x + y, 0));
console.log("The product of elements of array [1, 2, 3, 4] is:"+array1.reduce((x, y) => x * y, 1));
console.log("---------------------------------------------------------");

//Problem12
function findSecondBiggest(n) {
    let firstBiggest = 0, secondBiggest = 0;;

    for (let i = 0; i < n.length; i++) {
        if (firstBiggest < n[i])
            firstBiggest = n[i];
    }
    for (let i = 0; i < n.length; i++) {
        if ((secondBiggest < n[i]) && n[i] < firstBiggest) {
            secondBiggest = n[i];
        }

    }
    return secondBiggest;
}
console.log("The second biggest elements of array [1, 2, 3, 4, 5] is: "+findSecondBiggest([1, 2, 3, 4, 5]));
console.log("---------------------------------------------------------");

//Problem 13
function printFibo(n,a,b){
    let fibo=[];
    for (let i = 1; i <= n; i++) {
    fibo.push(a);
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
}
return fibo;
}
console.log("The fibonacci series is: "+printFibo(10,0,1));

console.log("---------------------------------------------------------");
