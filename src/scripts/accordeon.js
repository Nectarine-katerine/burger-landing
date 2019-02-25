(function(){
//аккордеон

let teamAccoJS = () => {
  let oTeamlink = document.querySelectorAll('.team__headline');
  
  oTeamlink.forEach(function(personName) {
      personName.addEventListener("click", function(e) {
          e.preventDefault();
          let activePerson = document.querySelector(".team__item.js-team__item");

          if (activePerson){
              let teamAccordeonDetails = activePerson.querySelector(".team__text");
              teamAccordeonDetails.style.height = "0px";
              activePerson.classList.remove("js-team__item");
          }

          if(!activePerson || activePerson.querySelector(".team__headline") != e.target) {
              let currentPerson = e.target.closest(".team__item");
              currentPerson.classList.add("js-team__item");

              let currentPersonInfo = currentPerson.querySelector(".team__text");
              currentPersonInfo.style.height = currentPersonInfo.scrollHeight + "px";
          }
      })
  }) 
}
teamAccoJS();

// let teamItems=document.querySelectorAll('.team__item');
// let teamHD=document.querySelectorAll('.team__headline');
// for(let i=0; i<teamHD.length; i++) {

//   teamHD[i].addEventListener('click', function () {
//     const curItem = event.currentTarget;
//     const teamText = curItem.querySelector('.team__text');
//     const textBlock = teamText.firstElementChild;
//     const reqHeight = textBlock.getBoundingClientRect().height;

//     if (curItem.classList.contains('js-team__item')) {//открыт

//       curItem.classList.remove('js-team__item');
//       teamText.style.height = 0;

//     } else {
//         Array.from(teamItems).forEach(function(element) {
//         element.classList.remove('js-team__item');
//         element.querySelector('.team__text').style.height = 0;
//       });

//       curItem.classList.add('js-team__item');
//       teamText.style.height=`${reqHeight}px`;
//     }
//   });
// }



})()