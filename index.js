
// Write your code here
let num1 = 31;
let num2 = 2;
  
let multiply = num1 * num2;
console.log(multiply);

function getRandomIntegerGreaterThanZero() {
    let randomFloat = Math.random();
  
    let randomInteger = Math.floor(randomFloat * Number.MAX_SAFE_INTEGER) + 1;
  
    return randomInteger;
}
  
let random = getRandomIntegerGreaterThanZero();
  
console.log(random);

let num3 = 12;
let num4 = 8;

let mod = num3 % num4;

let numbers = [5, 12, 3, 20, 9];

let max = Math.max(...numbers);