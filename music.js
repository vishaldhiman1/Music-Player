let songs = [
    { filepath: "heart_of_gold.mp3", Name: "Heart Of Gold", coverpath: "shawn.png" },
    { filepath: "electric_love.mp3", Name: "Electric Love", coverpath: "electric_love.png" },
    { filepath: "hero_tonight.mp3", Name: "Hero Tonight", coverpath: "hero_tonight.png" },
    { filepath: "why_why_why.mp3", Name: "Why Why Why", coverpath: "why_why_why.png" },
    { filepath: "senorita.mp3", Name: "Senorita", coverpath: "senorita.png" },
    { filepath: "past_lives.mp3", Name: "Past Lives", coverpath: "past_lives.png" },
    { filepath: "sweet_dream.mp3", Name: "Sweet Dreams", coverpath: "sweet_dream.png" }
];

let container = document.querySelector('.container');
let songName = document.querySelector('.songName');
let volumeControl = document.querySelector('.volume');
let index = 0;
let length = songs.length - 1;
let audio = new Audio();
audio.src = songs[index].filepath;
songName.innerText = songs[index].Name;
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let repeat = document.querySelector('.repeat');
play.addEventListener('click', playSong);
pause.addEventListener('click', pauseSong);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
repeat.addEventListener('click', repeatSong);
volumeControl.addEventListener('input', volumeChange);
let isRepeat = false;


let cover=document.querySelector('.cover');
if (songs[index].coverpath) {
    cover.src = songs[index].coverpath;
} else {
    cover.src = "default_cover.png"; // Default cover image
}



function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function previousSong() {
    if (index > 0) {
        index--;
    } else {
        index = length;
    }
    updateAudioSource();
    playSong();
}

function nextSong() {
    index++;
    if (index <= (songs.length - 1)) {
        updateAudioSource();
    } else {
        index = 0;
        updateAudioSource();
    }
}

function repeatSong() {
    isRepeat = !isRepeat;
    audio.loop = isRepeat;
    if (isRepeat) {
        console.log("Repeat mode enabled");
        document.querySelector('.repeat').classList.add('active');
    } else {
        console.log("Repeat mode disabled");
        document.querySelector('.repeat').classList.remove('active');
    }
}

function volumeChange() {
    let value = volumeControl.value / 100;
    audio.volume = value;
}

function updateAudioSource() {
    audio.src = songs[index].filepath;
    songName.innerText = songs[index].Name;
    audio.load();
    audio.play();
    if (songs[index].coverpath) {
        cover.src = songs[index].coverpath;
    } 
    else{
        cover.src="prevent_default.png";
    }
     
 
}


function seekBar(){
    
}