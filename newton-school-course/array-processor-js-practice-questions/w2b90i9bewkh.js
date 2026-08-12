// Your code here
function processArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}