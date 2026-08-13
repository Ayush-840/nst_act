//Write your code here
function asyncOperation(){
    return new Promise((res,rej)=>{
        setInterval(()=>{
            res("success message")
        },)
            if(rej){
        asyncOperation()
        
    }
    })

}