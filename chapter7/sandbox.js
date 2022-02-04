// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI'); // this is calling the event on ul bubbling 
//         e.stopPropagation() // this method stops the event bubbling! and this is saver to avoid getting some unexpected behaviours
//         e.target.remove();
//     });
// });



const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.tagName == 'LI')
        e.target.remove();
});

const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
});

