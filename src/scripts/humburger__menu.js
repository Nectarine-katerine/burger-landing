(function(){
  const menu=document.querySelector('.menu');
  const hamburgerMenu=document.querySelector('.hamburger__menu');
  const menuLink=document.querySelectorAll('.menu__link');
  const closeMenu=document.querySelector('.close__menu');
  const logo=document.querySelector('.logo__full-menu');
  
  for(var i=0; i<menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
      menu.style.left='9999px';
      document.body.style.overflow='visible';
    });
    };

  hamburgerMenu.addEventListener('click', function () {
    event.preventDefault();
    menu.style.left=0;
    document.body.style.overflow='hidden';
  });
  
  closeMenu.addEventListener('click', function () {
    event.preventDefault();
    menu.style.left='';
    document.body.style.overflow='visible';
  });
  logo.addEventListener('click', function () {
    menu.style.left='';
    document.body.style.overflow='visible';
  });
  
 
})()