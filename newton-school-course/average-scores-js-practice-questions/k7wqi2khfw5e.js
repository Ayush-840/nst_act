function analyzeScores(scores) {
    if(scores.every((res)=> res<50)){
        return 0
    }
    let ans=scores.filter((res)=> res>=50)
    let ans1= ans.reduce((acc,res)=> acc+res,0)
    return ans1/ans.length

}