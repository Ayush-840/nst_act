// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans = await fetch(api).then((res)=> res.json())
    let ans1 = ans.filter((data)=> data.specialization===specialization)
    let ans2= ans1.filter((res)=> res.availableBeds >= minBeds)
    return ans2
}