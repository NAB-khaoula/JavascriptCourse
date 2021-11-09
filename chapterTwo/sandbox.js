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

// NOTE: numbers

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators + - / * ** %

console.log(10 / 2);

result  = radius % 3;

console.log(result);

result = radius ** 2;

console.log(result);

console.log(5 * 'hello');

result = 'the blog has ' + 5 + ' likes';

console.log(result);

// NOTE template strings

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way:
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html template: ?? NOTE it can be added to the website instead of just printing it in the console!
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
    `;
console.log(html);



//NOTE: Arrays a form of objects

let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas);

ninjas[1] = 'khaoula';
console.log(ninjas[1]);

// we can store different types of data into the arrays

let random = ['shaun', 'crystal', 10 , 20];
console.log(random);

// it has its own properties;

console.log(random.length);

// arrays methods:

random = ninjas.join('-');
console.log(random);

result = ninjas.indexOf('khaoula');
console.log(result);

result = ninjas.concat(['mama', 'baba']);
console.log(result);

result = ninjas.push('pushedValue');
console.log(result);
console.log(ninjas);

result = ninjas.pop();
console.log(result);
console.log(ninjas);

//NOTE undefined / null: those represent a lack of values in a variable; the only diff is that undefined is a variable that hasnt been defined yet
// while null is a variable explicitly set to nothing

let test;

console.log(test, test + 3, `the age is ${test}`);

let testNull = null;
console.log(testNull, testNull + 3, `the age is ${testNull}`);

//NOTE Boolean_comparisons;

console.log(true, false, "true", "false");

// we use boolean in comparison and check weither condition are true or false

result = email.includes('!');
console.log(result);
let names = ['mario', 'luigi', 'toad'];
result = names.includes('mario');
console.log(result);

age = 25;
console.log(age == 27);

// NOTE: Loose vs strict comparison;

console.log(age == '25');
console.log(age === '25');

// NOTE: type conversion

score = '100';
console.log(score + 1);
console.log(typeof(score));
score = Number(score);
console.log(typeof(score));
console.log(score + 1);

result = 'hello';
result = Number(result);
console.log(result); // the result is NaN because the initial value is not a number;

result = String(50);
console.log(result);
console.log(typeof(result));

result = Boolean(10);
console.log(result);
console.log(typeof(result));

//NOTE: What are function: lesson 30;
// function:
function greet(){
    console.log("hello there");
}
greet(); // calling the function/ invoking the function;