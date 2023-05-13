const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');
});