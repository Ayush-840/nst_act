async function register(user){
    try{
        let res = await registerUser(user)
        console.log(res)
    }catch(error){
        console.log(error)
    }
}