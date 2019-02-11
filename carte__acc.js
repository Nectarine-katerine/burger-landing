const carteItems = document.querySelectorAll('.carte__item');

for (var eachItem of carteItems) {

  eachItem.addEventListener('click', function(event) {
    const curItem = event.currentTarget;
    const carteDesc = curItem.querySelector('.carte__desc');
    if (curItem.classList.contains('js-carte__item')) {//открыт

      curItem.classList.remove('js-carte__item');
      carteDesc.style.width=0;
    
    } 
    else {
      Array.from(carteItems).forEach(function(element) {
        element.classList.remove('js-carte__item');
        element.querySelector('.carte__desc').style.width=0;
      });

    curItem.classList.add('js-carte__item');
    carteDesc.style.width = 'initial';
    }
  });
}
