let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const point = 100;

console.log(point);

// point = 50;    //  NOTE here the key word const protect the point to be overwritten !


var score = 75; // NOTE var is the older way to create a variable, it is now more practical to use the let and const var to declare variables!
console.log(score);

/* NOTE:

javascript Data type:

the Data type can be override with any other type of data type using let;

Numbers: 1,2,100, 3.14;
Strings: 'hello world'
Boolean: true/ false
Null: explicitly set a variable with no value;
undefined: for varibles that have not yet been defined;
Object: Complex data structures;
Symbol: Used with objects;
*/


//NOTE lesson 9
console.log("hello, world!");

let email = "k12.naboussi@gmail.com"

console.log(email);

let firstName = 'Khaoula';
let lastName = 'Naboussi';
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName[0]);

// string has also methods that can be used to handle it;

console.log(fullName.length);
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result);
console.log(fullName);

let index = email.indexOf('@');
console.log(index);


//NOTE: common string methods

result = email.lastIndexOf('s');

console.log(result);

result = email.slice(0, 10);

console.log(result);

result = email.substr(1,10);

console.log(result);

result = email.replace('s', 'l');

console.log(result);
