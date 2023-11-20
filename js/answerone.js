const urlParams = new URLSearchParams(window.location.search);

const teams = urlParams.get('teams');

const puntajes = urlParams.get('puntajes');

console.log('Variable 1:', teams);
console.log('Variable 2:', puntajes);