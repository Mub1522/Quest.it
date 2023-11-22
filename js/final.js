import { localhost } from "./config.js";

const urlParams = new URLSearchParams(window.location.search);

const teamsString  = urlParams.get('teams');
const puntajesString  = urlParams.get('puntajes');

const teams = JSON.parse(teamsString);
const puntajes = JSON.parse(puntajesString);

console.log('Teams:', teams);
console.log('Puntajes:', puntajes);

let song_win = new Audio(`${localhost}/sounds/win.ogg`)
song_win.play()

/* Crear efectos de sonido */
let soundEffects = document.getElementsByClassName('sound_effect');

for (let i = 0; i < soundEffects.length; i++) {
  soundEffects[i].addEventListener("mouseover", function() {
    let audio = new Audio(`${localhost}/sounds/pop.flac`);
    audio.play();
  });
}

document.getElementById('myTrySound').addEventListener('click', function(){
  window.location.href = `${localhost}/index.html`;
})

let winner_team = document.getElementById('winner')

const maximo = Math.max(...puntajes);

const indiceMaximo = puntajes.indexOf(maximo);

winner_team.innerHTML = `${teams[indiceMaximo]}`