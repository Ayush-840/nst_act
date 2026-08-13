//Write your code here
// function asyncOperation(){
    return new Promise((res,rej)=>{
  
            res("success message")
       
    if(rej){
        asyncOperation()
    }
    })

// }