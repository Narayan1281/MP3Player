console.log("Welcome to Spotify");

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');

let songs = [
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
]
// audioElement.play();
// audioElement.pause();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        // masterPlay.classList.remove('')
        masterPlay.src='pause-solid.svg';
    }
    else{
        audioElement.pause();
        masterPlay.src='play-solid.svg';
    }
})

// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
})
