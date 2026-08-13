// Write Your Code Here
function calculateSubtotal(array){
    let ans = array.reduce((acc,arr)=> acc+arr,0)
    return ans
}