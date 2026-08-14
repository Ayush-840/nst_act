// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans = fetch(api).then((res)=> res.json())
    
    return ans
}