// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api).then((res)=>  res.json())
    let ans1 = ans.then((h)=> h.filter((k)=>{
        k.specialization===specialization && k.av
    }))
    
    // filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)
}