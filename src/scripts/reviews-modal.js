(function(){
  const reviewsBtn=document.querySelectorAll('.reviews__btn');
  const templateR = document.querySelector("#modal-reviews").innerHTML;
  const modalR = createModal();
  var wrapper = document.querySelector(".wrapper");

  
  for (let i=0; i<reviewsBtn.length; i++) {
    reviewsBtn[i].addEventListener('click', e => {
      event.preventDefault();
      const paragraph = e.currentTarget.parentNode.childNodes[3].innerHTML;
      const headline = e.currentTarget.parentNode.firstElementChild.innerHTML;
      modalR.setContent(headline, paragraph);
      modalR.open();
    //   setTimeout(e=>{
    //     modalR.close();
    // }, 6000);
  })
  }
  
  function createModal() {
    var container = document.createElement('div');
    container.className = 'popup__reviews';
    container.innerHTML = templateR;
  
    const contentBlock = container.querySelector('.popup__content-text');
    const headlineBlock = container.querySelector('.popup__content-headline');
  
    var closeBtn=container.querySelector('.popup__close-reviews');
  
    closeBtn.addEventListener('click', e => {
      event.preventDefault();
      wrapper.removeChild(container);
    })
  
    var overlay = container.querySelector('.overlay__reviews');
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        closeBtn.click();
      }
    })
    return {
      open(){
        wrapper.appendChild(container);
      },
      close(){
        closeBtn.click();
      },
      setContent(name, content){
        contentBlock.innerHTML=content;
        headlineBlock.innerHTML=name;
      }
    };
  }
})()