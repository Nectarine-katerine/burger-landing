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
})()