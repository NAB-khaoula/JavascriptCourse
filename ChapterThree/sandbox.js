// NOTE how to get-set an attribute;
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'TheNet Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success')
console.log(mssg.getAttribute('class'));

// if it happen that we want to set an attribute that doesn't exist , js simply add it;
mssg.setAttribute('style', 'color:green');
