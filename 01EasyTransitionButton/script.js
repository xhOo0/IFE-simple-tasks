let head = document.querySelector('h1');
let line = document.querySelector('#line');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    $(head).toggleClass('active');
    $(line).toggleClass('active');
});