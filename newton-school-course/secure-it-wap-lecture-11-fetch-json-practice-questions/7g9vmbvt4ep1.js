//Write your code here

function fn(n){
    if(n < 0){
        return
    }
    asyncOperation()
    .then((msg)=>{
        console.log(msg)
        fn(n-1)
    }).catch((err)=>{
        console.log(err)
        // console.log("You can no longer use this API.")

    })


}
fn()