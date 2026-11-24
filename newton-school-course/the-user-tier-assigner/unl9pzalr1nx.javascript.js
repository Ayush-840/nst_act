// Write Your Code Here
function getUserTier(postCount) {
    if (postCount > 50) {
        return "Gold User";
    } else if (postCount >= 20 && postCount <= 50) {
        return "Silver User";
    } else {
        return "Bronze User";
    }
}