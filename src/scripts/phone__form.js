(function(){
  const phone = document.querySelector('#phone');

  phone.addEventListener('keydown', function() {
  
    let isDigit = false;
    let isControl=false;
  
    if(event.key >=0 || event.key <=9) {
      isDigit=true;
    };
    if(event.key == 'ArrowLeft' || event.key=='ArrowRight' || event.key=='Backspace' || event.key==='Tab') {
      isControl=true;
    };
    if(!isDigit && !isControl) {
      event.preventDefault();
    };
  });
})()