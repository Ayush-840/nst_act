// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans =  fetch(api).then((res)=>  res.json())
    let ans1 = ans.then((h)=> h.filter((k)=>{
        k.specialization===specialization && k.availableBeds >= minBeds
    }))
    let ans2 = ans1.then((g)=> g.map((t)=>t.name))
    return ans2
    
    // filter(h => h.specialization===specialization && h.availableBeds >= minBeds).map(h => h.name)
}