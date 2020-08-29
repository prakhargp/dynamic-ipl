function matchesWonByEachTeamPerVenue(matches){
    let result = {}
    for(let match of matches){
        if(result.hasOwnProperty(match.venue) == false){
            result[match.venue] = {
                teams : [],
                data : []
            } 
        }
    }
    for(let stadium in result){
        for(let match of matches){
            if(result[stadium].teams.indexOf(match.team1)<0){
                result[stadium].teams.push(match.team1);
                result[stadium].data.push(0);
            }
        }
    }
    for(match of matches){
        if(Boolean(match.winner)){
            let index = result[match.venue].teams.indexOf(match.winner)
        result[match.venue].data[index] +=1
        }else{
            continue
        }
        
    }
    
    return result;
}
module.exports = matchesWonByEachTeamPerVenue;