function promiseMe(time,data) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(data !== undefined){
                res(data)
            }else{
                rej("Error")
            }

        },time)
    })



}