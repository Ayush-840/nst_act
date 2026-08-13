function processScores(scores, ...callbacks) {
  let res = scores;
  for (let cb of callbacks) {
    res = res.map(cb);
  }
  return res;
}