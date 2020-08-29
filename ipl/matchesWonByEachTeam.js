function matchesWonByEachTeam(matches){
    let arr = []
    let arr1 = []
    let a = 0
    let arr2
    let t = []
    for(let match of matches){
        if(arr.indexOf(match.season)<0){
            arr.push(match.season);
        }
        if(arr1.indexOf(match.team1)<0){
            arr1.push(match.team1)
        }
    }
    arr.sort(function(a,b){return a-b;})
    for(let i of arr1){
        arr2 = []
        for(let j of arr){
            a = 0
            for(let match of matches){
                if(j == match.season && i == match.winner){
                    a += 1
                }

            }
            arr2.push(a)
        }
        t.push(arr2)
    }
    arr = []
    for(let i in t){
        arr.push({})
    }
    for(let i in arr){
        arr[i].name = arr1[i]
        arr[i].data = t[i]
    }
    return arr
}

module.exports = matchesWonByEachTeam;