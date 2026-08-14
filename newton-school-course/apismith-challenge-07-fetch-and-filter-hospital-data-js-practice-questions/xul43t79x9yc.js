// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api)
    let host = ans.json()
    return host.filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)

}