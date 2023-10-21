let sound = new Audio();
sound.src = 'sour/may.mp3';
function playSound(){
    sound.play();
}
const logo = document.querySelector('#logo');

logo.addEventListener('click',playSound);






