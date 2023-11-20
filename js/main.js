/* Teams */
const teams = []
const puntajes = []

console.log(teams)
console.log(puntajes)

document.getElementById('done_btn').addEventListener('click', function () {
    let team_1 = document.getElementById('team1').value
    let team_2 = document.getElementById('team2').value
    let team_3 = document.getElementById('team3').value
    let team_4 = document.getElementById('team4').value

    if (team_1 === '' || team_2 === '' || team_3 === '' || team_4 === '') {
        swal("No tan rapido!", "Debes ingresar el nombre de todos los equipos!", "error")
        return
    }

    teams.push(team_1, team_2, team_3, team_4)
    puntajes.push([0], [0], [0], [0])

    if (teams.length === 4 && puntajes.length === 4) {
        window.location.href = 'answer_one.html?teams=' + encodeURIComponent(teams) + '&puntajes=' + encodeURIComponent(puntajes);
    } else {
        swal("No tan rapido!", "Ocurrio un error inesperado", 'error')
    }
});