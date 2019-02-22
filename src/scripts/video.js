// var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '360',
//           width: '640',
//           videoId: 'M7lc1UVf-VE',
//           playerVars: {
//             controls: 0,
//             disablekb: 0,
//             showinfo: 0,
//             rel: 0,

//           },
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }


//       $('.player__start').on('click', e => {
//         const btn = $(e.currentTarget);
//         const playerState = player.getPlayerState();

//         if (playerState !== 1) {
//           player.playVideo();
//           btn.addClass('paused')
//         } else {
//           player.pauseVideo();
//           btn.removeClass('paused')
//         }
//       });

//       function formatTime(time) {
//         const roundTime = Math.round(time);

        
//       }