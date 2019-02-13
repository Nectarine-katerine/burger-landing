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
const error=document.querySelectorAll('.error');

formButton.addEventListener('click', function(event){
  event.preventDefault();
  if (validateForm(myForm)) {
    console.log('Всё ок!');
  }
});

function validateForm(form) {
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
  for (var eachError of error) {
    if (field.checkValidity(true)) {
      eachError.textContent = '';
      return field.checkValidity();
    } else if (!field.checkValidity(false)){
      eachError.textContent = field.validationMessage;
    }
  }
  // if (!field.checkValidity()) {
  // error.textContent=field.validationMessage;
  // return field.checkValidity();
}