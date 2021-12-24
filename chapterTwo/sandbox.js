let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const point = 100;

console.log(point);

// point = 50;    //  NOTE here the key word const protect the point variable to be overwritten !


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
// function declaration:
function greet(){ // the js key word function is used  to declare a function followed by the name of the function
	console.log("hello there");
}
greet(); // calling the function / invoking the function;

// function expression:
{
	const speak = function(){
	console.log('good day!');
	}; // semicolon here;

	speak();
	speak();
}

// NOTE the function declaration and function expression are actually behaving the same way!  
// but for function declaration hoisting make the function callable even before the declaration while function expression doesn't
// tho function expression is a good behaviour while coding in js

{
	// function parameters
	const speak = function(name = 'luigi'){
		console.log(`good day ${name}`);
	}

	speak('mario');
	speak();
}


{
	// returning Values
	const calcArea = function(radius){
		// let area = 3.14 * radius**2;
		// return area; we could either store this in a local variable then return it of simply:
		return 3.14 * radius**2;
	};
	
	console.log(calcArea(5));
}

{
	// Arrow functions:
	// in arrow function we don't use the "function" keyword instead parentheses are taking the parameters
	const calcArea = (radius) => { // here is the arrow function version of the regular function expression
		// here is the function boy
		return 3.14 * radius**2;
	};
	console.log(calcArea(5));
	// and this is actually can be simplified even more:
	// when we only have one parameters, we can take away parenthese; otherwise (if there is no parameteres or more than one we obligaatory need it)
}

{
	// practice: my code
	// const greet = function(){
	// 	return 'hello, world';
	// } 
	const greet = () => 'hello, world';
	console.log(greet());

	// const bill = function (product, tax){
	// 	let total = 0;
	// 	for (let i = 0; i < product.length; i++)
	// 		total += product[i] + product[i] * tax;
	// 	return total;
	// }
	const bill = (product, tax) => {
		let total = 0;
		for (let i = 0; i < product.length; i++)
			total += product[i] + product[i] * tax;
		return total;
	}
	console.log(bill([10, 15, 30], 0.2));
}

// NOTE: function vs method:
{

	// function is a block of code to do something that can be invoked in our code;

	const welcome = () => 'hello';
	
	let resultOne = welcome();
	console.log(resultOne);
	
	// methods: it is similar to function, tho it is related to a data type;
	
	const name = 'shaun';
	let resultTwo = name.toUpperCase();
	console.log(resultTwo);
	
}

// NOTE: Foreach methods:
{
	// NOTE callback function:
	const myFunct = (callbackFunc) => {
		let value = 50;
		callbackFunc(value);
	};
	myFunct(value => {console.log(value);});

	let people = ['mario', 'luigi', 'ryu', 'shaun',  'chun-li'];
	people.forEach((person, index) => {console.log(`${index} -  hello ${person}`)});
}

//NOTE - callback function in actions;
{
	// const ul = document.querySelector('.people'); // this going to be covered by the course later but needed in the exemple below
	// let people = ['mario', 'luigi', 'ryu', 'shaun',  'chun-li'];
	// html = ``;
	// people.forEach(function(person){
	// 	//create html template
	// 	html += `<li stype="color: purple">${person}</li>`;
	// });

	// console.log(html);
	// ul.innerHTML = html; //not working for now;
}

// NOTE - objects literal:
{
	// objects in real life have properties and things they can do:
	// - properties;
	// - methods 
	// example: properties: email, username, gender
	//			methods: login, logout,
	// creating objects:
	let user = {
		// key : value
		name: 'crystal',
		age: 30,
		email: 'crystal@thenetninja.co.uk',
		location: 'berlin',
		blog: ['why mac and cheese rules', '10 things to make with marmite']
	};
	console.log(user);
	console.log(user.name);
	user.age = 35; // access a property and overwrite it
	console.log(user.age);
	console.log(user['email']);
	user['name'] = 'chun-li' // another way to access an element
	console.log(user['name']);
	const em = 'email';
	console.log(user[em]);
	// most of the time we use dot notation rather than brackets!!
	console.log(typeof(user)); // to know the type of our variables!
}
// NOTE: adding methods to the object!
{
	let user = {
		// key : value
		name: 'crystal',
		age: 30,
		email: 'crystal@thenetninja.co.uk',
		location: 'berlin',
		blog: ['why mac and cheese rules', '10 things to make with marmite'],
		login: function(){
			console.log("the user logger in"); // methods are functions defined on an objects
		},
		logout: function(){
			console.log("the user logged out");
		}
	};
	user.login();
	user.logout();
}

// NOTE: -this- keyword
{
	let user = {
		// key : value
		name: 'crystal',
		age: 30,
		email: 'crystal@thenetninja.co.uk',
		location: 'berlin',
		blog: ['why mac and cheese rules', '10 things to make with marmite'],
		login(){ // here is the same as login: function(){}
			console.log("the user logger in"); // methods are functions defined on an objects
		},
		logout(){
			console.log("the user logged out");
		},
		logBlogs(){
			console.log(this.blog);
		}
	};
	user.logBlogs();
	// global object is called the window object;
	console.log(this);
}

// NOTE: objects in array;
{
	const blogs = [
		{title: 'why mac and cheese rules', likes: 30},
		{title: '10things to make with marmite', likes: 50}
	];
	console.log(blogs);
	let user = {
		// key : value
		name: 'crystal',
		age: 30,
		email: 'crystal@thenetninja.co.uk',
		location: 'berlin',
		blog: [
			{title: 'why mac and cheese rules', likes: 30},
			{title: '10 things to make with marmite', likes: 50}
		],
		login(){ // here is the same as login: function(){}
			console.log("the user logger in"); // methods are functions defined on an objects
		},
		logout(){
			console.log("the user logged out");
		},
		logBlogs(){
			console.log("this user has written the following blogs:");
			this.blog.forEach(blog => console.log(blog.title, blog.likes))
		}
	};
	user.logBlogs();
}

// NOTE: math objects
{
	console.log(Math);
	console.log(Math.PI);
	console.log(Math.E);
	const area = 7.7;
	console.log(Math.round(area)); 
	console.log(Math.floor(area)); 
	console.log(Math.ceil(area));
	console.log(Math.trunc(area));
 // to generate a random number;

 const random = Math.random();
 console.log(Math.round(random * 10)); // a decimal number between zeero and one;
}

// NOTE: Primitive/reference types;
{
	/*	primitive types: numbers, strings, booleans, null, undefined, symbols
		reference types: all types of objects;
		the primitive values are stored in the stack, (a stack of different values in memory)
		while the reference type are stored in the heap; it has more space available,
		NB: when we make a copy of a variable in js it is actually a real copy in the stack, while when it is a copy of a reference type,
		we actualy make a copy of the adress of that object on the heap (which means the same ref type variable);
	*/
}

// NOTE: interacting with a browser:
{
	/*
		What we can do with js on a browser(the main reason of js, make the webpage more dynamic):
		- add content to the browser;
		- change CSS styles;
		- react to use events (clicking)
		- cool effects like popups;
		so the objective of this part is how to work with the  DOM (document Object Model);
	*/
	// describe how the document looks in a visual way.
	/**
	 * 										          	html         (root node)
	 * 										  /              		\      
	 * 										head              	  body              (element nodes)
	 * 										 /                  /  |   \
	 * 										title  (text node) h1 div  div      
	 * 
	 */
	// NOTE:  The query Selector; // it is to select elements from the html page;
	/**
	 * 
	 */
	const firstPTag = document.querySelector('p') //it grap the first p tag of the html page;
	console.log(firstPTag);
	const para = document.querySelector('body > h1'); 
	console.log(para);
	// And to grab multiple element:
	const paras = document.querySelectorAll('p'); // paras is an array if all p elements;
	console.log(paras);
	console.log(paras[0]);
	paras.forEach(para => console.log(para));

	const errors = document.querySelectorAll('.error');
	console.log(errors);
}
// NOTE: other ways to query the dom;
{
	// NOTE get an element by ID:
	const title = document.getElementById('page-title'); // in the case of a query selector we needed the # , but in the getElementById it is actually already implied in the function
	// in the case of getElementById the element is singular, it grabs only one element; (the id is unique in the html document)
	// NOTE get elements by their class name:
	const classname = document.getElementsByClassName('error'); // no need to use the '.' 
	console.log(classname); // we got an HTMLCollection
	// the "Elements" are plural, it grabs all the element with the class name mentionned;
	// NOTE get elements by their tag name:
	const paras = document.getElementsByTagName('p');
	console.log(paras);
}

//NOTE Changing Page Content
{
	const para = document.querySelector('p');
	console.log(para.innerText); // using this property we get the inner text of the property;
	para.innerText += ', ninja are awesome' // this way, it can append the text in that element. or it can override it by removing the +;

	const paras = document.querySelectorAll('p');
	paras.forEach(para => { 
		console.log(para.innerText)
		para.innerText += ' new text';
		console.log(para.innerText)
	});
	const content = document.querySelector('.content');
	console.log(content.innerHTML);
	content.innerHTML = '<h2> this is a new h2 </h2>' // here it change (or append) the tag of the element
	console.log(content.innerHTML);
	const people = ['mario', 'luigi', 'yoshi'];
	people.forEach(person =>{
		content.innerHTML += `<p> ${person}</p>`;
	});
}
