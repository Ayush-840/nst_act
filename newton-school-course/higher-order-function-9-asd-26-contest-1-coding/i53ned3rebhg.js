// Your code here
function myFind(array,callback){
    let ans = array.map(callback)
    let idx = ans.indexOf(true)
    if(idx){
     return(array[idx])
    }else{
        return undefined

    }

}