// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api)
    .then((res)=>  ans.json())
    return ans.filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)

}