const popupWrapper = document.querySelector('.popupWrapper');
const popupClose = document.querySelector('.popupClose');
const button = document.querySelector('button');

button.addEventListener('click', (e)=>{
    e.stopPropagation();
    popupWrapper.style.display = 'block';
});

popupClose.addEventListener('click', (e)=>{
    e.stopPropagation();
    popupWrapper.style.display = 'none';
});
