// Ввод только цифр Телефон
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

//модалка форма;
const button=document.querySelector('#formButton');
const template = document.querySelector("#modal-template").innerHTML;
const wrapper = document.querySelector(".wrapper");
const modal = createModal();

function createModal() {
  const container = document.createElement('div');
  container.className = 'popup';
  container.innerHTML = template;

  const contentBlock = container.querySelector('.popup__content');

  const closeBtn=container.querySelector('.popup__close');

  closeBtn.addEventListener('click', e => {
    wrapper.removeChild(container);
  })

  const overlay = container.querySelector('.overlay');
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
    setContent(content){
      contentBlock.innerHTML=content;
    }
  };
}
// валидация и отправка данных на сервер

const myForm=document.querySelector('#myForm');
const formButton=document.querySelector('#formButton');
const clearBtn = myForm.querySelector('#reset');

formButton.addEventListener('click', function(event){
  event.preventDefault();
  if (validateForm(myForm)) {
    const name=myForm.elements.name.value;
    const phone=myForm.elements.phone.value;
    const comment=myForm.elements.comment.value;
    const to='mymail@mail.ru';
    var formData=new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('comment', comment);
    formData.append('to', to);
    const xhr=new XMLHttpRequest();
    xhr.responseType='json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', e => {
      if (xhr.response.status){
            modal.setContent('Сообщение отправлено');
            modal.open();
            setTimeout(e=>{
                modal.close();
            }, 3000);
            
    } else if ((xhr.response.status == 0)) {
        modal.setContent('Отправить письмо не удалось, повторите запрос позже');
        modal.open();
        // modal.close();
    }
    });
  }
});

function validateForm(myForm) {
  let valid = true;

  if(!validateField(myForm.elements.name)) {
    valid=false;
  }
  if(!validateField(myForm.elements.phone)) {
    valid=false;
  }
  if(!validateField(myForm.elements.comment)) {
    valid=false;
  }
  return valid;
};

function validateField(field) {
  if (!field.checkValidity()){
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
}
else {
    field.nextElementSibling.textContent = '';
    return true;
}
}

