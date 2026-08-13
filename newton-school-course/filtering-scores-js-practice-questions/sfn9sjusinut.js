// Your code here
function processScores(array,...callback){
    let res=array
    for(let cb of callback){
        res=res.map(cb)
        
    }
    return res

}