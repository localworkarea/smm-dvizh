// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import lazyframe from "lazyframe";
// Passing a selector
lazyframe(".lazyframe");

// Passing a nodelist
let elements = document.querySelectorAll(".lazyframe");
lazyframe(elements);

// lazyframe(elements, {
//     debounce: 250,
//     lazyload: true,
//     autoplay: true,
  
//     // Callbacks
//     onLoad: (lazyframe) => console.log(lazyframe),
//     onAppend: (iframe) => console.log(iframe),
//     onThumbnailLoad: (img) => console.log(img),
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   var videoItems = document.querySelectorAll('.video__item');

//   videoItems.forEach(function (videoItem) {
//       var video = videoItem.querySelector('.video__video');

//       videoItem.addEventListener('click', function (event) {
//           // Pause all other videos
//           videoItems.forEach(function (otherVideoItem) {
//               var otherVideo = otherVideoItem.querySelector('.video__video');

//               if (otherVideo !== video && !otherVideo.paused) {
//                   otherVideo.pause();
//                   otherVideo.muted = true; // Mute other videos
//                   otherVideo.classList.remove('active');
//                   otherVideoItem.classList.remove('active');
//               }
//           });

//           // Toggle play/pause for the clicked video
//           if (video.paused) {
//               video.play();
//               video.muted = false; // Unmute the active video
//               video.classList.add('active');
//               videoItem.classList.add('active');
//           } else {
//               video.pause();
//               video.muted = true; // Mute when paused
//               video.classList.remove('active');
//               videoItem.classList.remove('active');
//           }

//           event.stopPropagation(); // Prevents the click event from propagating to the parent elements
//       });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  var videoItems = document.querySelectorAll('.video__item');

  videoItems.forEach(function (videoItem) {
      var video = videoItem.querySelector('.video__video');
      var progressBar = videoItem.querySelector('.video__progress-bar');

      video.addEventListener('timeupdate', function () {
          var progress = (video.currentTime / video.duration) * 100;
          progressBar.style.width = progress + '%';
      });

      video.addEventListener('ended', function () {
          video.classList.remove('active');
          videoItem.classList.remove('active');
      });

      videoItem.addEventListener('click', function (event) {
          // Pause all other videos
          videoItems.forEach(function (otherVideoItem) {
              var otherVideo = otherVideoItem.querySelector('.video__video');

              if (otherVideo !== video && !otherVideo.paused) {
                  otherVideo.pause();
                  otherVideo.muted = true; // Mute other videos
                  otherVideo.classList.remove('active');
                  otherVideoItem.classList.remove('active');
              }
          });

          // Toggle play/pause for the clicked video
          if (video.paused) {
              video.play();
              video.muted = false; // Unmute the active video
              video.classList.add('active');
              videoItem.classList.add('active');
          } else {
              video.pause();
              video.muted = true; // Mute when paused
              video.classList.remove('active');
              videoItem.classList.remove('active');
          }

          event.stopPropagation(); // Prevents the click event from propagating to the parent elements
      });
  });
});