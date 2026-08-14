// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans = fetch(api).then((res)=> res.json())
    let ans1 = ans.filter((data)=> data.specialization===specialization)
    return ans
}