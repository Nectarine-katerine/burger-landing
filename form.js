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
        const response = 'сообщение отправлено';
            modal.setContent('',response);
            modal.open();
            setTimeout(e=>{
                clearBtn.click();
                modal.close();
            },2000);
            
    } else {
        const rejected = 'сообщение отклонено';
        modal.setContent('',rejected);
        modal.open();
        clearBtn.click();
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