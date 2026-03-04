document.addEventListener('DOMContentLoaded', function () {
/* CLICK HANDLER */
const items = document.querySelectorAll('.video-item');

items.forEach(item => {

item.addEventListener('click', function () {

const section = this.closest('section');
const videos = section.querySelectorAll('video');

const video = Array.from(videos)
.find(video => video.offsetParent !== null);

const time = parseFloat(this.dataset.time);

if (!video) return;

if (video.readyState >= 1) {

video.currentTime = time;
video.play();

} else {

video.addEventListener('loadedmetadata', function () {

video.currentTime = time;
video.play();

}, { once: true });

}

});

});

/* PLAY BTNS HANDLER */
const playBtns = document.querySelectorAll(
'#playBtnDesktop, #playBtnMobile, #playBtnDesktop2, #playBtnMobile2, #playBtnDesktop3, #playBtnMobile3'
);

playBtns.forEach(btn => {

btn.addEventListener('click', function () {

const section = this.closest('section');
const videos = section.querySelectorAll('video');

const visibleVideo = Array.from(videos)
.find(video => video.offsetParent !== null);

if (!visibleVideo) return;

visibleVideo.play();

});

});

});