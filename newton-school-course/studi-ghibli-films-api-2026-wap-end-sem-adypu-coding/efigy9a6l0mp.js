async function getLongMovies(threshold) {
  let ans= await fetch("https://ghibliapi.vercel.app/films")
  .then((res)=>res.json())
  // return ans
  let ans1=ans.filter((res)=> (res.running_time)>threshold)
  let ans2=ans1.map((ress)=>ress.title)
  return ans2
}