import { localhost } from './config.js';

const urlParams = new URLSearchParams(window.location.search);

const teamsString  = urlParams.get('teams');
const puntajesString  = urlParams.get('puntajes');

const teams = JSON.parse(teamsString);
const puntajes = JSON.parse(puntajesString);

console.log('Teams:', teams);
console.log('Puntajes:', puntajes);

/* Activar modales */
function mostrarModal_respuesta_correcta() {
    document.getElementById('correct-modal').style.display = 'block';
}

function cerrarModal_respuesta_correcta() {
    document.getElementById('correct-modal').style.display = 'none';
}

cerrarModal_respuesta_correcta()

document.getElementById('quest_btn').addEventListener('click', mostrarModal);

function mostrarModal() {
    document.getElementById('quest-modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('quest-modal').style.display = 'none';
    let audio_start = new Audio(`${localhost}/sounds/start_quest.mp3`)
    audio_start.play()
}

document.getElementById('modal_quest').addEventListener('click', cerrarModal)

/* Responder incorrectamente */
let sound_incorrect = new Audio(`${localhost}/sounds/incorrect.wav`)
let sound_correct = new Audio(`${localhost}/sounds/correct.wav`)

document.getElementById('incorrect1').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    sound_incorrect.play()
    return
})

document.getElementById('incorrect2').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    sound_incorrect.play()
    return
})

document.getElementById('incorrect3').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    sound_incorrect.play()
    return
})

/* Responder correctamente */
document.getElementById('correct').addEventListener('click', function () {
    sound_correct.play()
    swal({
        title: "Felicitaciones!",
        text: "Respuesta correcta!",
        icon: "success",
    }).then((value) => {
        if (value) {
            mostrarModal_respuesta_correcta();
        }
    });
    return
})

/* Crear efectos de sonido */
let soundEffects = document.getElementsByClassName('sound_effect');

for (let i = 0; i < soundEffects.length; i++) {
  soundEffects[i].addEventListener("mouseover", function() {
    let audio = new Audio(`${localhost}/sounds/pop.flac`);
    audio.play();
  });
}

let done_btn_sound = document.getElementById('done_btn')

done_btn_sound.addEventListener('click', function(){
    let audio_done = new Audio(`${localhost}/sounds/done.flac`)
    audio_done.play()
})

let teams_finally = document.getElementsByClassName('ct')

for (let index = 0; index < teams_finally.length; index++) {
    teams_finally[index].addEventListener('click', function(){
        let team_winner = teams_finally[index].getAttribute('data-id');
        console.log(team_winner)
        puntajes[team_winner] = puntajes[team_winner] + 1
        cambiarPagina()
    })
}

function cambiarPagina() {
    const url = `answer_four.html?teams=${JSON.stringify(teams)}&puntajes=${JSON.stringify(puntajes)}`;
    document.body.classList.add('fadeOut');
    setTimeout(() => {
        window.location.href = url;
    }, 800);
}
