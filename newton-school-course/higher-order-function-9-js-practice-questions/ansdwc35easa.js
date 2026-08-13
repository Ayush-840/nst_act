// Your code here
function myFind(array,callback){
    for(let i=0;i<=array.length;i++){
        if(callback(array[i],i)){
            return arr[i]
        }
    }
    return undefined

}