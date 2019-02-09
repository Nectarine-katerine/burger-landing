
const arrowLeft=document.querySelector('.arrow__left');
const arrowRight=document.querySelector('.arrow__right');
const item=document.querySelector('.slider__list');
const slidesInView=1;

const step=items.firstElementChild.getBoundingClientRect().width;
const maxRight=(items.children.length-1)*step;
const minRight=0;
let currentRight = 0;

arrowRight.addEventListener('click', function() {
if (currentRight < maxRight){
  currentRight += step;
  item.style.right=`${currentRight}px`;
} else {
  currentRight=0;
  items.style.right=0;
}
});

arrowLeft.addEventListener('click', function() {
  if (currentRight > minRight){
    currentRight -= step;
    item.style.right=`${currentRight}px`;
  } else {
  currentRight=maxRight;
  items.style.right=maxRight;
  }
  });