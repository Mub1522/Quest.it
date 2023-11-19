/* Activar modales */
document.getElementById('play_btn').addEventListener('click', mostrarModal);

function mostrarModal() {
    document.getElementById('teams-modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('teams-modal').style.display = 'none';
}

document.getElementById('credits_btn').addEventListener('click', mostrarModal_credits);

function mostrarModal_credits() {
    document.getElementById('credits-modal').style.display = 'block';
}

function cerrarModal_credits() {
    document.getElementById('credits-modal').style.display = 'none';
}
