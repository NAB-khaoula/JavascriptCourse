const article = document.querySelector('article');
console.log(article.children);
console.log(Array.from(article.children)); // making an array of the html collection;
// this object doesnt change in the param it only return a new array;
console.log(article.children);
Array.from(article.children).forEach(child =>{
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling); // when it doesnt exist we get a null 

//chaining: we can use all these properties to travers the dom;
console.log(title.nextElementSibling.parentElement.children);

