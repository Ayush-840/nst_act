// Your code here
function parent(callback){
    return function(num){
       return callback(num)
    }


}