const span = document.querySelector('span');
const nav = document.querySelector('nav');
const bg = document.querySelector('body');

span.addEventListener('click', () => {
    nav.classList.toggle('.active')
})