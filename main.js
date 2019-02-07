const menu=document.querySelector('.menu');
const hamburgerMenu=document.querySelector('.hamburger__menu');

hamburgerMenu.addEventListener('click', function () {
  menu.style.display='flex';
});

const closeMenu=document.querySelector('.close__menu');
closeMenu.addEventListener('click', function () {
  menu.style.display='none';
});