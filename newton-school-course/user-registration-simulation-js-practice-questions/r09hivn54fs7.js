async function register(user){
    try{
        let res = registerUser(user)
        console.log(res)
    }catch(error){
        console.log(error)
    }
}