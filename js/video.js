// Add js here.
var video = document.getElementById("videoplayer");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slower = document.getElementById("slower");
var faster = document.getElementById("faster");
var skip = document.getElementById("skip");
var mute = document.getElementById("mute");
var slider = document.getElementById("slider");


video.onloadstart = () => {
    video.autoplay = false;
    video.loop = false;
    video.onload();
}

play.addEventListener("click", () => {
    video.play();
})

pause.addEventListener("click", () => {
    video.pause();
})

slower.addEventListener("click", () => {
    if(video.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
    }else if(video.playbackRate === 1) {
        video.playbackRate = 0.5;
    }else if(video.playbackRate === 2) {
        video.playbackRate = 1;
    }
})

faster.addEventListener("click", () => {
    if(video.playbackRate === 2) {
        alert("Video is at fastest speed!");
    }
    else if(video.playbackRate === 0.5) {
        video.playbackRate = 1;
    } else if(video.playbackRate === 1) {
        video.playbackRate = 2;
    }
})

skip.addEventListener("click", () => {
    if(video.duration - video.currentTime < 15) {
        video.currentTime = 0;
    } else {
        video.currentTime += 15;
    }
})

mute.addEventListener("click", () => {
    if(video.muted) {
        video.muted = false;
        mute.innerText = "Mute"
    } else {
        video.muted = true;
        mute.innerText = "Unmute"
    }
})

slider.addEventListener("change", () => {
    video.volume = slider.value / 100;
    let slidertext =  document.getElementById("volume");
    slidertext.innerHTML = video.volume * 100 + "%";
})