function authenticateUser(username, password, users)
{
return new Promise((res,rej)=>{
    setTimeout(()=>{
        if(users[username] && users[username]===password){
            res(`Login successful for user: ${username}`)
        }else{
            rej("Authentication failed. Invalid username or password.")
        }

    },3000)

})
}