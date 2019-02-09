const menu=document.querySelector('.menu');
const hamburgerMenu=document.querySelector('.hamburger__menu');
const menuLink=document.querySelectorAll('.menu__link');

hamburgerMenu.addEventListener('click', function () {
  menu.style.left=0;
});

const closeMenu=document.querySelector('.close__menu');
closeMenu.addEventListener('click', function () {
  menu.style.left='99999px';
});

for(eachLink of menuLink) {
eachLink.addEventListener('click', function() {
  menu.style.left='99999px';
});
};

//аккордеон
// js-team__item
const teamItems = document.querySelectorAll('.team__item');

for (eachItem of teamItems) {

  eachItem.addEventListener('click', function () {
    const curItem = event.currentTarget;
    const teamText = curItem.querySelector('.team__text');
    const textBlock = teamText.firstElementChild;
    const reqHeight = textBlock.getBoundingClientRect().height;

    if (curItem.classList.contains('js-team__item')) {//открыт

      curItem.classList.remove('js-team__item');
      teamText.style.height = 0;

    } else {
        Array.from(teamItems).forEach(function(element) {
        element.classList.remove('js-team__item');
        element.querySelector('.team__text').style.height = 0;
      });

      curItem.classList.add('js-team__item');
      teamText.style.height=`${reqHeight}px`;
    }
  });
}