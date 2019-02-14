const reviewsBtn=document.querySelectorAll('.reviews__btn');
const templateR = document.querySelector("#modal-reviews").innerHTML;
const wrapperR = document.querySelector(".wrapper");
const modalR = createModal();

for (eachBtn of reviewsBtn) {
  eachBtn.addEventListener('click', e => {
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
  const container = document.createElement('div');
  container.className = 'popup__reviews';
  container.innerHTML = templateR;

  const contentBlock = container.querySelector('.popup__content-text');
  const headlineBlock = container.querySelector('.popup__content-headline');

  const closeBtn=container.querySelector('.popup__close-reviews');

  closeBtn.addEventListener('click', e => {
    wrapperR.removeChild(container);
  })

  const overlay = container.querySelector('.overlay__reviews');
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeBtn.click();
    }
  })
  return {
    open(){
      wrapperR.appendChild(container);
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