"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Equality test with string : ", "Banana" === "Banana");
console.log("inEquality test with string : ", "Banana" != "mango");
// • Tests using the lower case function
console.log("Using lower case function : ", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality , 
console.log("Numerical Equality Test : ", 100 === 100);
// • Numerical tests involving inequality, 
console.log("Numerical inEquality Test : ", 100 != 200);
//greater than  
console.log("Greator than Test : ", 50 > 10);
//and less than,
console.log("Less than Test : ", 15 < 20);
//greater than or equal to,
console.log("Greator than equal to Test : ", 50 >= 50);
//and less than or equal to
console.log("less than equal Test : ", 50 <= 60);
// • Tests using "and"  operators
console.log("Using and operator Test : ", 50 < 60 && 20 === 20);
// • Tests using "or" operators
console.log("Using or operator Test : ", 500 < 60 || 10 === 10);
// • Test whether an item is in a array
const fruits = ["apple", "banana", "cherries"];
console.log("test banana is in array :", fruits.includes("banana"));
// • Test whether an item is not in a array  !(not)
console.log("test mango is not in array :", !fruits.includes("mango"));
