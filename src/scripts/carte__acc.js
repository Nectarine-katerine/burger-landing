(function () {
  let verticalAcco = () => {
    // let calculateWidth = () => {
    //   let windowWidth = window.innerWidth;
    //   let titles = document.querySelectorAll('.carte__title');
    //   let title = document.querySelector('.carte__title');
    //   let titlesWidth = parseFloat(getComputedStyle(title).width);
    //   let reqWidth = windowWidth - titlesWidth * titles.length;
    //   return reqWidth > 550 ? 550 : reqWidth;
    // }


    let oMenulink = document.querySelectorAll('.carte__title');

    oMenulink.forEach(function (personName) {
      personName.addEventListener("click", function (e) {
        e.preventDefault();
        let activePerson = document.querySelector(".js-carte__item");

        if (activePerson) {
          let teamAccordeonDetails = activePerson.querySelector(".carte__desc");
          teamAccordeonDetails.style.width = "0px";
          activePerson.classList.remove("js-carte__item");

        }

        if (!activePerson || ((activePerson.querySelector(".carte__title-text") != e.target) && (activePerson.querySelector(".carte__title") != e.target))) {
          let currentPerson = e.target.closest(".carte__item");
          currentPerson.classList.add("js-carte__item");

          currentPerson.lastElementChild.style.width = "100%"; 
        }

        const closeCarte = document.querySelectorAll('.close__carte');

        for(var i=0; i<closeCarte.length; i++) {
          closeCarte[i].addEventListener('click', function(e) {
            e.preventDefault();
            const currentClose = e.target.closest(".js-carte__item");
            currentClose.classList.remove('js-carte__item');

            const curDes = e.target.closest(".carte__desc");
            curDes.style.width = "0px";
          })
        }

      })
    })
  }
  verticalAcco();

})()