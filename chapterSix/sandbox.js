const button = document.querySelector('button');

button.addEventListener('click', () =>{
    console.log('you clicked me');
}); // this method actively listens to the event on this button;

// first param: there is a bunch of event that might me used as a param of this method
// second param: a callback function, and it is the thing that gonna fire when this event occurs on this button;

const items = document.querySelectorAll('li'); // it is a node list of li tags;

items.forEach(item =>{
    item.addEventListener('click', (e)=>{
        // console.log('item clicked');
        // the e param (we can call it whatever we want lol) contains infos about the event that occurs;
        // console.log(e);
        console.log(e.target); // there is another way to get the element (the item para) but e.target is much better;
        e.target.style.textDecoration = 'line-through';
    })
});

