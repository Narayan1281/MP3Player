// console.log("Welcome to Spotify");

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songInnerLinePlay=Array.from(document.getElementsByClassName('songInnerLinePlay'));


let songs = [
    {songName: "Sanam Teri Kasam - Ankit Tiwari", filePath: "songs/1.mp3", coverPath: "CoverImage/1.jpg",time:"05:14"},
    {songName: "Mera Joota Hai Japani", filePath: "songs/2.mp3", coverPath: "CoverImage/2.jpg",time:"04:33"},
    {songName: "Aao Na (Kuch Kuch Locha Hai) Ankit Tiwari", filePath: "songs/3.mp3", coverPath: "CoverImage/3.jpg",time:"03:47"},
    {songName: "04. Sona Sona Mukhda", filePath: "songs/4.mp3", coverPath: "CoverImage/4.jpg",time:"04:55"},
    {songName: "Nagada Sang Dol", filePath: "songs/5.mp3", coverPath: "CoverImage/5.jpg",time:"04:32"},
    {songName: "Aaj Phir - Arijit Singh - 320Kbps", filePath: "songs/6.mp3", coverPath: "CoverImage/6.jpg",time:"04:22"},
    {songName: "Blank Space", filePath: "songs/7.mp3", coverPath: "CoverImage/7.jpg",time:"04:35"},
    {songName: "Ignite - Alan Walker_320- ", filePath: "songs/8.mp3", coverPath: "CoverImage/8.jpg",time:"03:30"},
    {songName: "Let Me Love You - DJ Lijo Remix", filePath: "songs/9.mp3", coverPath: "CoverImage/9.jpg",time:"03:29"},
    {songName: "My Life Is Going On La Casa De Papel", filePath: "songs/10.mp3", coverPath: "CoverImage/10.jpg",time:"03:34"},
    {songName: "Saanson Ko - Arijit Singh - 320Kbps", filePath: "songs/11.mp3", coverPath: "CoverImage/11.jpg",time:"04:48"}

]
// audioElement.play();
// audioElement.pause();

// populating song items
songItems.forEach((song, i)=>{ 
    song.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    song.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    song.getElementsByClassName("timestamp")[0].innerText = songs[i].time; 
})



// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    makeAllPlays();
    
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        make1pause();
        // masterPlay.classList.remove('')
        masterPlay.src='pause-solid.svg';
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src='play-solid.svg';
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    if(audioElement.currentTime >=audioElement.duration)
    {
        console.log('hi');
    }
})


next = document.getElementById('next');

next.addEventListener('click',()=>{
    
    songIndex = (songIndex + 1)%11;
    make1pause();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.src = 'pause-solid.svg';
    masterSongName.innerText=songs[songIndex].songName;

})

prev = document.getElementById('prev');

prev.addEventListener('click',()=>{
    
    songIndex = (songIndex +11 - 1)%11;
    make1pause();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.src = 'pause-solid.svg';
    masterSongName.innerText=songs[songIndex].songName;

})

const makeAllPlays = ()=>{
    songInnerLinePlay.forEach((element)=>{
        element.src = 'circle-play-solid.svg';
    })
}

const make1pause = ()=>{
    makeAllPlays();
    songInnerLinePlay.forEach((element,i)=>{
            
            if(i ==songIndex){
                element.src = 'circle-pause-regular.svg';
            };
            // console.log(i);
            // console.log(songIndex);
            
           
        })  
}

songInnerLinePlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log('hi\n',songIndex);
        e.target.src = 'circle-pause-regular.svg';
        // console.log(e);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.src = 'pause-solid.svg';
       
    })
})


