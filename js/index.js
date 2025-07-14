const spans = document.querySelectorAll('span.material-symbols-outlined');
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav');
const bg = document.querySelector('body');
const header = document.querySelector('header');


spans.forEach(span => {
    span.addEventListener('click', () => {
      menu.classList.toggle('active')
    });
});
  