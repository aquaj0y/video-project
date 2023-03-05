

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function () {
  // check if an element contains a class: use node.`classList.contains`
  //audio/video DOM `pause()` and `play()` method 
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
})

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function (){
  preloader.classList.add('hide-preloader');
})

