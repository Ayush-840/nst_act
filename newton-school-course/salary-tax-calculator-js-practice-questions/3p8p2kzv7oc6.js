function findTax(salary) {
    if(salary<=0){
        return "Salary not valid"
    }else if (salary <= 500000){
        return 0
    }else if(500000<salary<=1000000){
        return salary 
    }
}