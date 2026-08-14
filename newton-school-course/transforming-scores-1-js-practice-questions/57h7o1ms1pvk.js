function processScores(scores, modifier1, modifier2) {
    return scores.map(score => modifier2(modifier1(score)));
}