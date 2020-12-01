//Prompt a user twice to input a number. Store their response in variables.
let num1 = prompt("Insert a Number")
let num2 = prompt("Insert a Number")

let actualnum1 = parseInt(num1);
let actualnum2 = parseInt(num2);

// Declare another variable to store the total of each statement
let sum = actualnum1 + actualnum2;

//Code a series of JS statements that use the user input to preform math operations.
let difference = actualnum1 - actualnum2
let product = actualnum1 * actualnum2
let quotient = actualnum1 / actualnum2
let exponent = actualnum1 ** actualnum2
let modulus = actualnum1 % actualnum2
console.log(`Sum: ${sum}, Difference: ${difference}, Multiply: ${product}, Division: ${quotient}, Exponent: ${exponent}, Modulus: ${modulus}`)

//Code a statement that would return a random number between 1 and 35.

let randomNumber = Math.floor(Math.random() * 35) + 1;
console.log(`Random number between 1 to 35: ${randomNumber}`)

// Code a statement to return a floating point number rounded up to the nearest integer.

let ceilA = prompt ('Enter any number with a decimal');
let actualCeilA = parseInt(ceilA);
let ceilNum = Math.ceil (Math.random() * actualCeilA ) + 1;
console.log(ceilNum);

//Code a statement that returns a floating point number rounded down to the nearest integer.
let floatA = prompt ('Enter any number with a decimal');
let actualFloatA = parseInt(floatA);
let floatNum = Math.floor (Math.random() * actualFloatA ) + 1;
console.log(floatNum);

//Prompt a user twice to input a number. Store their response in variables.Using Math.pow return the value of the one variable to the power of the other. Display the result.

let num3 = prompt("Enter a number")
let num4 = prompt("Enter another number")
var mathPow = Math.pow(num3, num4)
console.log(`Math Pow: ${mathPow}`)