//NAVBAR FIXED 
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// DARK MODE TOGGLE
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
   
    // a function to check the Dark
    const isDarkMode = html.classList.contains('dark');
    if (isDarkMode) {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
});


// BURGER TOGGLE MENU
const burger = document.querySelector(`#burger`);
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener(`click`,function(){
    burger.classList.toggle(`burger-active`);
    navMenu.classList.toggle('hidden');
});