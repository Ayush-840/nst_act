function is_perfect(number) {
    let sm =0
    for(let i=1;i<number;i++){
        if(number%i==0){
            sm +=i
        }
    }
    if(sm==number){
     return ("It is a perfect number.")
    }else{
        return ("It is not a perfect number.")
    }

}