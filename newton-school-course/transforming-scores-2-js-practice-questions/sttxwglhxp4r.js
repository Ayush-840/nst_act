// // Your code herfun
// function processScores(scores,callback){
//     let res=scores
//     for(let cb of callback){
//         res=res.map(cb)
//     }
//     return res
// }

function processScores(scores, callbacks) {
  let res = scores;
  for (let cb of callbacks) {
    res = res.map(cb);
  }
  return res;
}