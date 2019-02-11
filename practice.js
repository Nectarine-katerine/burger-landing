var name='Екатерина';
console.log(name);
name = 'Рамиль';
console.log(name);

if (7 < 3) {
console.log('Точно!');
} else {
console.log('А вот и нет');
}

for (var i=0; i<10; i++) {
console.log(i);
}

function sum(p1, p2, p3) {
var result=p1+p2+p3;
return result;
}

var result=sum(10,20,30);
console.log(result);

result=sum(5,1,100);
console.log(result);

result=sum(45,235,1789);
console.log(result);

var arr=['привет', 'loftschool'];
arr.push(', я изучаю', 'javascript');
console.log(arr.length);

for (var i=0; i<arr.length; i++) {
console.log(arr[i]);
}

var nums=[33, 267, 43, 675, 65, 987, 9, 3822, 815, 60];
for (var i=0; i<=nums.length; i++) {
if (nums[i]>100) {
  console.log(nums[i]);
}
}

var obj={
name: 'Екатерина',
lastName: 'Исмиляева',
age: 25
};
console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.child='Тимур';
console.log(obj.child);

function hello(human) {
console.log('Привет, меня зовут ' + obj.name + ' ' + obj.lastName + ' и мне ' + obj.age + ' лет!');
};

var greating=hello(obj);
console.log(greating);

const first=document.createElement('div');
document.body.appendChild(first);
first.textContent='Этот элемент создан при помощи DOM API';

const inner=document.createElement('div');
inner.classList.add('inner');
inner.textContent='Этот элемент тоже создан при помощи DOM API';
first.appendChild(inner);

inner.style.color='red';
inner.addEventListener('click', function(){
  console.log('Этот текст говорит о том, что я всё сделал правильно');
});

const anch=document.createElement('a');
anch.setAttribute('href','https://loftschool.com');
document.body.appendChild(anch);

anch.textContent='Я ссылка';
anch.addEventListener('click', function (){
  event.preventDefault();
  console.log('Я кликнул на ссылку' + ' ' + anch.getAttribute('href'));
});

const input=document.createElement('input');
input.setAttribute('name', 'name');
input.style.display='block';
const button=document.createElement('button');
button.textContent='Я кнопка';

document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener('click', function() {
  event.preventDefault();
  console.log(input.value);
});
