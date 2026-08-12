function analyzeExamScores(scores, negativeScoreIndex) {
    let ans = scores.filter((res)=> res>0)
    let pass=ans.filter((res)=> res > 30)
    let fail=ans.filter((res)=> res <= 30)
    let ress=pass.concat(fail)
    return ress
}