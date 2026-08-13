function mainFunction(age ,gender){
    checkMarriageEligibility(age,gender)
    .then((msg)=>console.log(msg))
    .catch((err)=> console.log(err))

}

// write your code here
function checkMarriageEligibility(age,gender){
    return new Promise((res,rej)=>{
        if(gender==="male" && age>=21){
            res("You are eligible for marriage in India.")
        }if(gender==="fenale" && age>=18)||(){
            res("You are eligible for marriage in India.")
        }else{
            rej("You are not eligible for marriage in India.")
        }
    })

}