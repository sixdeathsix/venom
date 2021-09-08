const menuButton = document.querySelector('.menu__btn');
const menu = document.querySelector('.nav__menu');
const menuCloseButton = document.querySelector('.menu__close');

menuButton.addEventListener('click', () => {
  menu.classList.add('is__active');
  menuCloseButton.classList.add('is__active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('is__active');
  menuCloseButton.classList.remove('is__active');
});