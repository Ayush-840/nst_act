// Your code here
function parent(callback){
    return function(num){
        callback(num)
    }


}