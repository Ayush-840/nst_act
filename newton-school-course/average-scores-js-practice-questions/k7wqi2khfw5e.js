function analyzeScores(scores) {
    if(scores.every((res)=> res<50)){
        return 0
    }
    let ans=scores.filter((res)=> res>=50)
    ans1= ans/length(ans)
    return ans1
}