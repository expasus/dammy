//step 1: get DOM
document.addEventListener('DOMContentLoaded', function() {
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
let Contacts = document.getElementById('Contacts');
let Info = document.getElementById('Info');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 1200000;

const button = document.getElementById('liedje');
const audio1 = document.querySelector('audio[src="dammy.mp3"]');
const audio2 = document.querySelector('audio[src="y2mate.com - Idea 22 Slowed  Reverb.mp3"]');
const mutebutton = document.getElementById('mutelied');

let isMuted = false;

button.addEventListener('click', () => {
  if (isMuted) {
    audio1.muted = false;
    audio2.muted = true;
    audio2.currentTime = 0;
    audio2.play();
  } else {
    audio1.muted = true;
    audio2.muted = false;
    audio1.currentTime = 0;
    audio1.play();
}
  isMuted = !isMuted;
});

mutebutton.addEventListener('click', () => {
    if (isMuted) {
      audio1.muted = !audio1.muted;
    } else {
      audio2.muted = !audio2.muted;
    }
  });


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

Contacts.onclick = function(){
    alert("WESH ben je gek je krijgt dr contacten ze is ALLEEN VAN MIJ!!!")
}

Info.onclick = function(){
    alert('enigste info dat ik je kan geven is dat DAMMY VAN MIJ IS!!')
}

});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}