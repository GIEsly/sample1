const menu = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.add('nav-open');
    console.log(nav)
})

close.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    console.log(nav)
})