const audio = document.getElementById('car-sound');
const playPauseButton = document.getElementById('play-pause-button');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerText = 'Play';
    } else {
        audio.play();
        playPauseButton.innerText = 'Pause';
    }
    
    isPlaying = !isPlaying;
});
