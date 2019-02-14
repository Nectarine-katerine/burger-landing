// const button=document.querySelector('#formButton');
// const template = document.querySelector("#modal-template").innerHTML;
// const wrapper = document.querySelector(".wrapper");
// const modal = createModal();

// button.addEventListener("click", e => {
//   modal.setContent("Hello WOrld");
//   modal.open();

//   setTimeout(()=> {
//     modal.close();
//   },3000);
// });

// function createModal() {
//   const container = document.createElement('div');
//   container.className = 'popup';
//   container.innerHTML = template;

//   const contentBlock = container.querySelector('.popup__content');
  

//   const closeBtn=container.querySelector('.popup__close');

//   closeBtn.addEventListener('click', e => {
//     wrapper.removeChild(container);
//   })

//   const overlay = container.querySelector('.overlay');
//   overlay.addEventListener('click', e => {
//     if (e.target === overlay) {
//       closeBtn.click();
//     }
//   })
//   return {
//     open(){
//       wrapper.appendChild(container);
//     },
//     close(){
//       closeBtn.click();
//     },
//     setContent(content){
//       contentBlock.innerHTML=content;
//     }
//   };
// }
