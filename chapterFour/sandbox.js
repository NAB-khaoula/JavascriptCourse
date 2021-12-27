// //NOTE adding removing classes;
// {
//     const content = document.querySelector('p');

//     console.log(content.classList); // this a property that get a list of all different classes;

//     content.classList.add('error');
//     content.classList.remove('error');
//     content.classList.add('succes'); //this way we can easily add/remove classes from an html page;
// } 


{
    const paras = document.querySelectorAll('p');
    paras.forEach(para => {
        if(para.textContent.includes('success'))
            para.classList.add('success');
        else if (para.textContent.includes('error'))
            para.classList.add('error');
    })

    const title = document.querySelector('.title');
    title.classList.toggle('test'); // used odd time will be as if adding +1 will be as if removing;

}


