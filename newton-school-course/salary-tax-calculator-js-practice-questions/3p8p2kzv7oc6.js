function findTax(salary) {
    if(salary<=0){
        return "Salary not valid"
    }else if (salary <= 500000){
        return 0
    }else if(500000<salary<=1000000){
        return salary*0.1
    }else if (1000000 < salary<=1500000){
        return salary*0.5
    }else{
        return salary
    }
}