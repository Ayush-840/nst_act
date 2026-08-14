// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api).then((res)=>  res.json())
    .filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)
    // let ans1 = ans.filter((data)=> data.specialization===specialization)
    // let ans2= ans1.filter((res)=> res.availableBeds >= minBeds)
    return ans
}