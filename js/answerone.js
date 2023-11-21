const urlParams = new URLSearchParams(window.location.search);

const teams = urlParams.get('teams');

const puntajes = urlParams.get('puntajes');

console.log('Variable 1:', teams);
console.log('Variable 2:', puntajes);

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
}

/* Responder incorrectamente */
document.getElementById('incorrect1').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    return
})

document.getElementById('incorrect2').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    return
})

document.getElementById('incorrect3').addEventListener('click', function () {
    swal("No tan rapido!", "Respuesta incorrecta!", "error")
    return
})

/* Responder correctamente */
document.getElementById('correct').addEventListener('click', function () {
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