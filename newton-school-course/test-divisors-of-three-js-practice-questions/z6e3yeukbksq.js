function test_divisors(low, high) {
    let res=[]
    for(let i=low;i<=high;i++){
        res.push(i)
        if(i%3==0){
            console.log("div3")
        }
    }
}