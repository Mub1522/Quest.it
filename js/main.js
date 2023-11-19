/* Teams */
const teams =[]

document.getElementById('done_btn').addEventListener('click', function(){
    let team_1 = document.getElementById('team1').value
    let team_2 = document.getElementById('team2').value
    let team_3 = document.getElementById('team3').value
    let team_4 = document.getElementById('team4').value

    if(team_1 === '' || team_2 === '' || team_3 === '' || team_4 === ''){
        
        return; 
    }
    teams.push(team_1, team_2, team_3, team_4)
    console.log(teams)
});