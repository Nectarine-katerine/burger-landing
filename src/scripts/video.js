let video;
let durationControl; 
let soundControl;
let intervalId;
var soundLevel;

// документ полностью загружен
$().ready(function(){
    video = document.getElementById("player"); 

    // вешаем обработчик события onclick на тег video
    video.addEventListener('click', playStop);

    // обработчики событий для кнопок play
    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length; i++){
        playButtons[i].addEventListener('click', playStop);
    }

    
    // обработчики событий для ползунка продолжительности видео
    durationControl = document.getElementById("durationLevel");  
    durationControl.addEventListener('mousedown', stopInterval);   
    // durationControl.addEventListener('click',setVideoDuration);
    durationControl.addEventListener('mouseup', setVideoDuration); 

    durationControl.min = 0;
    durationControl.value = 0;    

    // обработчики событий для ползунка громокости
    soundControl = document.getElementById("micLevel");    
    // soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('mouseup', changeSoundVolume); 

    // задаем максимальные и минимальные значения громокости
    soundControl.min = 0;
    soundControl.max = 10;
    // присваиваем ползунку максимальное значение
    soundControl.value = soundControl.max;

      // обработчик событий для кнопки динамик
      let micControl = document.getElementById("mic");
      let soundMic = document.querySelector('.sound__mic');
      micControl.addEventListener('click', function(){
        if (video.volume === 0){
          video.volume = soundLevel;
          soundControl.value = soundLevel*10;
          $('.sound__mic').removeClass('sound__mic_active')
      } else{
          /*
              Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
              Хранится в перменной soundLevel
          */
          soundLevel = video.volume;
          video.volume = 0;
          soundControl.value = 0;
          $('.sound__mic').addClass('sound__mic_active')
      } 
      })

    //обрабатываем окончание видео
    video.addEventListener('ended', function () {
        $(".video__player-img").removeClass("video__player-img--active");
        $(".duration__img").removeClass("duration__img-active"); 
        video.currentTime = 0;
    }, false);
});

/*
 Воспроизведение видео
*/
function playStop(){
    // показывает или скрывает белую кнопку play, меняет кнопку play на pause
    // $(".video__player-img").toggleClass("video__player-img--active");
    // $(".duration__img").toggleClass("duration__img-active");  
    // присваиваем ползунку продолжительности максимальное значение равное продолжительности нашего видео (в секундах)
    durationControl.max = video.duration;

    // проверим стоит ли видео на паузе, если да то продолжим воспроизведение. Если, наоборот, проигрыавыется, то остановим.
    if (video.paused){
        // video.webkitRequestFullScreen(); //возможность открыть в полноэкранном режиме
        // запускаем видео
        video.play();
        intervalId = setInterval(updateDuration, 1000/66)
        $(".video__player-img").addClass("video__player-img--active");
        $(".duration__img").addClass("duration__img-active");
        
    } else{
        // video.webkitExitFullscreen(); //выйти из полноэкранного режима
        // останавливаем видео
        video.pause();  
        clearInterval(intervalId);
        $(".video__player-img").removeClass("video__player-img--active");
        $(".duration__img").removeClass("duration__img-active"); 
          
        
    }
}

function stopInterval(){
    video.pause();
    clearInterval(intervalId);
}

/*
    Реализует возможность перемотки нашего видео
*/
function setVideoDuration(){
    if (video.paused){
        video.play();
        $(".video__player-img").addClass("video__player-img--active");
        $(".duration__img").addClass("duration__img-active");
        

    } else{
        video.pause();
        $(".video__player-img").removeClass("video__player-img--active");
        $(".duration__img").removeClass("duration__img-active"); 
          
    }
    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration,1000/66);
}


/*
  Функция для обновления позиции ползунка продолжительности видео.   
*/
function updateDuration(){    
    durationControl.value = video.currentTime;
    // console.log(video.currentTime)
}


/*
    Управление звуком
*/
// function soundOf(){    
//     /*
//         Делаем проверку уровня громкости. 
//         Если у нас нашего видео есть звук, то мы его выключаем. 
//         Предварительно запомнив текущую позицию громкости в переменную soundLevel
//     */
//     if (video.volume === 0){
//         video.volume = soundLevel;
//         soundControl.value = soundLevel*10;
//     } else{
//         /*
//             Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
//             Хранится в перменной soundLevel
//         */
//         soundLevel = video.volume;
//         video.volume = 0;
//         soundControl.value = 0;
//     }    
// }

/*
    Управление звуком видео
*/
function changeSoundVolume(){
    /*
        Св-во volume может принимать значения от 0 до 1
        Делим на 10 для того что бы, была возможность более точной регулировки видео. 
         video.volume 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9  1 
   soundControl.value 0   1   2   3   4   5   6   7   8   9  10
        */
   
    video.volume = soundControl.value/10; 
}