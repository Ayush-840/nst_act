function repeatMessage(message, interval) {
    const idd=setInterval(()=>{
        console.log(message)
    },interval)

    return function stopRepeating(){
        clearInterval(idd)
        console.log("")
    }
}