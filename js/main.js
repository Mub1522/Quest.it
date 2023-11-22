import { localhost } from './config.js';

/* Teams */
/* Inicializar variables */
const teams = []
const puntajes = []

console.log(teams)
console.log(puntajes)

/* Iniciar el juego */
document.getElementById('done_btn').addEventListener('click', function () {
    let team_1 = document.getElementById('team1').value
    let team_2 = document.getElementById('team2').value
    let team_3 = document.getElementById('team3').value
    let team_4 = document.getElementById('team4').value

    if (team_1 === '' || team_2 === '' || team_3 === '' || team_4 === '') {
        swal("No tan rapido!", "Debes ingresar el nombre de todos los equipos!", "error")

        let audio_done = new Audio(`${localhost}/sounds/done.flac`)
        audio_done.play()
        return
    }

    /* Crear equipos y puntajes por equipo */
    teams.push(team_1, team_2, team_3, team_4)
    puntajes.push(0, 0, 0, 0)

    /* Redireccionar a la primera pregunta */
    if (teams.length === 4 && puntajes.length === 4) {
        const url = `answer_one.html?teams=${JSON.stringify(teams)}&puntajes=${JSON.stringify(puntajes)}`;

        window.location.href = url
    } else {
        swal("No tan rapido!", "Ocurrio un error inesperado", 'error')
    }
});

/* Crear efectos de sonido */
let soundEffects = document.getElementsByClassName('sound_effect');

for (let i = 0; i < soundEffects.length; i++) {
  soundEffects[i].addEventListener("mouseover", function() {
    let audio = new Audio(`${localhost}/sounds/pop.flac`);
    audio.play();
  });
}
