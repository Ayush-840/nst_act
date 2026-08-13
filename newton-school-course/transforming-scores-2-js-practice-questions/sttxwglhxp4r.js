// Your code herfun
function processScores(scores,n){
    let res=scores
    for(let cb of n){
        res=res.map(cb)
    }
    return res
}