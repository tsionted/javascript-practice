//single line comment
/*
*/

console.log('Tsion');

console.log('my favorite food is bread');

let letter ='supercalifragilisticexpialidocious';

console.log(letter.length);
console.log(5);
let bignum =BigInt(12);
console.log(bignum);

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string
// Asking the user for there first name
let firstName = prompt("Enter Your First Name");
let splitted = firstName.split('');
let reversed=splitted.reverse();
let reversedName=reversed.join('');
alert(reversedName);


//// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

let num1 = prompt("first Number");
let num2 = prompt("second Number");

let a = parseInt(num1);
let b = parseInt(num2);

alert(a+b);

