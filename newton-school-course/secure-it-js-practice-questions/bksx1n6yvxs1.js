//Write your code here
function asyncOperation(){
    return new Promise((res,rej)=>{
        let id = setInterval(()=>{
            res("success message")
        },)
        clearInterval(id)
    })
}