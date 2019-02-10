const carteItems = document.querySelectorAll('.carte__item');

for (eachItem of carteItems) {

  eachItem.addEventListener('click', function () {
    const curItem = event.currentTarget;
    const carteDesc = curItem.querySelector('.carte__desc');
    const carteAppear = carteDesc.firstElementChild;
    const reqWidth = carteAppear.getBoundingClientRect.width;

    if (curItem.classList.contains('js-carte__item')) {//открыт

      curItem.classList.remove('js-carte__item');
      carteDesc.style.width=0;

    } 
    // else {
    //     Array.from(carteItems).forEach(function(element) {
    //     element.classList.remove('js-carte__item');
    //     element.querySelector('.carte__appear').style.width = 0;
    //   });
    // }

      curItem.classList.add('js-carte__item');
      carteDesc.style.width=`${reqWidth}px`;
  
  });
}