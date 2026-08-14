// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api).then((res)=>  res.json())
    return ans.then((h)=>{
        h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name
    })
    // filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)
}