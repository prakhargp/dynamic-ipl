function extraRunsByEachTeam(matches,deliveries){
 const result = {}
 const arr = []
for(let match of matches){
    if(match.season == 2016){
        arr.push(match.id)
        if(result.hasOwnProperty(match.team1) == false){
            result[match.team1] = 0;
        }
    }
    
}
    for(let id of arr){
        for(let i of deliveries){
            if(id == i.match_id){
                result[i.batting_team] += parseInt(i.extra_runs)
            }
        }
    }
    
    return result


}
module.exports = extraRunsByEachTeam;