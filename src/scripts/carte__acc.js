(function(){
  const carteItems = $('.carte__item');
  const carteTitle = $('.carte__title');

  for(var i=0; i<carteTitle.length; i++) {
    carteTitle[i].addEventListener('click', function(e){
      const curTitle = event.currentTarget
      console.log(curTitle)
      if(carteTitle[i] === curTitle){
        $(curTitle).closest('.carte__item').addClass('js-team__title');
      }
    })

    
  }


  // for (var eachItem of carteItems) {
  
  //   eachItem.addEventListener('click', function(event) {
  //     const curItem = event.currentTarget;
  //     const carteDesc = curItem.querySelector('.carte__desc');
  //     if (curItem.classList.contains('js-carte__item')) {//открыт
  
  //       curItem.classList.remove('js-carte__item');
  //       carteDesc.style.width=0;
      
  //     } 
  //     else {
  //       Array.from(carteItems).forEach(function(element) {
  //         element.classList.remove('js-carte__item');
  //         element.querySelector('.carte__desc').style.width=0;
  //       });
  
  //     curItem.classList.add('js-carte__item');
  //     carteDesc.style.width = '100%';
  //     }
  //   });
  // }
})()