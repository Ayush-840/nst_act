//Write your code here
async function register(user){
    try{
        const res=await registerUser(user);
        console.log(res)
    }catch(error){
        console.log(error)
    }
    

}