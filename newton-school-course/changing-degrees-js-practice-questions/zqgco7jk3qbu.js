function convertToFahrenheit(celsiusArray) {
    let ans=celsiusArray.map((res)=> ((res*9/5)+32))
    return ans
}