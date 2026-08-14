// Your code here
function getHospitalsWithAvailability(api, specialization, minBeds){
    let ans = fetch(api).then((res)=> res.json())
    let ans2 = ans.then((res)=>{
        let out=res.filter((h)=> h.specialization===specialization && h.availableBeds>=minBeds)
        let out1 = out.map((k)=> k.name)
        return out1
    })
    return ans2
}