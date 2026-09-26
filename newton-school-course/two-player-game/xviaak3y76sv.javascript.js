function findWinner(scores) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 0) {
            // Even index means Naman gets the negative score -> Arun wins
            // Odd index means Arun gets the negative score -> Naman wins
            return i % 2 === 0 ? "Arun" : "Naman";
        }
    }
}