
//Problem 1

//Function definition
function max(x, y) {
    if (x > y)
        return x;
    else
        return y;
}

//Function call
console.log(max(5, 6));
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
console.log(maxOfThree(5, 6, 7));
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
console.log(isVowel("A"));
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

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));

console.log("---------------------------------------------------------");


//Problem 5
function reverse(s) {
    let reversed = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}
console.log(reverse("String"))
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

console.log(findLongestWord(["hood", "root", "cup", "football"]));
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
console.log(filterLongWords(["hood", "root", "cup", "football"], 3));
console.log("---------------------------------------------------------");


//Problem 8
function computeSumOfSquares(n) {
    let sumOfSquares = 0;
    for (let i = 0; i < n.length; i++) {
        sumOfSquares += (n[i] * n[i]);
    }
    return sumOfSquares;
}
console.log(computeSumOfSquares([1, 2, 3]));
console.log("---------------------------------------------------------");

//Problem 9

function printOddNUmbersOnly(n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0) {
            console.log(n[i]);
        }
    }
}
printOddNUmbersOnly([1, 2, 3, 4, 5, 6]);
console.log("---------------------------------------------------------");


//Problem 10
function computeSumOfSquaresOfEvensOnly(n) {
    let sumOfSquaresOfEvens = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            sumOfSquaresOfEvens += (n[i] * n[i]);
        }
    }
    return sumOfSquaresOfEvens;
}

console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5, 6]));
console.log("---------------------------------------------------------");

//Problem 11
const array1 = [1, 2, 3, 4];
//the syntax here looks like lamda expression in Java
console.log(array1.reduce((x, y) => x + y, 0));
console.log(array1.reduce((x, y) => x * y, 1));
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
console.log(findSecondBiggest([1, 2, 3, 4, 5]));
console.log("---------------------------------------------------------");

//Problem 13
function printFibo(n,a,b){
    let fibo="";
    for (let i = 1; i <= n; i++) {
    fibo+=","+a;
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}
return fibo;
}
console.log(printFibo(10,0,1));

console.log("---------------------------------------------------------");
