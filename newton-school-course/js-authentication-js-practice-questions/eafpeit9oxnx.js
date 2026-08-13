function authenticateUser(username, password, users)
{
return new Promise((res,rej)=>{
    setTimeout(()=>{
        if(users[username] && users[username]===password){
            res("")
        }


    },3000)

})
}